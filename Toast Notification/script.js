const text = "my new toast notification";
document.getElementById("toastNotification").addEventListener('click', function () {
    // console.log("OK")
    let divv = document.createElement('div');
    divv.classList.add('popupBox');
    divv.textContent = text;
    document.querySelector(".popuopContainer").prepend(divv);
    let set = setInterval(() => {
        document.querySelector('.popupBox').remove();
        clearInterval(set);
    }, 5000);
    
    // console.log(divv);
})