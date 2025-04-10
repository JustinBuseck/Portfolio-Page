let clockInterval; // Variable to store the interval ID
let secondsElapsed = 0; // Variable to track elapsed seconds

function startClock() {
  const clockElement = document.getElementById("clock");

  // Clear any existing interval to avoid multiple intervals running
  clearInterval(clockInterval);

  // Start the clock
  clockInterval = setInterval(() => {
    secondsElapsed++;
    const hours = String(Math.floor(secondsElapsed / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((secondsElapsed % 3600) / 60)).padStart(2, "0");
    const seconds = String(secondsElapsed % 60).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

function stopClock() {
  // Stop the clock by clearing the interval
  clearInterval(clockInterval);
}

function resetClock() {
  // Stop the clock by clearing the interval
  clearInterval(clockInterval);

  // Reset elapsed time to 1 second
  secondsElapsed = 1;

  // Update the clock display to 00:00:01
  const clockElement = document.getElementById("clock");
  clockElement.textContent = "00:00:01";

  // Start the clock immediately after resetting
  startClock();
}

// Attach event listeners to the buttons
document.getElementById("startButton").addEventListener("click", startClock);
document.getElementById("stopButton").addEventListener("click", stopClock);
document.getElementById("resetButton").addEventListener("click", resetClock); // Reset button listener