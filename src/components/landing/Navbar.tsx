'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: (e: React.MouseEvent, store: string) => void;
}

export function Navbar({ onDownloadClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 px-5 md:px-7 py-2.5 sm:py-3 rounded-full backdrop-blur-3xl bg-white/50 hover:bg-white/65 border border-white/75 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_18px_40px_rgba(6,35,25,0.08)] transition-all duration-300 w-full max-w-3xl ${
          scrolled ? 'bg-white/85 shadow-lg border-white/90 scale-[0.98]' : ''
        }`}
      >
        {/* Brand Mark */}
        <Link href="/" className="flex items-center">
          <span className="font-display font-bold text-base tracking-tight text-[#0D3528]">
            Rimba
          </span>
        </Link>

        {/* Quick Nav Anchors */}
        <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[#4C7567]">
          <a href="#story" className="px-3 py-1 rounded-full hover:text-[#0D3528] transition-colors">
            Chronicles
          </a>
          <a href="#ecosystem" className="px-3 py-1 rounded-full hover:text-[#0D3528] transition-colors">
            Ecosystem
          </a>
          <a href="#faq" className="px-3 py-1 rounded-full hover:text-[#0D3528] transition-colors">
            FAQ
          </a>
          <a href="#circadian" className="px-3 py-1 rounded-full hover:text-[#0D3528] transition-colors">
            Circadian
          </a>
        </div>

        {/* CTA: Get Rimba with Liquid Glass */}
        <a
          href="#download"
          onClick={(e) => onDownloadClick(e, 'App Store')}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-2xl bg-[#187557]/15 hover:bg-[#187557]/25 text-[#062319] border border-[#187557]/30 text-xs font-bold shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.8)] transition-all active:scale-95 cursor-pointer"
        >
          <span>Get Rimba</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#187557]" />
        </a>
      </nav>
    </header>
  );
}
