jQuery( function($){

    if (window.matchMedia( "(min-width: 1200px)" ).matches) {
        $('.menu-item').hover(function(){
            $(this).children(".sub-menu").stop().slideToggle();
            });    
        } else {
            $(".menu-item").click(function(){
                $(this).children(".sub-menu").slideToggle();
            });
        }
    });

        