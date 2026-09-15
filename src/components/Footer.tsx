import React from 'react';
import { ASSETS, COMPANY_INFO } from '../data';

interface FooterProps {
  onRequestProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestProposal }) => {
  return (
    <footer className="w-full bg-primary text-white pt-12 sm:pt-16 pb-8 border-t-2 border-secondary/30" id="kontak-kami">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        
        {/* Top Brand & Direct Action Line */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-primary-light/40">
          <div className="flex items-center gap-3.5">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden shrink-0 flex items-center justify-center p-0.5 ring-2 ring-secondary shadow bg-white/10">
              <img 
                alt="PT Jaya Pasific Solution Logo" 
                className="w-full h-full object-contain rounded-full" 
                src={ASSETS.logo}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-base sm:text-lg font-bold tracking-wide text-white">
                PT JAYA PASIFIC SOLUTION
              </span>
              <span className="font-label-md text-[10px] sm:text-xs tracking-widest text-secondary font-semibold">
                LEMBAGA PELATIHAN K3 &amp; KONSULTAN MANAJEMEN RESMI
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a 
              className="px-5 py-3 rounded-xl bg-secondary text-primary font-headline-sm text-xs sm:text-sm font-bold hover:bg-secondary-light transition-all flex items-center justify-center gap-2 shadow text-center" 
              href="https://wa.me/628111595122?text=Halo%20Admin%20PT%20Jaya%20Pasific%20Solution,%20saya%20ingin%20berkonsultasi." 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span> 
              Chat WhatsApp Sekarang
            </a>
            <button 
              onClick={onRequestProposal}
              className="px-5 py-3 rounded-xl bg-white/10 text-white font-headline-sm text-xs sm:text-sm font-semibold hover:bg-white/15 transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer text-center"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span> 
              Kirim Email RFP
            </button>
          </div>
        </div>

        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Headquarters & Operations */}
          <div className="flex flex-col gap-4">
            <h5 className="font-headline-sm text-sm font-bold text-secondary uppercase tracking-wider">
              Kantor Pusat Operasional
            </h5>
            <div className="flex flex-col gap-2 font-body-sm text-xs sm:text-sm text-surface-container leading-relaxed">
              <p className="font-semibold text-white">PT Jaya Pasific Solution</p>
              <p>{COMPANY_INFO.address}</p>
              <p className="text-secondary font-mono-tech text-xs">Plus Code: {COMPANY_INFO.plusCode}</p>
              <div className="pt-1 flex items-center gap-2">
                <a 
                  href="#lokasi" 
                  className="text-xs text-secondary hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  Lihat Peta Lokasi &amp; Rute
                </a>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a className="hover:text-secondary flex items-center gap-2 transition-colors" href="tel:08111595122">
                  <span className="material-symbols-outlined text-[16px] text-secondary">call</span> 
                  0811-1595-122
                </a>
                <a 
                  className="hover:text-secondary flex items-center gap-2 transition-colors" 
                  href="https://wa.me/628111595122" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">chat</span> 
                  0811-1595-122 (WhatsApp)
                </a>
                <a className="hover:text-secondary flex items-center gap-2 transition-colors" href="mailto:jayapasificsolution90@gmail.com">
                  <span className="material-symbols-outlined text-[16px] text-secondary">mail</span> 
                  jayapasificsolution90@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Pelatihan Populer */}
          <div className="flex flex-col gap-4">
            <h5 className="font-headline-sm text-sm font-bold text-secondary uppercase tracking-wider">
              Program Unggulan
            </h5>
            <ul className="flex flex-col gap-2 font-body-sm text-xs sm:text-sm text-surface-container">
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">Ahli K3 Umum (AK3U) Kemnaker RI</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">Training of Trainer (ToT) Level 6 BNSP</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">Training of Trainer (ToT) Level 4 BNSP</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">Pengawas Operasional Pertama (POP) Tambang</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">K3 Rumah Sakit (K3RS Akreditasi)</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#marketplace">Penanganan Bahan Berbahaya (IMDG Code)</a></li>
            </ul>
          </div>

          {/* Col 3: Konsultansi & Audit */}
          <div className="flex flex-col gap-4">
            <h5 className="font-headline-sm text-sm font-bold text-secondary uppercase tracking-wider">
              Layanan Konsultansi
            </h5>
            <ul className="flex flex-col gap-2 font-body-sm text-xs sm:text-sm text-surface-container">
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Penerapan SMK3 PP No. 50/2012</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Sertifikasi ISO 45001:2018 (K3)</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Sertifikasi ISO 9001:2015 (Mutu)</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Sistem SMKP Minerba ESDM</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Penyusunan CSMS &amp; JSA / HIRA</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#layanan-inti">Audit Kepatuhan &amp; Gap Assessment</a></li>
            </ul>
          </div>

          {/* Col 4: Akreditasi & Garansi Keabsahan */}
          <div className="flex flex-col gap-4">
            <h5 className="font-headline-sm text-sm font-bold text-secondary uppercase tracking-wider">
              Jaminan Keabsahan
            </h5>
            <div className="p-4 rounded-xl bg-primary-dark/80 border border-primary-light/40 flex flex-col gap-2 font-body-sm text-xs text-surface-container">
              <p className="font-bold text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                100% Sertifikat Resmi Terdaftar
              </p>
              <p className="leading-relaxed">
                Seluruh sertifikat hasil pembinaan terdaftar di database Teman K3 Kemnaker RI dan/atau Badan Nasional Sertifikasi Profesi (BNSP).
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-secondary text-primary font-bold text-[10px] uppercase">
                  TEMANK3 VERIFIED
                </span>
                <span className="px-2 py-1 rounded bg-white/10 text-white font-bold text-[10px] uppercase">
                  SKKNI COMPLIANT
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-primary-light/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-xs text-surface-container">
          <p>© 2026 PT Jaya Pasific Solution. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-secondary transition-colors" href="#legalitas">Kebijakan Privasi</a>
            <span>•</span>
            <a className="hover:text-secondary transition-colors" href="#legalitas">Legalitas PJK3</a>
            <span>•</span>
            <a className="hover:text-secondary transition-colors" href="#kontak-kami">Syarat &amp; Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
