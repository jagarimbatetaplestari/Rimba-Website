'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FooterSectionProps {
  onDownloadClick: (e: React.MouseEvent, store: string) => void;
}

export function FooterSection({ onDownloadClick }: FooterSectionProps) {
  return (
    <footer 
      className="relative z-10 overflow-hidden text-[#F3ECE2] pt-20 pb-14 px-4 sm:px-6 md:px-8"
      style={{
        background: 'linear-gradient(180deg, #263C24 0%, #1F331E 15%, #231B14 42%, #17120D 72%, #0F0B08 100%)',
      }}
    >
      {/* Warm Humus & Bedrock Ambient Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(38, 60, 36, 0.7) 0%, transparent 60%), radial-gradient(circle at 50% 85%, rgba(212, 163, 115, 0.16) 0%, transparent 60%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Metaphor Top Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-16 border-b border-[#3D2D22]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#34D399] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              Living Soil & Canopy Ecosystem
            </div>
            <h3 className="font-serif italic text-2xl md:text-3xl text-[#F3ECE2] font-normal leading-snug">
              “Rooted in quiet focus, nourished by the earth.”
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            {/* Apple App Store */}
            <a
              href="#download"
              onClick={(e) => onDownloadClick(e, 'App Store')}
              className="group px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl backdrop-blur-3xl bg-white/10 hover:bg-white/20 border border-white/25 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_10px_24px_rgba(0,0,0,0.3)] flex items-center gap-3 transition-all active:scale-95 text-[#F3ECE2] cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current text-[#F3ECE2] group-hover:text-[#34D399] transition-colors" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.05 1.7-0.92 2.71 1 .08 2.02-.48 2.62-1.21z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-[#D4A373] tracking-wider leading-none">Download on the</div>
                <div className="text-xs font-black text-[#F3ECE2] leading-tight mt-0.5">App Store</div>
              </div>
            </a>

            {/* Google Play Store */}
            <a
              href="#download"
              onClick={(e) => onDownloadClick(e, 'Google Play')}
              className="group px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl backdrop-blur-3xl bg-white/10 hover:bg-white/20 border border-white/25 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_10px_24px_rgba(0,0,0,0.3)] flex items-center gap-3 transition-all active:scale-95 text-[#F3ECE2] cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current text-[#F3ECE2] group-hover:text-[#34D399] transition-colors" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.02 2.02 0 0 1-.61-.917c-.127-.406-.127-.852 0-1.258V3.989c0-.406 0-.852.127-1.258.107-.34.316-.653.61-.917zM15.207 13.414l2.121 2.121-12.02 6.94 9.899-9.061zm0-2.828L5.308 1.526l12.02 6.94-2.121 2.12zM16.621 12l2.829-2.828 2.828 1.633c.849.49.849 1.9 0 2.39L19.45 14.828 16.62 12z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-[#D4A373] tracking-wider leading-none">Get it on</div>
                <div className="text-xs font-black text-[#F3ECE2] leading-tight mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* 4-Column Soil Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#3D2D22] text-xs">
          {/* Col 1: Brand & Soil Philosophy */}
          <div className="space-y-4">
            <div className="font-display font-extrabold text-xl tracking-tight text-[#F3ECE2]">
              Rimba
            </div>
            <p className="text-[#B5A394] leading-relaxed text-xs max-w-xs font-normal">
              An unhurried 3D sanctuary for mindful concentration. No countdown anxiety, no punitive gamification—just sovereign focus that blooms from fertile soil.
            </p>
            <div className="pt-2 text-[11px] text-[#8C7A6B]">
              Version 0.1.0 · Single Route Sanctuary
            </div>
          </div>

          {/* Col 2: Sanctuary Navigation */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A373]">
              Sanctuary
            </div>
            <ul className="space-y-2.5 text-[#C7B7A8]">
              <li><a href="#download" className="hover:text-[#34D399] transition-colors">Download Apps</a></li>
              <li><a href="#story" className="hover:text-[#34D399] transition-colors">Story Chronicles</a></li>
              <li><a href="#ecosystem" className="hover:text-[#34D399] transition-colors">Living Ecosystem</a></li>
              <li><a href="#circadian" className="hover:text-[#34D399] transition-colors">Circadian Solar Dial</a></li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A373]">
              Principles
            </div>
            <ul className="space-y-2.5 text-[#C7B7A8]">
              <li><a href="#faq" className="hover:text-[#34D399] transition-colors">Sanctuary FAQ</a></li>
              <li><span className="text-[#8C7A6B]">Zero Tree Death Penalty</span></li>
              <li><span className="text-[#8C7A6B]">Real-Time Circadian Sky</span></li>
              <li><span className="text-[#8C7A6B]">100% Local Device Sovereignty</span></li>
            </ul>
          </div>

          {/* Col 4: Highland Acoustics */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A373]">
              Highland Acoustics
            </div>
            <ul className="space-y-2.5 text-[#C7B7A8]">
              <li><a href="#ecosystem" className="hover:text-[#34D399] transition-colors">Highland Rain (432Hz)</a></li>
              <li><a href="#ecosystem" className="hover:text-[#34D399] transition-colors">Cascading River Brook</a></li>
              <li><a href="#ecosystem" className="hover:text-[#34D399] transition-colors">Pine Canopy Whispers</a></li>
              <li><a href="#ecosystem" className="hover:text-[#34D399] transition-colors">Starlit Hearth Campfire</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <div>
            © 2026 Rimba Sanctuary. Crafted with reverent stillness for thoughtful minds.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="/privacy" className="hover:text-[#F3ECE2] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#F3ECE2] transition-colors">Terms</a>
            <a href="/delete-account" className="hover:text-rose-400 text-rose-400/90 transition-colors">Hapus Akun</a>
            <a href="#faq" className="hover:text-[#F3ECE2] transition-colors">FAQ</a>
            <a href="#download" className="hover:text-[#34D399] text-[#34D399] font-medium transition-colors">Get App</a>
          </div>
        </div>

        {/* Giant Soil Bedrock Watermark Wordmark */}
        <div className="relative w-full overflow-hidden text-center select-none pointer-events-none mt-12 -mb-8">
          <span className="font-display font-extrabold text-[clamp(80px,18vw,260px)] leading-none tracking-tighter text-[#261C14]/75 block">
            rimba
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
