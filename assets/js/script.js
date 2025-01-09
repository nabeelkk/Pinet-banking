window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar');
    let navcont = document.getElementById('navbarSupportedContent');

    navbar.classList.toggle('sticky',this.window.scrollY > 30);
})

