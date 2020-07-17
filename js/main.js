$(document).ready(function () {

    $("#lightgallery").lightGallery();

    navigation();
})

function navigation() {

    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    // var exit = document.getElementById('exit');

    menu.addEventListener('click', function (e) {
        nav.classList.toggle('hide-mobile');
        console.log('show');
        e.preventDefault();
    });

    // exit.addEventListener('click', function (e) {
    //     nav.classList.toggle('hide-mobile');
    //     console.log('hide');
    //     e.preventDefault();
    // });

}