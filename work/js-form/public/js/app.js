 "use strict";

(function(){
const nameEl = document.querySelector('.register-name');
const nameFieldErrorEl = document.querySelector('.register-name__error');

nameEl.addEventListener('change', (event) => {
    let isInvalid = false
    nameFieldErrorEl.classList.remove('register-name__error--invalid');
    nameEl.classList.remove('register-name--invalid');

    if(!nameEl.value.trim()) {
        isInvalid = true;
    }

    if( isInvalid ) {
        nameFieldErrorEl.classList.add('register-name__error--invalid');
        nameEl.classList.add('register-name--invalid');
        event.preventDefault();
     }
});

const formEl = document.querySelector('.formbox');
const emailEl = document.querySelector('.email');
const emailErrorEl = document.querySelector('.register-email__error');
const confirmEmailEl = document.querySelector('.confirm-email');
const confirmEmailErrorEl = document.querySelector('.register-confirm__error');

formEl.addEventListener('submit', (event) => {
    let isFormInvalid = false
    nameEl.classList.remove('register-name--invalid');
    nameFieldErrorEl.classList.remove('register-name__error--invalid');

    emailEl.classList.remove('email--invalid');
    emailErrorEl.innerText = "";

    confirmEmailEl.classList.remove('confirm-email--invalid');
    confirmEmailErrorEl.innerText = "";

    const name = formEl.elements["name"].value.trim();
    if(!name) {
        nameEl.classList.add('register-name--invalid');
        nameFieldErrorEl.classList.add('register-name__error--invalid');
        isFormInvalid = true;
    }

    const email = formEl.elements["email"].value.trim();
    if(!email) {
        emailEl.classList.add('email--invalid');
        emailErrorEl.innerText = "Email is required.";
        isFormInvalid = true;
    }
    
    const confirmEmail = formEl.elements["confirm-email"].value.trim();
    if(email != confirmEmail) {
        confirmEmailEl.classList.add('confirm-email--invalid');
        confirmEmailErrorEl.innerText = "Email do not match.";
        isFormInvalid = true;
    }

    if( isFormInvalid ) {
        event.preventDefault();
    }
  });
})();
