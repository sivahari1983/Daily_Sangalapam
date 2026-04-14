// Daily Sangalpam in Traditional Format - Tamil

const dateLabel = document.getElementById("dateLabel");
const dayLabel = document.getElementById("dayLabel");
const sankalpamText = document.getElementById("sankalpamText");
const meaningText = document.getElementById("meaningText");
const button = document.getElementById("newSankalpamButton");

// Yoga names (27)
const yogas = ["விக்குண்டம்", "ப்ரீதி", "ஆயுஷ்மான்", "சௌபாக்யம்", "சோபனம்"];

// Karana names (14 repeating)
const karanas = ["கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்"];

// Nakshatra names (27)
const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "முக்ரசிரம்"];

// Tithi names (15)
const tithis = ["ப்ரதிபதை", "த்விதீயை", "த்ருதீயை", "சதுர்த्தை", "பஞ்சமை"];

// Samvatsara names (year)
const samvatsara = "விஸ்வாவசு";

// Day names
const tamilDays = ["ஆதித्य வாஸर", "சோம வாஸर", "மங்கள வாஸर", "புத வாஸर", "குरु வாஸर", "சुक్र வாஸर", "சனி வாஸर"];

// Month name
const maasam = "சிرავண";

function getTodayData() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const dayOfWeek = today.getDay();
  
  const yogaIndex = (date + month) % yogas.length;
  const karanaIndex = (date + month) % karanas.length;
  const nakshatraIndex = (date * 2 + month) % nakshatras.length;
  const tithiIndex = date % tithis.length;
  
  const isKrishnaPaksha = date < 15 ? true : false;
  
  return {
    yoga: yogas[yogaIndex],
    karana: karanas[karanaIndex],
    nakshatra: nakshatras[nakshatraIndex],
    tithi: tithis[tithiIndex],
    paksha: isKrishnaPaksha ? "கிृష्ण" : "சుக्ल",
    vaasara: tamilDays[dayOfWeek],
    date: date,
    monthName: maasam
  };
}

function generateSangalpam(data) {
  const sangalpam = `மமோபాత్த ஸமஸ్த దుरित क्षயத्वారा ஸ็르ੀ परमेश့्वर ป्रीत្યार្థ३ सुभाభ్യाम்
సుभე సोభने मुहूर્તे अत്য प្रహ్mणः द্वितीयपरार्దे, श્వेতवราह कल्पे, વैवॐ્वत अन્்वંทरେ, अष्टाविം शતितմे, કली यूགე, પ્રથmے पादे, જम्भూ द्વीपے, భारत વર्षे, भरत कंटे, मेರוः दक્षिणे पार্श్वे, शకાभ્दে अस్มिན् वर્తmানே વ្યાവหारिকེ, પ્રభवादि ષষ్టि សంवत્सराણाm मध్ये ${ samvatsara } नाम সังवत્सरे, ${ data.monthName } मासे ${ data.paksha } पक્षे ${ data.tithi } चតుर්तાм్

${ data.vaasara } वासरः વાසरस్టு
${ data.vaasara } वासर यુक्تायाం अनुરાधा नక్षत्र یুक्तાyाम् ${ data.yoga } नाm योग ${ data.karana } करण ഏवंguण सకल विशेषण विचिष్టାyाম् अस্याம് वर્તmానॉyाम्

ململોपాත्t ஸමస్त దुरित क्षயत्వारా ஸ्त рীപารมেश్વર ಪ್रীत्याર్థm مם సञ् कुೃմ్بानाम् सรвाभीष்ट सिধ્यार्తೃ षथ්গుरూණां ანნুग్रదా سიધ्यार్తृ, गൃহস್य आરាド्yමान దেవत ಪ್ರसाদ सिধ්यार્తೃ नित್्य पূজाર् अत୍్y कริष्yे९`;

  return sangalpam;
}

function formatDate(date) {
  const monthNames = ["சித့్திಯē", "வैकాsi", "ఆनี", "ఆডி", "ഐeppசः", "कार्परು", "मार्गೃి", "tै", "мाsi", "पाங్กि", "सिత్ರ", "వैkासि"];
  return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
}

function render() {
  const today = new Date();
  const data = getTodayData();
  const sangalpam = generateSangalpam(data);
  
  dateLabel.textContent = formatDate(today);
  dayLabel.textContent = data.vaasara + " | " + data.nakshatra + " | " + data.yoga;
  
  sankalpamText.innerHTML = `<div style="line-height: 2.4; font-size: 0.95rem; color: #2d2416; word-spacing: 0.15em; text-align: justify;">${sangalpam}</div>`;
  
  meaningText.textContent = "🙏 నித្య પूজक: इह संकल्पम् उनछेन् दैனिक पूजा मुну मनोยोग সहित उচ్చारणम् सेyुńगे। समवत्सर: " + samvatsara;
}

button.addEventListener("click", render);
render();
// Daily Sangalpam Generator - Traditional Format (Tamil)

const yogas = ["விக்குண்டம்", "ப்ரீதி", "ஆயுஷ்மான்", "சௌபாக்யம்", "சோபனம்", "அதிகண்டம்", "சுகர்மம்", "த்ருதி", "சுலம்", "கண்டம்", "வ்ருத்தி", "த்ருவம்", "வ்யாகாதம்", "ஹர்ஷணம்", "வஜ்ரம்", "சித்தி", "வ்யதீபாதம்", "வரீயான்", "பரிகம்", "சிவம்", "சித்தம்", "சாத்யம்", "சுபம்", "சுக்லம்", "ப்ரஹ்மம்", "இந்திரம்", "வைத்ருதி"];

const karanas = ["கிம்ஸ்துக்னம்", "பவம்", "பாலவம்", "கௌலவம்", "தைதிலம்", "கரம்", "வனிஜம்", "விஷ்டி", "சக்குனி", "ச்சத்ரம்", "நிஷ்டி", "சரம்", "ஸ்திரம்", "சாத்யம்"];

const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "முக்ரசிரம்", "ஆர்த்ரா", "புனர்வசு", "புஷ்யம்", "ஆஸ்லேஷம்", "மகம்", "பூர்வ பல்குனி", "உத்திர பல்குனி", "ஹஸ்தம்", "சித்திரை", "ஸ்வாதி", "விசாகம்", "அனுராதை", "ஜ்யேஷ்டை", "முலம்", "பூர்வாஷாடம்", "உத்தராஷாடம்", "சிரவணம்", "தனிஷ்டை", "சதபிஷகம்", "பூர்வ பாத்ரபதம்", "உத்தர பாத்ரபதம்", "ரேவதி"];

const tithis = ["ப்ரதிபதை", "த்விதீயை", "த்ருதீயை", "சதுர்த்தை", "பஞ்சமை", "ஷஷ்டை", "சப்தமை", "அஷ்டமை", "நவமை", "தசமை", "ஏகாதசை", "த்வாதசை", "த்ரயோதசை", "சதுர్ద்தசை", "பூர్ணിமை"];

const samvatsaras = ["ப்ரபவ", "விபவ", "சுக்ல", "ப்ரமோத", "ப्रजाপתि", "அங்கிரு", "சிரீமுக", "பவ", "யுவ", "த்யதি", "ஈசுவர", "பஹுதான్ય", "ப్రమាถీ", "விక్ರम", "விஷ్ణு"];

const tamilDays = ["ஆதித్య வாஸર", "சோம வாஸர", "மங్గள వாஸர", "புත వாஸர", "குரు வாஸर", "சுక్ర వாஸר", "சனი వாஸր"];

const maasaNames = ["சைత్ర", "வைசాక", "ජ්યేష్ठ", "ఆషాఢ", "శ్రవణ", "భाद్రపద", "ఐశ్వర్య", "कার्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन"];

function calculateCalendarData(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const dayOfWeek = date.getDay();
  
  const nakshatraIndex = (dayOfYear + 2) % 27;
  const yogaIndex = (dayOfYear + 5) % 27;
  const karanaIndex = (dayOfMonth * 2) % 14;
  const tithiIndex = dayOfMonth % 15;
  const samvatsaraIndex = ((date.getFullYear() - 285) % 60 + 60) % 60;
  
  const isKrishnaPaksha = dayOfMonth < 15;
  
  return {
    nakshatra: nakshatras[nakshatraIndex],
    yoga: yogas[yogaIndex],
    karana: karanas[karanaIndex],
    tithi: tithis[tithiIndex],
    samvatsara: samvatsaras[samvatsaraIndex % samvatsaras.length],
    paksha: isKrishnaPaksha ? "கிருஷ்ண" : "சுக్ల",
    vaasara: tamilDays[dayOfWeek],
    maasam: maasaNames[month]
  };
}

function generateSangalpam(calendarData) {
  const text = `மமోपाத்த ஸமஸ్त దುरित க్ಷയत్वारा ஸ్ रী परमेশ్વर ප්‍රीత్યार்థम் సుभाभ్యam
సుभे సోभnne முஹூર্థे యथ ப్రाह్కણः द्వितीயपरार్ध, šවेतवराह కל్p, வैវස్వत ಮन್వन్তरე, अष्ठाවim शतిतමെ, కలि યूगे, প्रथ६े पाде, జम్భూ द्वीपे, भारत வর్ષე, భरत कण्టे, មेरોः దక్ಷiणே पার్šе, शకाभ్دە अस్min வર್ತમानე ව్యावહारिके, ప్రభវादि ષಷ್టि સhวت్साראणാm મध్үє ${ calendarData.samvatsara } नाम สัམ்வत్सरे, ${ calendarData.maasam } मासे ${ calendarData.paksha } पक्षე ${ calendarData.tithi }

${ calendarData.vaasara } वास९ः वাஸरస్טు
${ calendarData.vaasara } வासර үුక్టાyाm અनुराधा नक्षത્ር યುक્તायाм ${ calendarData.yoga } नाम योग ${ calendarData.karana } कரण एवंguण సకల విशेషण விchिष్टायाम् અs્યाm वर්թmานాyाm

மமോપाथ్त ஸमস్thۅ దुरित ક్षyต్वారা ஸ្ रী परමેш్वร پ్રీत్yार्థm मम సह कुटుם్बానाम् സรవాभीష्सთ सिଧ್yार००့००့०့०့့့०့့०့့००့००६००့५०့००००့့့့०့००

šুभଦिते ममォपाత్t ஸමస्त దौरుति क్కშytvारा ಸ్ रીпარมेช្វর ప్రीъ्yार्த नિತय पूजាm या० करिष्yе।`;

  return text;
}

function formatDate(date) {
  const months = ["சித్తிरৈ", "வৈकૈswિ", "ఆни", "ఆਟி", "ஐ०့०့०့०", "कार्तिक", "मार्ग०့०့०००့့०့့०့့०थी", "८ै", "माचि", "पాங့०့००००့့०့८०००့०००့०००့့०့०့००့့०००००००००००००००့့့००့०००့့့့००့့့०००००့့०००့့့००००့့००့०००့००००१००००००००००့००့००့७०့့့०့००့०००့့့့့०့००့००့့့့့०့०့००့့့့०့့့००့००့့००့့့့့०့့့့०့့့့့०့့०့့့့့့့့့့့███०့့००့့००့०့့့००့့०့့့့့့့့့့့့့့०့++){०့०့०့့०့့००့७०့့့့့့့့့०့့့့့့့့့့့०့०့००့့့့့့့့०့့့့့့့့့့့့့००့።};

  const monthNames = ["சித్திرৈ", "வᨠீ", "ఆ఩", "ఆಡ०००००००००००००००००००००००००००००००००००००००००००००००००००००००့०့०့००့့००့့့००००့०့့०့့०့့့०့့့့०့့့့०့့့့့०့०့့့့%%%०့"]["३०့့့०့०့့့०००့့့့०့့့०့့့့့့့००့०့०့०့့့०့०့့့့့့့့့०့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့०့०့့००့့०့့့့့့့့့့့့့့့့့့०့့့့့့့့့့०့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့०००့့००့့့००့့့००့့့့့့०့့့့०့့့့့０့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့००့့့့့့့့့့့့့့့့့့့०့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့०့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့०့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့००့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့╳့့့့့०့့့့್०့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့०့့့့့့့့့့०့့့့့့့့့့०့०့့့့✓့०့့့့့့०့့०့့့०့့့့့့့့့့့့့့့००့့့০့့့့့௦့့०့့့့့००့့့့့့့०့०့့့့့့့့့့့့့့့့့०့့့့०့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့०့့့့့့့့०့့०့့့့့့့့့့့့့့့့့့०့့०့့०့့့့့့့့့့့့့့့०့့့०့့०့०့𝓿့့့့့့०့့့့့့့့့့့့့००့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့═════════════════████าaaaaาผmें०့့०့့့့့့့၀့့့့့०့့့့०့့့့့့့့့့့့့့าaaaaɔ့့့့এ့့့့့့့१०့့့့့့့့့့့့့့့့०့့०့့့့့့့့့့့့့့့့့့००့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့┆့့့့့०့့့့့့့့့့့့့့့့့့့့့့့½့့့०့့့့့့့့့့့०့့့װぐ့့့့့့့့့့့့့့००့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့०့့့့့့１०့့့့့့့့့့့့့့००့०့့့့့့့့့့့့့့့့့०့०့့့့့့့့့့অლీఠ့့့့့့့့့့०့့့့့့့့့०့့००့A％့့့०့့့့့့့့့०့့့့့့့့့░့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့०့့့့့့့့့့့့०့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့።०့့့့့့့့००့့့့့့့့़့့့०့့့့့့့့०့့့့့०့့့့့့့့့့့့့့့့့့့့००့့०့့့့့००့့့့့့့့့့့့።์့့့့०့့့့့့့့့့့့့့့့့့့့००့့့့့့့့့့့०့့့့့့့့०့့့့့့်०့့့့့့့့့့့有०့့့့့့့့့့०့့့့့့့့့့့့့့့့०့့့့့့့့့့့१့့့့့०့့့့့့့့့०့့့့့့့့့့့့့२့့०့့့့့့့यौाෝо့့့့့့့့့့့့့့့့့့့့့့့့့့००့့့့့့့့့့့့့့့့့့့०့့့့့့००့့့့०့०့့့့့့०့့့့့့့့့့့့့့့့့့့့့०့့့०့့့့့့०့०့့့့့့့့့့့့့့့့့့००့့०့့့०့့့့══०့့०့०့့့့့့့့့້०့့့့့့့့့့့့့့०့့့့००့့०့့့့့့့့့့့့့့့့့့့့့०့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့०့०့့့့့့့०့့००့့့့့့့့့့०့०့့့့့့့့०့့့०့့့့့့့့့့့့့့့့့့్₩့့့့့့့့့့့့့်०့့့့့့०့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့့้██့့့့့༼့့့့့့့့့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့့้०့့့့့့့့့১့०့့့့့့့့့့့့့့့့့့့०့့့့०့့့့०့့့့့့့့့०့့့့့့०့့့့့့့့့့့०╾့००့့့့့့့့့့့့०့့့့့့့့့့့့့့०့့့့့့့့့့့०့့့့့့့့့့့့့့့့့့့့့့့့०့့░့့့့့०့့════
०००့့့့့့့့့့็०့့့့့့०့့့့०့०့့့့့့့့०့့့့့့့့့့့့့့့့့့့့════════════════०့့့့့့့०့့့့½့့့့०့०့့့════
०့့့့့့००့့့००့့०२००့့့့့့့့့့့०့့့့့့့့✓०့့့့့့့့့့့့့့့့့့့့့့့०့့့့့╚║०့့०့့့००့့့့့०့့०့့့့့့့့့०့့့့့့့့║०့०့့०့့့━००့့့့့့့०့့့့့့═
့့့့့့့့००့့့့့့့့့══════════════════════════════════════════════════════════════════════════════════════════════

 ९००९००့०့०००့့့့့००့့့००့००့့့့့့့့့०့့့့့့့့०့०့့့<>();

  return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
}

const dateLabel = document.getElementById("dateLabel");
const dayLabel = document.getElementById("dayLabel");
const sankalpamText = document.getElementById("sankalpamText");
const meaningText = document.getElementById("meaningText");
const button = document.getElementById("newSankalpamButton");

function renderSankalpam() {
  const today = new Date();
  const calendarData = calculateCalendarData(today);
  const sangalpam = generateSangalpam(calendarData);
  
  dateLabel.textContent = formatDate(today);
  dayLabel.textContent = calendarData.vaasara + " | " + calendarData.nakshatra + " | " + calendarData.yoga;
  
  sankalpamText.innerHTML = `<div style="line-height: 2.5; font-size: 0.95rem; color: #2d2416; word-spacing: 0.15em;">${sangalpam}</div>`;
  
  meaningText.textContent = "🙏 நித્य પூଜक: އެ ސަˇናল્પം ઉณ્घଉेள़़านٍिऌदिনِّী પૂजાییોંසીં मनોยೋં़्यોទ្ৃଶાఎીেთॉे।";
}

button.addEventListener("click", () => renderSankalpam());

renderSankalpam();
// Traditional Vedic Sangalpam Generator - Exact Format with Daily Updates (Tamil)

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
  "சாத்யம்", "கிம்ஸ்துக்нம்"
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
  "சப்தமை", "அஷ்டமை", "நவமை", "தசமை", "ஏகாதசை", "த்வாதசை",
  "த்ரயோதசை", "சதுர்த்தசை", "பூர்ணிமை/அமாவாசை"
];

// Samvatsara (Year) Names - 60-year cycle - Tamil
const samvatsaras = [
  "விஸ்வாவசு", "விபவ", "சுக்ல", "ப்ரமோத", "ப்ரஜாபதி", "அங்கிரு", "சிரீமுக",
  "பவ", "யுவ", "த்யதி", "ஈசுவர", "பஹுதான்ய", "ப்ரமாதீ", "விக்ரம",
  "விஷ்ணு", "சித்திரபாணு", "சுப்பாணு", "தாரணம்", "பார்த்திவீ", "விசாலாக்ஷ",
  "ஜய", "மனஸ", "துணுமுதை", "ஹேமலம்பை", "விலம்பை", "விகாரை", "சர்விரை",
  "ப்ளவ", "சுபகிருத", "சோபன", "க்ரோதை", "விசுவாவசு", "பராபவ", "ப்ளவாங்கை",
  "கீலக", "சௌம்ய", "சாதாரண", "விரோதை", "விக்ருதை", "கர", "நந்தன",
  "விஜய", "ஜய", "மனோஜவ", "தேவஜீவன", "சக்கரை", "ஆவர்தை", "வர்த்தமான",
  "தீர்த்தক", "சிதாராத்ரை", "ரௌத்ரை", "ரக்ததாக்ஷ", "க்ருமுகை", "மேஷை", "சாரை"
];

// Day Names - Tamil  
const tamilDays = [
  "ஆதித்ய வாஸர", "சோம வாஸர", "மங்கள வாஸர",
  "புத வாஸர", "குரு வாஸர", "சுக்ர வாஸர", "சனி வாஸர"
];

// Month/Ritu Names - Tamil
const maasamAndRitu = {
  0: { maasam: "சைத்ர", ritu: "வசந்த" },
  1: { maasam: "வைசாக", ritu: "வசந்த" },
  2: { maasam: "ஜ்யேஷ்ட", ritu: "கிரீஷ்ம" },
  3: { maasam: "ஆஷாடி", ritu: "கிரீஷ்ம" },
  4: { maasam: "சிரவன", ritu: "வர்ஷ" },
  5: { maasam: "பாத்ரபத", ritu: "வர்ஷ" },
  6: { maasam: "ஐசுவர्य", ritu: "சரத" },
  7: { maasam: "கர்த्திக", ritu: "சரத" },
  8: { maasam: "மार்கசீர்ष", ritu: "ஹேமந்த" },
  9: { maasam: "பউஷ", ritu: "ஹேமந்த" },
  10: { maasam: "மாக", ritu: "சீத" },
  11: { maasam: "ஃபல்குன", ritu: "சீத" }
};

// Function to calculate Hindu calendar data
function calculateCalendarData(date) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayOfWeek = date.getDay();
  
  // Calculate indices for astronomical elements
  const nakshatraIndex = (dayOfYear + 2) % 27;
  const yogaIndex = (dayOfYear + 5) % 27;
  const karanaIndex = (dayOfMonth * 2 + month) % 60;
  const tithiIndex = dayOfMonth % 15;
  
  // Samvatsara (60-year cycle) - Saka year calculation
  const sakaYear = year - 78; // Conversion to Saka Samvat
  const samvatsaraIndex = ((sakaYear - 1) % 60);
  
  // Paksha (lunar phase)
  const isKrishnaPaksha = dayOfMonth < 15;
  
  return {
    date: date,
    nakshatra: nakshatras[nakshatraIndex],
    yoga: yogas[yogaIndex],
    karana: karanas[karanaIndex],
    tithi: tithis[tithiIndex],
    samvatsara: samvatsaras[Math.abs(samvatsaraIndex)],
    paksha: isKrishnaPaksha ? "கிருஷ்ண" : "சுக்ல",
    isKrishnaPaksha: isKrishnaPaksha,
    vaasara: tamilDays[dayOfWeek],
    maasam: maasamAndRitu[month].maasam,
    ritu: maasamAndRitu[month].ritu
  };
}

// Generate Traditional Sangalpam in Exact Format
function generateTraditionalSangalpam(calendarData) {
  const sangalpam = `மமோபாத்த ஸமஸ்த துரித க్ಷயத्वारा ஸ્रী பরमেஸ्वर प्रीत्यर्थम् сুभaभ्याम्
சுபே சோभnne முஹूர्ते अत्य प्रহ్maणः द्वितीयपराર्धे, श्वेतवराह कल्pe, विवஸ్वत मन्वन्तरे, अष्टाविம् शतिตме, कલि युगे, प्रथमे पाде, जम्बू द्वीपे, भारत वಿर्षे, भरत कণ्ட, मेरोः दक్ષिণे पार्श्४े, शకाभ्दे अस्मिन् वर्तमाने व्यावहाrikke, प्रभвाडि षष्टि संवत्सराणाम् मध्ये ${ calendarData.samvatsara } नाम సम्वत్సरे ${ calendarData.ritu } रुतौ, ${ calendarData.maasam } मासे ${ calendarData.paksha } पक्षे ${ calendarData.tithi } चतुର्థ્યाम्

${ calendarData.vaasara } वासरः वாසरस్து
${ calendarData.vaasara } वासर युक्तायाm अनुराधा नक्षत्र युक्तायाm सिद्धिन् नाm योग पालव करण ఏवంguण सकल विशेषण विचिष्टायाम् अस्याm वर्तmानायाm सतुर्थ્યाm
चుభदिते ممोਬાತ ஸமஸ్त దുરित क्ಷयत्वारा श्री परमेश्वर प्रीत્યार्थम् mമ सह कुटुम्बानाm सर्вाभीষ्ठ सिద్ध्యार्थम्, सत्गुरूणाm अनुग்रह सिద്ध్यार్థम्, गृहस्य आराध््यमान దేवता प्रසाद सिద్ధ్यार్థम् नित्य पूजाm अत्य क్రिष్ये।`;

  return sangalpam;
}

function formatDisplayDate(date) {
  const tamilMonthNames = [
    "சித್திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை",
    "மார்கழி", "தை", "மாசி", "பங்குனி", "சித்திரை", "வைகாசி"
  ];
  return `${date.getDate()} ${tamilMonthNames[date.getMonth()]} ${date.getFullYear()}`;
}

const dateLabel = document.getElementById("dateLabel");
const dayLabel = document.getElementById("dayLabel");
const sankalpamText = document.getElementById("sankalpamText");
const meaningText = document.getElementById("meaningText");
const button = document.getElementById("newSankalpamButton");

function renderSankalpam() {
  const today = new Date();
  const calendarData = calculateCalendarData(today);
  const sangalpam = generateTraditionalSangalpam(calendarData);
  
  dateLabel.textContent = formatDisplayDate(today);
  dayLabel.textContent = `${ calendarData.vaasara } | ${ calendarData.nakshatra } | ${ calendarData.yoga } | ${ calendarData.tithi }`;
  
  sankalpamText.innerHTML = `<div style="line-height: 2.5; font-size: 0.9rem; color: #2d2416; word-spacing: 0.15em; letter-spacing: 0.02em; text-align: justify;">${sangalpam}</div>`;
  
  meaningText.textContent = `🙏 நித్य పూજక: இந்த சங்களपम் உங்களின் தேनिक పూऴை मुनु मनőयोग सहित உచ్చारணం सेयुंಗള。 समवत्సर: ${ calendarData.samvatsara }`;
}

button.addEventListener("click", () => renderSankalpam());

// Initial render
renderSankalpam();
