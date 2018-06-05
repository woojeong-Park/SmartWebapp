//id를 이용해 element를 검색해서 스타일을 수정하는 예제

var h1 = document.getElementById('hid');
h1.style.color = 'red';
h1.style.fontSize = '20px';
h1.style.fontWeight = '100';

function fontblue(){
    //class를 이용해 element를 검색해서 스타일을 수정하는 예제

    var h2 = document.getElementsByClassName('hclass');
    for(var i in h2) {
        h2[i].style.color = 'dodgerblue';
        h2[i].style.fontSize = '70px';
        h2[i].style.fontWeight = '900';

    }
}

var h3 = document.querySelector('.hclass');
h3.style.fontSize = '100px';


document.write('hello world');

//h1태그생성
var header = document.createElement('h1');
//텍스트 노드 생성
var text = document.createTextNode('생성');
//텍스트 노드를 h1태그에 붙임
header.appendChild(text);
//h1태그를 body태그에 붙임
document.body.appendChild(header);