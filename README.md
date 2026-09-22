# eFootball Best Moments Showcase

A luxury, cinematic, full-responsive showcase website dedicated to displaying top highlight moments from the eFootball game. Built with pure **HTML5**, **Vanilla CSS**, and **Vanilla JavaScript**.

---

## 🌟 Visual Theme & Design Aesthetic
- **Concept**: Dark + Exotic + Elegant + Cinematic + Metallic Gold + Emerald Player Card Vibe.
- **Palette**:
  - **Dominant Black**: `#050607`, `#0B0D0D`
  - **Metallic Gold**: `#C9A227`, `#E5C45A`
  - **Emerald**: `#087F63`, `#043F35`
  - **Teal / Deep Blue Accents**: `#00BFA5`, `#123B50`
  - **Off White**: `#F5F1E6`
- **Typography**: Google Fonts (`Bebas Neue` for titles, `Space Grotesk` for player card labels, `Inter` for body).

---

## 📁 Project File Structure

```
efootball-moments/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── featured.jpg
│   │   ├── moment-1.jpg
│   │   ├── moment-2.jpg
│   │   ├── moment-3.jpg
│   │   ├── moment-4.jpg
│   │   ├── moment-5.jpg
│   │   └── moment-6.jpg
│   │
│   └── videos/
│       ├── featured.mp4
│       ├── moment-1.mp4
│       ├── moment-2.mp4
│       ├── moment-3.mp4
│       ├── moment-4.mp4
│       ├── moment-5.mp4
│       └── moment-6.mp4
│
└── README.md
```

---

## 🎬 How to Add New Videos

Adding a new highlight video to the showcase is simple and modular:

1. **Add Video File**: Place your `.mp4` video file into `assets/videos/moment-7.mp4`.
2. **Add Thumbnail Image**: Place your thumbnail image into `assets/images/moment-7.jpg`.
3. **Update JavaScript (`script.js`)**: Add a new object to the `moments` array:

```javascript
{
    id: 7,
    title: "Unstoppable Volley",
    category: "GOALS", // Options: "GOALS", "SKILLS", "SAVES", "MATCHES", "FUN"
    duration: "00:20",
    thumbnail: "assets/images/moment-7.jpg",
    video: "assets/videos/moment-7.mp4",
    description: "A thunderous first-time volley into the roof of the net.",
    rating: "99",
    position: "CF",
    flag: "🇧🇷",
    stars: "★★★★★"
}
```

---

## ✨ Features
- **Fullscreen Hero Section**: Stadium night ambiance with metallic light rays, emerald volumetric lighting, floating sparkles, and vignette overlays.
- **Featured Video Spotlight**: Large cinematic player with custom poster image, player card badge accents, and fallback support.
- **Dynamic Filter Gallery**: Interactive category filtering (`ALL`, `GOALS`, `SKILLS`, `SAVES`, `MATCHES`) with smooth card hover animations, metallic light sweep, 5px lift, and thumbnail scaling.
- **Modal Video Player**: High-definition video player modal supporting play/pause, volume control, timeline seeking, fullscreen toggle, and automatic stop/reset on modal close.
- **Statistics Counter**: Animated number counters triggered on scroll via Intersection Observer.
- **Fully Responsive**: Optimized for Desktop (3 columns), Tablet (2 columns), and Mobile (1 column with drawer navigation).
