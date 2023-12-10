
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://petcs-police-login-tight-rain-c3a6.brysonleekwen.workers.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const message = await response.text();
        if (message != 'ERR') {
            window.location.replace(message);
        } else {
            alert('Invalid username or password.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        console.log('Error sending request.');
    }
});

