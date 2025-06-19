// Function to open the sidebar
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transition = "width 0.3s ease-in-out"; // Smooth transition for opening
  sidenav.style.width = "250px"; // Set the sidebar width when opened
}

// Function to close the sidebar
function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transition = "width 0.3s ease-in-out"; // Smooth transition for closing
  sidenav.style.width = "0"; // Set the sidebar width to 0 when closed
}
