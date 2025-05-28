// js/randomBanner.js

// 🔹 랜덤 배너 메시지 표시 함수
function initBannerMessage() {
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
    "“더 건강한 식사를, 더 편리하게”",
    "도시락 하나로 완성하는 균형 잡힌 하루!",
    "메뉴 고민 끝! AI가 골라주는 나만의 식단 🍽️",
    "오늘도 잘 먹고, 잘 사는 하루!",
    "매일 새롭게 추천되는 건강한 한 끼 💡",
    "내 입맛에 딱! 맞춤 도시락 서비스",
    "냉장고 걱정 끝! 정기배송으로 해결",
    "출근 전, 도시락 하나로 든든하게!",
    "AI가 골라주는 나만의 웰빙 도시락",
    "오늘도 도시락으로 에너지 충전⚡",
    "혼밥도 품격 있게! AI 도시락 추천",
    "매일이 특별한 식사 시간 🕒",
    "식단도 스마트하게! AI가 도와줘요",
    "건강한 식사는 선택이 아닌 기본!",
    "맛과 영양을 동시에 챙기는 도시락",
    "이제는 AI가 식사 코디해줄게요 🧠"
  ];

  const bannerText = document.getElementById("banner-text-content");

  if (bannerText) {
    let index = 0;
    bannerText.textContent = messages[index];

    setInterval(() => {
      index = (index + 1) % messages.length;
      bannerText.textContent = messages[index];
    }, 3000);
  } else {
    console.warn("⚠️ 배너 텍스트 요소가 존재하지 않습니다.");
  }
}

// 🔹 좌우 배너 텍스트 페이드 효과
document.addEventListener("DOMContentLoaded", () => {
  const leftBanner = document.querySelector(".banner.left");
  const rightBanner = document.querySelector(".banner.right");

  if (leftBanner && rightBanner) {
    const leftText = leftBanner.querySelector("h2");
    const rightText = rightBanner.querySelector("h2");

    leftBanner.addEventListener("mouseenter", () => {
      if (rightText) rightText.style.opacity = "0";
    });

    leftBanner.addEventListener("mouseleave", () => {
      if (rightText) rightText.style.opacity = "1";
    });

    rightBanner.addEventListener("mouseenter", () => {
      if (leftText) leftText.style.opacity = "0";
    });

    rightBanner.addEventListener("mouseleave", () => {
      if (leftText) leftText.style.opacity = "1";
    });
  }
});
