const FLOAT_INTERVAL = 700;
const FLOAT_COUNT = 0.5;

const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const detailPopup = document.getElementById('detailPopup');

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
  return marker;
});

// 순환 팝업 기능
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

// 플로팅 기도제목
let floatingIndex = 0;
const flatMissionaries = Object.entries(missionaryData).flatMap(([country, names]) =>
  names.map(name => ({ country, name }))
).filter(Boolean);

// 🔶 최근 업데이트일 기준 정렬 (최신 순)
flatMissionaries.sort((a, b) => {
  const aDate = new Date(missionaryInfo[a.name]?.lastUpdate || '2000-01-01');
  const bDate = new Date(missionaryInfo[b.name]?.lastUpdate || '2000-01-01');
  return bDate - aDate;
});

function showFloatingMissionary() {
  for (let i = 0; i < FLOAT_COUNT; i++) {
    const item = flatMissionaries[(floatingIndex + i) % flatMissionaries.length];
    if (!item) continue;
    const { country, name } = item;
    const [lat, lng] = latlngs[country] || [0, 0];
    const iconUrl = countryIcons[country];
    const prayer = prayerSamples[Math.floor(Math.random() * prayerSamples.length)];

    const info = missionaryInfo[name];
    const last = new Date(info.lastUpdate);
    const now = new Date();
    const diff = (now - last) / (1000 * 60 * 60 * 24);
    const isRecent = diff < 60;
    const nameStyle = isRecent ? "style='color: orange; font-weight: bold;'" : "";

    const div = document.createElement("div");
    div.className = "floating-missionary";
    div.innerHTML = `<img src="${iconUrl}" alt="icon"><b ${nameStyle}>${name}</b><span>${prayer}</span>`;

    const point = map.latLngToContainerPoint([
      lat + (Math.random() - 0.5) * 3,
      lng + (Math.random() - 0.5) * 3
    ]);
    div.style.left = `${point.x}px`;
    div.style.top = `${point.y}px`;

    document.body.appendChild(div);
    setTimeout(() => div.remove(), FLOAT_INTERVAL * 2);
  }
  floatingIndex = (floatingIndex + FLOAT_COUNT) % flatMissionaries.length;
}

setInterval(showFloatingMissionary, FLOAT_INTERVAL);
