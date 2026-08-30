# Music-app-v2

A premium, client-side web audio player engineered for high-fidelity local playback. Music-app-v2 (AKKI Studio Edition) transforms standard local audio files into an immersive listening experience using the native Web Audio API, running entirely within the browser with zero backend dependencies or cloud tracking.

## Core Features
* **16D HRTF Spatial Audio:** Hardware-accelerated 3D soundstage using Head-Related Transfer Functions (`PannerNode`) and synthetic room reverb convolvers for an authentic concert hall illusion. Includes automatic sub-bass compensation and makeup gain.
* **Studio Equalization:** A parametric EQ featuring pre-configured profiles (Bass Boost, Vocal, Pop, Rock) to customize the frequency response of your local tracks on the fly.
* **Dynamic Environments:** The UI reacts to your music by extracting ID3 metadata (via `jsmediatags`) and generating high-radius blurred backgrounds from embedded album art.
* **Algorithmic Visualizers:** Real-time canvas rendering of frequency and time-domain data, featuring standard Frequency Bars, Waveforms, Pulse dynamics, and beat-reactive gravity Particles.
* **Advanced Playback Engine:** Seamless crossfading track transitions, a dedicated "Up Next" queue system, and full playback speed control (0.5x to 2.0x).
* **Glassmorphic UI & Vinyl Mode:** A fully responsive, dark-themed interface with an optional aesthetic toggle that transforms static album art into a rotating vinyl disc tied to the active playback state.

## Technical Architecture

| Component | Technology Utilized |
| :--- | :--- |
| **Frontend Core** | Vanilla JavaScript (ES6+), HTML5, CSS3 (CSS Variables, Glassmorphism) |
| **Audio Processing** | Web Audio API (`AudioContext`, `BiquadFilterNode`, `ConvolverNode`) |
| **Metadata Parsing** | `jsmediatags.min.js` (Client-side ID3 tag extraction) |
| **Data Persistence** | Browser `localStorage` (Favorites array, Theme state, EQ preferences) |

## Quick Start
1. Clone or download the repository to your local machine.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Drag and drop your local audio files (`.mp3`, `.wav`, `.flac`, `.m4a`) into the drop zone, or click to browse.
4. Put on headphones to accurately experience the 16D spatial audio effect.

## Keyboard Shortcuts
* **Space** – Play/Pause
* **Arrow Left/Right** – Seek backward/forward 5 seconds
* **Arrow Up/Down** – Adjust volume
* **M** – Mute/Unmute
* **N / P** – Next / Previous track
* **Q** – Toggle Up Next Queue
* **F** – Toggle Favorites filter
* **/** – Focus Search bar
