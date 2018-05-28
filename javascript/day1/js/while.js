
/* 초기화;
while(조건식){
    실행문;
    증감연산;
} */

/* for(초기화;조건식;증감연산) */


while(i<=10){
    console.log("i: " + i);
    i++;
}

 /* for(i=1; i<=10; i++){
    console.log("i: " + i);
} */


/* for(i = 1; i<=10; i++){
    console.log(a += i);
} */

var i = 1;
var sum = 0;

while(i<=10){
    console.log("i: " + i);
    sum += i;
    i++;
}
console.log("sum: "+ sum);

i = 11;
sum = 0;
do{
    console.log("i: " + i);
    sum+=i;
    i++;
}while(i<10);
console.log("sum: " + sum);