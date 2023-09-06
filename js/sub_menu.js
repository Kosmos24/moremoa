$(function () {
    /*#gnb>li에 마우스를 올리면 그 li 안에 있는 .sub가 슬라이되서 내려오고, #gnb>li에서 마우스가 나가면 내려와있던 .sub가 슬라이드되서 올라간다.*/
    $("#gnb>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
        /*stop부분을 넣지 않으면 슬라이드다운되서 내려오는 중에 마우스가 나가면 sub 혼자 움직이는 현상이 발생하므로, 마우스가 도중에 나갈때는 행동이 취소될수 있게 한다.*/
    });
    $("#gnb>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });
});/*이부분은 기본구조 끝부분이므로, 뒤에 코드를 추가할때 이 안쪽으로 넣는다.*/
