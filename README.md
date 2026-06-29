# 🎨 Moulish Punker - Creative Web Tools

A collection of interactive HTML5 web applications featuring innovative design tools and multimedia experiences.

---

## 📁 Projects

### 🎭 **Instagram DP Maker** 
*Profile Picture Generator Studio*

An interactive web application for creating custom circular Instagram profile pictures with advanced design controls.

#### Features:
- **Live Canvas Preview** - Real-time 110×110px circular profile picture rendering
- **Gradient Themes** - Pre-designed Instagram gradients:
  - IG Gradient (Sunset vibes)
  - Cyber Purple
  - Electric Mint
  - Matte Carbon
- **Custom Styling**:
  - Text/Monogram input (up to 3 characters)
  - Font color picker with visual swatch
  - Multiple font families:
    - Neo-Grotesk (Plus Jakarta Sans)
    - Bold Impact (Anton)
    - Luxury Serif (Cinzel)
    - Vintage Script (Grand Hotel)
  - Adjustable font size (20px-70px)
- **Texture Overlays**:
  - Tech Matrix Mesh
  - Micro Polka Halftone
  - Retro Analog Noise Grain
  - Sleek Clean (no texture)
- **Dimension Rendering**:
  - 2D Minimal Flat styling
  - 3D Deep Extrusion with layered shadows
- **One-Click Download** - Export as circular PNG file

#### Tech Stack:
- HTML5 Canvas for rendering
- CSS3 with custom properties (variables)
- Vanilla JavaScript
- Google Fonts (Anton, Cinzel, Grand Hotel, Plus Jakarta Sans)

#### Colors:
```
Background: Instagram Dark Mode (#121212, #1c1c1e)
Accent: Instagram Blue (#0095f6)
Text: Light Gray (#f5f5f5)
Borders: Subtle (#262626)
```

---

### 🏍️ **KTM RC 390**
*Raw Engine Sound Experience*

An immersive web player showcasing the raw exhaust sound of the KTM RC 390 BS3 motorcycle with real-time waveform visualization and performance specifications.

#### Features:
- **Audio Playback Control**:
  - Play/Pause functionality
  - Restart button for quick reset
  - Volume control slider (0-100%)
- **Real-Time Waveform Visualizer**:
  - Canvas-based audio visualization
  - Orange gradient stroke with dynamic glow effect
  - Centre reference line
  - Responsive sizing
- **Progress Bar**:
  - Click-to-seek functionality
  - Real-time progress tracking
  - Time display (current/total duration)
  - Animated fill indicator with shadow glow
- **Performance Specifications Display**:
  - 373cc Displacement
  - 43 PS Max Power
  - 10,000 RPM Peak Power
  - 35 Nm Peak Torque
  - 6-speed Gearbox
- **Loading Screen**:
  - Animated progress bar
  - KTM branding
  - Loading state management
- **Responsive Design**:
  - Works on all device sizes
  - Mobile-friendly layout
  - Touch-friendly controls

#### Tech Stack:
- HTML5 Audio API (Web Audio API)
- Canvas for waveform rendering
- CSS3 with clip-path for cutting-edge design
- Vanilla JavaScript
- Google Fonts (Barlow, Barlow Condensed)
- Base64 embedded audio for offline functionality

#### Color Scheme:
```
Primary Orange: #FF6200
Dark Orange: #cc4e00
Pure Black: #0a0a0a
Gray Tones: #1e1e1e, #111
Silver Text: #888, #f0f0f0
```

#### Audio Features:
- Embedded base64-encoded MP3 audio
- Web Audio API for context and analysis
- Frequency bin analysis (1024 FFT size)
- Playback position tracking
- Volume control with visual feedback

---

## 🎯 Key Highlights

| Feature | Instagram DP Maker | KTM RC 390 |
|---------|------------------|-----------|
| **Framework** | Canvas API | Canvas + Web Audio API |
| **Interactivity** | Form Controls | Audio Player |
| **Export** | PNG Download | Audio Playback |
| **Responsiveness** | Mobile-First | Fully Responsive |
| **Styling** | Modern Dark Mode | Performance Focused |
| **Visual Effects** | Gradients & Textures | Waveform Analysis |

---

## 🚀 Getting Started

### Instagram DP Maker
1. Navigate to `/Instagram DP Maker/index.html`
2. Enter your monogram or text (max 3 characters)
3. Select gradient, texture, and font options
4. Adjust font size and color
5. Toggle between 2D and 3D rendering
6. Click "Download Profile Picture" to save as PNG

### KTM RC 390 Sound Player
1. Navigate to `/KTM RC 390/index.html`
2. Wait for audio to load (progress bar indicates status)
3. Click "PLAY SOUND" to hear the engine
4. Use controls to pause, restart, or adjust volume
5. Click on progress bar to seek to specific time
6. View performance specs at the bottom

---

## 🎨 Design Philosophy

Both applications follow modern web design principles:
- **Dark Mode Aesthetic** - Easy on the eyes, premium feel
- **Micro-Interactions** - Smooth transitions and visual feedback
- **Performance Optimized** - Fast loading, smooth animations
- **Accessibility First** - Clear labels, logical tab order
- **Mobile Responsive** - Works seamlessly on all devices

---

## 📱 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari (with Web Audio API support)
- Edge

*Audio context requires user interaction on some browsers (security restriction)*

---

## 💡 Technologies Used

### Core Technologies:
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling (clip-path, gradients, animations)
- **JavaScript (Vanilla)** - No frameworks, pure ES6+
- **Canvas API** - For rendering graphics
- **Web Audio API** - For audio processing (RC 390)

### Fonts:
- Google Fonts: `Barlow`, `Barlow Condensed`, `Anton`, `Cinzel`, `Grand Hotel`, `Plus Jakarta Sans`

---

## 🛠️ Customization

### Instagram DP Maker
- Modify gradient colors in `gradProfiles` object
- Add new font families in the font family select options
- Adjust canvas size (currently 110×110px)
- Add new texture patterns in the texture engine

### KTM RC 390
- Replace audio by changing the `B64_AUDIO` constant
- Customize specs by modifying the `.specs` HTML section
- Adjust colors via CSS variables in `:root`
- Modify visualization parameters (FFT size, line width)

---

## 📄 File Structure

```
Moulish_Punker/
├── Instagram DP Maker/
│   ├── index.html (16.4 KB)
│   └── versel.json
├── KTM RC 390/
│   └── index.html (160.2 KB) [includes embedded audio]
└── README.md
```

---

## 🎯 Use Cases

**Instagram DP Maker:**
- Create professional profile pictures
- Design branded avatars
- Generate custom monograms
- Quick social media graphics

**KTM RC 390:**
- Motorcycle enthusiast showcase
- Brand engagement experience
- Audio visualization demo
- Interactive product experience

---

## 📝 License

This project is open source and available on GitHub.

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements!

---

## 📧 Contact & Support

For questions or suggestions, please visit the repository or create an issue.

---

**Built with ❤️ by Moulish Vishnu**

*Last Updated: 2026*
