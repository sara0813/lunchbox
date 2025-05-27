function handleSubmit(event) {
  event.preventDefault();

  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';

  const phoneInput = document.querySelector('input[type="tel"]');
  const messageInput = document.querySelector('textarea');

  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone)) {
    alert("전화번호는 숫자 11자리여야 합니다. 예: 01012345678");
    phoneInput.focus();
    return;
  }

  if (message.length < 10) {
    alert("문의 내용은 최소 10자 이상 입력해주세요.");
    messageInput.focus();
    return;
  }

  alert("문의가 정상적으로 접수되었습니다. 감사합니다!");
  window.location.href = `${baseURL}index.html`;
}
