const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('.home-page');
    const story1Menu = document.querySelector('.progress-page');
    const story2Menu = document.querySelector('.copingSkills-page');    
    const tdihMenu = document.querySelector('.betterMe-page');  
    const tdihMenu = document.querySelector('.freeTime-page'); 
    const tdihMenu = document.querySelector('.future-page'); 
    let scollPos = windor.scrollY;

    //adds the highlight class to my menu items
  //  if(window.innerWidth > 960 )
}
