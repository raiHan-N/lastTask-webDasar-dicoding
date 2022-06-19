document.addEventListener('DOMContentLoaded', function(){

// Humberger Menu
const menu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
 menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
 });

// Dropdown
 const dropdown = document.querySelector('ul .dropdown');
 const dropdownContent = document.querySelector('li .dropdown-content')
 dropdown.addEventListener('click', function(e){
   dropdownContent.classList.toggle('screen');
   e.preventDefault();
 });

 const menuName = document.querySelectorAll('main #content p a');
 menuName.forEach(function(m,i){
   m.addEventListener('click', function(){
      const card = document.createElement('div');
      document.body.appendChild(card);
      card.setAttribute('class', 'card-new');
      card.classList.add('display');
      const img = document.createElement("img");
      img.src = `assets/img/menu/${i}.jpg`;
      img.classList.toggle("img-width");
      card.appendChild(img);
      document.body.appendChild(card);
      
      
    });
 });
 






// let srcImg = () => { 
//    for(let i = 1; i < isiMenu.length+1; i++){
//       const img = document.createElement("img");
//       img.src = `assets/img/menu/${i}.jpg`;
//       document.body.appendChild(img);
//       img.classList.add("img-width");
//    };
// }

// Smoothscroll
// const navLink = document.querySelectorAll('.nav-link');
// navLink.forEach(function(i){
//    i.addEventListener('click', function(){
//       let tujuan = this.getAttribute("href");
//       let elemenTujuan = tujuan;
//       console.log(i);
//       document.body.stop().animate({scrollTop: elemenTujuan.offset().top - 50},1000, 'easeInOutSine', function() { 
//       });
      
//       e.preventDefault();
      
//    });
// });
});



