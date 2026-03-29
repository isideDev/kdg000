# Alchemist's Vault

> Cinematic portfolio of an AI Architect. Built with React, Vite, and Alchemical Principles.

## 🔮 Overview

**Alchemist's Vault** is a high-fidelity, cinematic portfolio experience designed to showcase an AI Architect's digital identity. It features a "Gold-to-White" transition sequence, interactive archive cards, and a custom ambient audio experience.

## ✨ Features

- **Cinematic Entrance Sequence:** Majestic, wide-spaced typography with perfectly timed reveal animations.
- **Interactive Grimoire (Archives):** Framer Motion powered modals for exploring detailed case studies and projects.
- **Dynamic Atmosphere:** Custom WebGL/Canvas-esque noise and gradient effects creating an ethereal environment.
- **Scalable Architecture:** Component-based structure ready for AI Agent driven content updates.

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alchemists-vault.git
   cd alchemists-vault
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🎵 Audio Setup

The application features an ambient audio mode. By default, it generates "Brown Noise" if no background track is found.
To use your custom audio, place an MP3 file at:
`public/underwater_chopin.mp3`

See `public/readme_audio.txt` for more details.

## 🤖 AI Agent Extension Guide

This project is structured to be easily maintained and scaled by AI coding agents.
- **Components (`src/components/`):** Each UI element is modularized. New archives can be added to the `NavGrid.tsx` and data structure.
- **Styles (`src/index.css`):** Global design tokens and alchemical color palettes (`gold`, `white-a`) are managed here.
- **Routing:** Currently a single-page interactive experience. Can be extended using React Router for deeper case study pages.

---
*Noble Alchemy, Secure Archives.*
