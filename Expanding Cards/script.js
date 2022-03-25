const imgs = document.querySelectorAll(".imgs");
const imgCaption = ["HEADER 1", "HEADER 2", "HEADER 3", "HEADER 4"]
const imgFiles = ["img1.jpg","img1.png","img2.jpg","img2.png"]
// console.log(imgs)
for(let i=0;i<imgs.length;i++){
    imgs[i].style.background = "url(" + imgFiles[i] + ")"
    imgs[i].style.backgroundRepeat = "no-repeat"
    imgs[i].style.backgroundSize = "cover"

    imgs[i].onclick = function(){
        if(!(imgs[i].classList.contains("active")))
{       imgs[i].classList.toggle("active");

        setTimeout(() => {
            imgs[i].innerHTML = "<h2>" + imgCaption[i] + "</h2>"
        }, 300);
        for(let j=0;j<imgs.length;j++){
            if(imgs[j].classList.contains("active") && i!=j){
                imgs[j].classList.remove("active")
                imgs[j].innerHTML = "";

    }
                    }
        }
    }
}

document.querySelector("#automate").addEventListener("click",function(){
    var i = 0
    var automateB = setInterval(function () {
        imgs[i].click()
        i++
        if (i == 4) {
            i = 0
        }
    }, 2000)
})
