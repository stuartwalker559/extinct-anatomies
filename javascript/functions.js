$(function () {
    $(".arrowDown").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 1200);
        return false;
    });
});