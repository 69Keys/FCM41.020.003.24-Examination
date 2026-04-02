# Villa VR Experience

An immersive, photorealistic VR experience of a luxury villa with multiple furnished rooms, animated pool, and beautiful landscaping. Built with A-Frame and featuring high-quality 3D models and PBR textures.

## ✨ Features

### 🏠 Multiple Rooms
- **Living Room** - Dual sofas with sports car display, wood parquet flooring
- **Bedroom** - Luxury bed, plaster walls, wood flooring
- **Kitchen** - Modern cabinets and counter, marble herringbone flooring

### 🏊 Animated Swimming Pool
- Realistic water animation with wave effects
- Floating motion for dynamic appearance
- Marble tile pool deck

### 🌳 Landscaping
- Maple trees with gentle floating animation (x2)
- Palm tree planters for tropical ambiance (x3)
- Realistic grass lawn

### 🎮 Interactive Controls
- **WASD / Arrow Keys** - Move around
- **Mouse** - Look around and navigate
- **Q** - Move up
- **E** - Move down
- **Space** - Jump (when physics enabled)

## 🎨 Textures Applied

| Texture | Location | Format |
|---------|----------|--------|
| Marble Herringbone | Kitchen Floor, Pool Deck | JPG |
| Plain Plaster | Living Room & Bedroom Walls | JPG |
| Wood Parquet Weave | Living Room & Bedroom Floors | JPG |
| Grass | Lawn/Ground | JPG |

## 📦 3D Models

| Model | Count | Scale | Location |
|-------|-------|-------|----------|
| Sofa (Classic) | 1 | 1.2x | Living Room |
| Sofa (Pink) | 1 | 1.2x | Living Room |
| Bed | 1 | 1.5x | Bedroom |
| Kitchen Cabinets | 2 | 1.5x | Kitchen |
| Sports Car | 1 | 0.8x | Living Room |
| Maple Tree | 2 | 2.5x | Landscape |
| Palm Tree Planter | 3 | 2x | Landscape |

## 📂 Project Structure

```
villa-vr-project/
├── index.html                              # Main A-Frame scene
├── js/
│   ├── pool-animation.js                   # Pool effects
│   └── interactions.js                     # User interactions
├── styles/
│   └── style.css                           # UI & styling
├── assets/
│   ├── models/
│   │   ├── sofa.glb
│   │   ├── sofa_pink.glb
│   │   ├── bed.glb
│   │   ├── basic_kitchen_cabinets_and_counter.glb
│   │   ├── sport_car.glb
│   │   ├── mapel_tree.glb
│   │   └── palm_tree_planter.glb
│   └── textures/
│       ├── TCom_Marbel_TilesHerringbone8_header.jpg
│       ├── TCom_Plaster_Plain_header.jpg
│       └── TCom_Wood_ParquetWeave2_header.jpg
└── README.md
```

## 🚀 How to Run Locally

### Prerequisites
- Modern browser (Chrome, Firefox, Edge)
- Local web server

### Steps

1. **Download/Extract all files**
   ```bash
   unzip villa-vr-project.zip
   cd villa-vr-project
   ```

2. **Start a local server**
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (npx):**
   ```bash
   npx http-server
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Allow camera/mouse permissions
   - Enjoy exploring the villa!

## 🌐 Deployment

### Deploy to Subdomain
To deploy at `https://[YourNumber].ceiscy.com/Examination/`:

1. **Upload all files to your server** via FTP/SFTP maintaining folder structure:
   ```
   /Examination/
   ├── index.html
   ├── js/
   ├── styles/
   ├── assets/
   └── README.md
   ```

2. **Verify file paths** are correct in index.html

3. **Access via browser**:
   ```
   https://[YourNumber].ceiscy.com/Examination/
   ```

## 🖥️ Browser Requirements

### Desktop
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Edge 80+
- ✅ Safari 13+

### VR Headsets
- ✅ Oculus Quest 2
- ✅ HTC Vive
- ✅ PlayStation VR
- ✅ Other WebXR compatible devices

## ⚡ Performance

- **FPS**: 60+ on modern systems
- **Texture Quality**: High-resolution PBR textures
- **Model Optimization**: GLB format for efficient loading
- **Animation**: Smooth easing functions for realistic motion

## 🔧 Technical Implementation

### Technologies Used
- **A-Frame 1.4.2** - WebGL/VR framework
- **Three.js** - 3D graphics engine
- **JavaScript** - Interactive scripting
- **CSS3** - UI styling

### Key Features
1. **Physics System** - Collision detection enabled
2. **Lighting** - Directional, ambient, and point lights with shadows
3. **Animations** - Keyframe animations for pool and trees
4. **Asset Loading** - Efficient GLB model loading
5. **Responsive UI** - Overlay information panel

### Design Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Model Performance | Used GLB format; optimized polygon counts |
| Texture Quality | Applied PBR textures with proper UV mapping |
| Water Animation | Combined position + rotation animations |
| Lighting Realism | Multi-light system with shadow mapping |
| User Navigation | WASD + mouse controls for intuitive movement |

## 📝 Design Choices

1. **Color Scheme**: Neutral walls with accent colors (blues for pool, earth tones for furniture)
2. **Lighting**: Natural daylight simulation with warm interior lights
3. **Layout**: Open-concept living areas with clear room separation
4. **Landscaping**: Mixed tropical and deciduous trees for visual interest
5. **Materials**: Premium furniture with realistic textures

## 🎮 Suggested Exploration Path

1. Start in Living Room - explore dual sofas and sports car
2. Walk through to Bedroom - check out the bed
3. Enter Kitchen - examine modern fixtures
4. Venture outside to the Pool - enjoy the animated water
5. Explore the landscaping with trees

## 📱 VR Experience Tips

- For best VR experience, use in a headset
- Ensure adequate play space
- Test controller compatibility before extended use
- Clear area of obstacles

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Models not showing | Verify file paths in assets/ |
| Textures not loading | Check texture file paths match exactly |
| Low FPS | Reduce draw distance or disable shadows |
| Audio issues | Check browser permissions |
| Controller lag | Update browser and drivers |

## 📄 License

This project uses free assets and is open for educational use.

## 🙏 Credits

- A-Frame by Mozilla VR
- 3D Models - Your collection
- Textures - High-quality PBR library
- Built with modern web technologies

## 📞 Support

For issues or questions:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Test on different browser
4. Check file permissions on server

---

**Enjoy your immersive Villa VR Experience!** 🏠✨