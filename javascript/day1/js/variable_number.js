var number1 = 1/0;
var number2 = -1/0;
var number3 = 10;
var number4 = 10;

console.log("number1: " + number1);
console.log("number2: " + number2);
console.log("number3: " + number3);

console.log("is Finite number 1 :"+isFinite(number1));
console.log("is Finite number 2 : "+isFinite(number2));
console.log("is Finite number 3 : "+isFinite(number3));

var number4 = 10;
console.log("is NaN number4: " + isNaN(number4));