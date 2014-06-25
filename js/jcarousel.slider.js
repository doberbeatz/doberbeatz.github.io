$(document).ready(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        animation: 'slow'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
