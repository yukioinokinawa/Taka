jQuery( function( $ ){
    $(".js-hamburger").on("click", function(){
        $(this).toggleclass("is-open");
        $(".l-nav").toggleclass("is-open");
    });
});