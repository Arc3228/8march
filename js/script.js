let menuBtn = document.querySelector(".burger");
let menu = document.querySelector("header");
menuBtn.addEventListener('click', function (){
  menu.classList.toggle('open');
})

window.addEventListener('keydown', (e) =>{
  if (e.key === 'Escape'){
    menu.classList.remove('open');
  }
})

document.getElementById('menu').addEventListener('click', (e) =>{
  
})

document.body.addEventListener('click', (e) =>{
  if (e._isClickWithInMenu = true) return;
  
})