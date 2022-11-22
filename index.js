var toggleButton = document.querySelector(".toggle-button");
var navMenu = document.querySelector(".primary-navigation");

toggleButton.addEventListener("click", () => {
  var isVisible = toggleButton.getAttribute("aria-expanded");

  if (isVisible === "false") {
    toggleButton.setAttribute("aria-expanded", true);
    navMenu.setAttribute("data-visible", true);
  } else {
    toggleButton.setAttribute("aria-expanded", false);
    navMenu.setAttribute("data-visible", false);
  }
});
