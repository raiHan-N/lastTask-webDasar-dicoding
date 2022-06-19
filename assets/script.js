document.addEventListener('DOMContentLoaded', function(){
const menu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
 menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
 });

 const dropdown = document.querySelector('ul .dropdown');
 const dropdownContent = document.querySelector('li .dropdown-content')
 dropdown.addEventListener('click', function(e){
   dropdownContent.classList.toggle('screen');
   e.preventDefault();
 });

 
const isiMenu = document.querySelectorAll('.card p a');
let srcImg = () => { 
   for(let i = 1; i < isiMenu.length+1; i++){
      const img = document.createElement("img");
      img.src = `assets/img/menu/${i}.jpg`;
      // document.body.appendChild(img);
      img.classList.add("img-width");
   };
}

});



