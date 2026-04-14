from flask import Flask, request, jsonify
from flask_cors import CORS
from pypanchang import Panchang
from datetime import datetime
import traceback

app = Flask(__name__)
CORS(app)

# Tamil month mapping
TAMIL_MONTHS = {
    "Chaitra": "சித்திரை",
    "Vaishakh": "வைகாசி", 
    "Jyeshth": "ஆனி",
    "Ashadh": "ஆடி",
    "Shravan": "ஐப்பசி",
    "Bhadrapad": "கார்த்திகை",
    "Kartik": "மார்கழி",
    "Margshirsh": "தை",
    "Paush": "மாசி",
    "Magh": "பங்குனி",
    "Phalgun": "பங்குனி",
    "Falgun": "பங்குனி"
}

# Nakshatra names in Tamil
NAKSHATRAS_TAMIL = [
    "அசுவினி", "பரணி", "கிருத்திகை", "ரோஹிணி", "மிருக சிர", 
    "ஆர்த்திரா", "புனர்வசு", "புஷ்யம்", "ஆசலிஷை", "மக", 
    "பூர்வபல்குனி", "உத்தரபல்குனி", "ஹஸ்த", "சித்திரை", "சுவாதி", 
    "விசாகம்", "அனுராதா", "ஜ்யேஷ்டை", "மூல", "பூர்வாஷாடை", 
    "உத்தராஷாடை", "சிரவணம்", "தனிஷ்டை", "சதயம்", "பூர்வபாடை", 
    "உத்தரபாடை", "ரேவதி"
]

# Tithi names in Tamil
TITHIS_TAMIL = [
    "ப్రతిపదை", "ద్వితీయ", "த్రిதీయ", "చతుర్థ", "పంచమ",
    "ષష్ఠ", "సప్తమ", "అష్టమ", "నవమ", "దశమ",
    "ఏకాదశ", "ద్వాదశ", "త్రయోదశ", "చతుర్దశ", "పూర్ణిమ"
]

@app.route('/api/panchang', methods=['POST'])
def calculate_panchang():
    """
    Calculate Panchang details based on GPS coordinates and date
    Expected JSON:
    {
        "latitude": float,
        "longitude": float,
        "date": "YYYY-MM-DD" (optional, defaults to today)
    }
    """
    try:
        data = request.json
        lat = float(data.get('latitude', 28.6139))  # Default to Delhi
        lon = float(data.get('longitude', 77.2090))
        
        date_str = data.get('date')
        if date_str:
            date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        else:
            date_obj = datetime.now()
        
        # Create Panchang instance
        panchang = Panchang(
            date_obj.day,
            date_obj.month,
            date_obj.year,
            lat,
            lon
        )
        
        # Extract Panchang details
        tithi = panchang.tithi()
        nakshatra = panchang.nakshatra()
        yoga = panchang.yoga()
        karana = panchang.karana()
        day_name = panchang.day_name()
        
        # Convert to Tamil if available
        tithi_tamil = TITHIS_TAMIL[int(tithi[1])-1] if tithi[1] else "未知"
        nakshatra_tamil = NAKSHATRAS_TAMIL[int(nakshatra[1])-1] if nakshatra[1] else "未知"
        
        return jsonify({
            'success': True,
            'data': {
                'tithi': {
                    'english': tithi[0],
                    'tamil': tithi_tamil,
                    'number': tithi[1]
                },
                'nakshatra': {
                    'english': nakshatra[0],
                    'tamil': nakshatra_tamil,
                    'number': nakshatra[1]
                },
                'yoga': {
                    'english': yoga[0],
                    'number': yoga[1]
                },
                'karana': {
                    'english': karana[0],
                    'number': karana[1]
                },
                'day_name': day_name,
                'date': date_obj.strftime('%Y-%m-%d'),
                'location': {
                    'latitude': lat,
                    'longitude': lon
                }
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
    }
    return jsonify(locations)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'Panchang Calculator'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
