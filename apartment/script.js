const navbar = document.getElementById("navbar");
const sidebar = document.getElementById("sidebar");

navbar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
// console.log("I am active")
});
