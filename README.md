# Daily Sangalpam - Pypanchang Integration Setup

## Project Structure Created

```
Daily_Sangalapam/
├── index.html           # Frontend with location input UI
├── script.js            # Updated JavaScript with API integration
├── app.py               # Flask backend with pypanchang
├── requirements.txt     # Python dependencies
└── README.md           # Setup instructions
```

## Setup Instructions

### 1. Install Python Dependencies

```bash
cd /workspaces/Daily_Sangalapam
pip install -r requirements.txt
```

### 2. Start Flask Backend

```bash
python app.py
```

The server will run on `http://localhost:5000`

### 3. Open Frontend

Open `index.html` in a web browser or start a local web server:

```bash
# Option 1: Using Python's built-in server
python -m http.server 8000

# Option 2: Using Node.js http-server (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## Features

### Backend (Flask + Pypanchang)

- **POST /api/panchang** - Calculate Tithi, Nakshatra, Yoga, Karana
  - Input: latitude, longitude, date
  - Output: Precise panchang details based on GPS coordinates
  
- **GET /api/locations** - List common Indian cities with coordinates

### Frontend Features

- 🌍 **City Selection** - Choose from predefined Indian cities
- 📍 **Geolocation** - Get user's GPS coordinates automatically
- 📅 **Date Selection** - Calculate panchang for any date
- 🔮 **Instant Calculation** - Real-time Tithi & Nakshatra
- 🎨 **Bilingual UI** - Tamil and English interface

## How to Use

1. **Select Location:**
   - Choose from dropdown list of cities, OR
   - Click "📡 Get My Location" to use geo-coordinates, OR
   - Manually enter latitude/longitude

2. **Choose Date:**
   - Date selector defaults to today
   - Select any past or future date

3. **Calculate:**
   - Click "🔮 Calculate" button
   - View results: Tithi, Nakshatra, Yoga, Karana

## API Examples

### Calculate Panchang

```bash
curl -X POST http://localhost:5000/api/panchang \
  -H "Content-Type: application/json" \
  -d '{
    "latitude": 13.0827,
    "longitude": 80.2707,
    "date": "2026-04-14"
  }'
```

### Get Cities

```bash
curl http://localhost:5000/api/locations
```

## Files Updated

- **index.html** - Added location picker section and panchang results display
- **script.js** - Added Flask API integration functions
- **app.py** - New Flask backend with pypanchang calculations
- **requirements.txt** - Python dependencies

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Python Flask, Flask-CORS
- **Astronomy:** pypanchang library
- **Languages:** Tamil, English, Sanskrit

## Notes

- Requires Python 3.7+
- Geolocation requires HTTPS in production (localhost works in dev)
- Default location: Delhi (28.6139°N, 77.2090°E)
- Supports timezone-aware calculations
