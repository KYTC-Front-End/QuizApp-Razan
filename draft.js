const user = document.getElementById("user");
const startBtn = document.getElementById("start");
const nextSection = document.querySelector(".btnQuestion");
const questionSection = document.querySelector(".questionSection");
const nextBtn = document.querySelector("#next");
const question = document.getElementById("questionTitle");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const numOfQ = document.querySelector(".numberOfQ");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const resultInfo = document.querySelector(".result-info");
const resultValue = document.querySelector(".result-value");

let randomQuestion;
let currentQuestion = 1;
let userValue;
let score = 0;
let data = [];


function defaultPreferences() {
    resultInfo.style.display="none";
    user.style.display = "inline";
    startBtn.style.display = "inline";
    nextSection.style.display = "none";
    questionSection.style.display = "none";
}

defaultPreferences();

let addToLocalStorageArray = function (name, value) {

    let existing = localStorage.getItem(name);

    existing = existing ? existing.split(',') : [];


    existing.push(value);

    localStorage.setItem(name, existing.toString());

};


function startGame() {
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userValue = user.value;
        if (userValue != '') {

            viewQuiz();
        }
        else {
            defaultPreferences();
        }
    })
}

function viewQuiz() {
    user.style.display = "none";
    startBtn.style.display = "none";
    nextBtn.disabled = true;
    questionSection.style.display = "block";
    nextSection.style.display = "block";
    numOfQ.textContent = currentQuestion + `/ ${questions.length}`;
    viewNextRandomQ();
    enableNextBtn();
}

function enableNextBtn() {
    var radioElements = document.querySelectorAll("input[type='radio']");

    for (let radioel of radioElements) {

        if (radioel.checked) {
            nextBtn.disabled = false;

            if (radioel.nextElementSibling.textContent == questions[randomQuestion].correctAnswer) {

                score++;

            }
        }



    }

}

function clearDefaultChoice() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
}

function viewNextRandomQ() {

    randomQuestion = (Math.random() * 10).toFixed(0);
    question.textContent = questions[randomQuestion].title;
    choice1.textContent = questions[randomQuestion].answers[0];
    choice2.textContent = questions[randomQuestion].answers[1];
    choice3.textContent = questions[randomQuestion].answers[2];
    choice4.textContent = questions[randomQuestion].answers[3];


    if (currentQuestion <= questions.length) {
        numOfQ.textContent = currentQuestion + `/ ${questions.length}`;
        currentQuestion++;

        clearDefaultChoice();
        nextBtn.disabled = true;
    }


    else {
        nextSection.style.display = "none";
        questionSection.style.display = "none";
       // console.log(userValue);

        if (userValue != '') {
            let userArr = {};
            userArr.user = userValue;
            userArr.score = score;
            data.push(userArr);
            addToLocalStorageArray("data", JSON.stringify(userArr));
        }
        resultInfo.style.display="flex";
        resultValue.textContent=score+"/"+ questions.length;
        console.log(score);
    }

}


