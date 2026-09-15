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
    { name: 'Beranda', href: '#', icon: 'home' },
    { name: 'Program Pelatihan', href: '#marketplace', icon: 'school' },
    { name: 'Layanan Konsultasi', href: '#layanan-inti', icon: 'verified_user' },
    { name: 'Portofolio & Klien', href: '#portofolio-klien', icon: 'business' },
    { name: 'Galeri Lapangan', href: '#galeri-lapangan', icon: 'photo_library' },
    { name: 'Legalitas', href: '#legalitas', icon: 'gavel' },
    { name: 'Lokasi', href: '#lokasi', icon: 'location_on' },
    { name: 'Hubungi Kami', href: '#kontak-kami', icon: 'call' },
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
        {/* Main navigation bar (Top bar has been removed as requested) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo & Brand Name */}
          <a 
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 flex items-center justify-center p-0.5 ring-2 ring-secondary/50 shadow-md group-hover:ring-secondary transition-all bg-white/10">
              <img 
                alt="PT Jaya Pasific Solution Logo" 
                className="w-full h-full object-contain rounded-full" 
                src={ASSETS.logo}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-xs sm:text-sm font-bold tracking-wide text-white group-hover:text-secondary transition-colors line-clamp-1">
                PT JAYA PASIFIC SOLUTION
              </span>
              <span className="font-label-sm text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest text-[#E4BE68] uppercase font-semibold line-clamp-1">
                TRAINING &amp; MANAGEMENT CONSULTANT
              </span>
            </div>
          </a>

          {/* Desktop Links (lg and xl screens) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-[13px] font-medium font-body-sm whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={
                  idx === 0
                    ? "transition-colors py-1 text-secondary font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary"
                    : "text-white/90 hover:text-secondary transition-colors py-1"
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Hamburger (Garis Tiga) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="h-6 w-px bg-white/15 mx-1 hidden lg:block"></div>
            
            {/* WhatsApp Quick Link on desktop */}
            <a 
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#102723] text-[#E4BE68] border border-[#E4BE68]/40 hover:bg-[#0c1e1b] font-body-sm text-xs font-semibold whitespace-nowrap transition-all shadow-sm" 
              href="https://wa.me/628111595122?text=Halo%20PT%20Jaya%20Pasific%20Solution,%20saya%20ingin%20konsultasi%20layanan%20K3." 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              Konsultasi WA
            </a>

            {/* Request Proposal Button - Desktop Only (Hidden on Mobile/Tablet so mobile has it inside sidebar drawer at the bottom) */}
            <button 
              onClick={onRequestProposal}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E4BE68] text-[#173B35] font-headline-sm text-xs font-bold hover:bg-[#d8b059] whitespace-nowrap transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              Request Proposal
            </button>

            {/* Mobile / Tablet Button Garis Tiga (Hamburger Menu) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white border border-secondary/40 transition-all cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
              title="Menu Navigasi (Garis Tiga)"
            >
              {/* Distinct 3 horizontal lines (Button Garis Tiga) */}
              <div className="flex flex-col justify-center items-center w-5 h-4 gap-1">
                <span className={`block h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                <span className={`block h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-[2.5px] w-5 bg-secondary rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
              </div>
              <span className="font-label-md text-xs font-bold text-white tracking-wider uppercase">
                {mobileMenuOpen ? 'Tutup' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-over Sidebar Drawer for Mobile & Tablet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
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
