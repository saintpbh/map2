// missionaries.js
const missionaryData = 
{
  "일본": [
    "가정순 (햐꾸닌쬬)",
    "김종현 (오사카 나니와)",
    "신용섭 (오사카교구 나니와)",
    "정지영 (가나가와 고토부키지구)",
    "김성언 (시모노세키)"
  ],
  "중국": [
    "양○○ (상하이)"
  ],
  "대만": [
    "김기태 (파이완노회)",
    "이강석 (유산신학교)",
    "조하영 (칠성중회)",
    "박근영 (칠성중회)"
  ],
  "몽골": [
    "김상헌 (국제대학)"
  ],
  "러시아": [
    "이상점 (연해주)"
  ],
  "필리핀": [
    "김현숙 (민다나오)",
    "금석인 (아카페교회)",
    "강경진 (그리스도연합교회 UCCP)",
    "방태화 (서부 서비시야 세부)",
    "김영권 (중부루손)",
    "정광화 (루손 섬)"
  ],
  "태국": [
    "김완주 (우돈타니 그룹홈)",
    "김기성 (방콕)",
    "이재광 (치앙마이/치앙라이)",
    "명승인 (CCT)",
    "박준수 (치앙마이)"
  ],
  "캄보디아": [
    "김형기 (Neighbor센터)",
    "김관식 (에큐메니칼교회)",
    "장성숙 (캄보디아)",
    "황희명 (프놈펜)",
    "김경희 (프놈펜)",
    "이민일 (프놈펜)",
    "황하얀 (프놈펜)",
    "진재은 (프놈펜)"
  ],
  "라오스": [
    "차명렬 (딘디 유치원)",
    "정병권 (라오스)"
  ],
  "인도": [
    "김금애 (북인도)",
    "이옥희 (남인도)",
    "정호진 (생명누리센터)",
    "김경미 (남인도 냔달)",
    "이화랑 (마드라스)",
    "이도형 (첸나이)"
  ],
  "인도네시아": [
    "김광훈 (파순단교회)",
    "설나라 (파순단교회)",
    "박준호 (동부자와교회)"
  ],
  "파키스탄": [
    "김신미 (이슬라마바드)"
  ],
  "동티모르": [
    "김옥겸 (IPTL)"
  ],
  "네팔": [
    "윤종수 (NCC, Concern Nepal)",
    "최양임 (카트만두)",
    "허 현 (티벳 불교권)",
    "이수열 (카트만두)",
    "김선태 (카트만두)",
    "김종찬 (카트만두)"
  ],
  "말레이시아": [
    "김재선 (보루네오 섬)"
  ],
  "뉴질랜드": [
    "류 숙 (오클랜드)"
  ],
  "호주": [
    "최범욱 (시드니 새날교회)",
    "이병관 (케언즈 제자들교회)"
  ],
  "이스라엘": [
    "김정환 (아랍이스라엘교회)",
    "안상근 (갈릴리)"
  ],
  "독일": [
    "조성호 (베를린기독교한인교회)",
    "김기천 (베를린주교회)",
    "강민영 (라인마인 한인교회)"
  ],
  "헝가리": [
    "김선구 (부다페스트한인교회)",
    "김다솜 (부다페스트한인교회)",
    "최종관 (부다페스트한인교회)"
  ],
  "불가리아": [
    "김영중 (불가리아)"
  ],
  "부르키나파소": [
    "윤영국 (부르키나파소)"
  ],
  "케냐": [
    "최성욱 (동아프리카 개혁교회)"
  ],
  "모리타니": [
    "심재원 (북아프리카 YWAM)"
  ],
  "라이베리아": [
    "이기준 (라이베리아)"
  ],
  "말라위": [
    "김주현 (릴롱궤)"
  ],
  "우간다": [
    "이윤재 (쿠미대학, UCU대학)"
  ],
  "미국": [
    "장호준 (스토어스 한인교회)"
  ],
  "쿠바": [
    "임순심 (신학교 사역)"
  ]
};

// missionaryInfo 객체를 자동 생성합니다.
const missionaryInfo = {
  "강경진": { prayer: "신학교 지원", lastUpdate: "2024-08-10" },
  "강민영": { prayer: "독일 교회 연결", lastUpdate: "2025-02-15" },
  "권동용": { prayer: "현지 사역 훈련", lastUpdate: "2024-11-22" },
  "금석인": { prayer: "선교센터 리모델링", lastUpdate: "2024-01-14" },
  "김경미": { prayer: "인도 선교 확장", lastUpdate: "2025-04-25" },
  "김경환": { prayer: "양곤 현지 교회 연합", lastUpdate: "2024-03-30" },
  "김관식": { prayer: "캄보디아 성경 번역", lastUpdate: "2024-10-19" },
  "김기성": { prayer: "가족 정착과 학교", lastUpdate: "2024-06-11" },
  "김기태": { prayer: "지역 교회 협력", lastUpdate: "2024-09-05" },
  "김금애": { prayer: "인도 복음 전파", lastUpdate: "2025-01-12" },
  "김기천": { prayer: "독일 청년 사역", lastUpdate: "2024-05-07" },
  "김다솜": { prayer: "헝가리 교회 연합", lastUpdate: "2025-03-01" },
  "김동욱": { prayer: "문화 교류와 전도", lastUpdate: "2025-05-29" },
  "김상헌": { prayer: "몽골어 습득과 문화 이해", lastUpdate: "2024-02-17" },
  "김성언": { prayer: "가정 평안과 자녀 교육", lastUpdate: "2024-04-13" },
  "김영권": { prayer: "건강과 언어", lastUpdate: "2024-12-09" },
  "김옥겸": { prayer: "동티모르 복음화", lastUpdate: "2024-01-20" },
  "김재선": { prayer: "말레이시아 선교 확장", lastUpdate: "2025-05-01" },
  "김정환": { prayer: "이스라엘 사역 확장", lastUpdate: "2024-08-03" },
  "김종찬": { prayer: "학교 설립 준비", lastUpdate: "2025-06-01" },
  "김종현": { prayer: "현지 청소년 사역", lastUpdate: "2024-07-18" },
  "김형기": { prayer: "마을 복음화", lastUpdate: "2024-01-01" },
  "김현숙": { prayer: "아동 교육 프로그램", lastUpdate: "2024-06-22" },
  "명승인": { prayer: "청소년 캠프 준비", lastUpdate: "2024-04-04" },
  "박근영": { prayer: "가족 건강", lastUpdate: "2024-05-05" },
  "박준수": { prayer: "사역 확장과 후원", lastUpdate: "2025-06-03" },
  "박준호": { prayer: "인도네시아 복음화", lastUpdate: "2024-10-10" },
  "방태화": { prayer: "지역 리더십 훈련", lastUpdate: "2025-04-10" },
  "설나라": { prayer: "문화 사역 안정화", lastUpdate: "2024-02-05" },
  "신용섭": { prayer: "의료 사역의 지혜", lastUpdate: "2024-03-05" },
  "심재원": { prayer: "모리타니 교회 개척", lastUpdate: "2025-03-18" },
  "양OO": { prayer: "비공개 사역의 안전", lastUpdate: "2024-01-01" },
  "오은성": { prayer: "복음의 열매와 건강", lastUpdate: "2025-06-05" },
  "윤종수": { prayer: "교회 리더 훈련", lastUpdate: "2024-07-28" },
  "윤영국": { prayer: "서아프리카 복음화", lastUpdate: "2024-11-11" },
  "이강석": { prayer: "현지 학교와 연결", lastUpdate: "2024-04-29" },
  "이도형": { prayer: "문화 교류 사역", lastUpdate: "2025-02-20" },
  "이병관": { prayer: "호주 한인 사역", lastUpdate: "2024-10-01" },
  "이민일": { prayer: "비즈니스 선교 정착", lastUpdate: "2025-03-22" },
  "이수열": { prayer: "가족 안정과 언어", lastUpdate: "2024-06-30" },
  "이옥희": { prayer: "인도 여성 사역", lastUpdate: "2024-07-02" },
  "이재광": { prayer: "현지 협력 단체와 연대", lastUpdate: "2025-01-30" },
  "이화랑": { prayer: "청소년 복음화", lastUpdate: "2024-09-19" },
  "임순심": { prayer: "쿠바 선교 정착", lastUpdate: "2024-04-02" },
  "장호준": { prayer: "미국 지역 복음화", lastUpdate: "2025-05-15" },
  "정광은": { prayer: "독일 디아스포라 사역", lastUpdate: "2024-06-15" },
  "정병권": { prayer: "선교센터 운영", lastUpdate: "2024-11-01" },
  "정지영": { prayer: "다문화 가정 돌봄", lastUpdate: "2024-02-11" },
  "정호진": { prayer: "인도 복음 운동", lastUpdate: "2025-03-04" },
  "조성호": { prayer: "유럽 교회 연대", lastUpdate: "2025-01-05" },
  "조하영": { prayer: "유학생 돌봄 사역", lastUpdate: "2024-06-05" },
  "차명렬": { prayer: "현지 교회와 협력", lastUpdate: "2024-05-26" },
  "최범욱": { prayer: "시드니 교회 개척", lastUpdate: "2024-08-17" },
  "최성욱": { prayer: "케냐 교육 선교", lastUpdate: "2024-07-08" },
  "최양임": { prayer: "고산지대 복음화", lastUpdate: "2025-06-04" },
  "최종관": { prayer: "헝가리 청년 제자훈련", lastUpdate: "2024-03-12" },
  "허현": { prayer: "의료 캠프 사역", lastUpdate: "2024-09-29" }
};

Object.entries(missionaryData).forEach(([country, names]) => {
  names.forEach(name => {
    if (!Object.hasOwn(missionaryInfo, name)) {
      missionaryInfo[name] = missionaryInfo[name] || {
        prayer: "현지 정착과 건강",
        lastUpdate: "2024-06-01"
      };
    }
  });
});


function getMissionaryStatus(name) {
  const info = missionaryInfo[name];
  if (!info || !info.lastUpdate) return "peace";
  const last = new Date(info.lastUpdate);
  const now = new Date();
  const diff = (now - last) / (1000 * 60 * 60 * 24); // days
  if (diff > 180) return "silent";
  if (diff <= 30) return "recent";
  return "peace";
}

const countryFlags = {
  "일본": "jp",
  "중국": "cn",
  "대만": "tw",
  "몽골": "mn",
  "러시아": "ru",
  "필리핀": "ph",
  "태국": "th",
  "캄보디아": "kh",
  "라오스": "la",
  "인도": "in",
  "인도네시아": "id",
  "파키스탄": "pk",
  "동티모르": "tl",
  "네팔": "np",
  "말레이시아": "my",
  "뉴질랜드": "nz",
  "호주": "au",
  "이스라엘": "il",
  "독일": "de",
  "헝가리": "hu",
  "불가리아": "bg",
  "부르키나파소": "bf",
  "케냐": "ke",
  "모리타니": "mr",
  "라이베리아": "lr",
  "말라위": "mw",
  "우간다": "ug",
  "미국": "us",
  "쿠바": "cu"
};

const latlngs = {
  "일본": [36.2048, 138.2529],
  "중국": [35.8617, 104.1954],
  "대만": [23.6978, 120.9605],
  "몽골": [46.8625, 103.8467],
  "러시아": [61.5240, 105.3188],
  "필리핀": [12.8797, 121.7740],
  "태국": [15.8700, 100.9925],
  "캄보디아": [12.5657, 104.9910],
  "라오스": [19.8563, 102.4955],
  "인도": [20.5937, 78.9629],
  "인도네시아": [-0.7893, 113.9213],
  "파키스탄": [30.3753, 69.3451],
  "동티모르": [-8.8742, 125.7275],
  "네팔": [28.3949, 84.1240],
  "말레이시아": [4.2105, 101.9758],
  "뉴질랜드": [-40.9006, 174.8860],
  "호주": [-25.2744, 133.7751],
  "이스라엘": [31.0461, 34.8516],
  "독일": [51.1657, 10.4515],
  "헝가리": [47.1625, 19.5033],
  "불가리아": [42.7339, 25.4858],
  "부르키나파소": [12.2383, -1.5616],
  "케냐": [0.0236, 37.9062],
  "모리타니": [21.0079, -10.9408],
  "라이베리아": [6.4281, -9.4295],
  "말라위": [-13.2543, 34.3015],
  "우간다": [1.3733, 32.2903],
  "미국": [37.0902, -95.7129],
  "쿠바": [21.5218, -77.7812]
};

const countryIcons = Object.fromEntries(
  Object.keys(latlngs).map(c => [c, "https://cdn-icons-png.flaticon.com/128/149/149071.png"])
);

const prayerSamples = [
  "영적 성장", "건강과 안전", "현지 언어 습득",
  "교회건축기금", "복음의 열매", "가족의 평안"
];

//자동으로 떠오르는 팝업 중지
let autoPopupIntervalId;

function startAutoPopup() {
  autoPopupIntervalId = setInterval(() => {
    // 순환 팝업 로직
  }, 5000);
}

function stopAutoPopup() {
  clearInterval(autoPopupIntervalId);
}

// 국가를 클릭했을 때, 그나라의 선교사 리스트 
function showMissionariesByCountry(country) {
  const missionaries = flatMissionaries.filter(m => m.country === country);
  const container = document.getElementById("missionary-popup");
  container.innerHTML = `
    <h3>${country} 선교사</h3>
    <ul>
      ${missionaries.map(m => `<li>${m.name}</li>`).join('')}
    </ul>
  `;
  container.style.display = "block";
}
