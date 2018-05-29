/* var num = prompt("점수를 입력하세요")
num = parseFloat(num);

alert(getGrade(num));

function getGrade(num){
    if(num<=100 && num>=90)
        return "A";
    else if (num<90 && num>=80)
        return "B";
    else if (num<80 && num>=70)
        return "C";
    else if (num<70 && num>=60)
        return "D";
    else
        return "Fail";
} */


/* function gGrade(num){
    if(num>100){
        return "FAIL";
    }
    else if(num<=100 && num>=90){
        return "A";
    }else if (num>=80){
        return "B";
    }else if (num>=70){
        return "C";
    }else if (num>=60){
        return "D";
    }else if (num >=0){
        return "F";
    }else
        return "FAIL";
}

var grade = 100;
var resultGrade = gGrade(grade);
console.log(grade + ":" + resultGrade); */

function randomInt(min,max){
    if(min>max){
        var tmp = min;
        min = max;
        max = tmp;
    }
    return parseInt(Math.random()* (max-min+1) + min);
}
for(var i = 0; i<6; i++)
console.log(randomInt(1,45));


function getLotto(){
    var tmp; //랜덤생성된 번호 저장
    var i,j;
    var res = new Array(); //로또번호 저장할 배열

    while(res.length<6){
        tmp = randomInt(1,45);
        i = 0;
        while(i<res.length){
            if(tmp == res[i])
                break;
            i++;
        }
        if(i==res.length)
            res.push(tmp);
    }
    return res;
}

console.log(getLotto().join(","));

/* function getLotto(){
    var a = new Array(6);
    var i;
    var b = 0;

    for(i=0; i<6; i++){
        a = parseInt(Math.random()*45) + 1;
    }
    return a;

}
console.log(getLotto()); */