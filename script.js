document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon. ✅");
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
