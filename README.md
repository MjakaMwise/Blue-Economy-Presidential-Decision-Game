
# Blue Economy Presidential Decision Game 🎮🌊

An interactive simulation where you step into the shoes of a president making tough decisions to shape a nation’s blue economy. Alongside, the repo includes an experimental **Virtual Mouse** powered by computer vision and hand-tracking.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Game Setup](#game-setup)  
- [Virtual Mouse (mouse.py)](#virtual-mouse-mousepy) 
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## About

The **Blue Economy Presidential Decision Game** challenges players to balance economic growth, environmental sustainability, and social welfare. Your policy choices will ripple through fisheries, shipping, marine conservation, and tourism — will you leave behind prosperity or crisis?

In addition, the repo includes `mouse.py`, a **hand gesture-controlled virtual mouse** built with OpenCV, Mediapipe, and PyAutoGUI. This is a cool experimental tool for controlling your computer without touching the mouse.

---

## Features

### 🎮 Game
- Realistic decision-making scenarios for blue economy governance.  
- Multiple outcomes depending on your choices.  
- Metrics tracking (economy, environment, public welfare).  

### 🖱️ Virtual Mouse
- Cursor control with index finger.  
- Gestures:  
  - **Left Click** → Thumb + Index Finger  
  - **Right Click** → Thumb + Middle Finger  
  - **Drag** → Thumb + Ring Finger  
  - **Scroll** → Thumbs Up (scroll up) / Thumbs Down (scroll down)  
- Smooth cursor movement with exponential smoothing.  

---

## Tech Stack

- **Game Frontend**: JavaScript/TypeScript, HTML, CSS  
- **Virtual Mouse**: Python, OpenCV, Mediapipe, PyAutoGUI  
- **Other Tools**: NPM, Vite (if used for game), etc.  

---

## Game Setup

### Prerequisites
- Node.js (>= 16.x recommended)  
- npm or yarn  

### Installation
```bash
git clone https://github.com/MjakaMwise/Blue-Economy-Presidential-Decision-Game.git
cd Blue-Economy-Presidential-Decision-Game
npm install
````

### Run Game

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run serve
```

---

## Virtual Mouse (`mouse.py`)

### Requirements

* Python 3.8+
* Dependencies:

  ```bash
  pip install opencv-python mediapipe pyautogui
  ```

### Run Virtual Mouse

```bash
python mouse.py
```

### Controls

* **Move Cursor** → Index finger moves the pointer.
* **Left Click** → Thumb near Index Finger.
* **Right Click** → Thumb near Middle Finger.
* **Drag** → Thumb near Ring Finger.
* **Scroll** → Thumbs Up/Down.
* **Exit** → Press `Esc`.
---
```
> ⚠️ Tip: Good lighting helps Mediapipe detect hand landmarks more reliably.
```
---

## Project Structure
```
| Path               | Description                                |
| ------------------ | ------------------------------------------ |
| `src/`             | Game source code (frontend, logic, assets) |
| `mouse.py`         | Virtual Mouse with hand-gesture control    |
| `public/`          | Static assets (images, styles, etc.)       |
| `package.json`     | JS/TS dependencies & scripts               |
| `requirements.txt` | Python dependencies (optional, if added)   |
````
---

## Contributing

Pull requests are welcome! To contribute:

1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit changes
4. Push & open a PR

---

## License
```
This project is licensed under the **MIT License**.
See [LICENSE](LICENSE) for details.
```
---

## Contact
```
Author: **[MjakaMwise](https://github.com/MjakaMwise)**
Feel free to open an issue for suggestions or questions.
```


