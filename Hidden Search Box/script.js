const searchBtn = document.querySelector("section div")
// console.log(searchBtn);
searchBtn.addEventListener('click',toggleSearchBar)
const searchQuery = document.querySelector("#searchQuery");

function toggleSearchBar(){
    document.querySelector("section").style.width = "300px";
    document.querySelector("section label").style.display = "block";
    searchBtn.style.width = "20%";
    searchBtn.style.borderLeft = "1px solid #bfbfbf";
    searchBtn.removeEventListener('click', toggleSearchBar)
    searchBtn.addEventListener('click',function(){
        if(searchQuery.value.length){
            window.location.href = "https://google.com/search?q="+searchQuery.value;
        }
    })
}