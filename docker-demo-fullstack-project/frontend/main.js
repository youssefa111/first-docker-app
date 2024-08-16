var idCounter = 3;

document.getElementById('studentForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the loading indicator
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.style.display = 'block';

    // Disable the submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    // Gather form data
    const formData = {
        id:idCounter++,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        // age: document.getElementById('age').value,
        // gender: document.getElementById('gender').value,
        // favLanguage: document.getElementById('favLanguage').value
    };

    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Send the data to the API
        const response = await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Handle the response
        // const result = await response.json();
        if (response.ok) {
            alert('The student was added successfully!');
        } else {
            alert('An error occurred: ' + result.message);
        }
    } catch (error) {
        alert('There was an error with the request: ' + error.message);
    } finally {
        // Hide the loading indicator
        loadingIndicator.style.display = 'none';

        // Re-enable the submit button
        submitButton.disabled = false;
    }
});
