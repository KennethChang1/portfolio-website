function nav(){
    const ham = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');
    const close = document.querySelector('.nav__cross');
    const nav = document.querySelector('.nav__btn');

    nav.addEventListener('click', ()=>{
        navLinks.classList.toggle('nav__links--active');
        close.classList.toggle('nav__cross--active');
        ham.classList.toggle('none');
    })
}

nav();