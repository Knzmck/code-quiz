var startButton = document.getElementById("startbtn");
//div containers
// var homePage = document.getElementById("homepage");
// var questionContainer = document.getElementById("qcontainer");

var randomQuestions
var currentQuestion 

startButton.addEventListener('click', function(startGame){

    window.location.pathname = './questionpage.html'
    randomQuestions
    setQuestion()
});
console.log(startButton);

const questions = [
    {
        question: 'This is a question',
        answers: [
            { option: 'a', correct: true },
            {option: 'b', correct: false }

        ]
    }

]

function setQuestion () {

}


