$(function(){$(".toggle-side").on("click",function(){$(".sidebar, .content-area").toggleClass("no-side")}),$(".toggle").on("click",function(){$(this).next(".child-links").slideToggle(),$(this).find(".fa-angle-right").toggleClass("down")}),$(".toggle-screen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?openFullscreen():closeFullscreen()}),$(".toggle-box").on("click",function(){$(this).find("i").toggleClass("fa-spin"),$(this).parent().toggleClass("hide-box")});var e=[];$(".color-box li").each(function(){e.push($(this).data("color"))}),$(".color-box li").on("click",function(){$("body").removeClass(e.join(" ")).addClass($(this).data("color")),$(this).addClass("active").siblings().removeClass("active")});var l=[];$(".fonts-box select option").each(function(){l.push($(this).val())}),$(".fonts-box select").on("change",function(){$("body").removeClass(l.join(" ")).addClass($(this).find("option:selected").val())})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}