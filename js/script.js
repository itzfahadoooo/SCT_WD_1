document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  
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

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    
      // Close menu when clicking a link (optional)
      document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });
  });
  