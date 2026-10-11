'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastNotificationProps {
  message: string | null;
}

export function ToastNotification({ message }: ToastNotificationProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full backdrop-blur-3xl bg-[#062319]/90 text-white border border-white/20 shadow-2xl flex items-center gap-2.5 text-xs font-semibold pointer-events-auto shadow-emerald-950/40"
        >
          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
