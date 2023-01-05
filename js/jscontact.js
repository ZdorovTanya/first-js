
function validate_form()
{
    var uname = document.contact_form.contact_name.value;
    if (!fio(uname)) return false;

    var tel = document.contact_form.phone_num.value;
    if (!phone(tel)) return false;

    var email = document.contact_form.email_name.value;
    if (!post(email)) return false;

    if (!check_radio()) return false;

    var word = document.contact_form.comment;
    if (!text_area(word)) return false;

    var brth = document.contact_form.daybirn;
    if (!bData(brth)) return false;

    return true;
}


function fio (uname){
    var valid = true;
    var id = document.querySelector('#Username');

    if ( uname == "" )
    {
            alert ( "Пожалуйста заполните поле 'Фамилия Имя Отчество'." );
            id.focus();
            valid = false;
    }

    if (!uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/)){
        alert ( "Пожалуйста введите ФИО как в паспорте" );
        id.focus();
        valid = false;
    }

    return valid;
}

function phone (tel){
    var valid = true;
    var id = document.querySelector('#phone');

    if ( tel == "" )
    {
            alert ( "Пожалуйста введите номер." );
            id.focus();
            valid = false;
    }

    if (!tel.match(/^\+[73][0-9]{9,11}$/)) {
        alert ( "Пожалуйста проверте номер" );
        id.focus();
        valid = false;
    }

    return valid;
}

function post (email){
    var valid = true;
    var id = document.querySelector('#UserEmail');

    if ( email == "" )
    {
            alert ( "Пожалуйста заполните поле 'Email'." );
            id.focus();
            valid = false;
    }

    return valid;
}

function check_radio (){
    var valid = false;
    
    if(document.getElementById("w").checked || document.getElementById("m").checked){
        valid = true;
    }

    if(valid){

    }
    else{
        alert ("Укажите пол.");
    }

    return valid;
}


function text_area (word){
    var valid = true;

    if ( word.value == "" )
    {
            alert ( "Пожалуйста заполните текстовое поле." );
            word.focus();
            valid = false;
    }

    return valid;
}

function bData (brth){
    var valid = true;

    if ( brth.value == "" )
    {
            alert ( "Пожалуйста укажите дату рождения." );
            brth.focus();
            valid = false;
    }

    return valid;
}