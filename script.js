// Tamil Calendar Calculator with Pypanchang Integration
const API_BASE_URL = 'http://localhost:5000';

window.addEventListener('DOMContentLoaded', function() {
  // Initialize date input with today's date
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  document.getElementById('panchang-date').value = dateStr;

  // Load cities
  loadCities();
  
  // Calculate and display Tamil calendar
  calculateTamilCalendar();
});

// Load available cities from backend
async function loadCities() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/locations`);
    if (!response.ok) throw new Error('Failed to load locations');
    
    const locations = await response.json();
    const citySelect = document.getElementById('city-select');
    
    Object.keys(locations).forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  } catch (error) {
    console.log('Note: Backend not running yet. Run: python app.py');
  }
}

// Handle city selection
async function onCityChange() {
  const citySelect = document.getElementById('city-select');
  const selectedCity = citySelect.value;
  
  if (!selectedCity) return;
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/locations`);
    const locations = await response.json();
    const city = locations[selectedCity];
    
    document.getElementById('latitude').value = city.lat;
    document.getElementById('longitude').value = city.lon;
  } catch (error) {
    console.error('Error loading city:', error);
  }
}

// Get user's geolocation
function getGeolocation() {
  const statusDiv = document.getElementById('location-status');
  
  if (!navigator.geolocation) {
    updateStatus('Geolocation is not supported by your browser', 'error');
    return;
  }
  
  updateStatus('📍 Getting your location...', 'loading');
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      document.getElementById('latitude').value = lat.toFixed(4);
      document.getElementById('longitude').value = lon.toFixed(4);
      
      updateStatus(`✅ Location found: ${lat.toFixed(4)}°, ${lon.toFixed(4)}°`, 'success');
    },
    (error) => {
      let errorMsg = 'Unable to get location';
      if (error.code === error.PERMISSION_DENIED) {
        errorMsg = 'Location permission denied. Please enable in browser settings.';
      }
      updateStatus(`❌ ${errorMsg}`, 'error');
    }
  );
}

// Update status message
function updateStatus(message, type) {
  const statusDiv = document.getElementById('location-status');
  statusDiv.textContent = message;
  statusDiv.className = `location-status status-${type}`;
  statusDiv.style.display = 'block';
  
  if (type === 'success') {
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 3000);
  }
}

// Calculate Panchang using Flask backend
async function calculatePanchang() {
  const lat = parseFloat(document.getElementById('latitude').value);
  const lon = parseFloat(document.getElementById('longitude').value);
  const date = document.getElementById('panchang-date').value;
  
  if (!lat || !lon || !date) {
    updateStatus('❌ Please enter latitude, longitude, and date', 'error');
    return;
  }
  
  updateStatus('🔮 Calculating Panchang...', 'loading');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/panchang`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lon,
        date: date
      })
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.success) {
      displayPanchangResult(result.data);
      updateStatus('✅ Panchang calculated successfully', 'success');
    } else {
      updateStatus(`❌ Error: ${result.error}`, 'error');
    }
  } catch (error) {
    console.error('Error:', error);
    updateStatus(`❌ Error: ${error.message}. Is the Flask server running?`, 'error');
  }
}

// Display Panchang results
function displayPanchangResult(data) {
  document.getElementById('result-tithi').textContent = data.tithi.english || '--';
  document.getElementById('result-tithi-tamil').textContent = data.tithi.tamil || '--';
  
  document.getElementById('result-nakshatra').textContent = data.nakshatra.english || '--';
  document.getElementById('result-nakshatra-tamil').textContent = data.nakshatra.tamil || '--';
  
  document.getElementById('result-yoga').textContent = data.yoga.english || '--';
  document.getElementById('result-karana').textContent = data.karana.english || '--';
  
  const lat = data.location.latitude.toFixed(4);
  const lon = data.location.longitude.toFixed(4);
  document.getElementById('result-location').textContent = `${lat}°, ${lon}°`;
  
  // Show result section
  document.getElementById('panchang-result').classList.add('show');
}

// Original Tamil Calendar calculation function
function calculateTamilCalendar() {
  const today = new Date();
  const d = today.getDate();
  const m = today.getMonth(); // 0-11
  const y = today.getFullYear();
  const dayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, etc.
  
  // Get day of year
  const start = new Date(y, 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const tamilMonths = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"];
  const tamilDays = ["ஞாயிற்று", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"];
  const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "மிருக சிர", "ஆர்த்திரா", "புனர்வசு", "புஷ்யம்", "ஆசலிஷை", "மக", "பூர்வபல்குனி", "உத்தரபல்குனி", "ஹஸ்த", "சித்திரை", "சுவாதி", "விசாகம்", "அனுராதா", "ஜ்யேஷ்டை", "மூல", "பூர்வாஷாடை", "உத்தராஷாடை", "சிரவணம்", "தனிஷ்டை", "சதயம்", "பூர்வபாடை", "உத்தரபாடை", "ரேவதி"];
  const yogas = ["விக்குண்டம்", "ப்ரீதி", "आयुष्मान", "सौभाग्य", "शोभन", "अत्री", "आर्द्रा", "समृद्ध", "ध्रुव", "प्रभु", "सिद्ध", "व्यतीपात"];
  
  // Calculate Tamil month
  let tamilMonth, tamilMonthIndex;
  
  if (m === 3) { // April
    tamilMonth = (d < 14) ? "பங்குனி" : "சித்திரை";
    tamilMonthIndex = (d < 14) ? 9 : 0;
  } else if (m === 4) { // May
    tamilMonth = (d < 14) ? "சித்திரை" : "வைகாசி";
    tamilMonthIndex = (d < 14) ? 0 : 1;
  } else if (m === 5) { // June
    tamilMonth = (d < 14) ? "வைகாசி" : "ஆனி";
    tamilMonthIndex = (d < 14) ? 1 : 2;
  } else if (m === 6) { // July
    tamilMonth = (d < 14) ? "ஆனி" : "ஆடி";
    tamilMonthIndex = (d < 14) ? 2 : 3;
  } else if (m === 7) { // August
    tamilMonth = (d < 14) ? "ஆடி" : "ஐப்பசி";
    tamilMonthIndex = (d < 14) ? 3 : 4;
  } else if (m === 8) { // September
    tamilMonth = (d < 14) ? "ஐப்பசி" : "கார்த்திகை";
    tamilMonthIndex = (d < 14) ? 4 : 5;
  } else if (m === 9) { // October
    tamilMonth = (d < 14) ? "கார்த்திகை" : "மார்கழி";
    tamilMonthIndex = (d < 14) ? 5 : 6;
  } else if (m === 10) { // November
    tamilMonth = (d < 14) ? "மார்கழி" : "தை";
    tamilMonthIndex = (d < 14) ? 6 : 7;
  } else if (m === 11) { // December
    tamilMonth = (d < 14) ? "தை" : "மாசி";
    tamilMonthIndex = (d < 14) ? 7 : 8;
  } else if (m === 0) { // January
    tamilMonth = (d < 14) ? "மாசி" : "பங்குனி";
    tamilMonthIndex = (d < 14) ? 8 : 9;
  } else if (m === 1) { // February
    tamilMonth = (d < 14) ? "பங்குனி" : "சித்திரை";
    tamilMonthIndex = (d < 14) ? 9 : 0;
  } else { // March
    tamilMonth = "பங்குனி";
    tamilMonthIndex = 9;
  }

  // Calculate Ayana
  let ayana = ((m >= 0 && m <= 5) || (m === 3 && d < 21)) ? "உத்திராயணம்" : "தக்ஷிணாயணம்";

  // Calculate Ritu
  let ritu;
  if (tamilMonthIndex === 0 || tamilMonthIndex === 1) ritu = "வசந்தம்";
  else if (tamilMonthIndex === 2 || tamilMonthIndex === 3) ritu = "க்ரீஷ்மம்";
  else if (tamilMonthIndex === 4 || tamilMonthIndex === 5) ritu = "வர்ஷம்";
  else if (tamilMonthIndex === 6 || tamilMonthIndex === 7) ritu = "சரத்";
  else ritu = "சிசிரம்";

  // Calculate Paksha
  const lunarDay = ((dayOfYear + 11) % 30) + 1;
  let paksha = (lunarDay <= 15) ? "சுக்ல" : "கிருஷ்ண";

  // Calculate Tithi
  let tithiName = "ப्रतिपदै";
  if (lunarDay === 1) tithiName = "ப्रతिપదை";
  else if (lunarDay === 2) tithiName = "द्वितीয";
  else if (lunarDay === 4) tithiName = "చతుర్द";
  else if (lunarDay === 15) tithiName = "पूर्णिमा";

  // Calculate Nakshatra
  const nakshatraIndex = (dayOfYear + 20) % 27;
  const nakshatra = nakshatras[nakshatraIndex];

  // Calculate Yoga
  const yogaIndex = dayOfYear % yogas.length;
  const yoga = yogas[yogaIndex];

  // Vasara is day of week
  const vasara = tamilDays[dayOfWeek];

  // Update HTML
  document.querySelectorAll('.tamil-month').forEach(el => el.textContent = tamilMonth);
  document.querySelectorAll('.ayana').forEach(el => el.textContent = ayana);
  document.querySelectorAll('.ritu').forEach(el => el.textContent = ritu);
  document.querySelectorAll('.paksha').forEach(el => el.textContent = paksha);
  document.querySelectorAll('.nakshatra').forEach(el => el.textContent = nakshatra);
  document.querySelectorAll('.vasara').forEach(el => el.textContent = vasara);
  document.querySelectorAll('.tithi').forEach(el => el.textContent = tithiName);
  
  document.querySelectorAll('.tamil-month-detail').forEach(el => el.textContent = tamilMonth);
  document.querySelectorAll('.ayana-detail').forEach(el => el.textContent = ayana);
  document.querySelectorAll('.ritu-detail').forEach(el => el.textContent = ritu);
  document.querySelectorAll('.paksha-detail').forEach(el => el.textContent = paksha);
  document.querySelectorAll('.nakshatra-detail').forEach(el => el.textContent = nakshatra);
  document.querySelectorAll('.vasara-detail').forEach(el => el.textContent = vasara);
  document.querySelectorAll('.tithi-detail').forEach(el => el.textContent = tithiName);
}
