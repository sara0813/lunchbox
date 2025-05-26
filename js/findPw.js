function findUserPassword() {
    const nameInput = document.getElementById("name").value.trim();
    const phoneInput = document.getElementById("phone").value.trim();

    if (!nameInput || !phoneInput) {
        alert("이름과 연락처를 모두 입력해주세요.");
        return;
    }

    const user = users.find(user => user.name === nameInput && user.phone === phoneInput);

    if (user) {
        alert(`"${user.name}"님의 비밀번호는 "${user.password}"입니다.`);
    } else {
        alert("일치하는 사용자 정보를 찾을 수 없습니다.");
    }
}
