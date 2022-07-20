burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')
btn1 = document.querySelector('.btn1');
btn1.addEventListener('click',()=>{
window.open("http://127.0.0.1:5500/day1.html",'_blank');
})




burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})