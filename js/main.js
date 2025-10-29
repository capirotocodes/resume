// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.style.display === "block";
    siteNav.style.display = isOpen ? "none" : "block";

    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Open menu" : "Close menu"
    );
  });

  // close menu after clicking a link (mobile)
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 700) {
        siteNav.style.display = "none";
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });
  });
}

// DYNAMIC YEAR IN FOOTER
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
