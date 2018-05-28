//소수인지 판별하는예제//

var num = 197;
var i = 1;
var cnt = 0;

/* for(i=1;i<num;i++){
    if(num % i == 0){
    console.log("소수아님");
    break;
    }
}
if(i==num)
console.log("소수"); */

console.log("num: " + num)
for(i=1; i<=num; i++){
    if(num % i == 0){
        cnt++;
    }
}

if(cnt == 2 )
    console.log("소수");
else
    console.log("합성수");



for(i=2; i<num; i++){
    if(num % i == 0)
    break;
}
if(i==num)
    console.log("소수")
else
    console.log("합성수")


var arr = [100,200,300];
var sum = 0;
for(i in arr) {
    sum += arr[i];
}
console.log(arr.join("+") + "=" + sum);

var arr2 = {A:10, B:20, C:30};
for(i in arr2){
    console.log("key:" + i + ", value" + arr2[i]);
}

inner:
for(i=1;i<10;i++){
    if(i==3)
    break inner;
}
console.log(i);

var j;
outter1:
for(i=1; i<10; i++){
    inner1:
    for(j=1;j=4;j++){
        if(j==2)
        console.log("i : " + i + ", j : "+ j);
        break inner1;
    }

    if(i==5){
        console.log("i : " + i + ", j : "+ j);
        break outter1;
    }
}

var num1 = 12;
var num2 = 8;
var gcd = 1;

for(i=1;i<=num1;i++){
    if(num1 % i == 0 && num2 % i == 0){
        gcd = i;
    }
}

console.log("num1 : " + num1 + " num2 : " + num2)
console.log("num1과 num2의 최대공약수 : " + gcd)


var nu1 = 15;
var nu2 = 10;
var lcm;

 /* for(i=1;i<nu1*nu2; i++){
    if( i % nu1 == 0 && i % nu2 == 0){
        lcm = i;
        break;
    }

} */

for(i=nu1;i<=nu1*nu2; i+=nu1){
    if(i % nu2 == 0){
        lcm = i;
        break;
    }
}


console.log("num1 : " + nu1 + " num2 : " + nu2)
console.log("num1과 num2의 최소공배수 : " + lcm)


cnt = prompt("트리의 세로를 입력하세요");
cnt=1*cnt;
var tmp = "";

for(i=1;i<=cnt;i++){
    for(j=1;j<=cnt-i;j++){
        tmp += " ";
    }
    for(j=1;j<=2*i-1;j++){
        tmp += "*";
    }
    console.log(tmp);
    tmp="";
}