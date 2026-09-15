import React from 'react';
import { motion } from 'motion/react';

export const RegulatoryNotice: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#FAF8F2] py-3 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/50"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs">
        
        {/* Badges & Regulation Statement */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-on-surface text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-primary font-bold bg-secondary/25 px-2.5 py-1 rounded-md border border-secondary/40 shadow-2xs whitespace-nowrap">
            <span className="material-symbols-outlined text-[15px] text-primary">verified</span>
            PJK3 RESMI KEMNAKER RI
          </span>
          <span className="hidden sm:inline-block text-outline-variant">•</span>
          <span className="text-on-surface-variant font-medium text-[11px] sm:text-xs">
            SKP Penunjukan No. Reg. <span className="font-mono-tech font-bold text-primary">K3/PJK3/BINWASK3-PNK3/2024</span>
          </span>
          <span className="hidden lg:inline-block text-outline-variant">•</span>
          <span className="hidden lg:inline-block text-on-surface-variant font-medium text-[11px] sm:text-xs">
            Lembaga Konsultasi Manajemen Terakreditasi BNSP
          </span>
        </div>
        
        {/* Status Pill */}
        <div className="flex items-center gap-1.5 text-primary font-bold bg-white px-3 py-1 rounded-full border border-secondary/30 shadow-2xs shrink-0 text-[11px] sm:text-xs">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="material-symbols-outlined text-[15px] text-secondary-dark">event_available</span>
          <span>Jadwal Kuartal 2026 Dibuka</span>
        </div>
      </div>
    </motion.section>
  );
};

