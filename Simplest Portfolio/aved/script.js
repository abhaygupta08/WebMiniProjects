navigation = document.querySelector("#slash");
setInterval(() => {
    navigation.style.width = "8px";
    setTimeout(() => {
        navigation.style.width = "0px";

    }, 1000);
}, 2000);
const navigator = document.querySelector("#slash2")
setInterval(() => {
    navigator.style.width = "8px";
    setTimeout(() => {
        navigator.style.width = "0px";

    }, 1000);
}, 2000);


const root = document.querySelector("*");
const anchor = document.querySelectorAll("a");
const boxes = document.querySelectorAll(".box-area li");

function ToDarkMode() {
    root.style.backgroundColor = "black";
    root.style.color = "white";
    anchor.forEach(elem => {
        elem.style.color = "white";
    })
    document.querySelector("footer a").style.borderBottom = "1px solid lightgrey";
    boxes.forEach(box => {
        box.style.backgroundColor = "rgba(255,255,255,0.10)";
    })
}

function ToLightMode() {
    root.style.backgroundColor = "white";
    root.style.color = "black";
    anchor.forEach(elem => {
        elem.style.color = "black";
    })
    document.querySelector("footer a").style.borderBottom = "1px solid #1f1f1f";
    boxes.forEach(box => {
        box.style.backgroundColor = "rgba(0,0,0,0.15)";
    })
}

document.querySelector("header i").click();

function DarkModeToggle(e) {
    if (e.querySelector("i").classList.contains('fa-moon')) {
        ToDarkMode();
        document.querySelector("header .icon i").classList.remove("fa-moon");
        document.querySelector("header .icon i").classList.add("fa-sun");
    } else {
        ToLightMode();
        document.querySelector("header .icon i").classList.remove("fa-sun");
        document.querySelector("header .icon i").classList.add("fa-moon");
    }
}

document.querySelector("#contact-Form > .icon").addEventListener('click', () => {
    window.document.title = "Portfolio | Abhay Gupta";
    document.querySelector("#contact-Form").classList.remove("show");
    document.querySelector("#contact-Form > .icon").classList.remove("show");

})
document.querySelector("#form-toggle").addEventListener('click', () => {
    window.document.title = "Contact | Abhay Gupta";
    document.querySelector("#contact-Form").classList.add("show");
    document.querySelector("#contact-Form > .icon").classList.add("show");
})
window.document.title = "Portfolio | Abhay Gupta";