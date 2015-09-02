$(function () {
    $(".arrowDown").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 1200);
        return false;
    });
});

$('.gridImage').bind('contextmenu', function(e){

alert("We're sorry. Right-Click is not available");

return false;

});