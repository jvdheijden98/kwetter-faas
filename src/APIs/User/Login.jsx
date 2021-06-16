// Dev Backend https://localhost:5021
// Controller /api/authentication/

// POST to /api/authentication/login
const host = process.env.REACT_APP_HOST;

export async function login(username, password) {

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

    return fetch(host + '/api/authentication/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}