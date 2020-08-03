var now = new Date(); //오늘 날짜 정보를 date 객체의 인스턴스 now 객체로 만듦
var firstDay = new Date("2018-05-22"); //처음 만난 날

var toNow = now.getTime();//오늘 날짜를 밀리초로 변경
var toFirst = firstDay.getTime();//처음 만난 날 밀리초로 변경

var passedTime = toNow-toFirst; //처음 만난 날과 오늘 날짜의 차이(밀리초)
var milly = 1000*60*60*24;
var passedDay = Math.round(passedTime/milly); //밀리초를 일로 변환 후 반올림 

document.querySelector('#accent').innerText=passedDay+"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst+days*(milly); //처음 만난 날
    var someday = new Date(future); //future값을 사용한 date 객체의 인스턴스 만들기
    var year = someday.getFullYear(); //년도를 가져와서 저장
    var month = someday.getMonth(); //월을 가져와서 저장
    var date = someday.getDate(); //일을 가져와서 저장

    document.querySelector("#date"+days).innerText= year+"년"+month+"월"+date+"일";
}