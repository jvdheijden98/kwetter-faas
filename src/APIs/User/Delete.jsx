// Controller /api/authentication/

// DELETE to /api/authentication/login
const host = process.env.REACT_APP_HOST;

export async function deleteUser() {

    const requestOptions = {
        method: 'DELETE',
        headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
            'Content-Type' : 'application/json'  
        }
    };

    return fetch(host + '/api/authentication/delete', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}