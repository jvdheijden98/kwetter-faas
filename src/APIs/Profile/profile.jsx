// Backend http://localhost:9091
// Controller /api/profile/

// POST to /api/profile/read
const host = process.env.REACT_APP_HOST;

export async function read(username) {

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type' : 'application/json'  
        },
        body: JSON.stringify({
            username : username,
        })
    };

    return fetch(host + '/api/profile/read', requestOptions)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            return data
        });
}