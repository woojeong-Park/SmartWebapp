var myWindow;

//윈도우를 하나 연다 = 윈도우 객체를 하나 생성한다
//윈도우 객체를 만들어서 myWindow에 저장

function openWindow(){
    myWindow = window.open("","MyWindow",
    "width=200, height=200, toolbar=yes, location=yes, menubar=yes, scrollbar=yes resizable=yes, left=50, top=50");
}

function closeWindow(){
    //myWindow에 저장된 윈도우 객체가 있으면 닫는다
    if(myWindow)
        myWindow.close();
}

function blurWindow(){
    if(myWindow)
        myWindow.blur();
}

function focusWindow(){
    if(myWindow)
        myWindow.focus();
}

function checkWindow(){
    if(!myWindow){
        //myWindow 한번도 열린적이 없음(myWindow == null)
        alert('한번도 열린적이 없음');
    }
    else{
        //myWindow 한번이상 열린적은 있지만 지금은 닫혀있음
        if(myWindow.closed)
            alert('닫혀있음');
        //myWindow 열려있는상태
        else
        alert('열려있음');
    }
}

function moveByWindow(){
    myWindow.moveBy(50,50);
}

function moveToWindow(){
    myWindow.moveTo(50,50);
}

function resizeByWindow(){
    myWindow.resizeBy(300,300);
}

function resizeToWindow(){
    myWindow.resizeTo(300,300);
}