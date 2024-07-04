const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function starttimer() {
    if (stoptime == true) {
        stoptime = false;
        timercycle();
    }

}
function stoptimer() {
    if (stoptime === false) {
        stoptime = true;
    }
}
function timercycle() {
    if (stoptime == false) {
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);
        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        timer.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout("timercycle()", 1000);
    }
}function resettimer()
{
    stoptime=true;
    sec=0;
    hr=0;
    min=0;
    timer.innerHTML="0"+hr+":"+"0"+min+":"+"0"+sec;

}
