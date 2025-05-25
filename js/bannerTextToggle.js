document.addEventListener("DOMContentLoaded", () => {
  const leftBanner = document.querySelector(".banner.left");
  const rightBanner = document.querySelector(".banner.right");
  const leftText = leftBanner.querySelector("h2");
  const rightText = rightBanner.querySelector("h2");

  leftBanner.addEventListener("mouseenter", () => {
    rightText.style.opacity = "0";
  });

  leftBanner.addEventListener("mouseleave", () => {
    rightText.style.opacity = "1";
  });

  rightBanner.addEventListener("mouseenter", () => {
    leftText.style.opacity = "0";
  });

  rightBanner.addEventListener("mouseleave", () => {
    leftText.style.opacity = "1";
  });
});
