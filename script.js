//call and define all variables//
var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice1 = document.getElementById("1.");
var choice2 = document.getElementById("2.");
var choice3 = document.getElementById("3.");
var choice4 = document.getElementById("4.");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var score = document.getElementById("scoreContainer");

//list of questions//
let questions = [
    question = "Commonly used Data Types DO NOT include:",
        choice1 = "strings",
        choice2 = "booleans",
        choice3 = "alerts",
        choice4 = "numbers",

        correct = "3."
    },
    {
    question = "The condition in an if / else statements is started with _______.",
        choice1 = "quotes",
        choice2 = "curly brackets",
        choice3 = "parenthesis",
        choice4 = "square brackets",
  
        correct = "3."
    },
    {
    question: "Arrays in JavaScript can used to store ________.",
        choice1 = "numbers and strings",
        choice2 = "other arrays",
        choice3 = "booleans",
        choice4 = "all of the above",
        
        correct = "4."
    },
    {
    question: "String values must be enclosed within ______ when being assigned to variables.",
        choice1 = "commas",
        choice2 = "curly brackets",
        choice3 = "quotes",
        choice4 = "parenthesis",

        correct = "3."
    },
    {
    question: "A useful tool used during development and debugging for printing content to the debugger is:",
        choice1 = "JavaScript",
        choice2 = "terminal/bash",
        choice3 = "for loops",
        choice4 = "console.log",

        correct = "4."
    }
];
//vairables for timer and timed questions//
var lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
var questionTime = 30; //30 seconds//
var guageWidth = 100;
var guageUnit = guageWidth / questionTime;
let TIMER;
let score = 0;

//rendering the questions//
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choice1.innerHTML = q.choice1;
    choice2.innterHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};
//to start the quiz//
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
};
startButton.addEventListener("click", startQuiz);

//to render progress in the quiz//
function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"
    };
};
//timer and score render//
function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * guageUnit + "px";
        count++
    } else{
        clearInterval(TIMER);
        scoreRender();
    };
};

//to check the answers as you go//
function checkAnswer(answer) {
    if(answer === questions[runningQuestion].correct) {
        score ++;
        answerIsCorrect();
    } else{
        answerIsWrong();
    };
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        clearIntercal(TIMER);
        scoreRender();
    };
};
//if the answer is correct, display "correct!"//
function answerIsCorrect() {
    document.getElementById(runningQuestion);
    document.write("correct!")
};
//if the answer is incorrect, display "incorrect"//
function answerIsIncorrect() {
    document.getElementById(runningQuestion);
    document,write("incorrect!");
};
//render the score in percentage//
function scoreRender() {
    score.style.display = "block";

    var perCent = Math.round(100 * score/questions.length);
}