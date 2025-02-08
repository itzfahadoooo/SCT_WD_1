document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
  
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navbar.className = ""; // Remove previous classes
          navbar.classList.add(`nav-${sectionId}`); // Add new class based on section
        }
      });
    });
  });
  