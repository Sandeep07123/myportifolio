//Mobile Menu Toggle 
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("change", () => {
  navLinks.classList.toggle("active", menuToggle.checked);
});

// Smooth Scrolling 
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    menuToggle.checked = false;
    navLinks.classList.remove("active");
  });
});

//for Active Nav Link
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
const viewResumeBtn = document.querySelector(".view-btn");
if (viewResumeBtn) {
  viewResumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(viewResumeBtn.getAttribute("href"), "_blank");
  });
}
