$(function () {
    $("#p1").hover(
        (function () {
            $(this).append($("<span style='color:red'> *** mensaje ***</span>"));
        }), (function () {
            $(this).find("span").last().remove();
        }));
});
