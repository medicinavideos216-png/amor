# 💕 Amor - Happy Birthday Gift

A romantic, interactive Happy Birthday webpage with animated tree, flowers, and heartfelt messages.

## 📁 Project Structure

```
amor/
├── index.html                      # Main HTML file
├── file/
│   ├── default.css                 # Styling
│   ├── jquery.min.js               # jQuery library (simplified)
│   ├── functions.js                # Utility functions
│   ├── love.js                      # Tree and flower animation logic
│   ├── jscex.min.js                # Async/await library
│   ├── jscex-parser.js
│   ├── jscex-jit.js
│   ├── jscex-builderbase.min.js
│   ├── jscex-async.min.js
│   ├── jscex-async-powerpack.min.js
│   └── aud.mp3                      # Background music (replace with your own)
└── README.md
```

## 🎨 Features

- 🌹 Animated falling petals and tree
- 💖 Interactive heart button (click to start animation)
- 📝 Customizable birthday messages
- 🎵 Background music support
- 📅 Day counter showing time passed together
- ✨ Beautiful romantic design

## 🚀 Usage

1. Open `index.html` in a modern web browser
2. Edit the messages in the `<div id="code">` section to personalize them
3. Replace `file/aud.mp3` with your own Happy Birthday music
4. Customize the starting date in `functions.js` for the day counter

## ✏️ Customization

### Change Messages
Edit the `<span class="say">` elements in `index.html`:
```html
<span class="say">My beautiful wife 💞</span>
<span class="say">Happy Birthday 🎈</span>
```

### Change Colors
Modify the color values in `file/default.css`:
```css
color: #8a0414; /* Change this to your preferred color */
```

### Add Your Audio
Replace `file/aud.mp3` with your own MP3 file (same name and location)

**🎵 Para usar una canción de Danny Ocean:**
1. Descarga tu canción favorita de Danny Ocean (ej: "Devuélveme el Corazón", "Plan B", etc.)
2. Convierte el archivo a formato .mp3 si es necesario
3. Renómbralo como `aud.mp3`
4. Colócalo en la carpeta `file/`

El archivo debe estar en: `/file/aud.mp3`

### Update Day Counter
Edit the `startDate` in `file/functions.js`:
```javascript
var startDate = new Date(2017, 4, 20); // Month is 0-indexed (4 = May)
```

## 🌐 Browser Compatibility

Works best in modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This is a personal gift project. Feel free to modify and use it as you wish!

## 💝 Notes

- The animation triggers when you click on the heart seed
- Petals will bloom and create a romantic scene
- Messages appear with typewriter effect
- Use keyboard shortcuts to interact or modify as needed

---

**Made with ❤️ for someone special**
