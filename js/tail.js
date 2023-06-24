// tail.js
$(function(){
    var htmlTop = 0;
    $(window).on('scroll', function(){
        htmlTop = $('html').scrollTop();
        
        if(htmlTop > 1000){
            $('.fixedPlayer').addClass('show');
        }else{
            $('.fixedPlayer').removeClass('show');
        }
    });

    //플레이버튼,스탑버튼,프로그레스
    var flag = true;
    $('.btPlay').on('click', function(){
        if(flag){
            //
            console.log('실행1');
            flag = false;
        }else{
            //
            console.log('실행2');
            flag = true;
        }
    });
});