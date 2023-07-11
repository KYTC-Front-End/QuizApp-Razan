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
const error = document.querySelector(".error");
const description = document.querySelector(".description");

let randomQuestion;
let currentQuestion = 1;
let userValue;
let score = 0;
let data = [];

//1 add that random number can't be repeated.
// score sorting (done but need to connect the score with the user name)
// add leader board btn at the home screen 
// add to return back to the home when quiz funish 
// change the btn to submit at the final question 
// add timer for each question
// random question dynamically depends on the array length. (done)
// add box style.
// revise code.
// ask why should click two times to do the action.

function defaultPreferences() {
    resultInfo.style.display = "none";
    user.style.display = "inline";
    startBtn.style.display = "inline";
    nextSection.style.display = "none";
    questionSection.style.display = "none";
    description.style.display = "flex";
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
        console.log("clicked");
        userValue = user.value;
        if (userValue == '') {
            error.style.display = "block";
            error.textContent = "name is required";
        }
        if (userValue != '') {
            error.style.display = "none";
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
    description.style.display = "none";
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
    randomQuestion = (Math.random() * 12).toFixed(0);
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
        if (userValue != '') {
            let userObject = {};
            userArr.user = userValue;
            userArr.score = score;
            data.push(userObject);
            addToLocalStorageArray("data", JSON.stringify(data));
        }
        resultInfo.style.display = "flex";
        resultValue.textContent = score + " out of " + questions.length;
        console.log(score);
    }




}

function sortLeaderBoard() {
    // console.log(Array.isArray(data) );
    let arr = localStorage.data.split("},");
    // console.log(arr);
    let names = [];
    let scores = [];
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
        // for(obj in arr[i]){
        //     // console.log(obj['score']);
        // }
    }
}
