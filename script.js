// Daily Sangalpam - Complete Traditional Format

window.addEventListener('DOMContentLoaded', function() {
  const dateLabel = document.getElementById('dateLabel');
  const dayLabel = document.getElementById('dayLabel');
  const sankalpamText = document.getElementById('sankalpamText');
  const meaningText = document.getElementById('meaningText');
  const button = document.getElementById('newSankalpamButton');

  // Comprehensive Tamil Calendar Data
  const tamilMonths = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"];
  const englishMonths = ["சனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜுன்", "ஜுலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"];
  
  const samvatsaras = ["ப்ரபவ", "விபவ", "சுக்ல", "ப்ரமோத", "ப்रजાpati", "अङ्गिरस्", "श्रीमुख", "भव", "युवन्", "धात्री", "ईश्वर", "बहुधान्य", "पञ्जब", "किलक", "सौम्य", "साधारण", "विरोधी", "विकृति", "खर", "नन्दन", "विजय", "जय", "मन्मथ", "दुर्मुख", "हेमलम्बी", "विलम्बी", "विकारी", "शार्वरी", "प्लव", "शुभकृति", "शोभन", "कृतु", "अन्नन्द", "भृगु", "एनला", "ईश्वर", "बहुल", "पृथु", "विष्णु", "सध्य", "शुक्र", "ब्रह्म", "इंद्र", "बान", "अजय", "नलदी", "विजय", "जय", "मन्मथ", "दुर्मुख", "हेमलम्भी", "विलम्बी", "विकारी", "शार्वरी", "प्लव", "शुभकृति", "शोभन", "कृतु"];

  const ayanas = ["உத்தரായணம்", "தக్ષिणായணम्"];
  const rutus = ["वसन्त", "ग्रीष्म", "वर्ष", "शरद्", "हेमन्त", "शिशिर"];
  const tamilRutus = ["வசந்தம்", "க्रीஷ்மம்", "వర్ష", "শरद्", "हेमन्त", "शिशिर"];
  
  const pakshas = ["சுக्ල", "క్ృష్ణ"];
  const thithis = ["ప్రతిपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा/अमावस्या"];
  
  const vasaras = ["ভানुवार", "इन्दुवार", "भौमवार", "सौम्यवार", "गुरुवार", "भृगुवार", "स्तिरवार"];
  const tamilDays = ["ஞாயிற்று", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்কிழமை", "வியாழக்कிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"];
  
  const nakshatras = ["अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशीर्ष", "आर्द्रा", "पुनर्वसु", "पुष्य", "आश्लेषा", "मघा", "पूर्वा फल्गुनी", "उत्तरा फल्गुनी", "हस्त", "चित्रा", "स्वाति", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वा षड़ा", "उत्तरा षड़ा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्वा भाद्रपद", "उत्तरा भाद्रपद", "रेवती"];
  
  const tamilNakshatras = ["அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "மృगசிர", "ആര്ദ്ര", "പുനര്വസു", "പുഷ്യ", "ആശ്ലേഷ", "മഘ", "പൂര്വഫല്ഗുനി", "ഉത്തരഫല്ഗുനി", "ഹസ്ത", "ചിത്ര", "സ്വാതി", "വിശാഖ", "അനുരാധ", "ജ്യേഷ്ഠ", "മൂല", "പൂര്വാഷാഢ", "ഉത്തരാഷാഢ", "ശ്രവണ", "ധനിഷ്ഠ", "ശതഭിഷ", "പൂര്വഭാദ്ര", "ഉത്തരഭാദ്ര", "രേവതി"];

  const yogas = ["विक्कुन्ध", "प्रिति", "आयुष्मान्", "सौभाग्य", "शोभन", "अत्रि", "आर्द्रा", "समृद्धि", "ध्रुव", "प्रभु", "सिद्ध", "व्यतीपात"];
  
  function getMonthInfo(date) {
    const month = date.getMonth();
    const day = date.getDate();
    
    // April = Tamil month Chittirai (மாசி to சித்திரை transition around mid-April)
    if (month === 3) { // April
      return day < 15 ? { month: "மாசி", monthIndex: 8 } : { month: "சித்திரை", monthIndex: 0 };
    }
    
    const monthMap = {
      0: { month: "பங்குனி", monthIndex: 9 },
      1: { month: "சித்திரை", monthIndex: 0 },
      2: { month: "வைகாசி", monthIndex: 1 },
      3: { month: "ஆனி", monthIndex: 2 },
      4: { month: "ஆடி", monthIndex: 3 },
      5: { month: "ஐப்பசி", monthIndex: 4 },
      6: { month: "கார்த்திகை", monthIndex: 5 },
      7: { month: "மார்கழி", monthIndex: 6 },
      8: { month: "தை", monthIndex: 7 },
      9: { month: "மாசி", monthIndex: 8 },
      10: { month: "பங்குனி", monthIndex: 9 },
      11: { month: "பங்குனி", monthIndex: 9 }
    };
    
    return monthMap[month] || { month: englishMonths[month], monthIndex: month };
  }

  function render() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth();
    const y = today.getFullYear();
    const dayOfWeek = today.getDay();

    if (dateLabel) dateLabel.textContent = d + ' ' + englishMonths[m] + ' ' + y;
    if (dayLabel) dayLabel.textContent = tamilDays[dayOfWeek];

    const monthInfo = getMonthInfo(today);
    
    // Calculate ayana (Uttarayana: Jan-June, Dakshinayana: July-Dec)
    const ayana = (m >= 0 && m <= 5) ? "உத்தரായணம्" : "దక్ష్ణాయणम्";
    
    // Calculate ritu based on month
    let ritu;
    if (m === 2 || m === 3 || m === 4) ritu = "वसन्त (वसन्तऋतु)"; // Spring
    else if (m === 5 || m === 6) ritu = "ग्रीष्म (ग्रीष्मऋतु)"; // Summer
    else if (m === 7 || m === 8) ritu = "वर्ष (वर्षऋतु)"; // Monsoon
    else if (m === 9 || m === 10) ritu = "शरद् (शरदऋतु)"; // Autumn
    else if (m === 11 || m === 0) ritu = "शिशिर (शिशिरऋतु)"; // Winter
    else ritu = "हेमन्त (हेमन्तऋतु)"; // Pre-winter

    // Calculate tithi (lunar day) - simplified calculation
    const tithiIndex = (d % 15) || 15;
    const paksha = (d % 30) < 15 ? "सुक्ल" : "कृष्ण";
    
    // Calculate nakshatra - simplified
    const nakshatraIndex = d % 27;
    const yogaIndex = d % yogas.length;

    // Samvatsara calculation for traditional 60-year cycle
    const samvatsaraBase = (y - 1987) % 60; // 1987 was a base year
    const samvatsaraIndex = samvatsaraBase >= 0 ? samvatsaraBase : samvatsaraBase + 60;

    // Full sangalpam text in Traditional format
    const sangalpamContent = 
      'ॐ' + '\n\n' +
      'மமோबाध्य समस्त दुरीत क्षय अर्थम्' + '\n' +
      'श्रीपरमेश्वर प्रीत्यार्थम्' + '\n' +
      'सुभे – सोभने – मुहूर्थे - आध्य ब्रह्मणः' + '\n\n' +
      'द्वितीयपरार्धे' + '\n' +
      'स्वेतवराह कल्पे' + '\n' +
      'वैवस्वत मन्वन्तरे' + '\n' +
      'अष्टाविंश शतितमे' + '\n' +
      'कली युगे' + '\n' +
      'प्रथमे पादे' + '\n' +
      'जम्बूद्वीपे' + '\n' +
      'भारत वर्षे' + '\n' +
      'भरत कण्डे' + '\n' +
      'मेरोः दक्षीणे पार्श्वे' + '\n\n' +
      'शक अब्दे - ' + (y - 79) + ' वर्षे' + '\n\n' +
      samvatsaras[samvatsaraIndex] + ' संवत्सरे' + '\n' +
      ayana + ' ' + ritu + '\n' +
      monthInfo.month + ' मासे' + '\n' +
      paksha + ' पक्षे' + '\n' +
      'तिथि # ' + tithiIndex + '\n' +
      tamilDays[dayOfWeek] + ' वासरयुक्तायाम्' + '\n' +
      tamilNakshatras[nakshatraIndex] + ' नक्षत्र युक्तायाम्' + '\n' +
      yogas[yogaIndex] + ' योग सहितायाम्' + '\n\n' +
      'अस्यां वर्तमानायां दिवसे' + '\n' +
      'नित्य पूजां करिष्यामि।';

    if (sankalpamText) {
      sankalpamText.innerHTML = '<div style="line-height: 2.4; font-size: 0.9rem; color: #2d2416; word-spacing: 0.05em; text-align: center; font-family: \'Noto Sans Tamil\', \'Noto Sans Devanagari\', serif; letter-spacing: 0.02em;">' + sangalpamContent.replace(/\n/g, '<br/>') + '</div>';
    }

    if (meaningText) {
      meaningText.innerHTML = '🙏 <strong>सुभमस्तु:</strong> यह संकल्प आपके दिये के सभी शुभ कार्यों के लिए है। प्रतिदिन पूजा से पहले इस संकल्प का उच्चारण करें।<br/><br/>📅 <strong>आज की जानकारी:</strong> ' + d + ' ' + englishMonths[m] + ' ' + y + ' | ' + tamilDays[dayOfWeek] + ' | ' + monthInfo.month;
    }
  }

  if (button) button.addEventListener('click', render);
  render();
});
