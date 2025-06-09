// 각주가 포함된 전체 코드입니다

// 🔹 플로팅 메시지 표시 주기 (ms 단위)
const FLOAT_INTERVAL = 2000;

// 🔹 한 번에 보여줄 선교사 수 (0.5는 약 1초마다 1명씩 보여줌을 의미)
const FLOAT_COUNT = 0.5;

let autoRotateEnabled = true;

// 🔹 CSS 애니메이션 스타일 동적 삽입
const style = document.createElement('style');
style.textContent = `
@keyframes floatUpFade {
  0% {
    transform: translateY(10px) scale(0.95);
    opacity: 0;
  }
  50% {
    transform: translateY(-5px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) scale(1.02);
    opacity: 0;
  }
}
.floating-missionary {
  animation: floatUpFade ${FLOAT_INTERVAL * 2}ms ease-in-out forwards;
}
`;
document.head.appendChild(style);

// 🔹 Leaflet 지도 생성
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// 🔹 선교사 상세 정보 팝업 엘리먼트
const detailPopup = document.getElementById('detailPopup');

// 🔹 상세 보기 함수
function showDetail(name, latlng) {
  detailPopup.style.display = 'block';
  detailPopup.style.left = '20px';
  detailPopup.style.top = '20px';
  detailPopup.innerHTML = `
    <div class="close-btn" onclick="closeDetail()">✖</div>
    <img src="https://via.placeholder.com/300x180.png?text=${name}" alt="${name}">
    <h3>${name}</h3>
    <p><strong>파송년도:</strong> 2020년</p>
    <p><strong>주요사역:</strong> 교육, 복음전도</p>
    <p><strong>기도제목:</strong> 현지 정착과 건강</p>
  `;
}

function closeDetail() {
  detailPopup.style.display = 'none';
}

// 🔹 국가별 마커 및 팝업 생성
const markers = Object.entries(missionaryData).map(([country, missionaries]) => {
  const [lat, lng] = latlngs[country] || [0, 0];
  const flag = countryFlags[country]
    ? `<img class='flag-icon' src='https://flagcdn.com/w40/${countryFlags[country]}.png'>`
    : "";

  const popupContent = `${flag}<b>${country}</b><br>` +
    missionaries.map(name => {
      const info = missionaryInfo[name];
      const last = new Date(info.lastUpdate);
      const now = new Date();
      const diff = (now - last) / (1000 * 60 * 60 * 24);
      const isRecent = diff < 60;
      const nameStyle = isRecent ? "style='color: orange; font-weight: bold'" : "";
      return `<div class='popup-list' ${nameStyle} onclick='showDetail("${name}", [${lat}, ${lng}])'>${name}</div>`;
    }).join("");

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(popupContent);

  // 🔶 마우스 오버 시 순환 멈춤
  marker.on('mouseover', () => {
    pause = true;
  });
  marker.on('mouseout', () => {
    pause = false;
  });

  return marker;
});


// 🔹 팝업 순환 기능
let currentIndex = 0, pause = false;
document.addEventListener("mouseover", e => {
  if (e.target.closest(".leaflet-popup") || e.target.closest(".popup-list")) pause = true;
});
document.addEventListener("mouseout", e => {
  if (!e.relatedTarget ||
    (!e.relatedTarget.closest(".leaflet-popup") && !e.relatedTarget.closest(".popup-list")))
    pause = false;
});
setInterval(() => {
  if (!pause) {
    markers.forEach(m => m.closePopup());
    markers[currentIndex].openPopup();
    currentIndex = (currentIndex + 1) % markers.length;
  }
}, 3000);

// 🔹 플로팅 기도제목 표시를 위한 데이터 준비
let floatingIndex = 0;
const flatMissionaries = Object.entries(missionaryData).flatMap(([country, names]) =>
  names.map(name => ({ country, name }))
).filter(Boolean);

// 🔹 최근 업데이트일 기준 정렬 (최신부터 오래된 순)
flatMissionaries.sort((a, b) => {
  const aDate = new Date(missionaryInfo[a.name]?.lastUpdate || '2000-01-01');
  const bDate = new Date(missionaryInfo[b.name]?.lastUpdate || '2000-01-01');
  return bDate - aDate;
});

// 🔹 선교사의 업데이트 상태 판단 함수 (최근 60일 이내면 recent)
function getMissionaryStatus(name) {
  const update = missionaryInfo[name]?.lastUpdate;
  if (!update) return 'old';
  const days = (new Date() - new Date(update)) / (1000 * 60 * 60 * 24);
  return days < 60 ? 'recent' : 'old';
}

// 🔹 플로팅 기도제목 표시 함수
function showFloatingMissionary() {
  for (let i = 0; i < FLOAT_COUNT; i++) {
    const item = flatMissionaries[(floatingIndex + i) % flatMissionaries.length];
    if (!item) continue;
    const { country, name } = item;
    const [lat, lng] = latlngs[country] || [0, 0];
    const iconUrl = countryIcons[country];
    const prayer = missionaryInfo[name]?.prayer || "기도제목";
    const isRecent = getMissionaryStatus(name) === 'recent';

    const div = document.createElement("div");
    div.className = "floating-missionary";
    div.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        border: 2px solid ${isRecent ? 'orange' : '#ccc'};
      ">
        <img src="${iconUrl}" alt="icon" style="width: 24px; height: 24px; border-radius: 50%">
        <div>
          <div style="font-weight: bold; color: ${isRecent ? 'orange' : '#333'}">${name}</div>
          <div style="font-size: 13px; color: #555">${prayer}</div>
        </div>
      </div>
    `;

    const point = map.latLngToContainerPoint([
      lat + (Math.random() - 0.5) * 3,
      lng + (Math.random() - 0.5) * 3
    ]);
    div.style.position = 'absolute';
    div.style.left = `${point.x}px`;
    div.style.top = `${point.y}px`;
    div.style.zIndex = 9999;

    document.body.appendChild(div);
    setTimeout(() => div.remove(), FLOAT_INTERVAL * 2);
  }
  floatingIndex = (floatingIndex + FLOAT_COUNT) % flatMissionaries.length;
}

// 🔹 일정 간격으로 플로팅 기도제목 실행
setInterval(showFloatingMissionary, FLOAT_INTERVAL);
