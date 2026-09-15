import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

interface HeroProps {
  onRequestProposal: () => void;
  onSelectCourse: (courseId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestProposal, onSelectCourse }) => {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface via-background to-surface-container relative overflow-hidden border-b border-outline-variant/50">
      <div className="absolute -top-28 right-0 w-[550px] h-[550px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Authority Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-[11px] sm:text-xs uppercase tracking-wider font-bold shadow-2xs"
          >
            <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary">shield</span>
            <span>PJK3 KEMNAKER RI &amp; KONSULTAN MANAJEMEN</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display-hero text-2xl sm:text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-tight"
          >
            PT JAYA PASIFIC SOLUTION
            <span className="block font-headline-md text-base sm:text-2xl text-on-surface-variant font-medium mt-1.5 sm:mt-2">
              Professional Training &amp; Integrated Management System
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body-lg text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Meningkatkan kompetensi tenaga kerja berstandar nasional dan mendampingi korporasi industri menerapkan sistem manajemen keselamatan, kepatuhan hukum, dan mutu operasional kelas dunia.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="p-3 sm:p-3.5 bg-white rounded-xl self-start border-l-4 border-secondary shadow-2xs w-full sm:w-auto"
          >
            <p className="font-label-md text-xs sm:text-sm text-primary font-bold tracking-wide uppercase">
              “Building Competency. Improving Safety. Creating Better Management System.”
            </p>
          </motion.div>

          {/* Primary CTAs - Mobile full-width stack, desktop inline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
          >
            <a 
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-primary text-white font-headline-sm text-sm sm:text-base font-bold hover:bg-primary-light hover:shadow-[0_8px_20px_rgba(23,59,53,0.25)] hover:-translate-y-0.5 transition-all text-center" 
              href="#marketplace"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary">school</span>
              Jelajahi Program Pelatihan
            </a>

            <button 
              onClick={onRequestProposal}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-secondary text-primary font-headline-sm text-sm sm:text-base font-bold hover:bg-secondary-light hover:shadow-[0_8px_20px_rgba(228,190,104,0.35)] hover:-translate-y-0.5 transition-all border border-secondary-dark/30 cursor-pointer text-center"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">description</span>
              Request Proposal Korporat
            </button>
          </motion.div>

          {/* Real Quantitative Trust Counters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 mt-1 sm:mt-2"
          >
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-outline-variant/60 shadow-2xs hover:border-secondary transition-colors text-center sm:text-left">
              <span className="font-display-hero text-xl sm:text-2xl lg:text-3xl font-bold text-primary block leading-none">96+</span>
              <span className="font-label-md text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-1 sm:mt-1.5 block">
                Topik K3L
              </span>
            </div>
            
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-outline-variant/60 shadow-2xs hover:border-secondary transition-colors text-center sm:text-left">
              <span className="font-display-hero text-xl sm:text-2xl lg:text-3xl font-bold text-primary block leading-none">100%</span>
              <span className="font-label-md text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-1 sm:mt-1.5 block">
                Sertifikat RI
              </span>
            </div>
            
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-outline-variant/60 shadow-2xs hover:border-secondary transition-colors text-center sm:text-left">
              <span className="font-display-hero text-xl sm:text-2xl lg:text-3xl font-bold text-primary block leading-none">500+</span>
              <span className="font-label-md text-[10px] sm:text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-1 sm:mt-1.5 block">
                Alumni Mitra
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Executive Director & Master Assessor Profile */}
        <motion.div 
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center w-full"
        >
          <div className="w-full bg-white p-5 sm:p-6 rounded-2xl shadow-[0_12px_36px_rgba(23,59,53,0.1)] border-2 border-secondary/30 flex flex-col gap-4 relative">
            <div className="self-end sm:absolute sm:top-4 sm:right-4 px-3 py-1 bg-secondary text-primary font-label-md text-[10px] sm:text-xs uppercase tracking-wider rounded-full font-bold flex items-center gap-1 shadow-2xs shrink-0">
              <span className="material-symbols-outlined text-[14px] sm:text-[15px]">military_tech</span>
              MASTER ASSESSOR
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 sm:pr-24">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-md ring-2 ring-secondary/50 bg-surface-container">
                <img 
                  alt="Johannes Simanjuntak, SKM, M.Kes - Direktur & Penguji BNSP" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                  src={ASSETS.founder}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-[11px] sm:text-xs text-secondary-dark uppercase font-bold tracking-wider">
                  Direktur &amp; Penguji BNSP
                </span>
                <h2 className="font-headline-sm text-base sm:text-xl text-primary font-bold leading-snug">
                  Johannes Simanjuntak, SKM, M.Kes
                </h2>
                <p className="font-body-sm text-[11px] sm:text-sm text-on-surface-variant mt-0.5">
                  Master Trainer BNSP RI &amp; Konsultan Senior K3 Nasional
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-background rounded-xl flex flex-col gap-2 font-body-sm text-xs sm:text-sm text-on-surface border border-outline-variant/40">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[17px] shrink-0 mt-0.5">verified_user</span>
                <span>Asesor Kompetensi Resmi Badan Nasional Sertifikasi Profesi (BNSP RI)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[17px] shrink-0 mt-0.5">verified_user</span>
                <span>Instruktur Ahli K3 Umum &amp; Spesialis Sistem Manajemen K3 (SMK3 PP 50/2012)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[17px] shrink-0 mt-0.5">verified_user</span>
                <span>Lead Auditor ISO 45001:2018, ISO 9001:2015 &amp; SMKP Minerba ESDM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-2 border-t border-outline-variant/40">
              <div className="flex items-center gap-2 text-label-md text-xs text-on-surface-variant font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                <span>Jadwal ToT Level 4 &amp; 6 Aktif</span>
              </div>
              
              <a 
                className="text-label-md font-bold text-primary hover:text-secondary-dark inline-flex items-center gap-1 text-xs sm:text-sm group" 
                href="https://wa.me/628111595122?text=Halo%20Pak%20Johannes,%20saya%20tertarik%20dengan%20jadwal%20Training%20of%20Trainer%20BNSP." 
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Langsung 
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
