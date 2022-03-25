const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};


const searchQuery = document.getElementById("searchQuery");
document.getElementById("searchBox").onsubmit = function(event){
    event.preventDefault();
    if(searchQuery.value.length==0){
        document.getElementById("alert").style.display = "block";
        return;
    }
    document.querySelector("section").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.querySelector(".popup").style.display = "flex";
    
    sleep(1000).then(() => {
        document.getElementById("countDown").innerText -= 1;
    });
    sleep(2000).then(() => {
        document.getElementById("countDown").innerText -= 1;
    });
    sleep(3000).then(() => {
        document.getElementById("countDown").innerText -= 1;
    });

    sleep(5000).then(() => {
        window.location = "https://www.google.com/search?q=" + searchQuery.value;
    });
    
    
    // sleep(1000);
    // document.getElementById("countDown").innerText -= 1;

    // sleep(1000);
    // document.getElementById("countDown").innerText -= 1;

}