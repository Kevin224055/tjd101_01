$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.fa-circle-up').fadeIn();
        } else {
            $('.fa-circle-up').fadeOut();
        }
    });

    $('.fa-circle-up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
  