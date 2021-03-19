// Backend http://localhost:5000
// Controller /api/registration

// POST to /api/registration
export async function registerUser(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'  
        },
        body: JSON.stringify({
            username : username,
            password : password
        })
    };

    return fetch('http://localhost:5000/api/registration', requestOptions)
        .then(async response => {
            const data = await response;

            // check for error response
            if(response.ok !== true) {
                const error = (data && data.message) || response.status;

                return Promise.reject(error);
            }
            // TODO Haal logging weg
            console.log(data);
            return data.statusText;
        })
        .catch(error => {
            // TODO Handle problem for user/give instructions/tell what problem is
            console.error(error);
            return "Something went wrong...";
        });
}