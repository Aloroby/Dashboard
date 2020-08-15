$(function() {
    // Open And Close SideBar
    $(".toggle-side").on("click", function() {
        $(".sidebar, .content-area").toggleClass("no-side")
    });
    // Open And Close Side Bar Links
    $(".toggle").on("click", function() {
        $(this).next(".child-links").slideToggle();
        $(this).find(".fa-angle-right").toggleClass("down")
    });
    // Full Screen Option
    $(".toggle-screen").on("click", function() {
        $(this).toggleClass("full-screen");
        if ($(this).hasClass("full-screen")) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    });
    // Open and Close Settings Box
    $(".toggle-box").on("click", function() {
        $(this).find("i").toggleClass("fa-spin");
        $(this).parent().toggleClass("hide-box");
    });
    // Get Classes Of Colors to Remove Him From Tag Body
    var themesColor = []
    $(".color-box li").each(function() {
            themesColor.push($(this).data("color"))
        })
        // Toggle Color Classes on Body To Change Pages Color
    $(".color-box li").on("click", function() {
            $("body").removeClass(themesColor.join(" ")).addClass($(this).data("color"))
            $(this).addClass("active").siblings().removeClass("active")
        })
        // Get Classes Of Fonts to Remove Him From Tag Body
    var fontClasses = []
    $(".fonts-box select option").each(function() {
            fontClasses.push($(this).val())
        })
        // Change Font Of Body
    $(".fonts-box select").on("change", function() {
        $("body").removeClass(fontClasses.join(" ")).addClass($(this).find("option:selected").val())
    })
});
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}