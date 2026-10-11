'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onDownloadClick: (e: React.MouseEvent, store: string) => void;
}

export function HeroSection({ onDownloadClick }: HeroSectionProps) {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center justify-between min-h-[100dvh] lg:h-[100dvh] lg:max-h-[1020px] pt-24 sm:pt-28 md:pt-30 pb-4 sm:pb-6 px-4 sm:px-6 overflow-hidden">
      
      {/* 1. BOLD TYPOGRAPHY ABOVE THE ISLAND */}
      <div className="shrink-0 flex flex-col items-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0D3528] tracking-tight leading-[1.08] max-w-5xl mx-auto sm:whitespace-nowrap">
          Focus that naturally <span className="serif-italic text-[#187557] font-normal">blooms.</span>
        </h1>

        <p className="body-sm text-[#4C7567] mt-1.5 sm:mt-2 max-w-4xl mx-auto text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed sm:whitespace-nowrap">
          Turn mindful minutes into a living 3D island sanctuary — zero distraction, no pressure.
        </p>
      </div>

      {/* 2. FLOATING 3D ISLAND DIORAMA */}
      <div className="relative w-full max-w-6xl lg:max-w-7xl flex-1 min-h-[340px] max-h-[540px] md:max-h-[580px] flex items-center justify-center -my-2 sm:-my-4">
        {/* Ambient Ground Shadow & Glow */}
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[75%] h-16 bg-emerald-950/10 rounded-[100%] blur-3xl pointer-events-none" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[60%] h-40 bg-[#187557]/14 rounded-[100%] blur-[80px] pointer-events-none" />

        {/* Island Visual Enchanced to Grand Proportion (Pure Zen Artwork) */}
        <div className="relative w-full h-full float-slow scale-105 sm:scale-110 md:scale-115 transition-transform duration-700">
          <Image
            src="/heroes-landing.webp"
            alt="Rimba 3D Floating Sanctuary Island"
            fill
            className="object-contain filter drop-shadow-[0_24px_48px_rgba(13,53,40,0.16)]"
            priority
            sizes="(max-width: 1280px) 100vw, 1300px"
          />
        </div>
      </div>

      {/* 3. HERO CALL TO ACTION: APP STORE & PLAY STORE */}
      <div id="download" className="relative z-20 shrink-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4 -mt-5 sm:-mt-8 md:-mt-11 mb-2 sm:mb-3">
        {/* Apple App Store */}
        <a
          href="#download"
          onClick={(e) => onDownloadClick(e, 'App Store')}
          className="group px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-3xl bg-white/65 hover:bg-white/85 border border-white/85 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),0_10px_24px_rgba(6,35,25,0.08)] flex items-center gap-2.5 transition-all active:scale-95 text-[#062319] cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-[#062319] group-hover:text-[#187557] transition-colors" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.05 1.7-0.92 2.71 1 .08 2.02-.48 2.62-1.21z"/>
          </svg>
          <div className="text-left">
            <div className="text-[8px] uppercase font-semibold text-[#187557] tracking-wider leading-none">Download on the</div>
            <div className="text-xs sm:text-[13px] font-black text-[#062319] leading-tight mt-0.5">App Store</div>
          </div>
        </a>

        {/* Google Play Store */}
        <a
          href="#download"
          onClick={(e) => onDownloadClick(e, 'Google Play')}
          className="group px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-3xl bg-white/65 hover:bg-white/85 border border-white/85 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),0_10px_24px_rgba(6,35,25,0.08)] flex items-center gap-2.5 transition-all active:scale-95 text-[#062319] cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-[#062319] group-hover:text-[#187557] transition-colors" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.793 12 3.61 22.186a2.02 2.02 0 0 1-.61-.917c-.127-.406-.127-.852 0-1.258V3.989c0-.406 0-.852.127-1.258.107-.34.316-.653.61-.917zM15.207 13.414l2.121 2.121-12.02 6.94 9.899-9.061zm0-2.828L5.308 1.526l12.02 6.94-2.121 2.12zM16.621 12l2.829-2.828 2.828 1.633c.849.49.849 1.9 0 2.39L19.45 14.828 16.62 12z"/>
          </svg>
          <div className="text-left">
            <div className="text-[8px] uppercase font-semibold text-[#187557] tracking-wider leading-none">Get it on</div>
            <div className="text-xs sm:text-[13px] font-black text-[#062319] leading-tight mt-0.5">Google Play</div>
          </div>
        </a>
      </div>

    </section>
  );
}
