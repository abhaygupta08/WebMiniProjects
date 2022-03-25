window.document.title = "Home | ABHAY GUPTA";
const loginPanel = document.querySelector(".loginPanel form");
const signUpPanel = document.querySelector(".signUpPanel form");

document.querySelector("#signUpPanelBtn").onclick = function () {
    loginPanel.style.display = "none";
    signUpPanel.style.display = "flex";
    signUpPanel.style.flexDirection = "column";
    this.style.display = "none";
    document.querySelector("#loginPanelBtn").style.display = "block";
}
document.querySelector("#loginPanelBtn").onclick = function () {
    loginPanel.style.display = "flex";
    loginPanel.style.flexDirection = "column";
    signUpPanel.style.display = "none";
    this.style.display = "none";
    document.querySelector("#signUpPanelBtn").style.display = "block";
}

document.querySelector("#closeloginSignUp").onclick = function(){
    window.document.title = "Home | ABHAY GUPTA"
    document.querySelector(".container").style.display = "none";
    document.querySelector("#loginSignUpPopup").style.display = "block";
}

document.querySelector("#loginSignUpPopup").onclick = function(){
    window.document.title ="Client Login | ABHAY GUPTA";
    this.style.display = "none";
    document.querySelector(".container").style.display = "flex";
}