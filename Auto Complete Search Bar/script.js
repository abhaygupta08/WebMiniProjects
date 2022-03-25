let suggestions = "you can place Font Awesome icons just about anywhere with the".split(" ")
// console.log(suggestions);

const inputBar = document.querySelector(".inputBar")
const input = inputBar.querySelector("input");
const button = inputBar.querySelector("button[type='submit']")
const autoCompleteBox = document.querySelector(".autoCompleteBox")

input.onkeyup = (e) =>{
        let userData = e.target.value;
        let emptyArr = [];
        if(userData){
            emptyArr = suggestions.filter((data) => {
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
            })
            // console.log(emptyArr)
            emptyArr = emptyArr.map((data)=>{
                return data = "<li>"+data+"</li>";
            })
            // console.log(emptyArr);
            document.querySelector("#searchBarForm").classList.add("active");
        }
        else{
            document.querySelector("#searchBarForm").classList.remove("active");
        }
        showSuggestions(emptyArr);
    var allList = document.querySelectorAll(".autoCompleteBox li");
    // console.log(allList);
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }


}
function select(e) {
    input.value = e.textContent;    
}

function showSuggestions(list) {
    let listData;
    if(list.length){
        listData = list.join("");
    }
    else{
        listData = "<li>"+input.value+"</li>";

    }
    autoCompleteBox.innerHTML = listData;
}

// console.log(document.querySelector("#searchBarForm"));
document.querySelector("#searchBarForm").onsubmit = (event) => {
    
    event.preventDefault()
    alert("NOT SUBMITTED")
}