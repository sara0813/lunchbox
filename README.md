# HEALTHYME  
**AI 기반 도시락 추천 및 정기배송 웹사이트 프로젝트**

`HEALTHYME`는 사용자의 건강 상태, 식습관, 취향 등을 반영하여  
**AI 기반으로 도시락을 맞춤 추천하고, 간편하게 정기배송을 신청할 수 있는 플랫폼**입니다.  
직관적인 UI/UX를 통해 바쁜 현대인의 건강한 식사를 돕는 것이 목표입니다.

---

## 주요 디렉토리 구조

- `html/` – 각 페이지 (로그인, 회원가입, 마이페이지 등)
- `css/` – 스타일 시트
- `js/` – 공통 스크립트 (헤더/푸터 로딩, 로그인 상태 체크 등)
- `partials/` – 템플릿용 헤더/푸터

---

## 로그인 필수 접근 페이지

아래 페이지는 **로그인하지 않으면 접근이 제한**되며, 로그인 페이지로 리디렉션됩니다:

- AI 식단 추천 페이지 (`ai.html`)
- 마이페이지 (`mypage.html`)
- 장바구니 (`cart.html`)
- 관심목록 (`wishlist.html`)

---

## 기술 스택

| 구성 | 기술 |
|------|------|
| Front-End | HTML5, CSS3, JavaScript (Vanilla JS), Bootstrap 5 |
| 상태 관리 | `localStorage` 및 `sessionStorage` |
| 디자인 도구 | Adobe XD (디자인 시안 일부), Figma (UI 설계) |
| 배포 | 로컬 테스트 기준 (Live Server 또는 localhost:8080) |

---

## 주요 기능

- 회원가입 / 로그인 / 로그아웃
- AI 기반 맞춤 도시락 추천 기능
- 상품 탐색 및 정렬/필터 기능
- 관심목록(찜하기) 기능
- 장바구니 및 수량 조절, 상품 삭제
- 결제 페이지 (배송지 입력 포함)
- 마이페이지: 내 정보, 주문 내역, 결제수단 관리
- 문의 페이지(Contact): 유효성 검사 포함
- About 페이지: 팀 및 슬로건 소개
- 이용약관 및 개인정보처리방침 페이지

---

## 실행 방법

1. 이 저장소를 클론합니다.
```bash
git clone https://github.com/your-username/lunchbox.git
```

2. 디렉토리로 이동합니다.
```bash
cd lunchbox
```

3. index.html을 Live Server 또는 브라우저로 실행합니다.

VSCode의 경우: Live Server 확장 설치 후 index.html 우클릭하여 "Open with Live Server"

또는 Python 서버 사용: 
```bash
python3 -m http.server 8080
```

---

## 사이트 바로가기

[HEALTHYME 웹사이트 바로가기](https://sara0813.github.io/lunchbox/)

---

## 테스트 계정 안내

서비스를 테스트하시려면 아래 계정을 사용하세요:
- **연락처(아이디)**: `01012345678`  
- **비밀번호**: `1234`

---
