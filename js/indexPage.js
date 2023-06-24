// indexPage.js
$(function(){
    var i = 0;

    $('.mainSection .btns div').click(function(){
        i = $(this).index();
        $(this).addClass('clicked').siblings().removeClass('clicked');
        $('.mainSection .mainSlide section').animate({marginLeft: -100 * i + '%'}, 500);
    });

    $('.djPick .texts section article:last').prependTo('.djPick .texts section .artgroup');
    $('.djPick .texts header').click(djPick);

    function djPick(){
        $('.djPick .texts section article').removeClass('opacity');
        $('.djPick .texts section article').eq(4).addClass('opacity')
        $('.djPick .texts section .artgroup').stop().animate({top: '-66.66%'}, function(){
            $('.djPick .texts section article:first').appendTo('.djPick .texts section .artgroup');
            $('.djPick .texts section .artgroup').css({top: '-33.33%'});
        });
    }
}); 