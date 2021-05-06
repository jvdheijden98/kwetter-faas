// Backend https://localhost:5021
// Controller /api/authentication/

// POST to /api/timeline/read
export async function fetchTimeline() {

    const requestOptions = {
        method: 'GET',
    };

    return fetch('https://localhost:5021/api/timeline/read', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}