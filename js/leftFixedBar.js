// leftFixedBar.js
$(function(){
    var ddTitle = '';

    $('.category .list dt').click(function(){
        ddTitle = $(this).siblings().css('display');
        $(this).siblings().slideToggle(250);
    });

    //SHOW&HIDE
    var flag = true;
    $('.showBtn').on('click', showNav);
    function showNav(){
        if(flag){
            $('.fixedBar').animate({left: 0});
            flag = false;
        }else{
            $('.fixedBar').animate({left: -270});
            flag = true;
        }
    }
});