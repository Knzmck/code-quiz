var startButton = document.getElementById("startbtn");
var questionEl = document.getElementById("question-text");
var nextButton = document.getElementById("next-btn")
var answerBtnEl1 = document.getElementById("answer-button1");
var answerBtnEl2 = document.getElementById("answer-button2");
var answerBtnEl3 = document.getElementById("answer-button3");
var answerBtnEl4 = document.getElementById("answer-button4");
var homePage = document.getElementById("homepage");
var questionContainer = document.getElementById("qcontainer");
var timeScoreContainer = document.getElementById("time-score-container")
var correctText = document.getElementById("correct");
var incorrectText = document.getElementById("incorrect");
var correct = 0;
var incorrect =0;
var time = document.getElementById("time");

let randomQuestions
var currentQuestionIndex = 0


startButton.addEventListener('click', startGame)
answerBtnEl1.addEventListener('click',selectAnswer)
answerBtnEl2.addEventListener('click',selectAnswer)
answerBtnEl3.addEventListener('click',selectAnswer)
answerBtnEl4.addEventListener('click',selectAnswer)

function startGame() {
    //hides hompage
    homePage.classList.add('hide')
    //shows question container
    questionContainer.classList.remove('hide')
    //sets question 
    setQuestion()
    var gameTime = 60 * 1,
        display = document.querySelector('#time');
        startTimer(gameTime, display);


    // selects random question *** need to add ***

}

//function to display question
function setQuestion() {
    //shows new question
    displayQuestion()
    
    
}

function displayQuestion() {
    //links question to question text
    questionEl.innerText = questions[currentQuestionIndex].question
    console.log(currentQuestionIndex)
    //links respective answers to question buttons
        answerBtnEl1.innerText = questions[currentQuestionIndex].answers[0]
        answerBtnEl2.innerText = questions[currentQuestionIndex].answers[1]
        answerBtnEl3.innerText = questions[currentQuestionIndex].answers[2]
        answerBtnEl4.innerText = questions[currentQuestionIndex].answers[3]

        // button.addEventListener('click', selectAnswer)
    
    
}

function selectAnswer(event) {
    if (currentQuestionIndex < questions.length) {

    if (event.target.innerText == questions[currentQuestionIndex].correct) {
        correct++
        correctText.innerText = correct
        currentQuestionIndex++
        displayQuestion()
       
    }
    else{
        incorrect++
        incorrectText.innerText = incorrect
        currentQuestionIndex++
        displayQuestion()

    }
    console.log(event.target.innerText)
} else {
    
    console.log("gameOver")

}

}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

//question array

const questions = [
    {
        question: 'This is a question654645?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },

    {
        question: 'This is a question65?',
        answers: ['e','f', 'g', 'h'],
        correct: 'e'
    },
    {
        question: 'This is a question644445?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },
    {
        question: 'This is a question99999?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },
    {
        question: 'This is a question6566666?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },
    {
        question: 'This is a question65777775?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },
    {
        question: 'This is a questio88888?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },
    {
        question: 'This is a question6101010145?',
        answers: [ 'a','b','c','d'],
        correct: 'a'
    },

]
