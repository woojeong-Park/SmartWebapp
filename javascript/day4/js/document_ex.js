


function setbtn(className){
    var h3 = document.getElementsByClassName(className);
    for(var i=0; i<h3.length; i++){
        h3[i].style.border='none';
        h3[i].style.fontWeight='700';
        h3[i].style.color='white';
    }
}

function setbtnclassname(className,color){
    var h3 = document.getElementsByClassName(className);
    for(var i=0; i<h3.length; i++){
        h3[i].style.backgroundColor= color;
    }
}


function setcolorbyid(id,color){
    document.getElementById(id).style.color = color;
}

function setcolorbyclass(className,color){
    var all = document.getElementsByClassName(className);
    for(i = 0; i<all.length; i++){
        all[i].style.color=color;
    }
}


setbtn('btn');
setbtnclassname('blue','dodgerblue');
setbtnclassname('red','red');
setbtnclassname('green','green');
setbtnclassname('black','black');

