const container = document.querySelector('.container');

const color = ['red','blue','green','yellow'];
let i=0
while (i< 168){
    const box = document.createElement('div');
    box.className = `box ${color[Math.floor(Math.random() * 4)]}`;
    container.innerHTML += box.outerHTML;
    i++;
}