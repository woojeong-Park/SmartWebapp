function printObj(obj) {
    console.log("객체정보확인")
for(var items in obj){
    console.log("obj[" + items +"] : " + obj[items]);
}

}