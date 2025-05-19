// Script untuk smooth scroll saat klik menu navigasi
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // cegah default anchor click

    const targetId = link.getAttribute("href").substring(1); // ambil id tujuan
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // scroll dengan smooth behavior
      window.scroll({
        top: targetElement.offsetTop - 70, // 70 untuk jarak header
        behavior: "smooth",
      });
    }
  });
});
// Toggle menu saat tombol diklik
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
