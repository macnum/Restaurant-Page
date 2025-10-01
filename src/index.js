import "./styles.css";
import menu from "./menu.js";
import home from "./home.js";
import contact from "./contact.js";
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

const content = document.querySelector("#content");
const menuContent = menu();
const homeContent = home();
const contactContent = contact();

document.addEventListener("DOMContentLoaded", () => {
  content.appendChild(homeContent);
  content.appendChild(contactContent);
  content.appendChild(menuContent);

  homeContent.classList.add("active");
  contactContent.classList.remove("active");
  menuContent.classList.remove("active");
});

homeBtn.addEventListener("click", () => {
  if (
    menuContent.classList.contains("active") ||
    contactContent.classList.contains("active")
  ) {
    menuContent.classList.remove("active");
    contactContent.classList.remove("active");

    homeContent.classList.add("active");
  }
});

menuBtn.addEventListener("click", () => {
  if (
    contactContent.classList.contains("active") ||
    homeContent.classList.contains("active")
  ) {
    contactContent.classList.remove("active");
    homeContent.classList.remove("active");

    menuContent.classList.add("active");
  }
});

contactBtn.addEventListener("click", () => {
  if (
    menuContent.classList.contains("active") ||
    homeContent.classList.contains("active")
  ) {
    menuContent.classList.remove("active");
    homeContent.classList.remove("active");

    contactContent.classList.add("active");
  }
});
