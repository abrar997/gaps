// window.onscroll = function(){

//     headernav.classList.remove('active');

//     if(window.scrollY > 300){
//         document.querySelector('.headertop').classList.add('active');
//     }else{
//         document.querySelector('.headertop').classList.remove('active');
//     }

// }


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});