fetch("partials/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    const instaLink = document.getElementById("instagramLink");
    if (instaLink) {
      instaLink.addEventListener("click", function (e) {
        e.preventDefault(); // 실제 링크 이동 막기
        alert("아직 인스타그램 계정이 없습니다.");
      });
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const protectedLinks = [
      'a[href="html/mypage.html"]',
      'a[href="html/cart.html"]',
      'a[href="html/wishlist.html"]'
    ];

    protectedLinks.forEach(selector => {
      const link = document.querySelector(`#footer ${selector}`);
      if (link) {
        link.addEventListener("click", function (e) {
          if (!isLoggedIn) {
            e.preventDefault();
            alert("로그인이 필요합니다.");
            window.location.href = `/html/login.html?redirect=${encodeURIComponent(location.pathname)}`;
          }
        });
      }
    });
  });