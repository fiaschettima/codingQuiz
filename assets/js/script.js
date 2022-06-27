var timerE1 = document.getElementById('timeCount');
var timeLeft = 120;
var score = 0;
var quizQuestions = [
    {
        Q2: 'question',
        Q2Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
    {
        Q3: 'question',
        Q3Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
    {
        Q4: 'question',
        Q4Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
    {
        Q5: 'question',
        Q5Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
    {
        Q5: 'question',
        Q5Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
    {
        Q6: 'question',
        Q6Ans: [
                {text :'option 1', correct :true },
                {text :'option 2', correct :false },
                {text :'option 3', correct :false },
                {text :'option 4', correct :false}
            ],
    },
];
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
// wrong answers on quiz questions subtract from time left

// highscroes window open and close
function openHighScores(){
    document.getElementById('highScores').style.width = "15vw";
}

function closeHighScores(){
    document.getElementById('highScores').style.width = '0vw';
}
// startup screen function and vars
var startStyle ={
    "display": "none",
    // "transition": "2s" ------ doesnt work find new solution
}

function startquiz(){
    var startingContainer = document.getElementById("startup-overlay");
    Object.assign(startingContainer.style, startStyle);
    quizTimer();
}
// event listeners
document.getElementById('openButton').addEventListener("click", openHighScores);
document.getElementById('closeScore').addEventListener("click", closeHighScores);
document.getElementById('start-button').addEventListener("click", startquiz);