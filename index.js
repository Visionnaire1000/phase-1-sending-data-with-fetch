
function submitData(name, email) {
    // Define the destination URL
    const url = "http://localhost:3000/users";

    // Configure the POST request
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: name, email: email })
    };

    // Send the fetch request
    return fetch(url, config)
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Append the new ID to the DOM
            const body = document.querySelector("body");
            const idElement = document.createElement("p");
            idElement.textContent = `New User ID: ${data.id}`;
            body.appendChild(idElement);
        })
        .catch(error => {
            // Handle errors and append the error message to the DOM
            const body = document.querySelector("body");
            const errorElement = document.createElement("p");
            errorElement.textContent = `Error: ${error.message}`;
            body.appendChild(errorElement);
        });
}

