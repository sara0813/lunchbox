function toggleHeart(element) {
  if (element.textContent === '🤍') {
    element.textContent = '❤️';
    alert('관심상품에 추가되었습니다.');
  } else {
    element.textContent = '🤍';
    alert('관심상품에서 제거되었습니다.');
  }
}
