const expandBtn = document.querySelectorAll(".faq .icon");
expandBtn.forEach(element => {
    element.addEventListener('click',e =>{
        let faq = e.target.parentNode.parentNode;
        console.log(faq);
        if (element.querySelector("i").classList.contains("fa-arrow-circle-down")){
            element.querySelector("i").classList.remove("fa-arrow-circle-down")
            element.querySelector("i").classList.add("fa-arrow-circle-left")
            faq.style.height = "100px";
        }
        else{
            element.querySelector("i").classList.add("fa-arrow-circle-down")
            element.querySelector("i").classList.remove("fa-arrow-circle-left")
            faq.style.height = "clamp(35px,45px,70px)";
        }

    })
})
