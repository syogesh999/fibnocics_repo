const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Toggle Light Mode";
  } else {
    themeToggle.textContent = "Toggle Dark Mode";
  }
});
