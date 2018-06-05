function locationReload(){
    //새로고침
    location.reload();

}

function locationReplace(){
    //뒤로가기가 없음
    location.replace("http://www.google.com");
}

function locationAssign(){
    //뒤로가기 있음
    location.assign("http://www.google.com")
}

function locationInformation(){

    var str = new String();
    location.hash = 'test';
    location.search = 'id=green';

    str = "href : " + location.href + "\n";
    str += "host : " + location.host + "\n";
    str += "hostname : " + location.hostname + "\n";
    str += "pathname : " + location.pathname + "\n";
    str += "protocol : " + location.protocol + "\n";
    str += "port : " + location.port + "\n";

    alert(str);

}