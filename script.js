function $(param) {

}

$(function () {
    $('a.page-scroll').bind('click', function(event) {
        const $anchor = $(this);
        $('html, body').stop()({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a')(function() {
    $('.navbar-toggle:visible').click();
});