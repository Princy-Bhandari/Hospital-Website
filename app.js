let menubar = document.querySelector('#menu-bar')
let mynav = document.querySelector('.navbar')



menubar.onclick = ()=>{
    menubar.classList.toggle('fa-times')
    menubar.classList.toggle('active')
}


//Initialize Swiper

var swiper = new Swiper(".our-experts", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".btn.next",
    prevEl: ".btn.prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  }
});
