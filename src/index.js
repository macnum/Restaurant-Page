const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

menuBtn.addEventListener("click", () => {
  window.location.href = "menu.html";
});

contactBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});
