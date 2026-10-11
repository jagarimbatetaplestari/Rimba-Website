'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

export function ChroniclesSection() {
  const storySectionRef = useRef<HTMLElement>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  // 9 Chronicles of the Sanctuary (WebP Story Lore Arc)
  const stories = [
    {
      id: 'chap-1',
      number: '01',
      title: 'The Gentle Sprout',
      subtitle: 'Where stillness takes root',
      tag: 'Awakening',
      image: '/story/story_chapter_1.webp',
      objectPosition: 'center 86%',
      quote: 'Every ancient forest begins with a single seed daring to unfurl in stillness. Focus is the quiet breath that gives life to what comes next.',
    },
    {
      id: 'chap-2',
      number: '02',
      title: 'River of Clarity',
      subtitle: 'Unhurried waters winding through stone',
      tag: 'Flow & Origin',
      image: '/story/story_chapter_2.webp',
      objectPosition: 'center 88%',
      quote: 'Water never forces its path, gracefully navigating rock and root. Like a tranquil mind, clear currents bring gentle coolness to all living earth.',
    },
    {
      id: 'chap-3',
      number: '03',
      title: 'The Whispering Canopy',
      subtitle: 'Solitude embraced in emerald shade',
      tag: 'Mindful Solitude',
      image: '/story/story_chapter_3.webp',
      objectPosition: 'center 86%',
      quote: 'Deep within interlacing leaves, small lives thrive in quiet contemplation. Protected from external clamor, true thought finds room to mature.',
    },
    {
      id: 'chap-4',
      number: '04',
      title: 'Canopy of Kinship',
      subtitle: 'Tender bonds in ancient branches',
      tag: 'Nurture & Warmth',
      image: '/story/story_new_1.webp',
      objectPosition: 'center 84%',
      quote: 'High within the ancient canopy, life is cradled with infinite tenderness. When we slow down, we create space to protect what is vulnerable and precious.',
    },
    {
      id: 'chap-5',
      number: '05',
      title: 'The Lakeside Hearth',
      subtitle: 'Rediscovering presence under twilight',
      tag: 'Gentle Harmony',
      image: '/story/story_new_3.webp',
      objectPosition: 'center 86%',
      quote: 'Beneath the crescent moon, human guardians sit beside gentle embers. True conservation begins when ambition surrenders to quiet presence.',
    },
    {
      id: 'chap-6',
      number: '06',
      title: 'The Encroaching Shadow',
      subtitle: 'When noise fractures the sacred quiet',
      tag: 'The Boundary',
      image: '/story/story_new_2.webp',
      objectPosition: 'center 86%',
      quote: 'Industrial urgency arrives with rumbling blades, pressing at the forest boundary. Silent eyes watch, holding firm to what is wild and irreplaceable.',
    },
    {
      id: 'chap-7',
      number: '07',
      title: 'The United Stand',
      subtitle: 'Courage born of collective resolve',
      tag: 'Living Vanguard',
      image: '/story/story_chapter_4.webp',
      objectPosition: 'center 86%',
      quote: 'Wild spirits gather as an unbroken wall of living grace. Not with fury, but with steadfast presence, they guard the sanctuary against fragmentation.',
    },
    {
      id: 'chap-8',
      number: '08',
      title: 'The Moonlit Valley',
      subtitle: 'Silver light flooding cascading falls',
      tag: 'Serenity Restored',
      image: '/story/story_chapter_5.webp',
      objectPosition: 'center 86%',
      quote: 'Night falls upon the restored valley as silver moonlight washes over rushing falls. Consistency is returning, day after day, to your quiet center.',
    },
    {
      id: 'chap-9',
      number: '09',
      title: 'The Eternal Hearth',
      subtitle: 'Resting together in living peace',
      tag: 'Sacred Fellowship',
      image: '/story/story_chapter_6.webp',
      objectPosition: 'center 86%',
      quote: 'From a solitary seed in quiet soil grew a boundless haven of warmth and fellowship. The truest sanctuary is the quiet you preserve within.',
    },
  ];

  const scrollToStory = (index: number) => {
    if (!storySectionRef.current) return;
    const rect = storySectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollDistance = storySectionRef.current.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + (index / 8) * scrollDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setActiveStoryIndex(index);
  };

  const { scrollYProgress: storyScrollProgress } = useScroll({
    target: storySectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothStoryProgress = useSpring(storyScrollProgress, {
    stiffness: 85,
    damping: 25,
    restDelta: 0.001,
  });

  const storyX = useTransform(smoothStoryProgress, [0, 1], ['0%', '-68%']);

  useMotionValueEvent(storyScrollProgress, 'change', (latest) => {
    const idx = Math.min(Math.max(Math.round(latest * 8), 0), 8);
    setActiveStoryIndex((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section id="story" ref={storySectionRef} className="relative h-[450vh] w-full">
      {/* Sticky 100vh Pinned Viewport */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-6 sm:pb-8 overflow-hidden">
        
        {/* Editorial Section Header (Centered Kompak) */}
        <div className="max-w-3xl mx-auto px-4 text-center shrink-0 mt-1 sm:mt-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#0D3528] tracking-tight leading-tight">
            The chronicles of <span className="serif-italic text-[#187557] font-normal">living sanctuary.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4C7567] mt-1.5 max-w-xl mx-auto font-normal leading-relaxed">
            A nine-chapter odyssey from quiet awakening to eternal sanctuary.
          </p>
        </div>

        {/* Horizontal Sliding Cards Track (Portrait Vertical Art Frames) */}
        <div className="w-full relative my-auto py-2 overflow-visible">
          <motion.div
            style={{ x: storyX }}
            className="flex gap-4 sm:gap-6 md:gap-7 lg:gap-8 px-4 sm:px-8 md:px-16 w-max transform-gpu will-change-transform"
          >
            {stories.map((story, idx) => (
              <div
                key={story.id}
                onClick={() => scrollToStory(idx)}
                className={`group relative w-[270px] sm:w-[310px] md:w-[340px] lg:w-[370px] h-[410px] sm:h-[450px] md:h-[490px] lg:h-[530px] shrink-0 rounded-3xl overflow-hidden shadow-xl shadow-[#0D3528]/10 border border-white/60 bg-[#0D3528]/5 cursor-pointer transform-gpu transition-opacity duration-300 ${
                  activeStoryIndex === idx ? 'opacity-100 ring-2 ring-[#187557]/40 shadow-[#187557]/20' : 'opacity-85'
                }`}
              >
                {/* Full Bleed Story Artwork with Custom Object Position per Chapter */}
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: story.objectPosition || 'center 86%' }}
                  sizes="(max-width: 640px) 270px, 370px"
                  priority={idx <= 1}
                />

                {/* Minimalist Chapter Badge Pill on Top Left (Clean Solid, No Glass) */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/80 text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-white/15 shadow-sm">
                    Chapter {story.number} · {story.tag}
                  </span>
                </div>

                {/* Natural Dark Gradient Vignette Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent z-10 pointer-events-none" />

                {/* Editorial Text Layer Overlaid Directly on Artwork */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 flex flex-col justify-end pointer-events-none">
                  <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug drop-shadow-sm">
                    {story.title}
                  </h3>
                  <p className="font-serif italic text-white/90 text-xs sm:text-sm mt-0.5 font-normal">
                    {story.subtitle}
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal mt-2 line-clamp-3">
                    “{story.quote}”
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Minimalist Chapter Indicator / Scroller Track */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 border-t border-[#0D3528]/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs font-semibold text-[#187557]">
              {stories[activeStoryIndex].number} / 09
            </span>
            <span className="text-xs font-bold text-[#0D3528]">
              {stories[activeStoryIndex].title}
            </span>
            <span className="text-[11px] text-[#4C7567] hidden sm:inline">
              — {stories[activeStoryIndex].subtitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 max-w-full overflow-x-auto no-scrollbar py-1">
            {stories.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStory(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer shrink-0 ${
                  activeStoryIndex === idx
                    ? 'w-7 sm:w-8 h-2 bg-[#187557]'
                    : 'w-2 h-2 bg-[#0D3528]/20 hover:bg-[#187557]/50'
                }`}
                aria-label={`Jump to chapter ${s.number}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
