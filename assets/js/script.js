// Variables
var timerE1 = document.getElementById('timeCount');
var timeLeft = 120;
var score = 0;
var questionCount = 0;
var startStyle ={
    "display": "none",
    // "transition": "2s" ------ doesnt work find new solution
}
var quizContainer = document.getElementById('quizContainer');
var questionContent = document.querySelector('#quizHead');
var Ans1 = document.querySelector('#btn1');
var Ans2 = document.querySelector('#btn2');
var Ans3 = document.querySelector('#btn3');
var Ans4 = document.querySelector('#btn4');
var quizQuestions = [
    {
        Q: 'question one',
        c1: 'answer1',
        c2: 'answer2',
        c3: 'answer3',
        c4: 'answer4',
        answer: 'answer3',
    },
    {
        Q: 'question two',
        c1: 'answer1',
        c2: 'answer2',
        c3: 'answer3',
        c4: 'answer4',
        answer: 'answer3',
    },
    {
        Q: 'question three',
        c1: 'answer1',
        c2: 'answer2',
        c3: 'answer3',
        c4: 'answer4',
        answer: 'answer3',
    },
    {
        Q: 'question four',
        c1: 'answer1',
        c2: 'answer2',
        c3: 'answer3',
        c4: 'answer4',
        answer: 'answer3',
    }
];
var currentQuestion = Math.floor(Math.random() * quizQuestions.length);
// Functions
function quizTimer(){
    // initial time in timer if finished early add a difficulty setting that will allow user to change time
    var timeInterval = setInterval(function(){
        timeLeft -=1;
        timerE1.textContent = "Time Left: " + timeLeft;
        if(timeLeft === 0){
            // set action here for when time runs out 
            clearInterval(timeInterval);
        }
    },1000);
    // sets time to 1s since js runs in ms
}

// highscroes window open and close
function openHighScores(){
    document.getElementById('highScores').style.width = "15vw";
}

function closeHighScores(){
    document.getElementById('highScores').style.width = '0vw';
}
// startup screen function and vars
function changeQuestion(){
}

function startquiz(){
    var startingContainer = document.getElementById("startup-overlay");
    Object.assign(startingContainer.style, startStyle);
    quizTimer();
    questionContent.textContent = quizQuestions[currentQuestion].Q;
    Ans1.textContent = quizQuestions[currentQuestion].c1;
    Ans2.textContent = quizQuestions[currentQuestion].c2;
    Ans3.textContent = quizQuestions[currentQuestion].c3;
    Ans4.textContent = quizQuestions[currentQuestion].c4;
}

// event listeners
document.getElementById('openButton').addEventListener("click", openHighScores);
document.getElementById('closeScore').addEventListener("click", closeHighScores);
document.getElementById('start-button').addEventListener("click", startquiz);
// add event listener for quizcontiner div
quizContainer.addEventListener('click', function(e){
    console.log(e.target.innerHTML);
    var selectedAns = e.target;
});