// Smooth scroll on anchor clicked
$(document).on('click', 'a[href^="#"]:not(.nav-link)', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// On change tab, redraw nicescroll
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $(".nicescroll").getNiceScroll().resize();
});

$(document).ready(function(){
    // Load nicescroll
    $(".nicescroll").niceScroll({ 
        autohidemode: false,
        background: "#eeeeee",
        mousescrollstep: 10
    });
});