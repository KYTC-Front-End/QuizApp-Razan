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

let randomQuestion;
let currentQuestion = 1;
let userValue;
let score = 0;
let data = [];

// userValue =userValue.value="ttt";

function defaultPreferences() {
    user.style.display = "inline";
    startBtn.style.display = "inline";
    nextSection.style.display = "none";
    questionSection.style.display = "none";
}

defaultPreferences();

let addToLocalStorageArray = function (name, value) {

    // Get the existing data
    let existing = localStorage.getItem(name);

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];

    // Add new data to localStorage Array
    existing.push(value);

    // Save back to localStorage
    localStorage.setItem(name, existing.toString());

};


// console.log(userValue);
function startGame() {
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
         userValue = user.value;
        // console.log(userValue) // logs multiple values at a one time click ?
        if (userValue != '') {
            // let userArr = {};
            // userArr.user = userValue;
            // userArr.score = score;
            // data.push(userArr);
            // addToLocalStorageArray("data", JSON.stringify(userArr))
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
    nextSection.style.display = "block";
    questionSection.style.display = "block";
    numOfQ.textContent = currentQuestion + `/ ${questions.length}`;
    viewNextRandomQ();
    enableNextBtn();
}

function enableNextBtn() {
    var radioElements = document.querySelectorAll("input[type='radio']");
    // console.log(radioElements);
    for (let radioel of radioElements) {
        // console.log(radioel);
        if (radioel.checked) {
            nextBtn.disabled = false;
            // console.log(questions[randomQuestion].correctAnswer);
            if (radioel.nextElementSibling.textContent == questions[randomQuestion].correctAnswer) {

                score++;
                // console.log(score);
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
        console.log(userValue);

        if (userValue != '') {
            let userArr = {};
            userArr.user = userValue;
            userArr.score = score;
            data.push(userArr);
            addToLocalStorageArray("data", JSON.stringify(userArr));
        }

        // let storage = localStorage.getItem("data");
        // let arr =storage.split("}");
        // for(myArr of arr) {
        //     // console.log(myArr);
        //     if(myArr.includes(userValue)){
        //         console.log(score);  // update final  score to the local storage

        //     }
        // }
    }

}


