// Tamil Calendar Calculator - April 14, 2026

window.addEventListener('DOMContentLoaded', function() {
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

    // Tamil Month Mapping (Tamil months start mid-month in Gregorian calendar)
    // சித்திரை (Apr 14 - May 14) -> Month 0
    // வைகாசி (May 14 - Jun 14) -> Month 1
    // ஆனி (Jun 14 - Jul 14) -> Month 2
    // ஆடி (Jul 14 - Aug 14) -> Month 3
    // ஐப்பசி (Aug 14 - Sep 14) -> Month 4
    // கார்த்திகை (Sep 14 - Oct 14) -> Month 5
    // மார்கழி (Oct 14 - Nov 14) -> Month 6
    // தை (Nov 14 - Dec 14) -> Month 7
    // மாசி (Dec 14 - Jan 14) -> Month 8
    // பங்குனி (Jan 14 - Feb 14) -> Month 9

    const tamilMonths = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"];
    const gregorianMonths = ["சனவரி", "பிப்ரவரി", "மார்ச்", "ஏப்ரல்", "மே", "ஜுன்", "ஜுலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"];
    
    const tamilDays = ["ஞாயிற்று", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"];
    
    const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "மிருக சிர", "ஆர்த்திரா", "புனர்வசு", "புஷ்யம்", "ஆசலிஷை", "மக", "பூர்வபல்குனி", "உத்తரபல்குனி", "ஹஸ்த", "சித்திரை", "சுவாதி", "விசாகம்", "அனுராதா", "ஜ்யேஷ்டை", "மூல", "பூர்வாஷாடை", "உத்தராஷாடை", "சிரவணம்", "தனிஷ்டை", "சதயம்", "பூர்வபாடை", "உத்தரபாடை", "ரேவதி"];
    
    const yogas = ["விக்குண்டம்", "ப்ரீதி", "आयुष्मान", "सौभाग्य", "शोभन", "अत्री", "आर्द्रा", "समृद्ध", "ध्रुव", "प्रभु", "सिद्ध", "व्यतीपात"];
    
    // Calculate Tamil month
    let tamilMonth, tamilMonthIndex;
    const monthDates = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14]; // Each month starts on 14th
    
    if (m === 3) { // April
      if (d < 14) {
        tamilMonth = "பங்குனி";
        tamilMonthIndex = 9;
      } else {
        tamilMonth = "சித்திரை";
        tamilMonthIndex = 0;
      }
    } else if (m === 4) { // May
      if (d < 14) {
        tamilMonth = "சித்திரை";
        tamilMonthIndex = 0;
      } else {
        tamilMonth = "வைகாசி";
        tamilMonthIndex = 1;
      }
    } else if (m === 5) { // June
      if (d < 14) {
        tamilMonth = "வைகாசி";
        tamilMonthIndex = 1;
      } else {
        tamilMonth = "ஆனி";
        tamilMonthIndex = 2;
      }
    } else if (m === 6) { // July
      if (d < 14) {
        tamilMonth = "ஆனி";
        tamilMonthIndex = 2;
      } else {
        tamilMonth = "ஆடி";
        tamilMonthIndex = 3;
      }
    } else if (m === 7) { // August
      if (d < 14) {
        tamilMonth = "ஆடி";
        tamilMonthIndex = 3;
      } else {
        tamilMonth = "ஐப்பசி";
        tamilMonthIndex = 4;
      }
    } else if (m === 8) { // September
      if (d < 14) {
        tamilMonth = "ஐப்பசி";
        tamilMonthIndex = 4;
      } else {
        tamilMonth = "கார்த்திகை";
        tamilMonthIndex = 5;
      }
    } else if (m === 9) { // October
      if (d < 14) {
        tamilMonth = "கார்த்திகை";
        tamilMonthIndex = 5;
      } else {
        tamilMonth = "மார்கழி";
        tamilMonthIndex = 6;
      }
    } else if (m === 10) { // November
      if (d < 14) {
        tamilMonth = "மார்கழி";
        tamilMonthIndex = 6;
      } else {
        tamilMonth = "தை";
        tamilMonthIndex = 7;
      }
    } else if (m === 11) { // December
      if (d < 14) {
        tamilMonth = "தை";
        tamilMonthIndex = 7;
      } else {
        tamilMonth = "மாசி";
        tamilMonthIndex = 8;
      }
    } else if (m === 0) { // January
      if (d < 14) {
        tamilMonth = "மாசி";
        tamilMonthIndex = 8;
      } else {
        tamilMonth = "பங்குனி";
        tamilMonthIndex = 9;
      }
    } else if (m === 1) { // February
      if (d < 14) {
        tamilMonth = "பங்குனி";
        tamilMonthIndex = 9;
      } else {
        tamilMonth = "சித்திரை";
        tamilMonthIndex = 0;
      }
    } else if (m === 2) { // March
      tamilMonth = "பங்குனி";
      tamilMonthIndex = 9;
    }

    // Calculate Ayana (Uttarayana: Jan-June, Dakshinayana: July-Dec)
    let ayana, ayanaName;
    if ((m >= 0 && m <= 5) || (m === 3 && d < 21)) { // Approx Vernal Equinox on March 20-21
      ayana = "உத்திராயணம்";
      ayanaName = "Uttirayana";
    } else {
      ayana = "தக்ஷிணாயணம்";
      ayanaName = "Dakshinayana";
    }

    // Calculate Ritu (Season) - Based on Tamil months and solar position
    let ritu, rituName;
    if (tamilMonthIndex === 0 || tamilMonthIndex === 1) { // சித்திரை, வைகாசி
      ritu = "வசந்தம்";
      rituName = "Vasantha (Spring)";
    } else if (tamilMonthIndex === 2 || tamilMonthIndex === 3) { // ஆனி, ஆடி
      ritu = "க்ரீஷ்மம்";
      rituName = "Greeshma (Summer)";
    } else if (tamilMonthIndex === 4 || tamilMonthIndex === 5) { // ஐப்பசி, கார்த்திகை
      ritu = "வர்ஷம்";
      rituName = "Varsha (Monsoon)";
    } else if (tamilMonthIndex === 6 || tamilMonthIndex === 7) { // மார்கழி, தை
      ritu = "சரத்";
      rituName = "Sharad (Autumn)";
    } else if (tamilMonthIndex === 8 || tamilMonthIndex === 9) { // மாசி, பங்குனி
      ritu = "சிசிரம்";
      rituName = "Sisira (Winter)";
    }

    // Calculate Paksha (Lunar fortnight) based on approximate lunar cycle
    // Simple calculation: Days 1-15 of lunar month = Sukla, Days 16-30 = Krishna
    const lunarDay = ((dayOfYear + 11) % 30) + 1; // Approximately
    let paksha, pakshaName;
    if (lunarDay <= 15) {
      paksha = "சுக்ல";
      pakshaName = "Sukla (Waxing)";
    } else {
      paksha = "கிருஷ்ண";
      pakshaName = "Krishna (Waning)";
    }

    // Calculate Tithi (Lunar day) - Simplified
    const tithi = lunarDay;
    let tithiName;
    if (tithi === 1) tithiName = "ப்ரதிபதை";
    else if (tithi === 2) tithiName = "த்விதீயை";
    else if (tithi === 3) tithiName = "த்ருதீயை";
    else if (tithi === 4) tithiName = "சतுர்த्यै";
    else if (tithi === 5) tithiName = "पञ्चमै";
    else if (tithi === 14) tithiName = "चতुर्दशী";
    else if (tithi === 15) tithiName = "పూర్ణिमा/అमावस్य";
    else tithiName = "தिथि " + tithi;

    // Calculate Nakshatra - Simple calculation based on day of year
    const nakshatraIndex = (dayOfYear + 20) % 27; // Offset approximately
    const nakshatra = nakshatras[nakshatraIndex];

    // Calculate Yoga
    const yogaIndex = dayOfYear % yogas.length;
    const yoga = yogas[yogaIndex];

    // Vasara is simply day of week
    const vasara = tamilDays[dayOfWeek];

    // Update HTML elements
    const updateElement = (id, value) => {
      const elem = document.querySelector(id);
      if (elem) elem.textContent = value;
    };

    updateElement('.tamil-month', tamilMonth);
    updateElement('.ayana', ayana);
    updateElement('.ritu', ritu);
    updateElement('.paksha', paksha);
    updateElement('.nakshatra', nakshatra);
    updateElement('.vasara', vasara);
    updateElement('.tithi', tithiName);
    
    // Update calendar details
    document.querySelectorAll('.tamil-month-detail').forEach(el => el.textContent = tamilMonth);
    document.querySelectorAll('.ayana-detail').forEach(el => el.textContent = ayana + ' (' + ayanaName + ')');
    document.querySelectorAll('.ritu-detail').forEach(el => el.textContent = ritu + ' (' + rituName + ')');
    document.querySelectorAll('.paksha-detail').forEach(el => el.textContent = paksha + ' (' + pakshaName + ')');
    document.querySelectorAll('.nakshatra-detail').forEach(el => el.textContent = nakshatra);
    document.querySelectorAll('.vasara-detail').forEach(el => el.textContent = vasara);
    document.querySelectorAll('.tithi-detail').forEach(el => el.textContent = tithiName);
    document.querySelectorAll('.yoga-detail').forEach(el => el.textContent = yoga);
  }

  calculateTamilCalendar();
});
