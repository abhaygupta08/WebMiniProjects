const imgContainer = document.querySelector(".imgContainer");

imgContainer.addEventListener("mouseover",()=>{
    document.querySelector(".imgDescription").style.bottom = "0%";
    document.querySelector(".imgCard").style.top = "-100%";
    
})
imgContainer.addEventListener("mouseout", () => {
    document.querySelector(".imgDescription").style.bottom = "-100%";
    document.querySelector(".imgCard").style.top = "0%";

})