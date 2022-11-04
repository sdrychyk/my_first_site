let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputUsername = document.querySelector('.js-input-name'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPassword = document.querySelector('.js-input-password'),
    inputConfirm = document.querySelector('.js-input-confirm');
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
        let validate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return validate.test(password);
}
form.onsubmit = function() {
    let emailVal = inputEmail.value;
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');
        usernameVal = inputUsername.value;
        passwordVal = inputPassword.value;
        confirmVal = inputConfirm.value;
        
        
    formInputs.forEach(function(input){
        if(input.value === ''){
            input.classList.add('error');
        }
        else{
            input.classList.remove('error');
        }
    })
    if (emptyInputs.length !== 0){
        return false;
    }
    if (usernameVal.length < 3 || usernameVal.length > 25 ){
        console.log('error username');
        alert ('Довжина імені повина бути не меншою за 2 і не більшою за 25');
        inputUsername.classList.add('error');
        return false;
    }
    else {
        inputUsername.classList.remove('error');
    }
    if(!validateEmail(emailVal)) {
        console.log('email_er')
        inputEmail.classList.add('error');
        alert ('Введіть коректну електронну адресу');
        return false;
    }
    else{
        inputEmail.classList.remove('error');
    }
    if(passwordVal.length < 8){
        inputPassword.classList.add('error');
        alert ('Довжина пароля повинна бути не меншою за 8')
        console.log('erorr length') 
        return false;
    }
    else{
        inputPassword.classList.remove('error');
    }
    if(!validatePassword(passwordVal)){
        console.log('pomylka vymogy');
        inputPassword.classList.add('error');
        alert ('Пароль повинен містити хоча би 1 спеціальний символ "!@#$%^&*", 1 велику букву, 1 малу і хоча би одну цифру!')
        return false;
    }
    else{
        inputPassword.classList.remove('error');
    }

    if(passwordVal !== confirmVal){
        inputConfirm.classList.add('error');
        alert('Паролі не збігаються!')
        return false;
    }
    else{
        inputConfirm.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        alert ('Прийміть умови угоди');
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }
}