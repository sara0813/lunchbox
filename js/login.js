// js/login.js
console.log("✅ login.js 로드됨");

function loginUser() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const user = users.find(user => user.phone === phone && user.password === password);

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", user.name);
    localStorage.setItem("phone", user.phone);
    alert("로그인 성공!");
    window.location.href = "/index.html";
  } else {
    alert("연락처 또는 비밀번호가 틀렸습니다.");
  }
}
