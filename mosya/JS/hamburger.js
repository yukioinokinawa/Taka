jQuery( function( $ ){
    $(".js-hamburger").on("click", function(){
        $(this).toggleClass("is-open");
        $(".l-nav__body").toggleClass("is-open");
    });
});