/*global $, jQuery, console, alert, prompt */

$(document).ready(function () {
    "use strict";
    
    // Nice Scroll
    $("html").niceScroll();
    
    // Carousel Slide
    $('.carousel').carousel({
        interval: 5000
    });
    
    // Show Color Option Div When Click On The Gear
    $('.gear-check').click(function () {
        $('.option-color').toggle(1000);
    });
    
    // Change Theme Color On Click
    var colorLi = $('.option-color ul li'),
        scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#e500ff").end()
        .eq(2).css("backgroundColor", "#00a9ff").end()
        .eq(3).css("backgroundColor", "#ffd800");
     
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
    });
    
    // Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    
    // Task First Child In Learn 52 => Bootstrap
    $('.faq-questions .panel-heading').click(function () {
        $('.faq-questions span').css("display", "none");
    });
});

//Loading Scressn
$(window).load(function () {
    "use strict";
    $('.loading-overlay .spinner').fadeOut(1000, function () {
        $('body').css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});
