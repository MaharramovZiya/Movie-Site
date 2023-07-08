const barsIcon = document.querySelector('.bars-icon');
const firstCont = document.querySelector('.firstCont');
const main = document.querySelector('main');
const navLinks = document.querySelector('.navLinks');
const navContact = document.querySelector('.nav-contact');
barsIcon.addEventListener('click',function(e){
    const div = document.createElement('div');
    div.setAttribute('class','openMenu');
    div.appendChild(navLinks);
    div.appendChild(navContact);
    firstCont.appendChild(div);  
    console.log(div);  
    
});



