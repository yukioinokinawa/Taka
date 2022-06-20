jQuery(function( $ ){
    $(".js-hamburger").on("click", function(){
        $(this).toggleclass("is-open");
        $(".p-gmenu").toggleclass("is-open");
        $("body").toggleclass("is-open");
    });
});