var formTag = document.getElementById('formTag');
formTag.onsubmit = function(){
    //아이디가 usr 객체를 가져와서 그 객체의 밸류를 아이디에 저장
    var id = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdConfirm').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    
    var number = document.getElementById('number').value;
    


    var infoID = document.getElementById('infoID');
    var infoPWD = document.getElementById('infoPWD');
    var infoPWDconfirm = document.getElementById('infoPWDconfirm');
    var infobirth = document.getElementById('infobirth');
    var infoday = document.getElementById('infoday');
    var infonumber = document.getElementById('infonumber');




    infoday.style.display = 'none';
  
    var isOK = true;


  
    

    
    //아이디 유효성 검사
    if(!checkValidId(id)){
        isOK = false;
    }

    //패스워드 유효성 검사

    if(!checkValidPwd(pwd)){
        isOK = false;
    }

    if(!checkValidPwdconfirm(pwdConfirm)){
        isOK = false;
    }


    
    if(!checkValidBirth()){
    
        isOK = false;

    }
    


    if(!checkValidNumber(number)){
    
        isOK = false;
    }


    if(!isOK)
return false;


}
  


function maxday(month){
    switch(month){
        case '1' : case '3' : case '5' : case '7' : case '8' : case '10' : case '12' :
        return 31;

        case '2' :
        return 28;

        default :
        return 30;
    }
}

// 아이디의 유효성을 검사
function checkValidId(id){
    var idRegex = /^[a-zA-Z]\w{4,9}$/;
    var infoID = document.getElementById('infoID');
    infoID.style.display = 'none';

    if(id.length == 0 || !idRegex.test(id)){
        infoID.style.display = 'block';
        return false;
    }

    return true;
}


function checkValidPwd(pwd){
    var pwdRegex = /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;
    var infoPWD = document.getElementById('infoPWD');
    infoPWD.style.display = 'none'

    if(pwd.length == 0 || !pwdRegex.test(pwd)){
        infoPWD.style.display = 'block';
        return false;
    }

    return true;

}

//비밀번호와 비밀번호 확인이 같은지 확인하는 함수 

function checkValidPwdconfirm(pwdConfirm){
    

    //pwd
    //비밀번호와 일치하지 않을때 보여줄 문구
    var pwd = document.getElementById('pwd').value;
    var infoPWDconfirm = document.getElementById('infoPWDconfirm');
    infoPWDconfirm.style.display = 'none';

    if(pwd != pwdConfirm){
        infoPWDconfirm.style.display = 'block';
        return false;
    }

    return true;

}



function checkValidBirth(){

    //year month day에 대한 객체의 값
    //예외처리문구에대한 객체정보
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);

    var infobirth = document.getElementById('infobirth');

    infobirth.style.display = 'none';

    var max = maxday(month);

    if(year.length != 4){
        infobirth.innerHTML = '태어난 년도 4자리를 정확하게 입력하세요';
        infobirth.style.display = 'block';
        return false;

    } else if(isNaN(parseInt(month))){
        infobirth.innerHTML = '태어난 월을 정확하게 입력하세요';
        infobirth.style.display = 'block';
        return false;
    }

    else if(isNaN(day) || day <1 || day > max){

        infobirth.innerHTML = '태어난 일자를 정확하게 입력하세요';
        infobirth.style.display = 'block';
        return false;

    }

    return true;

}


function checkValidNumber(number){
    var numRegex = /^010\d{8}$/;
    var infonumber = document.getElementById('infonumber');
    infonumber.style.display = 'none';

    if(!numRegex.test(number)){
        infonumber.style.display = 'block';
        return false;
    }

    return true;
}
