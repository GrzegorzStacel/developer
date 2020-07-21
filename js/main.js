$(document).ready(function () {

    $("#lightgallery1, #lightgallery2, #lightgallery3, #lightgallery4, #lightgallery5").lightGallery();

    navigation();
})

function navigation() {

    var menuSymbol = document.getElementById('menuSymbol');
    var nav = document.getElementById('nav');
    // var exit = document.getElementById('exit');

    menuSymbol.addEventListener('click', function (e) {
        nav.classList.toggle('ON');
        console.log('show');
        e.preventDefault();
    });

    // exit.addEventListener('click', function (e) {
    //     nav.classList.toggle('hide-mobile');
    //     console.log('hide');
    //     e.preventDefault();
    // });

}