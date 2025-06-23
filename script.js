
const toggle_btn = document.getElementById('toggle_btn');

toggle_btn.addEventListener('click', toggleClockFormat);


//page load: set a timer every second
//ensures DOM is ready before the script runs
document.addEventListener('DOMContentLoaded', function() {
    //initial call to display the clock immediately when the page loads (or the 00:00:00 displays for a second)
    updateClock();
    setInterval(updateClock, 1000);
});

let is24HourFormat = true; //default to 24-hour format

// Function to toggle between 24-hour and 12-hour formats
function toggleClockFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock(); // Update the clock display immediately
}

// Function to update the clock display based on the selected format
function formatTime(hours, minutes, seconds) {
    if (is24HourFormat) {
        return `${String(hours).padStart(2, '0')}<span class="colon">:</span>${String(minutes).padStart(2, '0')}<span class="colon">:</span>${String(seconds).padStart(2, '0')}`;
    } else {
        const period = hours >= 12 ? 'PM' : 'AM';
        const adjustedHours = hours % 12 || 12; // Convert to 12-hour format ; convert 0 to 12
        return `${String(adjustedHours).padStart(2, '0')}<span class="colon">:</span>${String(minutes).padStart(2, '0')}<span class="colon">:</span>${String(seconds).padStart(2, '0')} ${period}`;
    }
}
//each second, update the clock display
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const formattedTime = formatTime(hours, minutes, seconds);

    const clockDisplay = document.getElementById('clockDisplay');
    
   clockDisplay.innerHTML = formattedTime;
   toggle_btn.textContent = is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
}
