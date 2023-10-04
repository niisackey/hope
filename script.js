
	// Check if the countdown end date is already stored in localStorage
const storedCountdownDate = localStorage.getItem("countdownDate");

// If it's not stored, set the date we're counting down to (12 days from today) and store it
let countDownDate;
if (!storedCountdownDate) {
    countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 11);
    localStorage.setItem("countdownDate", countDownDate.getTime()); // Store as timestamp
} else {
    countDownDate = new Date(parseInt(storedCountdownDate)); // Retrieve from storage and convert to Date
}

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("day-count").innerHTML = `${days}d`;
    document.getElementById("hour-count").innerHTML = `${hours}h`;
    document.getElementById("minute-count").innerHTML = `${minutes}m`;
    document.getElementById("second-count").innerHTML = `${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        localStorage.removeItem("countdownDate"); // Remove the stored date after countdown is over
    }
}, 1000);

