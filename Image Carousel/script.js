const imgs = document.querySelector(".slidercontainer");
const img = document.querySelectorAll(".imgSliderimg");
const dot = document.querySelectorAll(".dotIndicator");
let index =0;
function run() {
    index++;
    if(index>img.length-1){
        index = 0;
    }
    // console.log("translateX(-" + index * 50 + "w)")
    imgs.style.transform = "translateX(-"+index*100+"%)";
    
    for (let i = 0; i < dot.length; i++) {
        if(i==index){
            dot[index].innerText = "⚪";
        }
        else{
            dot[i].innerText = "⚫";
        }
    }

    setTimeout(() => {
        run();
    }, 2000);
}
run();


for(let i=0;i<dot.length;i++){
    dot[i].style.left = 40+i*5+"%";
}