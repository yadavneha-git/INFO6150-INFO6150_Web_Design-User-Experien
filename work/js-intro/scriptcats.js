"use strict";

const menuHome = document.querySelector(".menu_home");
const menuShop = document.querySelector(".menu_shop");
const menuAbout = document.querySelector(".menu_about");
const menucontact = document.querySelector(".menu_contact");

const dropdownHome = document.querySelector(".dropdownhome");
const dropdownShop = document.querySelector(".dropdownshop");
const dropdownAbout = document.querySelector(".dropdownabout");
const dropdownContact = document.querySelector(".dropdowncontact");

menuHome.addEventListener("click", function() {
    dropdownHome.classList.toggle("open");
    dropdownShop.classList.remove("open");
    dropdownAbout.classList.remove("open");
    dropdownContact.classList.remove("open");
});

menuShop.addEventListener("click", function() {
    dropdownShop.classList.toggle("open");
    dropdownHome.classList.remove("open");
    dropdownAbout.classList.remove("open");
    dropdownContact.classList.remove("open");
});

menuAbout.addEventListener("click", function() {
    dropdownAbout.classList.toggle("open");
    dropdownHome.classList.remove("open");
    dropdownShop.classList.remove("open");
    dropdownContact.classList.remove("open");
});

menucontact.addEventListener("click", function() {
    dropdownContact.classList.toggle("open");
    dropdownHome.classList.remove("open");
    dropdownShop.classList.remove("open");
    dropdownAbout.classList.remove("open");
});
