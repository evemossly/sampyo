$(function(){
    const $storyTit = $("#middle>.slides>.story>li>a");
    const $slides = $('#middle>.slides>.story>li');

    const $btnPlay = $("#middle>.slides>.btn_play");
    const $btnStop = $("#middle>.slides>.btn_stop");

    let intervalKey = null;
    let nowIdx = 0;

    const autoPlay = function(){
        //버튼 활성화 표시
        $btnPlay.addClass('on').next().removeClass('on');

        intervalKey = setInterval(function(){
            //사라지는 슬라이드
            $slides.eq(nowIdx).stop().fadeOut();

            //인덱스 추출
            if(nowIdx==0){
                nowIdx=1;
            }else{
                nowIdx=0;
            }

            //나타나는 슬라이드
            $slides.eq(nowIdx).stop().fadeIn();
        },4000);
    };

    $storyTit.on('click', function(evt){
        evt.preventDefault();

        clearInterval(intervalKey);

        $btnPlay.removeClass('on');
        $btnStop.addClass('on');

        $(this).parent().stop().fadeOut();//사라지는 슬라이드
        $(this).parent().siblings().stop().fadeIn();//나타나는 슬라이드
    });


    //load : 이미지와 텍스트 등의 모든 내용이 화면에 출력된 직후 발생하는 이벤트
    $(window).on('load', function(){
        autoPlay();
    });


    //자동재생
    $btnPlay.on('click', function(evt){
        evt.preventDefault();

        autoPlay();
    });
    
    
    //재생멈춤
    $btnStop.on('click', function(evt){
        evt.preventDefault();

        $(this).addClass('on').prev().removeClass('on');
        clearInterval(intervalKey);
    });



});