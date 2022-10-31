// subPage4.js
$(function(){
    var i = 0;

    $('.mainRoll .btns div').click(function(){
        i = $(this).index();
        $(this).addClass('clicked').siblings().removeClass('clicked');
        $('.mainRoll section .artgroup').animate({marginLeft: -100 * i + '%'}, 500);
    });
});