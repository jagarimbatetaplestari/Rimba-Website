# Rimba — Sanctuary for Deep Work & Focus

> An ethereal, organic landing page for Rimba: an interactive 3D diorama ecosystem where time transforms into wilderness.

![Rimba](public/heroes-landing.webp)

## 🌿 Overview

**Rimba** is a digital botanical sanctuary designed for deep work, mindful productivity, and digital tranquility. This repository hosts the official landing page for Rimba, crafted with a high-fidelity organic editorial aesthetic and liquid glass design language.

## ✨ Key Sections & Features

- **Liquid Glass Navigation (`Navbar.tsx`)**: Frosted glass floating navigation with adaptive scroll indicators and seamless anchors.
- **Diorama Hero (`HeroSection.tsx`)**: Pure above-the-fold viewport composition showcasing the 3D floating sanctuary island, living botanical telemetry pills, and store download triggers.
- **The Forest Chronicles (`ChroniclesSection.tsx`)**: 100dvh horizontal scrollytelling journey passing through the Dawn Mist, Canopy Heart, and Ancient Roots.
- **Living Ecosystem (`EcosystemSection.tsx`)**: Interactive tree bough with 6 symmetrical focus widgets, featuring an embedded 5-minute ambient focus timer and procedural audio soundscape preview.
- **Circadian Rhythms (`CircadianSection.tsx`)**: Real-time astronomical sky engine that shifts daylight, dusk, and starfields based on the visitor's local hour.
- **Editorial Knowledge Base (`FaqSection.tsx`)**: 2-column minimalist hairline accordions covering zero-telemetry architecture, soundscapes, and multi-platform availability.
- **Bedrock Sanctuary (`FooterSection.tsx`)**: Organic soil-metaphor footer with botanical directories and brand watermark.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Scrollytelling**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React
- **Audio Engine**: Howler.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jagarimbatetaplestari/Rimba-Website.git

# Enter repository directory
cd Rimba-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Architecture

```
src/
├── app/
│   ├── layout.tsx         # Root layout, fonts, and metadata
│   └── page.tsx           # Clean landing page orchestrator (80 lines)
└── components/
    └── landing/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── ChroniclesSection.tsx
        ├── EcosystemSection.tsx
        ├── CircadianSection.tsx
        ├── FaqSection.tsx
        ├── FooterSection.tsx
        └── ToastNotification.tsx
```

## 📄 License

Proprietary — All rights reserved by Rimba & Jaga Rimba Tetap Lestari.
