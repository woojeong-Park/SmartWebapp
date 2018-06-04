function Student(name,grade,clas,number){
    this.name = name;
    this.grade = grade;
    this.class = clas;
    this.number = number;
    this.toString = function(){
        return "이름: " + this.name + ", 학년: " + this.grade + ", 반: " + this.class + ", 번호: " + this.number;
    };

}

/* var std1 = new Student();
std1.name = "홍길동";
std1.grade = 1;
std1.class = 1;
std1.number = 10;
console.log(std1.toString());

var std2 = new Student();
std2.name = "임꺽정";
std2.grade = 1;
std2.cl0ass = 1;
std2.number = 10;
console.log(std2.toString()); */

var std1 = new Student('홍길동',1,1,12);
console.log(std1.toString());
var std2 = new Student('임꺽정',1,1,1);
console.log(std2.toString());

std2.sayHello = function(){
    return "hello";
}

console.log(std2.sayHello());

Student.prototype.sayHi = function(){
    return "Hi";
}
console.log(std2.sayHi());

var ts = std2.toString();
var subts = ts.split(', ');
// ts == subts.join >> console.log(subts.join(','));

var res = new Array();
for(var i in subts){
    var tmp = subts[i].split(": ");
    res.push(tmp[0]);

}

console.log(res.join(' and '));

//subts: '이름: 임꺽정' '학년: 1' '반: 1' '번호: 1'
//i: 0
//res: '이름'
//tmp: '학년' '1'

/* var res2 = new Array();
for(var i in subts){
    var tmp = subts[i].split(": ");
    res2.push(tmp[1]);

}

console.log(res2.join(' and ')); */

var res2 = new Array();
res2.push(std2.name);
res2.push(std2.grade);
res2.push(std2.class);
res2.push(std2.number);
console.log(res2.join(' and '));