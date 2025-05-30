
document.addEventListener("DOMContentLoaded", function () {
    // 원래 값 불러오기
    const defaultData = {
        userName: localStorage.getItem("userName") || "사용자",
        email: localStorage.getItem("email") || "lunchbox@team5.com",
        address: localStorage.getItem("address") || "서울 노원구 공릉로 232 서울과학기술대학교",
        height: localStorage.getItem("height") || "167",
        weight: localStorage.getItem("weight") || "55",
        age: localStorage.getItem("age") || "23"
    };

    function populateForm(data) {
        document.getElementById("user-name").textContent = data.userName;
        document.getElementById("input-name").value = data.userName;
        document.getElementById("input-email").value = data.email;
        document.getElementById("input-address").value = data.address;
        document.getElementById("input-height").value = data.height;
        document.getElementById("input-weight").value = data.weight;
        document.getElementById("input-age").value = data.age;
    }

    populateForm(defaultData);

    // 프로필 저장
    document.getElementById("profile-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const updated = {
            userName: document.getElementById("input-name").value.trim(),
            email: document.getElementById("input-email").value.trim(),
            address: document.getElementById("input-address").value.trim(),
            height: document.getElementById("input-height").value,
            weight: document.getElementById("input-weight").value,
            age: document.getElementById("input-age").value
        };

        for (const key in updated) {
            if (!updated[key]) {
                alert("모든 정보를 올바르게 입력해주세요.");
                return;
            }
        }

        for (const key in updated) {
            localStorage.setItem(key, updated[key]);
        }

        document.getElementById("user-name").textContent = updated.userName;
        alert("성공적으로 저장되었습니다!");
    });

    // 취소 버튼
    document.getElementById("cancel-profile").addEventListener("click", function () {
        populateForm(defaultData);
        alert("수정 내용이 취소되었습니다.");
    });

    // 비밀번호 변경
    document.getElementById("password-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const current = document.getElementById("current-password").value;
        const newPw = document.getElementById("new-password").value;
        const confirmPw = document.getElementById("confirm-password").value;

        if (!current || !newPw || !confirmPw) {
            alert("모든 비밀번호 항목을 입력해주세요.");
            return;
        }

        if (newPw !== confirmPw) {
            alert("새 비밀번호가 일치하지 않습니다.");
            return;
        }

        if (newPw === current) {
            alert("이전 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.");
            return;
        }

        const pwPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!pwPattern.test(newPw)) {
            alert("비밀번호는 8자 이상이며 특수문자를 포함해야 합니다.");
            return;
        }

        // 실제 저장은 백엔드와 연동되어야 하지만, 여기선 알림만
        alert("비밀번호가 성공적으로 변경되었습니다!");
    });
});
