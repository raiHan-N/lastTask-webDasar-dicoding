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


 let show = false;

 const menuName = document.querySelectorAll('main #content p a');
 menuName.forEach(function(m,i){
  if(!show){
    m.addEventListener('click', function(){
      const card = document.createElement('div');
      document.body.appendChild(card);
      card.setAttribute('class', 'card-new');
      card.classList.toggle('display');

      const img = document.createElement("img");
      img.src = `assets/img/menu/${i}.jpg`;
      img.classList.add("img-width");
      card.appendChild(img);
      document.body.appendChild(card);
      const textEl = document.createElement('h3');
      textEl.innerText = m.innerText;
      card.appendChild(textEl);
      show = 'true';
    });
  }
 });

    let btnBody = document.querySelectorAll('body .card-new');
    if(show){
      document.body.addEventListener('click', function(){
      removeChild(btnBody);
    })
    }
     

});



