document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  const tabLinks = document.querySelectorAll("#tabMenu .nav-link");

  tabLinks.forEach(link => {
    const targetPage = link.getAttribute("data-page");
    if (currentPage === targetPage) {
      link.classList.add("active");
    }
  });
});
