// js/randomBanner.js
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "몸도 마음도 리셋하는 하루!",
    "현미밥 20% 할인중!!",
    "오늘도 건강한 식사 🍱",
    "당신의 식단을 AI가 책임집니다!",
    "오늘은 어떤 도시락이 좋을까요?",
    "따뜻한 도시락 어때요?",
    "AI 도시락 추천 서비스 지금 체험해보세요!",
    "더 똑똑하게 먹고 더 간편하게 살아가기!",
    "식사의 새로운 기준, 지금 바로 시작!",
    "“더 건강한 식사를, 더 편리하게”"
  ];

  const bannerText = document.getElementById("banner-text-content");
  if (bannerText) {
    // 3초마다 메시지를 변경
    let index = 0;
    bannerText.textContent = messages[index];

    setInterval(() => {
      index = (index + 1) % messages.length;
      bannerText.textContent = messages[index];
    }, 3000);
  }
});
