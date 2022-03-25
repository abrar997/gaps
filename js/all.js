

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});


window.onscroll = function () {

    navbar.classList.remove('active');

    if (window.scrollY > 200) {
        document.querySelector('.navbar').classList.add('active');
    } else {
        document.querySelector('.navbar').classList.remove('active');
    }

}