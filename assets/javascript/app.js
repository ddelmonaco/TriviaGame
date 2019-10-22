var correct= 0;
var wrong= 0;
var unanswered= 0;

<p ontouchstart="myFunction(event)">Start </p>
setTimeout(thirtySeconds, 1000 * 30);
setTimeout(fortyfiveSeconds, 1000 * 45);
setTimeout(timeUp, 1000 * 60);

function thirtySeconds() {
    $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
    console.log("30seconds left");
  }



