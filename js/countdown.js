const targetDate = new Date(2023, 11, 13, 15, 0, 0);

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Countdown Expired";
    }
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);


const targetDate2 = new Date(2023, 1, 7, 23, 0, 0);

function updateContent() {
    const now = new Date();

    // Check if the target date and time have passed
    if (now >= targetDate) {
        // Redirect to a new URL when the target date has passed
        window.location.href = "/escape/start.html";
    } else {
        console.log("Countdown not yet expired")
    }
}

// Initial call to check and update content
updateContent();