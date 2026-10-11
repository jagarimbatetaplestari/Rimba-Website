'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Volume2,
  Play,
  Pause,
  Clock,
  BarChart2,
  PieChart,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

export function EcosystemSection() {
  // 5-minute timer state
  const [timerSeconds, setTimerSeconds] = useState(5 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 5 * 60));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(5 * 60);
  };

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/ambient/ambient_1.mp3');
      audioRef.current.loop = true;
    }
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlayingAudio(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="ecosystem" className="relative z-10 pt-2 sm:pt-4 pb-4 sm:pb-8 w-full scroll-mt-20 overflow-hidden">
      
      {/* Editorial Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-14 mb-2 sm:mb-4"
      >
        <div className="eyebrow mb-2 text-[#187557] font-bold text-center tracking-wider">
          02 · THE LIVING ECOSYSTEM
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#062319] tracking-tight leading-snug text-center sm:whitespace-nowrap">
          Instruments of quiet focus, resting in natural balance.
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#1B4D3E] mt-2 leading-relaxed font-semibold text-center">
          Every mindful minute gently nurtures your grove in living harmony.
        </p>
      </motion.div>

      {/* Spatial Stage with the Ancient Mossy Branch Cradle (/section-2.webp) - Edge-to-Edge */}
      <div className="relative w-full min-h-[820px] md:h-[880px] lg:h-[920px] flex items-center justify-center overflow-hidden py-8 md:py-0">
        
        {/* Ancient Mossy Branch Diorama Background */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center justify-center transform-gpu"
          >
            <Image
              src="/section-2.webp"
              alt="Living Sanctuary Bough"
              width={6000}
              height={3375}
              priority
              className="w-full h-full object-cover object-center filter drop-shadow-[0_24px_48px_rgba(6,35,25,0.25)]"
            />
          </motion.div>
        </div>

        {/* Interactive Floating Constellation Elements: Harmonious Symmetrical Liquid Glass Widgets with Zero Overlap */}
        <div className="relative z-20 w-full min-h-[820px] md:h-[880px] lg:h-[920px] max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:block items-center justify-center gap-6 pointer-events-none">
          
          {/* 1. TOP-LEFT CARD (Above Branch): Flora Allocation Donut Chart */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[8%] lg:top-[10%] md:left-4 lg:left-8 z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[225px] sm:w-[230px] p-3.5 rounded-2xl backdrop-blur-3xl bg-white/50 hover:bg-white/60 border border-white/70 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_16px_36px_rgba(6,35,25,0.12)] text-[#062319] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#107553]">
                  <PieChart className="w-3.5 h-3.5 text-[#107553]" />
                  <span>Flora Allocation</span>
                </div>
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-[#094D36] border border-emerald-500/20">
                  TODAY
                </span>
              </div>

              {/* SVG Donut / Pie Chart Visual */}
              <div className="flex items-center gap-3 my-2">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#062319" strokeOpacity="0.08" strokeWidth="9" />
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      fill="none"
                      stroke="#107553"
                      strokeWidth="9"
                      strokeDasharray="122.5 188.5"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      fill="none"
                      stroke="#14B8A6"
                      strokeWidth="9"
                      strokeDasharray="47.1 188.5"
                      strokeDashoffset="-126"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="9"
                      strokeDasharray="18.8 188.5"
                      strokeDashoffset="-176"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xs font-black text-[#062319] leading-none">4.8h</span>
                    <span className="text-[8px] font-bold text-[#1B4D3E] uppercase mt-0.5">Flow</span>
                  </div>
                </div>

                <div className="space-y-1 text-[10px] font-bold text-[#1B4D3E]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#107553]" />
                    <span className="text-[#062319]">65%</span>
                    <span>Deep Pine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span className="text-[#062319]">25%</span>
                    <span>Flow Birch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="text-[#062319]">10%</span>
                    <span>Rest Moss</span>
                  </div>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#062319]/10 text-[10px] font-bold text-[#1B4D3E] flex items-center justify-between">
                <span>Sanctuary Balance</span>
                <span className="text-[#107553] font-black">Harmonized</span>
              </div>
            </motion.div>
          </div>

          {/* 2. TOP-RIGHT PILL (Corner Near Bough): Wildlife & Privacy Liquid Glass Pill */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[8%] lg:top-[10%] md:right-4 lg:right-8 z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="px-4 py-2.5 rounded-full backdrop-blur-3xl bg-white/50 hover:bg-white/60 border border-white/70 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_12px_28px_rgba(6,35,25,0.1)] text-[#062319] flex items-center gap-3 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-[#107553]/15 text-[#107553] flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#107553]" />
              </div>

              <div>
                <div className="text-xs font-black text-[#062319] leading-tight">
                  16+ Wildlife Ecosystem
                </div>
                <div className="text-[10px] text-[#1B4D3E] font-bold">
                  Zero Telemetry · 100% Local Device
                </div>
              </div>

              <div className="flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-[#094D36] border border-emerald-500/20 text-[9px] font-black uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#107553] animate-pulse" />
                <span>Active</span>
              </div>
            </motion.div>
          </div>

          {/* 3. CENTER CRADLE (True Center Valley Dip - Nestled in Bough): Organic Glass Timer Dial */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[26%] lg:top-[28%] md:left-1/2 md:-translate-x-1/2 z-20 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[235px] sm:w-[245px] p-4 rounded-3xl backdrop-blur-3xl bg-white/55 hover:bg-white/65 border border-white/80 shadow-[inset_0_2px_3px_rgba(255,255,255,0.95),0_18px_40px_rgba(6,35,25,0.14)] text-center flex flex-col items-center transition-all duration-300"
            >
              {/* Center Header Badge */}
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#107553]">
                  <Clock className="w-3.5 h-3.5 text-[#107553]" />
                  <span>Focus Interval</span>
                </div>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${
                  isTimerRunning 
                    ? 'bg-emerald-500/20 text-[#094D36] border-emerald-500/30 animate-pulse' 
                    : 'bg-white/60 text-[#1B4D3E] border-white/80'
                }`}>
                  {isTimerRunning ? 'ACTIVE FLOW' : 'STANDBY'}
                </span>
              </div>

              {/* Centered Countdown Digital Display with Vibrant Green Font */}
              <div className="font-mono text-3xl sm:text-4xl font-black text-[#107553] tracking-tight my-1 text-center">
                {formatTimer(timerSeconds)}
              </div>

              {/* Centered Smooth Progress Bar */}
              <div className="w-full max-w-[170px] bg-[#062319]/10 h-1.5 rounded-full overflow-hidden mx-auto mb-3">
                <div 
                  className="bg-[#107553] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${((5 * 60 - timerSeconds) / (5 * 60)) * 100}%` }}
                />
              </div>

              {/* Centered Action Controls */}
              <div className="flex items-center justify-center gap-2 w-full">
                <button
                  onClick={toggleTimer}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#107553] hover:bg-[#0D5E43] text-white text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isTimerRunning ? 'Pause Session' : 'Start Focus'}</span>
                </button>

                <button
                  onClick={resetTimer}
                  className="p-2 rounded-full hover:bg-white/70 text-[#1B4D3E] hover:text-[#062319] transition-all cursor-pointer"
                  title="Reset to 05:00"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* 4. MID-LEFT BRANCH PILL (Perched on Mossy Bough Curve): Binaural Audio Liquid Glass Pill */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[48%] lg:top-[50%] md:left-6 lg:left-12 z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={toggleAudio}
              className="px-4 py-2.5 rounded-full backdrop-blur-3xl bg-white/50 hover:bg-white/60 border border-white/70 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_12px_28px_rgba(6,35,25,0.1)] text-[#062319] flex items-center gap-3 cursor-pointer transition-all active:scale-95"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                isPlayingAudio ? 'bg-[#107553] text-white' : 'bg-[#107553]/15 text-[#107553]'
              }`}>
                {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </div>

              <div>
                <div className="text-xs font-black text-[#062319] leading-tight">
                  Highland Rain · 432Hz
                </div>
                <div className="text-[10px] text-[#1B4D3E] font-bold">
                  {isPlayingAudio ? 'Audio Playing Now' : 'Click to preview audio'}
                </div>
              </div>

              {/* Animated Waveform Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-4 ml-1">
                {[0.4, 0.8, 0.6, 1, 0.5].map((scale, i) => (
                  <div
                    key={i}
                    className={`w-0.5 bg-[#107553] rounded-full transition-all duration-300 ${
                      isPlayingAudio ? 'animate-pulse' : 'h-1.5'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${scale * 14}px` : '4px',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* 5. MID-RIGHT BRANCH CARD (Perched on Mossy Bough Curve): Weekly Consistency Bar Chart Card */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[48%] lg:top-[50%] md:right-6 lg:right-12 z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[225px] sm:w-[230px] p-3.5 rounded-2xl backdrop-blur-3xl bg-white/50 hover:bg-white/60 border border-white/70 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_16px_36px_rgba(6,35,25,0.12)] text-[#062319] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#107553]">
                  <BarChart2 className="w-3.5 h-3.5 text-[#107553]" />
                  <span>Consistency Index</span>
                </div>
                <span className="text-[11px] font-black text-[#107553]">94%</span>
              </div>

              <div className="text-xs font-black text-[#062319] mb-2">
                14.8h Focused This Week
              </div>

              {/* 7-Day Mini Bar Chart */}
              <div className="flex items-end justify-between gap-1 h-12 pt-1 pb-1 border-b border-[#062319]/10 mb-2">
                {[
                  { day: 'M', h: '2.0h', pct: '50%' },
                  { day: 'T', h: '3.2h', pct: '80%' },
                  { day: 'W', h: '2.5h', pct: '62%' },
                  { day: 'T', h: '4.0h', pct: '100%' },
                  { day: 'F', h: '3.5h', pct: '88%' },
                  { day: 'S', h: '1.8h', pct: '45%' },
                  { day: 'S', h: '2.8h', pct: '70%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-0.5 group/bar relative">
                    <div className="absolute -top-5 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-[#062319] text-white text-[8px] font-mono px-1 py-0.5 rounded pointer-events-none whitespace-nowrap">
                      {item.h}
                    </div>
                    <div className="w-full bg-[#107553]/15 rounded-t-sm h-full flex items-end">
                      <div 
                        className={`w-full rounded-t-sm transition-all duration-700 ${
                          idx === 3 ? 'bg-[#107553]' : 'bg-[#107553]/65 hover:bg-[#107553]'
                        }`}
                        style={{ height: item.pct }}
                      />
                    </div>
                    <span className="text-[9px] font-bold text-[#1B4D3E]">{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#1B4D3E] font-bold">
                <span>🌿 7-Day Habit</span>
                <span className="font-black text-[#107553]">No Withered Trees</span>
              </div>
            </motion.div>
          </div>

          {/* 6. BOTTOM CENTER CARD (Beneath Bough Cradle): Living Sanctuary Island Card with /block.webp */}
          <div className="pointer-events-auto w-full md:w-auto md:absolute md:top-[70%] lg:top-[72%] md:left-1/2 md:-translate-x-1/2 z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[240px] sm:w-[250px] p-3.5 rounded-2xl backdrop-blur-3xl bg-white/50 hover:bg-white/60 border border-white/70 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_16px_36px_rgba(6,35,25,0.12)] text-[#062319] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#107553]">
                  <Sparkles className="w-3.5 h-3.5 text-[#107553]" />
                  <span>Living Sanctuary</span>
                </div>
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-[#094D36] border border-emerald-500/20">
                  TIER IV BIOME
                </span>
              </div>

              {/* 3D Floating Grove Island Diorama (/block.webp) with gentle breathing bobbing */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-28 my-1 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white/30 to-emerald-950/5"
              >
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                <Image
                  src="/block.webp"
                  alt="Living Sanctuary Grove Island"
                  width={600}
                  height={400}
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(6,35,25,0.28)]"
                />
              </motion.div>

              {/* Concise Metrics: 42h Mindful Growth & Pine */}
              <div className="flex items-center justify-between text-xs font-black text-[#062319] mt-2 mb-0.5">
                <span>42h Mindful Growth</span>
                <span className="text-[11px] font-bold text-[#107553]">Pine</span>
              </div>
              <div className="text-[10px] font-bold text-[#1B4D3E] flex items-center justify-between">
                <span>Ecosystem Vitality</span>
                <span className="text-[#107553] font-black">99.4% Organic</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
}
