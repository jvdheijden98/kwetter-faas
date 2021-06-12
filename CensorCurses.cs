using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Kwetter.Functions
{
    public static class CensorCurses
    {
        private static readonly string[] curses = new []{
            "fuck",
            "motherfucker",
            "asshole",
            "dick",
            "shit",
            "cock",
            "bitch",
            "damn",
            "Hell",
        };

        [Function("CensorCurses")]
        public static async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData request, FunctionContext executionContext)
        {
            var logger = executionContext.GetLogger("CensorCurses");
            

            string requestBody = await new StreamReader(request.Body).ReadToEndAsync();
            //dynamic kweetObject = JsonConvert.DeserializeObject(requestBody);   
            string kweetMessage = requestBody;         

            logger.LogInformation("C# HTTP trigger with body: " + kweetMessage);

            Regex regex = new Regex(
                @"\b("
                + string.Join("|", curses.Select(word =>
                    string.Join(@"\s*", word.ToCharArray())))
                + @")\b", RegexOptions.IgnoreCase);

            string censoredKweet = regex.Replace(kweetMessage, match => {
                return new string('*', match.Length);
            });

            HttpResponseData response = request.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");
            response.WriteString(censoredKweet);

            return response;
        }

/*         [Function("CensorCurses")]
        public static HttpResponseData Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData req,
            FunctionContext executionContext)
        {
            var logger = executionContext.GetLogger("CensorCurses");
            logger.LogInformation("C# HTTP trigger function processed a request.");

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");

            response.WriteString("Welcome to Azure Functions!");

            return response;
        } */
    }
}
