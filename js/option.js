$(function(){
    const $selecName = $('.select>form[name=selecCompanyName]');
    const $name = $('.select>form>.select-name>ul>li>a');
    const $nameList = $('.select>form>.select-name>ul');
    const $selecDiv = $('.select>form[name=selecCompanyDiv]');
    const $divList = $('.select>form>.select-div>ul');
    const $div = $('.select>form>.select-div>ul>li>a');
    const $btn = $('.select>button');
    let nowIdx = 0;
    
    
    $selecName.on('click', function(){
        $nameList.toggle();
        $selecDiv.toggle();
        
    });

    $selecName.on('mouseleave', function(){
        $nameList.hide();
        $selecDiv.show();
    });

    //위에 글자 바뀌도록
    $name.on('click', function(evt){
        evt.preventDefault();
        const selectedName = $(this).text();
        $('#selName').val(selectedName);
        $('#selDiv').val('선택하세요');
    });

    //글자 바뀐대로 아래 선택하세요 내용 바뀌도록
    $name.on('click', function(evt){
        evt.preventDefault();
        nowIdx = $name.index(this);
        $divList.eq(nowIdx).children().hide();
    });

    $selecDiv.on('click', function(){
        $divList.eq(nowIdx).toggle();
        $divList.eq(nowIdx).children().show();

        $divList.css({
            height : $divList.eq(nowIdx).children().length * 30
        });
    });

    //아래 글자 선택하면 바뀌도록
    $div.on('click', function(evt){
        evt.preventDefault();
        const selectedName = $(this).text();
        $('#selDiv').val(selectedName);
    });

    //유효성 검사
    $btn.on('click', function(){
        if($('#selDiv').val()=='선택하세요'){
            alert('부서를 선택해주세요');
        }
    });

});