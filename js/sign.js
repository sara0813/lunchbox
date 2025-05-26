console.log("✅ signup.js 로드됨");

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;

  // 1. 필수값 검사
  if (!name || !phone || !password) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // 2. 연락처: 11자리 숫자
  const phoneValid = /^\d{11}$/.test(phone);
  if (!phoneValid) {
    alert("연락처는 11자리 숫자만 입력 가능합니다. 예: 01012345678");
    return;
  }

  // 3. 비밀번호: 8자 이상, 영문+숫자+특수문자만 가능, 특수문자 최소 1개
  const passwordValid =
    /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!passwordValid) {
    alert("비밀번호는 8자 이상이며, 영문/숫자/특수문자만 사용할 수 있고, 특수문자를 1개 이상 포함해야 합니다.");
    return;
  }

  // 4. 가상의 유저 배열에 회원 추가 (로컬 전용)
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // 중복 연락처 방지
  const isDuplicate = users.some(u => u.phone === phone);
  if (isDuplicate) {
    alert("이미 등록된 연락처입니다.");
    return;
  }

  const newUser = { name, phone, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // 5. 로그인 상태로 전환
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userName", name);
  localStorage.setItem("phone", phone);

  alert("회원가입이 완료되었습니다!");
  
  window.location.href = "/index.html";

});
