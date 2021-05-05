// Backend https://localhost:5021
// Controller /api/authentication

// POST to /api/registration
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

    return fetch('https://localhost:5021/api/authentication/register', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}