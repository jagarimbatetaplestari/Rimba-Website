'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ChroniclesSection } from '@/components/landing/ChroniclesSection';
import { EcosystemSection } from '@/components/landing/EcosystemSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { CircadianSection } from '@/components/landing/CircadianSection';
import { FooterSection } from '@/components/landing/FooterSection';
import { ToastNotification } from '@/components/landing/ToastNotification';

export default function RimbaLandingPage() {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownloadClick = (e: React.MouseEvent, store: string) => {
    e.preventDefault();
    setDownloadToast(`Coming soon on ${store} & Google Play`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3200);
  };

  return (
    <div
      className="relative min-h-screen w-full text-[#0D3528] selection:bg-[#187557]/15 selection:text-[#0D3528] font-display"
      style={{
        background: `linear-gradient(
          180deg,
          #FAFBF9 0%,
          #FAFBF9 12%,
          #F5F8F6 25%,
          #EDF4F0 40%,
          #E5EFE9 55%,
          #EDF4EF 70%,
          #F7FAF8 85%,
          #FFFFFF 100%
        )`,
      }}
    >
      {/* Subtle Atmospheric Mist Glows */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 12%, rgba(24, 117, 87, 0.08) 0%, rgba(255, 255, 255) 0) 65%)',
        }}
      />

      {/* Floating Liquid Glass Navigation */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Liquid Glass Toast Notification */}
      <ToastNotification message={downloadToast} />

      {/* Main Sanctuary Sections */}
      <main>
        {/* Section 01: Hero Above-The-Fold Diorama */}
        <HeroSection onDownloadClick={handleDownloadClick} />

        {/* Section 02: Pinned Horizontal Scrollytelling Lore */}
        <ChroniclesSection />

        {/* Section 03: The Living Ecosystem Widgets */}
        <EcosystemSection />

        {/* Section 04: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 05: Solar Circadian Rhythm Sky Diorama */}
        <CircadianSection />
      </main>

      {/* Soil Metaphor Footer */}
      <FooterSection onDownloadClick={handleDownloadClick} />
    </div>
  );
}
