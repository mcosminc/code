const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
});

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
});


var icon = document.getElementById('moon');
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');

icon.onclick = function() {
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        moon.classList.remove('fa-moon')
        moon.classList.add('fa-sun')
    } else {
        moon.classList.remove('fa-sun')
        moon.classList.add('fa-moon')
    }
}