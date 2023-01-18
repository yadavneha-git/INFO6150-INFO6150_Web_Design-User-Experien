"use strict";

(function(){

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
})();