import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

interface FieldDocumentationProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const FieldDocumentation: React.FC<FieldDocumentationProps> = ({ onOpenLightbox }) => {
  return (
    <section className="w-full py-16 px-6 bg-surface border-y border-outline-variant/40" id="galeri-lapangan">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary/30 text-primary font-label-md text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              REAL FIELD &amp; CLIENT IMPACT
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
              Galeri Rekam Jejak Lapangan &amp; Sertifikasi Asesor
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Bukti otentik kontribusi dan dedikasi PT Jaya Pasific Solution dalam pembinaan keselamatan kerja maritim, pengujian asesor nasional, hingga apresiasi resmi kementerian &amp; otoritas pelabuhan RI.
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-secondary/40 font-label-md text-xs text-primary font-bold shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary-dark">award_star</span>
              Akreditasi BNSP &amp; Otoritas Pelabuhan
            </span>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: KSOP Award Plaque */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="md:col-span-6 lg:col-span-5 flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-secondary/40 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onOpenLightbox(ASSETS.ksopAward, 'Plakat Penghargaan Narasumber HIRADC & Incident Investigation KSOP Kelas I Panjang')}
          >
            <div className="relative bg-surface-container h-72 sm:h-80 overflow-hidden flex items-center justify-center p-4">
              <img 
                alt="Plakat Penghargaan Narasumber HIRADC & Incident Investigation KSOP Kelas I Panjang" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                src={ASSETS.ksopAward}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-secondary rounded-md text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span className="material-symbols-outlined text-[16px] text-secondary">military_tech</span>
                Apresiasi &amp; Penghargaan Resmi Pemerintah / KSOP
              </div>
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-primary-dark/90 text-white rounded text-xs font-semibold backdrop-blur-sm">
                Bandar Lampung
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1 gap-4 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-label-md text-xs text-secondary-dark font-bold uppercase">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span> 
                  Kantor Kesyahbandaran &amp; Otoritas Pelabuhan Kelas I Panjang
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-primary leading-snug">
                  Narasumber Ahli HIRADC &amp; Incident Investigation
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Penghargaan bergengsi yang diserahkan langsung oleh otoritas pelabuhan kementerian perhubungan kepada <strong>Johannes P.H. Simanjuntak</strong> atas bimbingan teknis identifikasi bahaya, mitigasi risiko (HIRADC), dan metodologi investigasi insiden maritim.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs sm:text-sm text-on-surface-variant">
                <span className="flex items-center gap-1 font-label-md text-xs font-bold text-primary">
                  <span className="material-symbols-outlined text-[16px] text-secondary-dark">workspace_premium</span> 
                  Sertifikat &amp; Plakat Resmi
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant">Regulasi Port Safety</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: LSP Pertambangan Indonesia Mandiri */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="md:col-span-6 lg:col-span-7 flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-secondary/40 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onOpenLightbox(ASSETS.lspMandiri, 'Pelatihan Peningkatan Kompetensi & Sertifikasi Ulang Asesor Kompetensi LSP Pertambangan Indonesia Mandiri - BNSP & ESDM')}
          >
            <div className="relative bg-surface-container h-72 sm:h-80 overflow-hidden">
              <img 
                alt="Pelatihan Peningkatan Kompetensi & Sertifikasi Ulang Asesor Kompetensi LSP Pertambangan Indonesia Mandiri - BNSP & ESDM" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src={ASSETS.lspMandiri}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-secondary rounded-md text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span className="material-symbols-outlined text-[16px] text-secondary">stars</span>
                Sertifikasi Asesor BNSP &amp; Kementerian ESDM
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-primary-dark/90 text-white rounded-xl backdrop-blur-md hidden sm:flex items-center justify-between border border-secondary/30">
                <span className="font-label-md text-xs font-bold flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">how_to_reg</span> 
                  LSP Pertambangan Indonesia Mandiri (LSP PIM)
                </span>
                <span className="text-label-sm text-xs text-surface-container">Hotel Horison Ultima</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1 gap-4 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-label-md text-xs text-secondary-dark font-bold uppercase">
                  <span className="material-symbols-outlined text-[18px] text-primary">badge</span> 
                  Penjaminan Kualifikasi Master Asesor
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-primary leading-snug">
                  Pelatihan Peningkatan Kompetensi &amp; Sertifikasi Ulang Asesor Kompetensi
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Bukti komitmen integritas instruktur JP Solution. Mengikuti pembaharuan standar metodologi asesmen SKKNI sektor pertambangan mineral dan batubara bersama Badan Nasional Sertifikasi Profesi (BNSP) dan Kementerian Energi &amp; Sumber Daya Mineral.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/40 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="font-label-md text-xs flex items-center gap-1 text-primary font-bold">
                  <span className="material-symbols-outlined text-[16px] text-secondary-dark">verified_user</span> 
                  Lisensi Asesor Resmi BNSP Aktif
                </span>
                <a 
                  className="font-label-md text-xs text-primary font-bold hover:text-secondary-dark inline-flex items-center gap-0.5" 
                  href="https://wa.me/628111595122?text=Halo%20Admin,%20saya%20ingin%20tanya%20jadwal%20Ujikom%20dan%20Asesor%20BNSP." 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Konsultasi Ujikom 
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Site Visit & Port Safety Inspection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="md:col-span-6 flex flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/60 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onOpenLightbox(ASSETS.portInspection, 'Inspeksi Langsung Fasilitas Logistik Dermaga & Kapal')}
          >
            <div className="relative bg-surface-container h-64 overflow-hidden">
              <img 
                alt="Dokumentasi Kunjungan Lapangan & Inspeksi Dermaga Pelabuhan Maritim Bersama Safety Officer" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src={ASSETS.portInspection}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-secondary rounded-md text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">anchor</span>
                Site Visit &amp; Port Safety Inspection Workshop
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-primary-dark/85 text-white rounded text-xs">
                Area Dermaga &amp; Crane Pelabuhan
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary">
                  Inspeksi Langsung Fasilitas Logistik Dermaga &amp; Kapal
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Praktik observasi bahaya langsung (direct walk-through hazard hunting) di dermaga pelabuhan bersama para safety officer dan manajemen operasional kepelabuhanan untuk memvalidasi kepatuhan tata kelola K3 maritim.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-label-md text-xs text-primary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary-dark">check_circle</span> 
                  Drill &amp; Audit Lapangan
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant">Fasilitas Berisiko Tinggi</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: In-House Risk Assessment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -6 }}
            className="md:col-span-6 flex flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/60 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onOpenLightbox(ASSETS.classroomWorkshop, 'Penyusunan Dokumen & Bedah Matriks Risiko Tim Kerja')}
          >
            <div className="relative bg-surface-container h-64 overflow-hidden">
              <img 
                alt="Sesi Diskusi & Workshop Tatap Muka Penyusunan Dokumen K3 dan Evaluasi Tim Kerja" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src={ASSETS.classroomWorkshop}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-secondary rounded-md text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">groups</span>
                In-House Risk Assessment &amp; Focus Group Discussion
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-primary-dark/85 text-white rounded text-xs">
                Focus Group Workshop
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary">
                  Penyusunan Dokumen &amp; Bedah Matriks Risiko Tim Kerja
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Workshop intensif pendampingan penyusunan Job Safety Analysis (JSA), prosedur izin kerja khusus (Permit to Work), dan manual kepatuhan K3 internal perusahaan yang dipandu langsung oleh tim konsultan senior.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-label-md text-xs text-primary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary-dark">check_circle</span> 
                  Dokumentasi SOP Siap Audit
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant">In-House Corporate</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
