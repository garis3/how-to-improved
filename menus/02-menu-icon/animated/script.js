const menuIcons = document.querySelectorAll("[data-animated]");

if (null !== menuIcons) {
  for (const menuIcon of menuIcons) {
    menuIcon.addEventListener("click", function() {
      this.classList.toggle("change");
    });
  }
}
