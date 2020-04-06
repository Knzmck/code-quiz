var startButton = document.getElementById("startbtn");
var questionEl = document.getElementById("question-text");
var nextButton = document.getElementById("next-btn");
var saveBtn = document.getElementById("save-btn");

var answerBtnEl1 = document.getElementById("answer-button1");
var answerBtnEl2 = document.getElementById("answer-button2");
var answerBtnEl3 = document.getElementById("answer-button3");
var answerBtnEl4 = document.getElementById("answer-button4");

var homePage = document.getElementById("homepage");
var questionContainer = document.getElementById("qcontainer");
var timeScoreContainer = document.getElementById("time-score-container")
var gameOverPage = document.getElementById("game-over");
var correctText = document.getElementById("correct");
var incorrectText = document.getElementById("incorrect");
var playagainbtn = document.getElementById("playagain-btn");

var correct = 0;
var incorrect = 0; 

var time = document.getElementById("time");
var gameTime = 30;

let randomQuestions
var currentQuestionIndex = 0


//event listeners for buttons
startButton.addEventListener('click', startGame)
answerBtnEl1.addEventListener('click', selectAnswer)
answerBtnEl2.addEventListener('click', selectAnswer)
answerBtnEl3.addEventListener('click', selectAnswer)
answerBtnEl4.addEventListener('click', selectAnswer)
playagainbtn.addEventListener('click', playagain)


function playagain() {
    location.reload();
}


function startGame() {
    homePage.classList.add('hide')
    questionContainer.classList.remove('hide')
    setQuestion()
    display = document.getElementById("time");
    startTimer(gameTime, display);
    

}

//function to display question
function setQuestion() {
    //shows new question
    displayQuestion()
}

function displayQuestion() {
    //links question to question text
    questionEl.innerText = questions[currentQuestionIndex].question
    //links respective answers to question buttons
    answerBtnEl1.innerText = questions[currentQuestionIndex].answers[0]
    answerBtnEl2.innerText = questions[currentQuestionIndex].answers[1]
    answerBtnEl3.innerText = questions[currentQuestionIndex].answers[2]
    answerBtnEl4.innerText = questions[currentQuestionIndex].answers[3]


}

function selectAnswer(event) {
    event.preventDefault();
    if (currentQuestionIndex < questions.length) {

        if (event.target.innerText == questions[currentQuestionIndex].correct) {
            correct++
            correctText.innerText = correct
            currentQuestionIndex++
            displayQuestion()
            gameTime = gameTime + 3
            
            
            
        }
        else {
            incorrect++
            incorrectText.innerText = incorrect
            currentQuestionIndex++
            displayQuestion()
            gameTime = gameTime - 3

        }
        console.log(event.target.innerText)
    } else {
        questionContainer.classList.add('hide')
        gameOverPage.classList.remove('hide')
        
    }

}

function startTimer() {
    interval = setInterval(function() {
        time.innerText = gameTime--;
        if (--gameTime < 0) {
            questionContainer.classList.add('hide')
            gameOverPage.classList.remove('hide')
        }
    }, 1000);
    
}


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
    },
    {
        question: 'How do you insert a break line in HTML?',
        answers: ['Press the return key', 'use the <kb> tag', 'Use the <break> tag', 'Use the <br> tag'],
        correct: 'Use the <br> tag'
    },
    {
        question: 'Which HTML tags will creat a bullet point list?',
        answers: ['<ul><ul>', '<li><li>', '<list><list>', '<bl><bl>'],
        correct: '<ul><ul>'
    },
    {
        question: 'Who invented the World Wide Web?',
        answers: ['Steve Jobs', 'Tim Berners-Lee', 'Bill Gates', 'Douglas Engelbart'],
        correct: 'Tim Berners-Lee'
    },
    {
        question: 'Which of the following is NOT a programming language?',
        answers: ['HTML', 'Javascript', 'C++', 'Word'],
        correct: 'Word'
    },
    {
        question: 'What symbol differentiates most opening tags from closing tags?',
        answers: ['/', '<', '#', '*'],
        correct: '/'
    },
    {
        question: 'How long did it take Brendan Eich to create Javascript?',
        answers: ['2 years', '10 days', '529,600 minutes', '1 year'],
        correct: '10 days'
    },
    {
        question: 'Which language is most similar to javascript?',
        answers: ['HTML', 'Javascript 2', 'Java', 'None of the above'],
        correct: 'None of the above'
    },
    {
        question: 'Which symbol is used to call a function in JQuery?',
        answers: ['$', '!', '~', 'JQuery cannot create functions'],
        correct: '$'
    },
    {
        question: 'How would you use call an ID tag in JQuery?',
        answers: ['getElementById("idtag")', '"$#idtag"', 'id=idtag', '("#idtag")'],
        correct: '("#idtag")'
    }


]
