// 조건식: 참 또는 거짓으로 판별할 수 있는 식 //
var num = 10;

console.log("num: " + num);

if(num % 2 == 0){
    console.log("num는 짝수입니다");
}

else{ //위의 조건식을 만족하지 않으면// 
    console.log("num는 홀수입니다");
}

var id = prompt("아이디를 입력하세요");

if(id=="green"){
    var pw = prompt("비밀번호를 입력하세요")
    if(pw = "green"){
        alert("로그인에 성공했습니다")
    }
    else{
        alert("패스워드를 잘못입력했습니다")
    }
}

else{
    alert("아이디를 잘못입력했습니다")
}