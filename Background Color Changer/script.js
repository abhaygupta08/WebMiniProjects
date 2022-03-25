const container = document.querySelector(".container");

document.querySelector("#bgColor").onchange = () => container.style.backgroundColor = document.querySelector("#bgColor").value;