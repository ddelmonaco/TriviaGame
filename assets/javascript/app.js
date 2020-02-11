$(document).ready(function(){



var correct= 0;
var wrong= 0;
var unanswered= 0;
var time=10;
var timer; 

var card = $("#questions");
// Question set
var questions = [
  {
    question: "Who did Jim Halper end up proposing to?",
    answers: ["Phyliss", "Angela", "Pam", "Michael"],
    correctAnswer: "Pam"
  },
  {
    question: "Where did Jim Halper propse?",
    answers: ["Gas Station", "Beach", "Haunted House", "In the office"],
    correctAnswer: "Gas Station"
  },
  {
    question: "What is Andy's nickname for Jim??",
    answers: ["Fat Halpert", "Big tuna", "Jimbo", "Stanley the Manley"],
    correctAnswer: "Big Tuna"
  },
  {
    question: "WWho is Dwight dating?",
    answers: ["Angela", "Oscar", "Phyliss" , "Mike"],
    correctAnswer: "Angela"
  },
  {
    question: "What does Jim dress up as for the first Halloween?",
    answers: ["Aladdin", "3 hole punch", "Vampire", "Rockstar"],
    correctAnswer: "The Lion King"
  },
  
  {
    question: "Who does Jan end up getting pregnant by?",
    answers: ["Jim", "Mike", "Dwilight", "Oscar"],
    correctAnswer: "Mike"
  },
  
];


function start() {
    console.log("run")

    timer = setInterval(count, 1000)

    for (var i = 0; i < questions.length; i++) {
        card.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          card.append("<input type='radio' name='question-" + i +
            "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
      }
      card.append("<button id='done'>Done</button>");

}

start()


// setTimeout(thirtySeconds, 1000 * 30);
//setTimeout(fortyfiveSeconds, 1000 * 45);
// setTimeout(timeUp, 1000 * 60);

// function thirtySeconds() {
//     $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
//     console.log("30seconds left");
//   }
function count (){
    console.log("yep")
    time --;
    console.log(time)
    $("#Timeleft").text(time);

    if (time === 0) {
        clearInterval(timer)
        done()
    }
}

// function starter (){
//     setInterval(count, 1000);
// }
// $(document).on("click","#Start",starter);

function displayResults() {
    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + wrong + "</h3>");
}



function done() {
    var inputs = card.children("input:checked");
    console.log(inputs)
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    }
    displayResults()
}



$(document).on("click", "#done", function() {
    done();
  });





})






