// Backend http://localhost:9091
// Controller /api/profile/

// POST to /api/profile/read
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

    return fetch('http://localhost:9091/api/profile/read', requestOptions)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            return data
        });
}