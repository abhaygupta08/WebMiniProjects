// 122 1  223 2  324 3
var state  = 0
document.querySelector("#one").classList.add("done")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
prev.disabled = true

next.addEventListener("click",function() {
    state++
    if (state == 0) {
        prev.disabled = true
    }
    else if(state==1){
        prev.disabled = false
        document.querySelector("#two").classList.add("done")
        document.querySelector("#oneToTwo").classList.add("doneConnector")

    }
    else if(state==2){
        document.querySelector("#three").classList.add("done")
        document.querySelector("#twoToThree").classList.add("doneConnector")
        next.disabled = false
    }
    else if (state == 3) {
        document.querySelector("#four").classList.add("done")
        document.querySelector("#threeToFour").classList.add("doneConnector")
        next.disabled =true
    }

})

prev.addEventListener("click", function () {
    // console.log(state)
    if(state==0 || state ==1){
        prev.disabled = true
    }
    if (state == 1) {
        document.querySelector("#two").classList.remove("done")
        document.querySelector("#oneToTwo").classList.remove("doneConnector")

    }
    else if (state == 2) {
        document.querySelector("#three").classList.remove("done")
        document.querySelector("#twoToThree").classList.remove("doneConnector")
        next.disabled = false
    }
    else if (state == 3) {
        document.querySelector("#four").classList.remove("done")
        document.querySelector("#threeToFour").classList.remove("doneConnector")
        next.disabled = false

    }
    state--

})