// Backend https://localhost:5021
// Controller /api/authentication/

// POST to /api/timeline/read
const host = process.env.REACT_APP_HOST;

export async function fetchTimeline() {

    const requestOptions = {
        method: 'GET',
    };

    return fetch(host + '/api/timeline/read', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}