var startButton = document.getElementById("startbtn");
var questionEl = document.getElementById('question-text');
var answerEl = document.getElementById("answer-button");
var homePage = document.getElementById("homepage");
var questionContainer = document.getElementById("qcontainer");

var randomQuestions
var currentQuestionList 

startButton.addEventListener('click', function(startGame){
    //hide homepage
    homePage.classList.add('hide')
    //show question page
    questionContainer.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    setQuestion()
});
console.log(startButton);


function setQuestion() {
    displayQuestion(randomQuestions[currentQuestionList])
}

function displayQuestion(question) {
    questionEl.innerHTML = question.question
}

var questions = [
    {
        question: 'This is a question654645',
        answers: [
            {option: 'a', correct: true },
            {option: 'b', correct: false }

        ]
    }

]

function setQuestion () {

}


