// Backend https://localhost:5021
// Controller /api/authentication

// POST to /api/registration
const host = process.env.REACT_APP_HOST;

export async function registerUser(username, email, password) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'  
        },
        body: JSON.stringify({
            username : username,
            email : email,
            password : password
        })
    };

    return fetch(host + '/api/authentication/register', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}