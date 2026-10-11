'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

export function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Rimba guarantee absolute privacy and local data sovereignty?',
      a: 'Rimba operates on a strict Zero-Telemetry, Local-First architecture. Your focus records, ecosystem progression, and audio preferences reside exclusively on your physical device storage. There are no analytics trackers, no cloud account mandates, and zero transmissions to external third-party servers. Your sanctuary remains sovereignly yours.',
    },
    {
      q: 'Will my grove or trees wither if a focus session gets interrupted?',
      a: 'Never. Rimba firmly rejects punitive gamification and toxic guilt mechanics. Interruptions are a natural part of human existence. When life calls, your sanctuary unconditionally preserves every single mindful minute you have cultivated — with zero withered trees or broken streaks.',
    },
    {
      q: 'How does the Solar Circadian lighting engine synchronize with the sky?',
      a: 'The circadian engine continuously computes real-time astronomical solar elevation and color temperature — transitioning gracefully from crisp Dawn (4,200K) to deep Midday clarity, dusk embers, and restorative Midnight warmth (2,200K). This minimizes nocturnal blue light fatigue to support your biological melatonin cycle.',
    },
    {
      q: 'What distinguishes Rimba’s acoustic soundscapes from regular audio loops?',
      a: 'Rather than short, repetitive audio clips that induce subconscious fatigue, Rimba synthesizes unlooped nature acoustics tuned to harmonic 432Hz resonance and binaural alpha waves. This gentle acoustic flow lowers sensory overstimulation, calming the nervous system for effortless deep immersion.',
    },
    {
      q: 'Can I utilize all sanctuary instruments completely offline?',
      a: 'Yes, with zero functional compromise. All core instruments — including the circadian lighting calculator, acoustic synthesizer, and grove progression engine — execute natively on-device. Whether on an airplane flight, in remote highlands, or during digital detox, Rimba works seamlessly offline.',
    },
    {
      q: 'Is Rimba available across desktop and mobile devices?',
      a: 'Yes. Rimba is built as a unified cross-platform ecosystem. You can cultivate your sanctuary seamlessly across desktop, web, and mobile environments with zero cloud friction.',
    },
  ];

  return (
    <section 
      id="faq" 
      className="relative z-10 pt-20 sm:pt-28 pb-24 sm:pb-32 px-4 sm:px-6 md:px-8 lg:px-12 w-full scroll-mt-20 text-[#062319]"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 20%, #FFFFFF 50%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Minimalist Editorial Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32"
          >
            {/* Eyebrow with small bullet */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#062319]/70 tracking-wider uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#062319]" />
              <span>FAQ</span>
            </div>

            {/* Editorial Large Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#062319] tracking-tight leading-[1.05]">
              Common <br />
              <span className="serif-italic font-serif italic font-normal text-[#062319]">questions.</span>
            </h2>
          </motion.div>

          {/* RIGHT COLUMN: Minimalist Hairline Accordions */}
          <div className="lg:col-span-7 xl:col-span-8 divide-y divide-[#062319]/15 border-t border-b border-[#062319]/15">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6 sm:py-8 transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                  >
                    <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#062319] group-hover:text-[#187557] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-[#062319] text-white'
                        : 'border border-[#062319]/30 text-[#062319] group-hover:border-[#062319]'
                    }`}>
                      {isOpen ? (
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="pt-4 pr-8 sm:pr-14"
                    >
                      <p className="text-sm sm:text-base text-[#062319]/75 font-normal leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
