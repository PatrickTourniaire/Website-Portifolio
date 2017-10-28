
$(function() {
    //Pos elemnts
    var picture = $("#back-line");
    
   //Animate
    if ($(window).scrollTop() + $(window).height() >= picture.position().top) {
        $("#back-solid").css({
            'animation': '.7s slide-pres-solid forwards'
        });

        $("#img").css({
            'animation': '.7s slide-pres-img forwards'
        });
    }
});