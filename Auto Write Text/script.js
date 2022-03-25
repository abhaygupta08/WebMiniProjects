
// var texts = 
// [["Ahh Shit ! Here we go first.",15],
// ["Ahh Shit ! Here we go again.", 5]
// ]

// console.log(texts)

// const myAutoWriteText = document.querySelector(".myAutoWriteText");

// let m = 0
// let zzz = setInterval(() => {
// if(m>texts[0][0].length-2){
//     clearInterval(zzz);
// }
// myAutoWriteText.innerHTML += String(texts[0][0][m]);
// m++
// }, 200);

// for(let i =0;i<1000;i++);
// let n = 0
// let zzzx = setInterval(() => {
//     if (n > texts[1][0].length - 2) {
//         clearInterval(zzzx);
//     }
//     myAutoWriteText.innerHTML += String(texts[1][0][n]);
//     n++
// }, 200);

text = "Ah shit f gffbfbfdb fbfd";
let index = 0;
function writeText() {
    const myAutoWriteText = document.querySelector(".myAutoWriteText");
    myAutoWriteText.innerHTML = text.slice(0,index);
    index++;
    if(index > text.length - 1){
        index = 0;
    }
}
setInterval(writeText,200);