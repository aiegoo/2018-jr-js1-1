<<<<<<< HEAD
var log = console.log;		//console.log() 메서드를 log 변수에 넣는다
var direction = null;			//direction 저장 변수 (- 휠을 위로 올림/+ 휠을 아래로 내림)
var pos = [];							//각각의 페이지가 body로부터 떨어진 y 값
var now = 0;							//현재 보고있는 페이지
/*
mousewheel(ff를제외한 모든 브라우저에서 실행됨) 이벤트와 
DOMMouseScroll(firefox에서 실행됨) 이벤트를 동시에 선언
*/
$(window).on('mousewheel DOMMouseScroll', function(e){
	e.preventDefault();	//휠의 기본 기능을 막음(이벤트의 기본 기능 제거)
	//direction = e.originalEvent.deltaY;	//휠의 방향을 direction변수에 저장
	if(e.originalEvent.detail) direction = e.originalEvent.detail;	//firefox 용
	else direction = e.originalEvent.deltaY;	//ff 를 제외한 브라우저

	//각각의 페이지의 body로 부터 떨어진 값을 pos 배열 변수에 저장
	$(".page").each(function(i){
		pos[i] = $(this).offset().top;	//offset(): 부모로 부터의 거리값
	});
	
	now = pos.length - 1;
	//for(var i=0; i<pos.length; i++) {
	for(var i in pos) {
		//log("e.pageY : " + e.pageY);
		//log("pos["+i+"] : " + pos[i]);
		if(e.pageY < pos[i]) { //현재 페이지를 찾은 공식 index -1이 현재 scroll 하는 페이지이고 휠의 방향에 따라 다음 페이로 넘겨 줌.
			now = i - 1;
			break;
		}
	}
	log(now, direction);
	//휠의 방향에 따른 애니메이션 분기
	if(direction < 0) {
		if(now > 0) now--;
		pageAni();
	}
	else {
		if(now < pos.length - 1) now++;
		pageAni();
	}
});

$("#navs > a").click(function(){
	now = $(this).index();
	$(".page").each(function(i){
		pos[i] = $(this).offset().top;	//offset(): 부모로 부터의 거리값
	});
	pageAni();
});

function pageAni() {
	$("html, body").stop().animate({"scrollTop":pos[now]+"px"}, 500, function(){
		$("#navs > a").removeClass("w3-light-grey");
		$("#navs > a").eq(now).addClass("w3-light-grey");
	});
}
=======
var log = console.log;
var direction = null;
var pos = [];
var now = 0;
$(window).on('mousewheel DOMMouseScroll', function(e){
	e.preventDefault();
	direction = e.originalEvent.deltaY;
	$(".box").each(function(i){
		pos[i] = $(this).offset().top;
	});
	
	if(direction > 0 ) {
		//$("html, body").stop().animate({"scrollTop":pos[2]+"px"}, 500);
	}
	else {
		//$("html, body").stop().animate({"scrollTop":pos[1]+"px"}, 500);
	}
});
>>>>>>> origin/master
