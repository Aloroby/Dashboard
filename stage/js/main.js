$(function() {
    $(".toggle-side").on("click", function() {
        $(".sidebar, .content-area").toggleClass("no-side")
    })
    $(".toggle").on("click", function() {
        $(this).next(".child-links").slideToggle();
        $(this).find(".fa-angle-right").toggleClass("down")
    })
})