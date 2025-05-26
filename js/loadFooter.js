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
  });
