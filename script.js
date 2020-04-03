var startButton = document.getElementById("startbtn");
var questionEl = document.getElementById("question-text");
var nextButton = document.getElementById("next-btn")
var answerBtnEl1 = document.getElementById("answer-button1");
var answerBtnEl2 = document.getElementById("answer-button2");
var answerBtnEl3 = document.getElementById("answer-button3");
var answerBtnEl4 = document.getElementById("answer-button4");
var homePage = document.getElementById("homepage");
var questionContainer = document.getElementById("qcontainer");
var correctText = document.getElementById("correct");
var incorrectText = document.getElementById("incorrect");
var correct = 0;
var incorrect =0;

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
    //selects a random question
    // randomQuestions = questions.sort(() => Math.random() - 1)
    //choses first question in array (0)
    // currentQuestionIndex = 1
    //shows question container
    questionContainer.classList.remove('hide')
    //sets question 
    setQuestion()

}

//function to display question
function setQuestion() {
    //resets old question 
    // resetFunction()
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
//trying to reset after answer selected??
// function resetFunction() {
//     nextButton.classList.add('hide')
//     while (answerBtnEl.firstChild) {
//         answerButtonsElement.removeChild (answerBtnEl.firstChild)
//     }
    
// }

function selectAnswer(event) {
    if (currentQuestionIndex < questions.length-1) {

    if (event.target.innerText == questions[currentQuestionIndex].correct) {
        correct++
        correctText.innerText = correct
        currentQuestionIndex++
        displayQuestion()
       
    }
    else {
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
    }

]

console.log(questions)

