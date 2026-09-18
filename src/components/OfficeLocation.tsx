import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO, ASSETS, WA_ADMINS, getWhatsAppUrl } from '../data';

interface OfficeLocationProps {
  onRequestProposal?: (topic?: string) => void;
  onOpenLightbox?: (image: { url: string; title: string }) => void;
}

export const OfficeLocation: React.FC<OfficeLocationProps> = ({ onRequestProposal, onOpenLightbox }) => {
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const fullAddress = COMPANY_INFO.address;
  const mapsPlaceUrl = COMPANY_INFO.mapsUrl;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}&hl=id&z=17&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${COMPANY_INFO.name}\n${fullAddress}\nPlus Code: ${COMPANY_INFO.plusCode}\nTelp: ${COMPANY_INFO.phone1}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: COMPANY_INFO.name,
          text: `Lokasi Kantor ${COMPANY_INFO.name}: ${fullAddress}`,
          url: mapsPlaceUrl,
        });
        return;
      } catch {
        // Fallback below
      }
    }
    // Fallback: Copy link
    navigator.clipboard.writeText(mapsPlaceUrl);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2500);
  };

  const handleSendToPhone = () => {
    const waText = encodeURIComponent(`Lokasi Kantor ${COMPANY_INFO.name}:\n📍 ${fullAddress}\nPlus Code: ${COMPANY_INFO.plusCode}\nGoogle Maps: ${mapsPlaceUrl}`);
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low scroll-mt-20" id="lokasi">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-1.5 self-center px-3 py-1 rounded-full bg-secondary/15 text-secondary-dark font-label-md text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            <span>KANTOR PUSAT OPERASIONAL</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
            Lokasi Kantor PT Jaya Pasific Solution
          </h2>
          <p className="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">
            Pusat operasional pelatihan keselamatan kerja, administrasi sertifikasi resmi Kemnaker RI &amp; BNSP, serta konsultansi implementasi sistem manajemen terintegrasi.
          </p>
        </motion.div>

        {/* Main Grid: Location Details & Interactive Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Office Identity, Quick Action Buttons, & Transport Guide (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5"
          >
            {/* Office Profile Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-outline-variant/70 shadow-2xs flex flex-col gap-4">
              
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-outline-variant/40">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base sm:text-lg font-bold text-primary leading-tight">
                      Jaya Pasific Solution
                    </h3>
                    <p className="font-label-md text-[11px] font-semibold text-secondary-dark uppercase tracking-wide">
                      Kantor Operasional Lembaga Training &amp; Consulting
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Buka 09.00
                </span>
              </div>

              {/* Address details */}
              <div className="flex flex-col gap-3 font-body-sm text-xs sm:text-sm text-on-surface">
                
                {/* Full Address */}
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px] shrink-0 mt-0.5">
                    pin_drop
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                      Alamat Lengkap
                    </span>
                    <p className="font-semibold text-primary leading-snug">
                      {fullAddress}
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px] shrink-0 mt-0.5">
                    tag
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                      Plus Code Google Maps
                    </span>
                    <p className="font-mono-tech text-xs text-primary font-bold">
                      {COMPANY_INFO.plusCode}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px] shrink-0 mt-0.5">
                    schedule
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                      Jam Pelayanan Kantor
                    </span>
                    <p className="text-primary font-medium">
                      Senin – Jumat: 09.00 – 17.00 WIB
                    </p>
                    <span className="text-[11px] text-on-surface-variant">
                      Pelatihan in-house &amp; sertifikasi akhir pekan tersedia berdasarkan jadwal.
                    </span>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px] shrink-0 mt-0.5">
                    support_agent
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                      Kontak Langsung
                    </span>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                      <a 
                        href="tel:08111595122" 
                        className="text-primary hover:text-secondary-dark font-bold underline transition-colors"
                      >
                        0811-1595-122 (Call)
                      </a>
                      <a 
                        href={getWhatsAppUrl(WA_ADMINS[0].waNumber, 'Halo Admin 1 PT Jaya Pasific Solution, saya ingin berkunjung ke kantor.')}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">chat</span>
                        WA Admin 1 ({WA_ADMINS[0].phone})
                      </a>
                      <a 
                        href={getWhatsAppUrl(WA_ADMINS[1].waNumber, 'Halo Admin 2 PT Jaya Pasific Solution, saya ingin berkunjung ke kantor.')}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">chat</span>
                        WA Admin 2 ({WA_ADMINS[1].phone})
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Actions Panel (Rute, Buka di Maps, Salin Alamat, Bagikan) */}
              <div className="pt-3 border-t border-outline-variant/40 flex flex-col gap-2">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Aksi Cepat Navigasi
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  {/* Tombol Rute */}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-primary hover:bg-primary-light text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2 group text-center"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">
                      directions
                    </span>
                    <span>Petunjuk Rute</span>
                  </a>

                  {/* Buka di Google Maps */}
                  <a
                    href={mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-white hover:bg-secondary/15 text-primary border border-secondary/50 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2 text-center"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      open_in_new
                    </span>
                    <span>Buka di Maps</span>
                  </a>

                  {/* Salin Alamat */}
                  <button
                    onClick={handleCopyAddress}
                    className="py-2 px-3 bg-background hover:bg-surface-container text-on-surface rounded-xl text-xs font-medium border border-outline-variant/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Alamat Tersalin!' : 'Salin Alamat'}</span>
                  </button>

                  {/* Kirim ke Ponsel / Share */}
                  <button
                    onClick={handleSendToPhone}
                    className="py-2 px-3 bg-background hover:bg-surface-container text-on-surface rounded-xl text-xs font-medium border border-outline-variant/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                      send_to_mobile
                    </span>
                    <span>Kirim ke Ponsel</span>
                  </button>
                </div>

                {/* Secondary Action: Bagikan Link */}
                <button
                  onClick={handleShare}
                  className="w-full py-1.5 text-xs text-on-surface-variant hover:text-primary font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">share</span>
                  <span>{shareSuccess ? 'Link Maps Tersalin ke Clipboard!' : 'Bagikan Tautan Lokasi Ini'}</span>
                </button>
              </div>

            </div>

            {/* Aksesibilitas & Rute Transportasi */}
            <div className="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs flex flex-col gap-3">
              <h4 className="font-headline-sm text-xs sm:text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-dark">commute</span>
                Panduan Akses &amp; Fasilitas Sekitar
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">directions_car</span>
                  <p><strong className="text-primary">Akses Jalan Tol:</strong> ±10 menit dari Gerbang Tol BSD Timur / Ciater Serpong.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">train</span>
                  <p><strong className="text-primary">Stasiun KRL:</strong> ±12 menit dari Stasiun Rawa Buntu &amp; Stasiun Serpong.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">local_parking</span>
                  <p><strong className="text-primary">Fasilitas Parkir:</strong> Area parkir luas untuk mobil, motor, dan armada training di depan ruko.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Interactive Embed & Building Exterior View (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5"
          >
            {/* Interactive Map Card */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl border border-outline-variant/70 shadow-2xs flex flex-col gap-3 h-full min-h-[360px] sm:min-h-[420px]">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px]">map</span>
                  <span className="font-headline-sm text-xs sm:text-sm font-bold text-primary">
                    Peta Interaktif Lokasi
                  </span>
                </div>
                <a
                  href={mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-secondary-dark hover:underline flex items-center gap-1"
                >
                  Lihat Skala Penuh
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>

              {/* Responsive Google Maps iFrame */}
              <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-outline-variant/50 bg-surface-container min-h-[300px] sm:min-h-[360px]">
                <iframe
                  title="Google Maps Lokasi PT Jaya Pasific Solution"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Overlay Pin Indicator */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-outline-variant/60 shadow-md text-xs font-semibold text-primary flex items-center gap-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                  <span>Jaya Pasific Solution</span>
                </div>
              </div>

              {/* Card Footer: Building Exterior Photo Thumbnail & Visit Appointment */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-outline-variant/40 px-1">
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => onOpenLightbox?.({
                    url: ASSETS.officeBuilding,
                    title: `Gedung Kantor PT Jaya Pasific Solution - ${COMPANY_INFO.address}`
                  })}
                  title="Klik untuk memperbesar foto gedung"
                >
                  <div className="w-14 h-12 rounded-lg overflow-hidden border border-outline-variant/60 shrink-0 shadow-2xs group-hover:border-secondary transition-colors relative">
                    <img 
                      src={ASSETS.officeBuilding} 
                      alt="Gedung Ruko Kantor PT Jaya Pasific Solution" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="material-symbols-outlined text-white text-[16px]">zoom_in</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors flex items-center gap-1">
                      Gedung Ruko Operasional JPS
                      <span className="material-symbols-outlined text-[13px] text-on-surface-variant">open_in_full</span>
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      Kademangan, Kec. Setu, Tangerang Selatan
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onRequestProposal) {
                      onRequestProposal('Konsultasi Kunjungan Kantor & Pelatihan');
                    } else {
                      window.open('https://wa.me/628111595122?text=Halo%20PT%20Jaya%20Pasific%20Solution,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20kantor.', '_blank');
                    }
                  }}
                  className="px-4 py-2 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">event</span>
                  <span>Jadwalkan Kunjungan Kantor</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
