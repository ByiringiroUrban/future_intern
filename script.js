// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
  });

  const getStartedButton = document.getElementById("get-started-button");
  getStartedButton.addEventListener("click", () => {
      alert("Welcome! Start your journey with InternshipHub.");
  });
});
