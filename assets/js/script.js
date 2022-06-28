// Variables
var timerE1 = document.getElementById('timeCount');
var scoreTrack = document.getElementById('scoreCount');
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
        Q: ' What is JavaScript',
        c1: 'A type of cookie',
        c2: 'the coding language that provides styling',
        c3: 'The programming language that allows for complex features',
        c4: 'A made up word',
        answer: 'The programming language that allows for complex features',
    },
    {
        Q: 'These are the core programmig languages except',
        c1: 'CSS',
        c2: 'HTML',
        c3: 'SquareLeaf',
        c4: 'JavaScript',
        answer: 'SquareLeaf',
    },
    {
        Q: ' Which option represent the proper syntax for an array',
        c1: '[]item,item2',
        c2: '1,2,3,4',
        c3: '[1,2,3,4]',
        c4: 'none of the above',
        answer: '[1,2,3,4]',
    },
    {
        Q: 'How to add a comment in JS',
        c1: '<!---->',
        c2: '//',
        c3: '/**/',
        c4: 'comment(here)',
        answer: '//',
    },
    {
        Q: 'What is pseudo code',
        c1: 'advanced karate move',
        c2: 'coding language to animate the page',
        c3: 'code written in non coding language',
        c4: 'The most recent coding language created growing in popularity',
        answer: 'code written in non coding language',
    },
    {
        Q: 'Which is the prope way to declare a variable ',
        c1: 'let x = ...',
        c2: 'const x = ....',
        c3: 'var x = ...',
        c4: 'All of the above',
        answer: 'All of the above',
    },
    {
        Q: 'The only acceptable way to cook a steak is',
        c1: 'rare to mid-rare',
        c2: 'medium',
        c3: 'well Done',
        c4: 'Burnt',
        answer: 'rare to mid-rare',
    },
    {
        Q: 'The first programming language is',
        c1: 'JavaScript',
        c2: 'C++',
        c3: 'CSS',
        c4: 'FORTRAN',
        answer: 'FORTRAN',
    },
    {
        Q: 'What is the most commonly used programming language',
        c1: 'HTML',
        c2: 'CSS',
        c3: 'JavaScript',
        c4: 'Python',
        answer: 'JavaScript',
    },
    {
        Q: 'When was the first computer virus made',
        c1: 'In 1998',
        c2: 'In 2002',
        c3: 'In 1968',
        c4: 'In 1986',
        answer: 'In 1986',
    }
];
// var currentQuestion

// Functions

// timer
function quizTimer(){
    // initial time in timer if finished early add a difficulty setting that will allow user to change time
    var timeInterval = setInterval(function(){
        timeLeft -=1;
        timerE1.textContent = "Time Left: " + timeLeft;
        if(timeLeft === 0 || quizQuestions.length === 0){
            // set action here for when time runs out 
            clearInterval(timeInterval);
            gameOver();
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

function startquiz(){
    var startingContainer = document.getElementById("startup-overlay");
    Object.assign(startingContainer.style, startStyle);
    quizTimer();
    fillQuiz();
}
function fillQuiz(){
    currentQuestion = Math.floor(Math.random() * quizQuestions.length);
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
    var userAnswer = e.target.innerHTML;
    var userSelect = e.target;
    if(userSelect.matches('button')){
        if(userAnswer === quizQuestions[currentQuestion].answer){
            score +=10;
            scoreTrack.innerHTML = "Current Score: " + score;
            quizQuestions.splice(currentQuestion,1);
            if(quizQuestions.length > 0){
            fillQuiz();
            }
            console.log(quizQuestions);
        }else{
            quizQuestions.splice(currentQuestion,1);
            timeLeft -= 10;
            console.log(quizQuestions);
            if(quizQuestions.length > 0){
                fillQuiz();
                }
    }
}
});

function gameOver(){
    var userInfo = prompt('Enter your Initials to save your score');
    var person={
        initials: userInfo,
        score: score + timeLeft,
    }
    // if(quizQuestions[])
    // add if quiz questions empty end quiz bring up highscores here
    // add in start quiz if time = o ir array position less than 0 end quiz pop up prompy initialsEnt
   
    localStorage.setItem('playerInfo', JSON.stringify(person));
    window.location.reload();
    
}
var scoreList = document.getElementById('scoreList');
function loadHighScore(){
    var player1 = JSON.parse(localStorage.getItem('playerInfo'));
    
    console.log(player1)
}
loadHighScore();