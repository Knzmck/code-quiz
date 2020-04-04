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
var gameOverPage = document.getElementById("game-over")
var correctText = document.getElementById("correct");
var incorrectText = document.getElementById("incorrect");
var correct = 0;
var incorrect = 0;
var time = document.getElementById("time");


let randomQuestions
var currentQuestionIndex = 0


startButton.addEventListener('click', startGame)
answerBtnEl1.addEventListener('click', selectAnswer)
answerBtnEl2.addEventListener('click', selectAnswer)
answerBtnEl3.addEventListener('click', selectAnswer)
answerBtnEl4.addEventListener('click', selectAnswer)

function startGame() {
    homePage.classList.add('hide')
    questionContainer.classList.remove('hide')
    setQuestion()
    
    display = document.getElementById("time");
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


}

function selectAnswer(event) {
    if (currentQuestionIndex < questions.length) {

        if (event.target.innerText == questions[currentQuestionIndex].correct) {
            correct++
            correctText.innerText = correct
            currentQuestionIndex++
            displayQuestion()
            // addTime()
        }
        else {
            incorrect++
            incorrectText.innerText = incorrect
            currentQuestionIndex++
            displayQuestion()
            // subtractTime()

        }
        console.log(event.target.innerText)
    } else {
        questionContainer.classList.add('hide')
        gameOverPage.classList.remove('hide')
    }

}

// total time of game variable
var gameTime = 60 * 1;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            questionContainer.classList.add('hide')
            gameOverPage.classList.remove('hide')
        }
    }, 1000);
    console.log(startTimer)
}

//question array

const questions = [
    {
        question: 'What does CSS stand for?',
        answers: ['Creating Style Sheets', 'Cascading Style Sheets', 'Compounding Style Syntax', 'Calculating Sign Syntax'],
        correct: 'Cascading Style Sheets'
    },

    {
        question: 'What type of tag would you use to make the most important heading on an HTML page?',
        answers: ['<h6>', '<h5>', '<h1>', '<h23>'],
        correct: '<h1>'
    },
    {
        question: 'What is a major advantage to using bootstrap?',
        answers: ['Your boots will stay on', 'It improves responsiveness for Javascript', 'Bootstrap comes with an easy-to-use grid system', 'Nothing, do not use!'],
        correct: 'Bootstrap comes with an easy-to-use grid system'
    },
    {
        question: 'If a CSS element is defined multiple times, what will happen?',
        answers: ['Nothing', 'The element will default to the styling most towards the bottom of the page', 'The element will default to the styling most towards the top of the page', 'The page will take on multiple styling elements'],
        correct: 'The element will default to the styling most towards the bottom of the page'
    },
    {
        question: 'What does DOM stand for?',
        answers: ['Desktop Object Model', 'Document Oracle Modem', 'Desktop Object Mod', 'Document Object Model'],
        correct: 'Document Object Model'
    },
    {
        question: 'Which number will call on the first object in an Array?',
        answers: ['-1', '0', '1', 'Arrays do not hold objects'],
        correct: '0'
    }

]


// saving score 
// var user = {
//     initials: initials.value.trim(),
//     correct: correct.value.trim(),
//     incorrect: incorrect.value.trim(),
//   };

// var submitBtn = getElementById("submit-button")
// var initials = getElementById("initials")
// submitBtn.addEventListener ("click", addScore)
// function addScore(type, message) {
//     if (initials === "") {
//         alert("error", "You must enter your initials to save your score.")
//     }
//     else {
//         var scoreSheet = getElementById("new-scores")
//         scoreSheet.textContent = message;
//     scoreSheet.setAttribute("class", type);

//     }

// }


