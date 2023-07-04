let data = {
    user:"",
    score:0
};
// var nextBtn = document.querySelector("#next").disabled=true;
let currentQuestion =1;

// console.log(randomQuestion);

var question = document.getElementById("questionTitle");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
// console.log(choice1);

function startGame(){
data.user = document.getElementById("user").value;
// console.log(userName);
var startBtn = document.getElementById("start");
// console.log(startBtn);
startBtn.addEventListener("click",(e)=>{
    e.preventDefault();
// console.log(e);
viewNextRandomQ();

localStorage.setItem("data",JSON.stringify(data));
})

// nextQuestion();
}

var nextBtn = document.querySelector("#next");
function enableNextBtn(){
    var radioElements = document.querySelectorAll("input[type='radio']");
    console.log(radioElements);
    for(let radioel of radioElements) {
        console.log(radioel);
        if(radioel.checked){
            nextBtn.disabled=false;
        }
    }
   
 }

 var numOfQ = document.querySelector(".numberOfQ");
 function viewNextRandomQ(){
    let randomQuestion =(Math.random() * 10) .toFixed(0);
    question.textContent=questions[randomQuestion].title;
choice1.textContent=questions[randomQuestion].answers[0];
choice2.textContent=questions[randomQuestion].answers[1];
choice3.textContent=questions[randomQuestion].answers[2];
choice4.textContent=questions[randomQuestion].answers[3];
numOfQ.textContent=currentQuestion +"/ 10";
currentQuestion++;

 }





 let final = [];
 for (myArr of arr)
 {let scores = myArr.split('score":');
 console.log(parseInt(scores[1])); 
 final.push(parseInt(scores[1]));console.log(final);
                   }

 function compare(a,b) {return a-b}
 
 final.sort(compare);

