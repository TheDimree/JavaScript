burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');

rightNav = document.querySelector('.rightNav');

burger.addActionListener("click", () => {
    navbar.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});