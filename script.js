const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

const botlogin = document.querySelector('.bot-login');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

botlogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});