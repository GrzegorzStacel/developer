$(document).ready(function () {

    $("#lightgallery1, #lightgallery2, #lightgallery3, #lightgallery4, #lightgallery5").lightGallery();

    hamburgerMenu();
})

function hamburgerMenu() {
    $("#hamburgermenu").on('click', function () {
        $(this).find(".bar").toggleClass("active");
        if ($("#hamburgermenu .bar:first").hasClass("active")){
            $("#topBar").addClass("ON");
        } else {
            $("#topBar").removeClass("ON")
        }
    })
}