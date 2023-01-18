"use strict";

(function () {
    const button1El= document.querySelector(".button1");
    const menuclassEl = document.querySelector(".menuclass");

    button1El.addEventListener('click', () => {
    if (menuclassEl.classList.contains("showMenu")) {
        menuclassEl.classList.remove("showMenu");
        menuclassEl.classList.remove("menuclass1");
        menuclassEl.classList.add("menuclass");
      } else {
        menuclassEl.classList.add("showMenu");
        menuclassEl.classList.add("menuclass1");
        menuclassEl.classList.remove("menuclass");
      }
});

    const modalEl = document.querySelector('.modal');

    const card1El = document.querySelector('.card1');
    const card2El = document.querySelector('.card2');
    const card3El = document.querySelector('.card3');
    const card4El = document.querySelector('.card4');
    const card5El = document.querySelector('.card5');
    const card6El = document.querySelector('.card6');

    card1El.addEventListener('click', () => {
        modalEl.showModal();
    });

    card2El.addEventListener('click', () => {
        modalEl.showModal();
    });

    card3El.addEventListener('click', () => {
        modalEl.showModal();
    });

    card4El.addEventListener('click', () => {
        modalEl.showModal();
    });

    card5El.addEventListener('click', () => {
        modalEl.showModal();
    });

    card6El.addEventListener('click', () => {
        modalEl.showModal();
    });

    const closeEl = document.querySelector('.close');

    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

        const emailEl = document.querySelector('.email');
        const emailFieldErrorEl = document.querySelector('.register-email__error');
        
        emailEl.addEventListener('change', (event) => {
        let isInvalid = false;
        emailEl.classList.remove('register-email--invalid');
        emailFieldErrorEl.innerText = "";

        if (!emailEl.value.trim()) {
            isInvalid = true;
        }


        if(!emailEl.value.trim().includes("@")){
            emailEl.classList.add('register-email--invalid');
            emailFieldErrorEl.innerText = "This field be a valid email address with @.";
        }

        if (isInvalid) {
            emailEl.classList.add('register-email--invalid');
            emailFieldErrorEl.innerText = "Email is required.";
        }
    });

        const confirmEmailEl = document.querySelector('.confirm-email');
        const confirmEmailErrorEl = document.querySelector('.register-confirm__error');

        confirmEmailEl.addEventListener('change', (event) => {
        let isInvalid = false;
        confirmEmailErrorEl.innerText = "";
        confirmEmailEl.classList.remove('confirm-email--invalid');

        const email = emailEl.value.trim();
        const confirmEmail = confirmEmailEl.value.trim();

        if (email != confirmEmail) {
            isInvalid = true;
        }
        
        if(!confirmEmailEl.value.trim().includes("@")){
            confirmEmailEl.classList.add('confirm-email--invalid');
            confirmEmailErrorEl.innerText = "This field be a valid email address with @.";
        }

        if (isInvalid) {
            confirmEmailErrorEl.innerText = "Email does not match.";
            confirmEmailEl.classList.add('confirm-email--invalid');
        }
    });

        const formEl = document.querySelector('.formbox');


        formEl.addEventListener('submit', (event) => {
        let isFormInvalid = false

        emailEl.classList.remove('register-email--invalid');
        emailFieldErrorEl.innerText = "";

        confirmEmailEl.classList.remove('confirm-email--invalid');
        confirmEmailErrorEl.innerText = "";

        if(!confirmEmailEl.value.trim().includes("@")){
            confirmEmailEl.classList.add('confirm-email--invalid');
            confirmEmailErrorEl.innerText = "This field be a valid email address with @.";
        }
        
        if(!emailEl.value.trim().includes("@")){
            emailEl.classList.add('register-email--invalid');
            emailFieldErrorEl.innerText = "This field be a valid email address with @.";
        }


        const email = formEl.elements["email"].value.trim();
        if (!email) {
            emailEl.classList.add('register-email--invalid');
            emailFieldErrorEl.innerText = "Email is required.";
            isFormInvalid = true;
        }

        const confirmEmail = formEl.elements["confirm-email"].value.trim();
        if (email != confirmEmail) {
            confirmEmailErrorEl.innerText = "Email does not match.";
            confirmEmailEl.classList.add('confirm-email--invalid');
            isFormInvalid = true;
        }
        


        if (isFormInvalid) {
            event.preventDefault();
        }
    });
})();