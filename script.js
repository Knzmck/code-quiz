var startButton = document.getElementById("startbtn");
var questionEl = document.getElementById("question-text");
var nextButton = document.getElementById("next-btn")
var answerBtnEl = document.getElementById("answer-button");
var homePage = document.getElementById("homepage");
var questionContainer = document.getElementById("qcontainer");

let randomQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

function startGame() {
    //hides hompage
    homePage.classList.add('hide')
    //selects a random question
    randomQuestions = questions.sort(() => Math.random() - 1)
    //choses first question in array (0)
    currentQuestionList = 0
    //shows question container
    questionContainer.classList.remove('hide')
    //sets question 
    setQuestion()
}

//function to display question
function setQuestion() {
    //resets old question 
    resetFunction()
    //shows new question
    displayQuestion(randomQuestions[currentQuestionIndex])
    
}

function displayQuestion(question) {
    //links question to question text
    questionEl.innerText = question.question
    //links respective answers to question buttons
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        //displays answer on buttons
        button.innerText = answer.text
        button.classList.add('btn')
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
    })
    
}
//trying to reset after answer selected??
function resetFunction() {
    nextButton.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerButtonsElement.removeChild (answerBtnEl.firstChild)
    }
    
}

function selectAnswer(event) {

}


//question array
const questions = [
    {
        question: 'This is a question654645?',
        answers: [
            {text: 'a', correct: true },
            {text: 'b', correct: false }

        ]
    },

    {
        question: 'This is a question65?',
        answers: [
            {text: 'a', correct: true },
            {text: 'b', correct: false }

        ]
    }

]