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
 });

// CardDisplay
 const menuName = document.querySelectorAll('main #content p a');
 menuName.forEach(function(m,i){
    m.addEventListener('click', function(){
      const card = document.querySelector(`main #pop-up${i}`);
      card.classList.toggle('display');
      alert('Tekan nama menu sekali lagi untuk menghilangkan gambar');
    });
 });
});



