'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

export function CircadianSection() {
  const [solarPhase, setSolarPhase] = useState<number>(0);
  const circadianRef = useRef<HTMLElement>(null);

  // Solar Circadian Phases Data (Living Celestial Sanctuary)
  const solarPhases = [
    {
      name: 'Dawn',
      time: '06:00',
      tag: 'Morning Awakening',
      icon: Sunrise,
      sky: 'Pale amber mist breaking over dew-kissed conifers',
      temp: '4,200K',
      kelvinVal: 4200,
      ambience: 'Warm Dew Amber',
      skyGradientCss: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 6%, #FEF8F0 16%, #FDEBD9 30%, #FBD9BE 46%, #F6C5A2 62%, #EEAF87 76%, #E49B72 88%, #D2B7A8 95%, #CFE2CE 100%)',
      textColor: 'text-white',
      subTextColor: 'text-white/80',
      ridgeFill: '#2E4C3D',
      orbGradient: 'from-amber-300 via-amber-400 to-orange-400',
      orbGlow: 'rgba(251, 191, 36, 0.45)',
      bioBenefit: 'Gentle cortisol rise without shock · Awaken soft attentiveness',
      focusType: 'Intentional Planning & Quiet Reflection',
      arcPercent: 12,
      svgX: 140,
      svgY: 175,
      tone: 'Awakens gentle cognitive alertness without cortisol spikes.',
    },
    {
      name: 'Midday',
      time: '12:00',
      tag: 'High Canopy Clarity',
      icon: Sun,
      sky: 'Brilliant equatorial sunlight with sharp leaf shadows',
      temp: '5,600K',
      kelvinVal: 5600,
      ambience: 'Equatorial Horizon Azure',
      skyGradientCss: 'linear-gradient(180deg, #FFFFFF 0%, #FAFDFE 6%, #F0F6FB 16%, #DFEEF8 30%, #C8E2F3 46%, #B0D4EC 62%, #9CC8E6 74%, #B8D8ED 86%, #D6E8F4 94%, #E2ECE1 100%)',
      textColor: 'text-white',
      subTextColor: 'text-white/80',
      ridgeFill: '#1D4559',
      orbGradient: 'from-amber-50 via-sky-100 to-sky-200',
      orbGlow: 'rgba(176, 212, 236, 0.45)',
      bioBenefit: 'Maximum cognitive acuity · Zero blue-light eye strain',
      focusType: 'Deep Analytical & Architecture Flow',
      arcPercent: 48,
      svgX: 500,
      svgY: 45,
      tone: 'Sustained focus for analytical and architecture tasks.',
    },
    {
      name: 'Dusk',
      time: '18:00',
      tag: 'Golden Hour Reflection',
      icon: Sunset,
      sky: 'Terracotta sunset fading into lavender twilight ridges',
      temp: '3,100K',
      kelvinVal: 3100,
      ambience: 'Muted Terracotta Amber',
      skyGradientCss: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDFB 6%, #FDF4ED 16%, #FBE3D3 30%, #F6CBB2 46%, #EDAE8E 62%, #DE8F6B 76%, #C8714C 88%, #9E5B42 95%, #6D5E58 100%)',
      textColor: 'text-white',
      subTextColor: 'text-white/80',
      ridgeFill: '#39261E',
      orbGradient: 'from-orange-400 via-rose-400 to-amber-500',
      orbGlow: 'rgba(249, 115, 22, 0.5)',
      bioBenefit: 'Melatonin onset trigger · Shields biological clock',
      focusType: 'Reflective Reading & Day Synthesis',
      arcPercent: 84,
      svgX: 860,
      svgY: 175,
      tone: 'Wind-down energy for contemplative reading and synthesis.',
    },
    {
      name: 'Midnight',
      time: '00:00',
      tag: 'Starlit Nocturnal Rest',
      icon: Moon,
      sky: 'Deep indigo celestial dome with flickering hearth embers',
      temp: '2,200K',
      kelvinVal: 2200,
      ambience: 'Starlit Hearth Fire',
      skyGradientCss: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 6%, #DEE7F0 16%, #BACCDD 28%, #85A3C4 42%, #4D739F 58%, #254974 72%, #12294A 84%, #0A182F 94%, #08120F 100%)',
      textColor: 'text-white',
      subTextColor: 'text-white/80',
      ridgeFill: '#060D0B',
      orbGradient: 'from-slate-100 via-blue-100 to-amber-200',
      orbGlow: 'rgba(147, 197, 253, 0.45)',
      bioBenefit: 'Zero blue light emissions · Deep restorative nocturnal flow',
      focusType: 'Late-Night Flow & Uninterrupted Stillness',
      arcPercent: 50,
      svgX: 500,
      svgY: 100,
      tone: 'Quiet sanctuary for late-night thinkers and deep solitude.',
    },
  ];

  const { scrollYProgress: circadianScrollProgress } = useScroll({
    target: circadianRef,
    offset: ['start end', 'end start'],
  });
  const meadowParallaxY = useTransform(circadianScrollProgress, [0, 1], ['-6%', '6%']);
  const meadowScale = useTransform(circadianScrollProgress, [0, 0.5, 1], [1.05, 1.02, 1]);

  return (
    <section
      id="circadian"
      ref={circadianRef as any}
      className="relative z-10 w-full overflow-hidden scroll-mt-20 pt-56 sm:pt-64 md:pt-72 lg:pt-80"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Layered Cross-Fading Celestial Skies */}
      {solarPhases.map((phase, idx) => (
        <div
          key={phase.name}
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            background: phase.skyGradientCss,
            opacity: solarPhase === idx ? 1 : 0,
          }}
        />
      ))}

      {/* Symmetrical Centered Ambient Celestial Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 36%, ${solarPhases[solarPhase].orbGlow} 0%, transparent 62%)`,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
        }}
      />

      {/* Unified Celestial Heading Block */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pb-8 sm:pb-12 md:pb-14 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          {/* White Eyebrow */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] mb-3 text-center">
            04 · SOLAR CIRCADIAN RHYTHM
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight text-white leading-tight mb-3 text-center sm:whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
            Light that synchronizes with real-world skies.
          </h2>

          {/* Atmosphere Description */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-white/90 max-w-2xl mx-auto text-center leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            {solarPhases[solarPhase].sky}
          </p>
        </motion.div>
      </div>

      {/* Rolling Green Hills Landscape Diorama (/top-footer.webp) with Parallax */}
      <div className="relative w-full overflow-hidden select-none mt-0">
        <motion.div
          style={{ y: meadowParallaxY, scale: meadowScale }}
          className="w-full will-change-transform pointer-events-none"
        >
          <Image
            src="/top-footer.webp"
            alt="Rimba Living Sanctuary Meadow"
            width={6144}
            height={1028}
            priority
            className="w-full h-auto min-h-[220px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[440px] object-cover object-bottom"
          />
        </motion.div>
        
        {/* Seamless blend gradient directly transitioning grass into footer green */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-b from-transparent via-[#263C24]/70 to-[#263C24] pointer-events-none z-10" />

        {/* Pure Crystal Liquid Glass Timeframe Dock */}
        <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-30 flex justify-center px-2 sm:px-4 pointer-events-auto">
          <div className="inline-flex max-w-full overflow-x-auto no-scrollbar p-1 sm:p-2 rounded-full backdrop-blur-2xl bg-white/10 border border-white/35 items-center gap-1 sm:gap-2 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(255,255,255,0.15),0_16px_36px_rgba(0,0,0,0.25)]">
            {solarPhases.map((phase, idx) => {
              const Icon = phase.icon;
              const isSelected = solarPhase === idx;
              return (
                <button
                  key={phase.name}
                  onClick={() => setSolarPhase(idx)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-sans transition-all duration-300 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'backdrop-blur-xl bg-white/25 border border-white/50 text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.75),0_4px_16px_rgba(0,0,0,0.2)] scale-[1.03] font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/15 font-medium border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-white/80'}`} />
                  <span className="font-semibold text-white">{phase.time}</span>
                  <span className="hidden sm:inline font-normal text-white/90">· {phase.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
