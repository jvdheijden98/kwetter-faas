// Backend https://localhost:5021
// Controller /api/kweet/

// POST to /api/kweet/create
export async function create(message) {

    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
            'Content-Type' : 'application/json'  
        },
        body: JSON.stringify({
            Message : message,
        })
    };

    return fetch('https://localhost:5021/api/kweet/create', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}