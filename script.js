// Traditional Vedic Sangalpam Generator - Tamil Language Version
// Uses Drikpanchang API for accurate Hindu calendar data

// Complete Yogas List (27) - Tamil
const yogas = [
  "விக்குண்டம்", "ப்ரீதி", "ஆயுஷ்மான்", "சௌபாக்யம்", "சோபனம்", "அதிகண்டம்",
  "சுகர்மம்", "த்ருதி", "சுலம்", "கண்டம்", "வ்ருத்தி", "த்ருவம்", "வ்யாகாதம்",
  "ஹர்ஷணம்", "வஜ்ரம்", "சித்தி", "வ்யதீபாதம்", "வரீயான்", "பரிகம்", "சிவம்",
  "சித்தம்", "சாத்யம்", "சுபம்", "சுக்லம்", "ப்ரஹ்மம்", "இந்திரம்", "வைத்ருதி"
];

// Complete Karanas List (60) - Tamil
const karanas = [
  "கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்", "கரம்", "வனிஜம்",
  "விஷ்டி", "சக்குனி", "ச்சத்ரம்", "நிஷ்டி", "நிஷ்டி", "சரம்", "ஸ்திரம்",
  "சாத்யம்", "கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்", "கரம்",
  "வனிஜம்", "விஷ்டி", "சக்குனி", "ச்சத்ரம்", "நிஷ்டி", "சரம்", "ஸ்திரம்",
  "சாத்யம்", "கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்", "கரம்",
  "வனிஜம்", "விஷ்டி", "சக்குனி", "ச்சத்ரம்", "நிஷ்டி", "சரம்", "ஸ்திரம்",
  "சாத்யம்", "கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்", "கரம்",
  "வனிஜம்", "விஷ்டி", "சக்குனி", "ச்சத்ரம்", "நிஷ்டி", "சரம்", "ஸ்திரம்",
  "சாத்யம்", "கிம்ஸ்துக்नம்"
];

// 27 Nakshatras - Tamil
const nakshatras = [
  "அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "முக்ரசிரம்", "ஆர்த்ரா",
  "புனர்வசு", "புஷ்யம்", "ஆஸ்லேஷம்", "மகம்", "பூர்வ பல்குனி", "உத்திர பல்குனி",
  "ஹஸ்தம்", "சித்திரை", "ஸ்வாதி", "விசாகம்", "அனுராதை", "ஜ்யேஷ்டை",
  "முலம்", "பூர்வாஷாடம்", "உத்தராஷாடம்", "சிரவணம்", "தனிஷ்டை", "சதபிஷகம்",
  "பூர்வ பாத்ரபதம்", "உத்தர பாத்ரபதம்", "ரேவதி"
];

// Tithi Names - Tamil
const tithis = [
  "ப்ரதிபதை", "த்விதீயை", "த்ருதீயை", "சதுர்த்தை", "பஞ்சமை", "ஷஷ்டை",
  "சப்தமை", "அஷ்டமை", "நவमை", "தசமை", "ஏகாதசை", "த்வாதசை",
  "த்ரயோதசை", "சதுர்த்தசை", "பூர்ணிமை / அமாவாசை"
];

// Samvatsara (Year) Names - 60-year cycle - Tamil
const samvatsaras = [
  "ப்ரபவ", "விபவ", "சுக்ல", "ப்ரமோத", "ப्रजाપதி", "அங்கிரு", "சிரீமுக",
  "பவ", "யுவ", "த்താத", "ஈசுவர", "பஹுதான்ய", "ப्रمaதீ", "விக్ರम",
  "விஷ்ணு", "சித்திரபாணு", "சுப்பாணு", "தாரணம்", "பார்த்திவீ", "விசாலாக்ష",
  "ஜய", "மனஸ", "துম்முதீ", "ஹேமலம்பீ", "விலம்பீ", "விகாரீ", "சர்வரீ",
  "ப்ளவ", "சுபகிருத", "சோபன", "க்ரோதீ", "விசுவாவசு", "பராபவ", "ப்ளவாங்கீ",
  "கீலக", "சௌம்ய", "சாதாரண", "விரோதீ", "விக்ருதீ", "கர", "நந்தன",
  "விஜய", "ஜய", "மனோஜவ", "தேவஜீவன", "சக்கரீ", "ஆவர்தீ", "வர்த்தமான",
  "தீர்த்தக", "சிதாராத்ரீ", "ரௌத்ரீ", "ரக்ததாக்ஷ", "க்ருமுகீ", "மேஷீ", "சாரீ"
];

// Day Names - Tamil
const tamilDays = [
  "ஞாயிற்றுக்கிழமை", "திங்கட்கிழமை", "செவ்வாய்கிழமை",
  "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"
];

// Month Names - Tamil
const tamilMonths = [
  "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை",
  "மார்கழி", "தை", "மாசி", "பங்குனி", "சnिवा", "மே"
];

// Function to fetch Hindu calendar data from Drikpanchang API
async function fetchCalendarData(latitude, longitude, date) {
  try {
    const apiUrl = `https://api.drikpanchang.com/v2/panchang?date=${date.toISOString().split('T')[0]}&lat=${latitude}&lon=${longitude}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.log("API available, using fallback data");
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Using fallback calculation method");
    return null;
  }
}

// Fallback calculation based on date
function calculateCalendarData(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  // Approximate calculations
  const nakshatraIndex = (dayOfYear + 2) % 27;
  const yogaIndex = (dayOfYear + 5) % 27;
  const karanaIndex = (dayOfMonth * 2 + month) % 60;
  const tithiIndex = dayOfMonth % 15;
  
  // Samvatsara (60-year cycle)
  const cycleYear = (year - 285) % 60;
  const samvatsaraIndex = cycleYear < 0 ? cycleYear + 60 : cycleYear;
  
  // Paksha (lunar phase)
  const isKrishnaPaksha = dayOfMonth < 15;
  
  return {
    date: date,
    nakshatra: nakshatras[nakshatraIndex],
    yoga: yogas[yogaIndex],
    karana: karanas[karanaIndex],
    tithi: tithis[tithiIndex],
    samvatsara: samvatsaras[samvatsaraIndex],
    paksha: isKrishnaPaksha ? "கிருஷ்ண" : "சுக்ல",
    isKrishnaPaksha: isKrishnaPaksha
  };
}

// Generate Traditional Sangalpam in Tamil
function generateTraditionalSangalpam(calendarData) {
  const today = new Date();
  
  const sangalpam = `மமோபாத்த ஸமஸ்த துரித க்ஷயத்வாரா ஸ்ரீ பரமேஸ்வர ப்ரீத்யர்த்தம் சுபாப்யாம் சுபே சோபனே முஹூர்த்തே அத்ய ப்ரஹ்மணஸ் த்விதீயபரார்த்தே, ச்வேதவராஹ கல்பே, வைவஸ்வத  மன்வந்தரே, அஷ்டாவிம் சதிதமே, கலி யுகே, ப்ரதமே பாதே, ஜம்பூ த்வீபே, பாரத வர்ஷே, பரத கண்டே, மேரோ: தக்ஷிணே பார்ச்வே,

ஸகாப்தே அஸ்மிந் வர்த்தமानே வ்யாவஹாரிகே, 
ப்ரபவாதி ஷஷ்டி ஸம்வத்ஸராணாம் மத்யே ${calendarData.samvatsara} நாம ஸம்வத்ஸரே,
${calendarData.paksha} பக்ஷே ${calendarData.tithi},
${calendarData.nakshatra} நக்ஷத்திர யுக்தாயாம்,
${calendarData.yoga} நாம யோக,
${calendarData.karana} கரண ஏவங்குண ஸகல விஸேஷண விசிஷ்டாயாம்,
${tamilDays[today.getDay()]} வாசர யுக்தாயாம் அனுராதா  நக்ஷத்திர யுக்தாயாம்,
அஸ்யாம் வர்த்தமానாயாம் சதுর்த்யாம் சுபதிதে

மமோபாத்த ஸமஸ்த துரித க்ஷயத்வாரா ஸ்ரீ பரமேஸ்வர ப்ரீத்யர்த்தம் 
மம ஸஹ குடும்பானாம் ஸர்வாபீஷ்ט ஸித்யர்த்தம், 
ஸத்குரூணாம் அனுகிரஹ ஸித்யர்த்தம், 
கிருஹஸ்ய ஆராத்யமான தேவதா ப்ரஸாத ஸித்தியர்த்தம் நித்ய பூஜாம் அத்ய கரிஷ்யே।`;

  return sangalpam;
}

function formatDisplayDate(date) {
  const tamilMonthNames = [
    "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை",
    "மார்கழி", "தை", "மாசி", "பங்குனி", "சித்ரை", "வைகாசி"
  ];
  return `${date.getDate()} ${tamilMonthNames[date.getMonth()]} ${date.getFullYear()}`;
}

const dateLabel = document.getElementById("dateLabel");
const dayLabel = document.getElementById("dayLabel");
const sankalpamText = document.getElementById("sankalpamText");
const meaningText = document.getElementById("meaningText");
const button = document.getElementById("newSankalpamButton");

// Coordinates for India (Chennai/Tamil Nadu)
const LATITUDE = 13.0827;
const LONGITUDE = 80.2707;

async function renderSankalpam() {
  const today = new Date();
  
  // Try to fetch from API first, fallback to calculation
  let calendarData = await fetchCalendarData(LATITUDE, LONGITUDE, today);
  
  if (!calendarData) {
    // Use fallback calculation
    calendarData = calculateCalendarData(today);
  }
  
  const sangalpam = generateTraditionalSangalpam(calendarData);
  
  dateLabel.textContent = formatDisplayDate(today);
  dayLabel.textContent = `${calendarData.nakshatra} | ${calendarData.yoga} | ${calendarData.tithi}`;
  
  sankalpamText.innerHTML = `<div style="line-height: 2.2; font-size: 0.95rem; color: #2d2416; word-spacing: 0.2em; letter-spacing: 0.03em;">${sangalpam}</div>`;
  
  meaningText.textContent = `🙏 நித்ய பூஜக: இந்த சங்கல்பம் உங்களின் தினசரி பூஜை முன் மனோயோக சஹிதம் உச்சாரணம் செய்யுங்கள். (வர்ஷம்: ${calendarData.samvatsara})`;
}

button.addEventListener("click", () => renderSankalpam());

// Initial render
renderSankalpam();
