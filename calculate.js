function addHoursToTime(time, hoursToAdd) {
    // Convert the time to a Date object
    var timeArray = time.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = parseInt(timeArray[1]);
    var hoursToAdd = 8.5;
    // Convert to 24-hour format
    if (time.includes("PM") && hours !== 12) {
        hours += 12;
    } else if (time.includes("AM") && hours === 12) {
        hours = 0;
    }

    // Add hours
    var newHours = hours + Math.floor(hoursToAdd);
    var newMinutes = minutes + (hoursToAdd % 1) * 60;

    // Handle overflow
    if (newMinutes >= 60) {
        newHours += 1;
        newMinutes -= 60;
    }

    // Convert back to 12-hour format
    var ampm = newHours < 12 ? "AM" : "PM";
    newHours = newHours % 12 || 12;

    // Format the result
    var newTime = `${newHours}:${newMinutes < 10 ? '0' : ''}${newMinutes} ${ampm}`;

    return newTime;
}

// Example usage:
var originalTime = "09:35 AM";
var hoursToAdd = 8.5;
var newTime = addHoursToTime(originalTime, hoursToAdd);
console.log(`Original Time: ${originalTime}`);
console.log(`New Time: ${newTime}`);
