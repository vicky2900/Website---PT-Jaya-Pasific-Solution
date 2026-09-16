import React, { useState, useEffect } from 'react';
import { ASSETS, COMPANY_INFO } from '../data';

interface HeaderProps {
  onRequestProposal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestProposal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Beranda', shortName: 'Beranda', href: '#', icon: 'home' },
    { name: 'Program Pelatihan', shortName: 'Pelatihan', href: '#marketplace', icon: 'school' },
    { name: 'Layanan Konsultasi', shortName: 'Konsultasi', href: '#layanan-inti', icon: 'verified_user' },
    { name: 'Portofolio & Klien', shortName: 'Portofolio', href: '#portofolio-klien', icon: 'business' },
    { name: 'Galeri Lapangan', shortName: 'Galeri', href: '#galeri-lapangan', icon: 'photo_library' },
    { name: 'Legalitas', shortName: 'Legalitas', href: '#legalitas', icon: 'gavel' },
    { name: 'Lokasi', shortName: 'Lokasi', href: '#lokasi', icon: 'location_on' },
    { name: 'Hubungi Kami', shortName: 'Kontak', href: '#kontak-kami', icon: 'call' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-primary shadow-[0_4px_24px_rgba(23,59,53,0.22)] border-b border-secondary/20">
        {/* Main navigation bar */}
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          
          {/* Logo & Brand Name - Never truncated or clipped */}
          <a 
            className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0 group select-none" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-full overflow-hidden shrink-0 flex items-center justify-center p-0.5 ring-2 ring-secondary/50 shadow-md group-hover:ring-secondary transition-all bg-white/10">
              <img 
                alt="PT Jaya Pasific Solution Logo" 
                className="w-full h-full object-contain rounded-full" 
                src={ASSETS.logo}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-headline-sm text-xs sm:text-[13px] xl:text-sm font-bold tracking-wide text-white group-hover:text-secondary transition-colors whitespace-nowrap">
                PT JAYA PASIFIC SOLUTION
              </span>
              <span className="font-label-sm text-[8px] sm:text-[9.5px] xl:text-[10px] tracking-wider sm:tracking-widest text-[#E4BE68] uppercase font-semibold whitespace-nowrap">
                TRAINING &amp; MANAGEMENT CONSULTANT
              </span>
            </div>
          </a>

          {/* Desktop Links (Adaptive: concise labels on xl, full labels on 2xl to guarantee zero crowding) */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-3.5 text-xs xl:text-[12.5px] 2xl:text-[13px] font-medium font-body-sm whitespace-nowrap shrink-0">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={
                  idx === 0
                    ? "transition-colors px-1.5 2xl:px-2 py-1 text-secondary font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-1.5 2xl:after:left-2 after:right-1.5 2xl:after:right-2 after:h-0.5 after:bg-secondary"
                    : "text-white/90 hover:text-secondary transition-colors px-1.5 2xl:px-2 py-1"
                }
              >
                <span className="hidden 2xl:inline">{link.name}</span>
                <span className="2xl:hidden">{link.shortName}</span>
              </a>
            ))}
          </nav>

          {/* Action Buttons & Hamburger (Garis Tiga) - Always fitted, never clipped */}
          <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
            <div className="h-6 w-px bg-white/15 mx-0.5 hidden xl:block"></div>
            
            {/* WhatsApp Quick Link (visible from md screens) */}
            <a 
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg bg-[#102723] text-[#E4BE68] border border-[#E4BE68]/40 hover:bg-[#0c1e1b] font-body-sm text-xs font-semibold whitespace-nowrap transition-all shadow-sm shrink-0" 
              href="https://wa.me/628111595122?text=Halo%20PT%20Jaya%20Pasific%20Solution,%20saya%20ingin%20konsultasi%20layanan%20K3." 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
              <span className="hidden 2xl:inline">Konsultasi </span>WA
            </a>

            {/* Request Proposal Button - Visible on tablet & desktop (sm and up) so mobile navbar stays uncluttered */}
            <button 
              onClick={onRequestProposal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 xl:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary text-primary hover:bg-secondary-light active:scale-95 font-headline-sm text-xs font-bold whitespace-nowrap transition-all shadow-sm cursor-pointer shrink-0"
              title="Ajukan Permintaan Proposal Pelatihan / Konsultasi"
            >
              <span className="material-symbols-outlined text-[16px] shrink-0">send</span>
              <span>Request Proposal</span>
            </button>

            {/* Mobile / Tablet / Laptop Hamburger Menu (Garis Tiga) - Guaranteed fully visible & never clipped */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center gap-2 px-2.5 sm:px-3 h-9 sm:h-10 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white border border-secondary/40 transition-all cursor-pointer shadow-xs shrink-0"
              aria-label="Toggle navigation menu"
              title="Menu Navigasi (Garis Tiga)"
            >
              {/* Distinct 3 horizontal lines (Button Garis Tiga) */}
              <div className="flex flex-col justify-center items-center w-5 h-4 gap-1 shrink-0">
                <span className={`block h-[2px] sm:h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                <span className={`block h-[2px] sm:h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-[2px] sm:h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
              </div>
              <span className="font-label-md text-xs font-bold text-white tracking-wider uppercase hidden sm:inline">
                {mobileMenuOpen ? 'Tutup' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-over Sidebar Drawer for Mobile & Tablet & Laptop (< 1280px) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden animate-in fade-in duration-200">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Sheet Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-[380px] bg-primary shadow-2xl border-l border-secondary/30 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 z-50">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-primary-light/40 bg-primary-dark/95 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center p-0.5 ring-2 ring-secondary/50 bg-white/10">
                  <img 
                    alt="PT Jaya Pasific Solution Logo" 
                    className="w-full h-full object-contain rounded-full" 
                    src={ASSETS.logo}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-xs font-bold text-white leading-tight">
                    PT JAYA PASIFIC SOLUTION
                  </h3>
                  <p className="text-[10px] font-mono-tech text-secondary font-semibold uppercase tracking-wider">
                    PJK3 KEMNAKER RI RESMI
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Menu"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Official Credentials Badge */}
            <div className="px-5 py-3 bg-secondary/15 border-b border-secondary/20 flex items-center gap-2 text-xs text-secondary-light font-medium">
              <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
              <span>SKP Penunjukan Kemnaker RI &amp; Asesor BNSP</span>
            </div>

            {/* Drawer Nav Links */}
            <nav className="p-5 space-y-1.5 flex-1">
              <div className="text-[10px] font-bold text-secondary tracking-wider uppercase mb-2">
                NAVIGASI UTAMA
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors group"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Quick Actions & Contact in Sidebar (Paling Bawah) */}
            <div className="p-5 border-t border-primary-light/40 bg-primary-dark/95 space-y-3 shrink-0">
              <div className="text-[10px] font-bold text-secondary tracking-wider uppercase">
                PENGAJUAN &amp; KONSULTASI
              </div>

              {/* Request Proposal Button - Placed at the very bottom of navbar sidebar */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestProposal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-secondary hover:bg-secondary-light active:scale-[0.98] text-primary font-headline-sm text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Request Proposal Korporat</span>
              </button>

              <a
                href="https://wa.me/628111595122?text=Halo%20PT%20Jaya%20Pasific%20Solution,%20saya%20ingin%20konsultasi%20layanan%20K3."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#102723] hover:bg-[#0c1e1b] text-secondary border border-secondary/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat WhatsApp: 0811-1595-122</span>
              </a>

              <div className="pt-1 text-center text-[10px] text-white/50">
                Hotline: {COMPANY_INFO.phone1} • PJK3 Kemnaker RI &amp; BNSP
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
