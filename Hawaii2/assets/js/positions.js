$(function() {
    
    
    // Elements
    var order = $('.order');
    var footer = $('.footer');
    
    var windowHeight = $(window).height();

    // Get bottom pos
    var orderBottom = windowHeight * 3 + order.outerHeight(false);

    // Set pos
    footer.css({
        'top': orderBottom,
        'display': 'block'
    });
});

$(window).resize(function() {
    // Elements
    var order = $('.order');
    var footer = $('.footer');
    
    var windowHeight = $(window).height();

    // Get bottom pos
    var orderBottom = windowHeight * 3 + order.outerHeight(false);

    // Set pos
    footer.css('top', orderBottom);
});

$(window).trigger('resize');