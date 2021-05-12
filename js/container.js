$(function(){
    const $indicators = $("#section>.button>li>a")

    const $prev = $('#section>.prev>.prev');
    const $next = $('#section>.prev>.next');

    const $container = $('#section>.container');

    const $play = $('#section>.play');

    let nowIdx = 0;

    $container.on("mouseenter", function(){
        $prev.stop().animate({
            left : 0
        });

        $next.stop().animate({
            right : 0
        });
    });

    $('#section').on("mouseleave", function(){
        $prev.stop().animate({
            left : -43
        });

        $next.stop().animate({
            right : -43
        });
    });


    $next.on('click', function(evt){
        evt.preventDefault();

        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        $container.stop().animate({
            left : -940*nowIdx
        });

        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

    $prev.on('click', function(evt){
        evt.preventDefault();

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=2;
        }

        $container.stop().animate({
            left : -940*nowIdx
        });

        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

        $indicators.on('click', function(evt){
            evt.preventDefault();

            nowIdx = $indicators.index(this);
    
            $container.stop().animate({
                left : -940*nowIdx
            });
    
            $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        });
    
        $play.on('click', function(evt){
            evt.preventDefault();
        });
});