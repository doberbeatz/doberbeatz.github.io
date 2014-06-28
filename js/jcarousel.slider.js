$(document).ready(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        animation: 'slow',
        wrap: 'both'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
