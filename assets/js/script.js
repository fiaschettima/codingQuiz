var timerE1 = document.getElementById('timeCount');
var timeLeft = 120;
var quizQuestions = {
    Q1: 'question 1',
    Q1Ans: {
        1: 'answer',
        2: 'answer',
        3: 'answer',
        4: 'answer',
    },
    Q2: 'question 2',
    Q2Ans: {
        1: 'answer',
        2: 'answer',
        3: 'answer',
        4: 'answer',
    },
    Q3: 'question 3',
    Q3Ans: {
        1: 'answer',
        2: 'answer',
        3: 'answer',
        4: 'answer',
    },
    Q4: 'question 4',
    Q4Ans: {
        1: 'answer',
        2: 'answer',
        3: 'answerssss',
        4: 'answer',
    },
    Q5: 'question 5',
    Q5Ans: {
        1: 'answer',
        2: 'answer',
        3: 'answerssss',
        4: 'answer',
    }
};
console.log( quizQuestions.Q4Ans[3]);
function quizTimer(){
    // initial time in timer if finished early add a difficulty setting that will allow user to change time
    var timeInterval = setInterval(function(){
        timeLeft -=1;
        timerE1.textContent = timeLeft;
        if(timeLeft === 0){
            // set action here for when time runs out 
            clearInterval(timeInterval);
        }
    },1000);
    // sets time to 1s since js runs in ms
}
// set start quiz button to start timer
// wrong answers on quiz questions subtract from time left
