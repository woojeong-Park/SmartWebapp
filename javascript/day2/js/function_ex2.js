/* 함수를 만들때 필요한 것.
1. 함수 이름
2. 매개변수의 필요여부
    2-1.몇개가 필요한가?
3. 리턴타입의 필요여부
    3-1. 무엇을 리턴하는가 */


function gcd(num1, num2){
    var gcdNum = 1;
    var i;
    for(i=1;i<=num1;i++){
        if(num1 % i == 0 && num2 % i == 0){
            gcdNum = i;
        }
    }
    return gcdNum;
}

console.log("gcd(9,16):" + gcd(9,16));


function lcm(num1, num2){
    var lcmNum = 1;
    var i;
    for(i=num1;i<=num1*num2; i+=num1){
        if(i % num2 == 0){
            lcmNum = i;
            break;
        }
    }
    return lcmNum;
}

console.log("lcm(20,6):" + lcm(20,6));


function divisor(num1){
    var res= new Array();
    var i;
    for(i=1; i<=num1; i++){
        if(num1%i==0){
            res.push(i);
        }
    }
    return res;
}

var divnum = 12;
var res = divisor(12);

console.log(12 + "의 약수: " + res.join(" , "));


function divsum(res){
    var sum = 0;
    for(var i=0; i<res.length; i++){
        sum += res[i];
    }

    return sum;
}

console.log("약수의 합??:" + divsum(res));


function divsum2(res){
    var sum = 0;
    for(index in res){
        sum += res[index];
    }

    return sum;
}console.log("합??:" + divsum2(res));


//서로소인지 판별
function isCoprime(num1,num2){
    if(gcd(num1,num2) == 1)
        return true;
    else
        return false;
}

var coNum1 = 5, coNum2 = 9;
console.log(coNum1 + "와 " + coNum2 + "는 서로소인가?: " + isCoprime(coNum1,coNum2));