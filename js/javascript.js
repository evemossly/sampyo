$(function(){

    const $gnb = $("header>nav>.gnb>li");
    const $sub = $gnb.find(".sub");

    let nowIdx = 0;

    //메인메뉴에 포인터 진입
    $gnb.on("mouseenter", function(){
        nowIdx = $gnb.index(this);
        $sub.eq(nowIdx).fadeIn();
    });

    //메인메뉴에 포인터 떠남
    $gnb.on("mouseleave", function(){
        $sub.hide();
    });
    
});