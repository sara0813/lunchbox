document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#tabMenu a");
  const current = location.pathname.split("/").pop(); // e.g. products.html

  links.forEach(link => {
    const page = link.getAttribute("data-page");
    if (page === current) {
      link.classList.add("active");
    }
  });
});
