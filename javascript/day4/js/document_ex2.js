
function btn(tag, value){
    if(!isCreated){
        //tag를 생성
    var e = document.createElement(tag);
    //태그에 속성을 추가 (id = text)
    e.setAttribute('id','text')
    //텍스트노드 생성하고
    var t = document.createTextNode(value);
    //생성된 텍스트노드를 태그에 붙임
    e.appendChild(t);
    //태그를 바디에 붙임
    document.body.appendChild(e);
    //생성되었는지 확인하는 변수인 isCreated를 true로 설정
    isCreated = true;
    document.getElementById('btn1').value='삭제';
    }
    else{
        //삭제할 태그를 검색
        var e = document.getElementById('text');
        //삭제
        document.body.removeChild(e);
        //isCreated를 false로 설정하여 다시 생성할 수 있게 한다
        isCreated=false;
        document.getElementById('btn1').value='야ㅑ아아아압';
    }
}

var isCreated = false;
