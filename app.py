from flask import Flask, request, jsonify
from flask_cors import CORS
import ephem
from datetime import datetime
import traceback

app = Flask(__name__)
CORS(app)

# Nakshatra names in Tamil (27 nakshatras)
NAKSHATRAS_TAMIL = [
    "அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "மிருக சிர", 
    "ஆர்த்திரா", "புனர்வசு", "புஷ்யம்", "ஆசலிஷை", "மக", 
    "பூர்வபல்குனி", "உத்தரபல்குனி", "ஹஸ்த", "சித்திரை", "சுவாதி", 
    "விசாகம்", "அனுராதா", "ஜ்யேஷ்டை", "மூல", "பூர்வாஷாடை", 
    "உத்தராஷாடை", "சிரவணம்", "தனிஷ்டை", "சதயம்", "பூர్వపాடை", 
    "உத்தரపాடை", "ರేવതி"
]

# English nakshatra names
NAKSHATRAS_ENG = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashirsha",
    "Ardra", "Punarvasu", "Pushya", "Aslesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
    "Visakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
    "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada",
    "Uttara Bhadrapada", "Revati"
]

# Tithi names in Tamil
TITHIS_TAMIL = [
    "ప్రతిపదై", "ద్వితీయ", "త్రితీయ", "చతుర్థ", "పంచమ",
    "ష్ష్యాదశ", "సప్తమ", "అష్టమ", "నవమ", "దశమ",
    "ఏకాదశ", "ద్వాదశ", "త్రయోదశ", "చతుర్దశ", "మీనా"
]

# English tithi names
TITHIS_ENG = [
    "Pratipadai", "Dwiteeya", "Triteeya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadasshi", "Dwadasshi", "Trayodasshi", "Chaturdasi", "Amavasya"
]

def get_lunar_day(moon_phase):
    """Calculate lunar day from moon phase (0-1)"""
    lunar_day = (moon_phase * 30) % 30
    if lunar_day == 0:
        lunar_day = 30
    return int(lunar_day)

def get_nakshatra(jd, lat, lon):
    """Calculate nakshatra based on moon longitude"""
    try:
        obs = ephem.Observer()
        obs.lat = str(lat)
        obs.lon = str(lon)
        obs.date = ephem.Date(jd)
        
        moon = ephem.Moon(obs)
        moon_lon = float(moon.hlon) * 180 / 3.14159265
        moon_deg = moon_lon % 360
        
        nak_size = 360.0 / 27
        nakshatra_index = int(moon_deg / nak_size) % 27
        return nakshatra_index
    except:
        return 0

@app.route('/api/panchang', methods=['POST'])
def calculate_panchang():
    """Calculate Panchang using ephem library"""
    try:
        data = request.json
        lat = float(data.get('latitude', 28.6139))
        lon = float(data.get('longitude', 77.2090))
        
        date_str = data.get('date')
        if date_str:
            date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        else:
            date_obj = datetime.now()
        
        dt_noon = datetime(date_obj.year, date_obj.month, date_obj.day, 12, 0, 0)
        
        obs = ephem.Observer()
        obs.lat = str(lat)
        obs.lon = str(lon)
        obs.date = ephem.Date(dt_noon)
        
        moon = ephem.Moon(obs)
        sun = ephem.Sun(obs)
        
        moon_phase = moon.phase / 100.0
        lunar_day = get_lunar_day(moon_phase)
        
        if lunar_day <= 15:
            paksha = "சுக্ல"
            paksha_eng = "Sukla"
        else:
            paksha = "కృష్ణ"
            paksha_eng = "Krishna"
        
        tithi_index = ((lunar_day - 1) % 15)
        tithi_tamil = TITHIS_TAMIL[tithi_index]
        tithi_eng = TITHIS_ENG[tithi_index]
        
        jd = ephem.Date(dt_noon).jd
        nakshatra_idx = get_nakshatra(jd, lat, lon)
        nakshatra_tamil = NAKSHATRAS_TAMIL[nakshatra_idx]
        nakshatra_eng = NAKSHATRAS_ENG[nakshatra_idx]
        
        day_names = ["ஞாயிற்று", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"]
        day_name = day_names[date_obj.weekday()]
        
        return jsonify({
            'success': True,
            'data': {
                'tithi': {
                    'english': tithi_eng,
                    'tamil': tithi_tamil,
                    'number': lunar_day,
                    'paksha': paksha,
                    'paksha_english': paksha_eng
                },
                'nakshatra': {
                    'english': nakshatra_eng,
                    'tamil': nakshatra_tamil,
                    'number': nakshatra_idx + 1
                },
                'yoga': {
                    'english': 'Yoga',
                    'tamil': 'யોગ',
                    'number': 0
                },
                'karana': {
                    'english': 'Karana',
                    'tamil': 'കരണ',
                    'number': 0
                },
                'day_name': day_name,
                'date': date_obj.strftime('%Y-%m-%d'),
                'location': {
                    'latitude': lat,
                    'longitude': lon
                },
                'moon_phase': round(moon_phase * 100, 1)
            }
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 400

@app.route('/api/locations', methods=['GET'])
def get_common_locations():
    """Return common Indian city coordinates"""
    locations = {
        'Delhi': {'lat': 28.6139, 'lon': 77.2090},
        'Mumbai': {'lat': 19.0760, 'lon': 72.8855},
        'Bangalore': {'lat': 12.9716, 'lon': 77.5946},
        'Hyderabad': {'lat': 17.3850, 'lon': 78.4867},
        'Chennai': {'lat': 13.0827, 'lon': 80.2707},
        'Kolkata': {'lat': 22.5726, 'lon': 88.3639},
        'Pune': {'lat': 18.5204, 'lon': 73.8567},
        'Varanasi': {'lat': 25.3201, 'lon': 82.9079},
        'Ayodhya': {'lat': 26.8124, 'lon': 82.1305},
        'Kanyakumari': {'lat': 8.0883, 'lon': 77.5385},
        'Rishikesh': {'lat': 30.0889, 'lon': 78.2679},
    }
    return jsonify(locations)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'Panchang Calculator', 'engine': 'PyEphem'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
