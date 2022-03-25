var jsScore = document.querySelector("#jsScore");
// alert(jsScore.innerText);
var jsQuestion = document.querySelector("#jsQuestion");

const getQuestion = function(){

let getRandomQuestion = function(){
    var n1 = Math.floor(Math.random()*(50-1)+1);
    var n2 = Math.floor(Math.random() * (50-1)+1);
    let arr = ["+","-","*"];
    var op = Math.floor(Math.random()*(3))
    return [n1, arr[op],n2,n1+arr[op]+n2];
}
var ques = getRandomQuestion()

jsQuestion.innerText = ques[0]+" "+ques[1] + " "+ques[2]
solution = eval(ques[3]);
// console.log(solution)

let options = [];
for(let i=0;i<4;i++){
    options.push(Math.floor(Math.random()*solution+(Math.random() * 20)))
}
toRep = Math.floor(Math.random()*(4))
options[toRep] = solution;
// console.log(options)
// console.log(toRep)

const optionz = document.querySelectorAll(".option");
// console.log(optionz.length)
for(let i=0;i<4;i++){
    optionz[i].innerText = options[i];
    optionz[i].onclick = function(){
        if(this.innerText==solution)
        {   jsScore.innerText = Number(jsScore.innerText)+ +1;
            getQuestion();
        }
        else
            gameOver();
    }};
}

function gameOver(){
    document.querySelector(".main").style.display = "none";
    document.querySelector("section").style.display = "none";
    document.querySelector("aside").innerHTML = "END | " + score.innerText + "<br><button id='resetGame'>Reset Game</button>";
    document.querySelector("#resetGame").onclick = function() {
        document.querySelector("aside").style.display = "none";
        document.querySelector(".main").style.display = "flex";
        document.querySelector("section").style.display = "flex";
        jsScore.innerText = 0;
        getQuestion();
    }
}
document.querySelector("#resetBtn").onclick = function () {
    jsScore.innerText = 0;
    getQuestion();
}

getQuestion();
