var userid=document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userid.onChange=checkId;
pw1.onChange=checkPw;
pw2.onChange=comparePw;

function checkId(){
    if(userid.value.length<4||userid.value.length>15){
        alert("4~15 자리의 영문과 숫자 사용."); //오류 메세지
        userid.select();//재 입력 할 수 있도룍 userID필드 선택
    }   
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8글자 이상이어야 합니다.");
        pw1.value=" ";//비밀번호 필드를 지움
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("입력한 비밀번호와 일치 하지 않습니다.");
        pw2.value=" ";
        pw2.focus();
    }
}