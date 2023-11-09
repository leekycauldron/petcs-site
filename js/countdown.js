const targetDate = new Date(2023, 11, 13, 15, 0, 0);

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementsByClassName('countdown')[0];
    countdownElement.innerHTML = `${days > 9 ? days : "0"+days} : ${hours > 9 ? hours : "0"+hours }  : ${minutes > 9 ? minutes : "0"+minutes}  : ${seconds > 9 ? seconds : "0"+seconds} `;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Countdown Expired";
    }
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);