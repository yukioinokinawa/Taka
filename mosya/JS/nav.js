jQuery( function($){
    $(".menu-item").hover(function(){
        $(this).children(".sub-menu").stop().slideToggle();
    });

    });

        