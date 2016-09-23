$(document).ready(function () {
    $("#scrollButton").click(function () {
        $('html, body').animate({
                scrollTop: $(".container").offset().top
            },
            'slow');
    });
});