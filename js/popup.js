var hermes;


var hermes = document.getElementById("goHermes");
//console.log(hermes)

hermes.addEventListener("click", function() {

    // sends message to background script
     chrome.runtime.sendMessage({
            opened: true
        }, function(response) {
            //console.log(response);
        });







});




// countdown
// What year are we in now?
var now = new Date();
var current_year = now.getFullYear();
//var next_year = current_year;
var tenHrs = 36000000; // to get to 10am of release date (10 hrs in ms)
// Set the date we're counting down to.
var target_date = new Date("August 22, " + current_year).getTime() + tenHrs;


// Variables for time units.
var days, hours, minutes, seconds;

// Get the elements that will hold the numbers.
var $days = document.getElementById("d");
var $hours = document.getElementById("h");
var $minutes = document.getElementById("m");
var $seconds = document.getElementById("s");

// Calculate the countdown clock and set the HTML.
function update() {
    // Find the amount of "seconds" between now and target.
    var current_date = new Date().getTime();

    var seconds_left = (target_date - current_date) / 1000;

    // Do some time calculations.
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // Format the number strings and put them in the elements.
    $days.innerHTML = pad(days, 2);
    $hours.innerHTML = pad(hours, 2);
    $minutes.innerHTML = pad(minutes, 2);
    $seconds.innerHTML = pad(seconds, 2);
}

// Immediately update the HTML.
// The white boxes are blank otherwise.
if (target_date > now) {
    update();

    // Now update our number elements every 1 second.
    setInterval(update, 1000); // 1000 milliseconds = 1 second

    // This looks much better with leading zeros, don't you agree?
    // If num has less than size digits, add enough 0s to the front.
    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
}

if (target_date <= now) {
    $days.innerHTML = 0;
    $hours.innerHTML = 0;
    $minutes.innerHTML = 0;
    $seconds.innerHTML = 0;

}