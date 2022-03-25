const inputs = document.querySelectorAll(".hoverInput");
// console.log(inputs);
inputs.forEach(element => {
    element.addEventListener('focusin',(e) =>{
        e.target.labels[0].querySelector("div").style.top = "-30px";
    })
    element.addEventListener('focusout', (e) => {
        if(!e.target.value){
            e.target.labels[0].querySelector("div").style.top = "0px";
    }
})
});