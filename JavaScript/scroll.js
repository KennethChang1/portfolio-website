function aboutScroll(){
    const aboutBtn = document.getElementById('about-btn');
    const about = document.getElementById('about'); 
    aboutBtn.addEventListener('click', ()=>{
        about.scrollIntoView({behavior: "smooth"});
    })
}

aboutScroll();