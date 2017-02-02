console.log($);

$(document).ready(function() {

    $(".about-me-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 'slow');
    });

    $(".education-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".education").offset().top
        }, 'slow');
    });

    $(".skills-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 'slow');
    });

    $(".work-experience-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".work-experience").offset().top
        }, 'slow');
    });

    $(".projects-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 'slow');
    });

    $(".contact-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 'slow');
    });

    $(".my-butt").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 'slow');

    });

});
