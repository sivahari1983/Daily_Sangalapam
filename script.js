// Daily Sangalpam - Working Version

window.addEventListener('DOMContentLoaded', function() {
  const dateLabel = document.getElementById('dateLabel');
  const dayLabel = document.getElementById('dayLabel');
  const sankalpamText = document.getElementById('sankalpamText');
  const meaningText = document.getElementById('meaningText');
  const button = document.getElementById('newSankalpamButton');

  const months = ["சனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜுன்", "ஜுலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"];
  const days = ["ஞாயிற்று", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"];
  const yogas = ["விக்குண்டம்", "சுபம்", "பிரிதி"];
  const nakshatras = ["அசுவினி", "பரணி", "கிருத்திகை"];
  const tithis = ["ப்ரதிபதை", "த்விதீயை", "த்ருதீயை"];

  function render() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth();
    const y = today.getFullYear();
    const day = today.getDay();

    if (dateLabel) dateLabel.textContent = d + ' ' + months[m] + ' ' + y;
    if (dayLabel) dayLabel.textContent = days[day] + ' | ' + nakshatras[d % 3] + ' | ' + yogas[d % 3];

    const sankalpamContent = 'ஸங்கல்பம் - சங்கல்பம்' + '\n\n' + 
      'மமோபनिषद् समस्त दुरीत क्षय अर्थम्' + '\n' +
      'श्रीपरमेश्वर प्रीत्यार्थम्' + '\n\n' +
      'वर्तमान शुभमुहूर्थे' + '\n' +
      'आध्य प्राह्णकालिक सन्ध्याम्' + '\n\n' +
      'd वर्ष:' + ' ' + d + ' ' + months[m] + ' ' + y + '\n' +
      'वासर: ' + days[day] + '\n' +
      'नक्षत्र: ' + nakshatras[d % 3] + '\n' +
      'तिथि: ' + tithis[d % 3] + '\n\n' +
      'नित्य पूजां करिष्यामि।';

    if (sankalpamText) {
      sankalpamText.innerHTML = '<div style="line-height: 2.2; font-size: 0.95rem; color: #2d2416; word-spacing: 0.1em; text-align: center; font-family: \'Noto Sans Tamil\', serif;">' + sankalpamContent.replace(/\n/g, '<br/>') + '</div>';
    }

    if (meaningText) {
      meaningText.textContent = 'नित्य पूजकर् - नित्य पूजा करने वाले व्यक्ति को अपने पूजा से पहले इस संकल्प का उच्चारण करना चाहिए।';
    }
  }

  if (button) button.addEventListener('click', render);
  render();
});
