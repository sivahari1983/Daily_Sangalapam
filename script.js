// Daily Sangalpam - Simple Working Version

window.addEventListener('DOMContentLoaded', function() {
  const dateLabel = document.getElementById('dateLabel');
  const dayLabel = document.getElementById('dayLabel');
  const sankalpamText = document.getElementById('sankalpamText');
  const meaningText = document.getElementById('meaningText');
  const button = document.getElementById('newSankalpamButton');

  const months = ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி", "சித்திரை", "வைகாசி"];
  const days = ["ஞாயிற்று", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"];
  const yogas = ["விக்குண்டம்", "சுபம்", "ஆயுஷ்மான்"];
  const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை"];
  const tithis = ["ப்ரதிபதை", "த்விதீயை", "த்ருதீயை"];

  function render() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth();
    const y = today.getFullYear();
    const day = today.getDay();

    dateLabel.textContent = d + ' ' + months[m] + ' ' + y;
    dayLabel.textContent = days[day] + ' | ' + nakshatras[d % 3] + ' | ' + yogas[d % 3];

    const text = 'ஸங்கல்பம்\n\nமமோபாத்த ஸமஸ்த துरित क्षयत्वारा ஸ்rீ परमेश्वर प्रीत्यार्थम् सुभाभ्याm - सुभे – सोभनے – मुहूर्थे - आध्य प्राह्णः\n\nத्विตीयपरार्धे - स्वेતवराह कल्पে - वैवসุवत मन्वंतरے - अष्टाविmo शतितमे - कली युगे - प्रथमे पादे\n\n' + d + ' ' + months[m] + ' ' + y + ' - ' + days[day] + ' वासर - ' + nakshatras[d % 3] + ' नक्षत्र - ' + tithis[d % 3] + ' तिथि\n\nनित्य पूजाम अत्य करिष्यें।';

    sankalpamText.innerHTML = '<div style="line-height: 2.2; font-size: 0.95rem; color: #2d2416; word-spacing: 0.1em; text-align: justify;">' + text.replace(/\n/g, '<br/>') + '</div>';

    meaningText.textContent = '🙏 நித्य பூजக: இந்த சங்கल्पം உங்கள் தினசрि பూஜை முனु மனோयોग सहित उच्चарణ कєyुंगेl् ।';
  }

  if (button) button.addEventListener('click', render);
  render();
});
