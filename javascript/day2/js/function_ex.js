var num1 = prompt("첫번째숫자를 입력하세요")
num1 = parseFloat(num1);
var num2 = prompt("두번째숫자를 입력하세요")
num2 = parseFloat(num2);
var op = prompt("연산자를 입력하세요")

var res = "calculate1:" + num1 + op + num2 + "=" + calculate1(num1,num2,op) + "\n" ;

res += "calculate2:" + num1 + op + num2 + "=" + calculate2(num1,num2,op) + "\n" ;

res += "calculate3:" + num1 + op + num2 + "=" + calculate3(num1,num2,op) + "\n" ;

alert(res);


function calculate1(num1, num2, op){
    switch(op){
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        case '%' :
            return num1 % num2;
        default :
            return 0;
    }
}


function calculate2(num1, num2, op){
    switch(op){
        case '+' :
            return add(num1,num2);
        case '-' :
            return sub(num1,num2);
        case '*' :
            return mul(num1,num2);
        case '/' :
            return div(num1,num2);
        case '%' :
            return mod(num1,num2);
        default :
            return 0;
    }
    function add(num1,num2){return num1 + num2;}
    function sub(num1,num2){return num1 - num2;}
    function mul(num1,num2){return num1 * num2;}
    function div(num1,num2){return num1 / num2;}
    function mod(num1,num2){return num1 % num2;}
}



function calculate3(num1, num2, op){
    switch(op){
        case '+' :
            return add(num1,num2);
        case '-' :
            return sub(num1,num2);
        case '*' :
            return mul(num1,num2);
        case '/' :
            return div(num1,num2);
        case '%' :
            return mod(num1,num2);
        default :
            return 0;
    }
   
}

function add(num1,num2){return num1 + num2;}
function sub(num1,num2){return num1 - num2;}
function mul(num1,num2){return num1 * num2;}
function div(num1,num2){return num1 / num2;}
function mod(num1,num2){return num1 % num2;}