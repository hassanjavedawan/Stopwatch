//   Themes
function dark() {
    var dark = document.getElementById('colors')
    dark.style.backgroundColor = 'black'
    var dark = document.getElementById('heading')
    dark.style.color = 'white'
    var dark = document.getElementById('themes')
    dark.style.color = 'white'
    var dark = document.getElementById('watchArea')
    dark.style.border = '6px dotted black'
    dark.style.boxShadow = '8px  3px 8px 4px white'
    var btn = document.getElementsByTagName('button')
    for(var i=0; i<3;i++ ){
        btn[i].style.backgroundColor = 'white'
        btn[i].style.color = 'black'
    }
    var dark = document.getElementById('laps')
    dark.style.color = 'white'
    var dark = document.getElementById('colors')
    dark.style.border = '5px solid white'
    var dark = document.getElementById('me')
    dark.style.color = 'white'
    dark.style.border = '2px solid white'  
}
function light() {
    var light = document.getElementById('colors')
    light.style.backgroundColor = 'white'
    var light = document.getElementById('heading')
    light.style.color = '#6002EE'
    var light = document.getElementById('themes')
    light.style.color = '#6002EE'
    var light = document.getElementById('watchArea')
    light.style.border = '6px dotted #6002EE'
    light.style.boxShadow = '8px  3px 8px 4px #6002EE'
    var btn = document.getElementsByTagName('button')
    for(var i=0; i< 3 ;i++ ){
        btn[i].style.backgroundColor = '#4015B4'
        btn[i].style.color = 'white'
    }
    var light = document.getElementById('laps')
    light.style.color = '#6002EE'
    var light = document.getElementById('colors')
    light.style.border = '7px solid #6002EE'
    var light = document.getElementById('me')
    light.style.color = '#6002EE'
    light.style.border = '2px solid #6002EE'
}

// stopwatch

var min = '00';
var sec = '00';
var msec = '00';
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = '00';

    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = '00'
    }
}
// Toggle StartStop 
var startstop = 0;
function startStop() {

    startstop = startstop + 1;

    if (startstop === 1) {
        start();
        var toggle = document.getElementById("start")
        toggle.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";

        var rest = document.getElementById('re')
        rest.style.display ='inline-block'
        var rest = document.getElementById('lap')
        rest.style.display ='inline-block'
    } else if (startstop === 2) {
        var toggle = document.getElementById("start")
        toggle.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
        startstop = 0;
        stop();
        // var rest = document.getElementById('re')
        // rest.style.display ='none'
        // var rest = document.getElementById('lap')
        // rest.style.display ='none'
    }

}

function start() {
    interval = setInterval(timer, 10)
   
 
}
function stop() {
    clearInterval(interval)
}
function reset() {
    min = "00"
    sec = "00"
    msec = "00"
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    stop()
    startstop()
}

// lap temporary storage

function Lap() {
    var input = prompt("Enter name")
    var Lap = document.getElementById('lap');
    var Laps = document.getElementById('laps');

    Laps.innerHTML += "<li>" + input + " " + minHeading.innerHTML + ":" + secHeading.innerHTML + ":" + msecHeading.innerHTML + "</li>";
}
