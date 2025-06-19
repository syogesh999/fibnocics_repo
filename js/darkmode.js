document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("dark-mode-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Set the theme if already in localStorage
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === "dark-mode") {
      toggleSwitch.checked = true;
    }
  }

  // Toggle dark mode
  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  });
});

// Sidebar Open/Close Functions
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transition = "width 0.3s ease-in-out";
  sidenav.style.width = "250px";
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transition = "width 0.3s ease-in-out";
  sidenav.style.width = "0";
}
