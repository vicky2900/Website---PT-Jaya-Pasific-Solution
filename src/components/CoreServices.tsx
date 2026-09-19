import React from 'react';
import { motion } from 'motion/react';

interface CoreServicesProps {
  onRequestProposal: () => void;
  onNavigateCatalog: () => void;
  onOpenWhatsApp?: (message?: string, title?: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onRequestProposal, onNavigateCatalog, onOpenWhatsApp }) => {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface" id="layanan-inti">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 text-center max-w-3xl mx-auto"
        >
          <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
            PORTAL KAPABILITAS
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
            4 Pilar Layanan Unggulan JP Solution
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Solusi komprehensif mulai dari pemenuhan kualifikasi hukum ketenagakerjaan hingga sertifikasi manajemen berskala internasional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white p-5 sm:p-6 rounded-2xl shadow-2xs hover:shadow-xl transition-all justify-between border border-outline-variant/60 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[30px]">school</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-primary">Professional Training</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Program pelatihan bersertifikasi resmi Kemnaker RI, BNSP, dan silabus industri aplikatif.
              </p>
              <ul className="flex flex-col gap-2 font-body-sm text-sm text-on-surface pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Ahli K3 Umum (AK3U) Kemnaker</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Keselamatan Tambang (SMKP &amp; POP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>K3 Rumah Sakit (K3RS Terakreditasi)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Training of Trainer (Level 4 &amp; 6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Sistem Manajemen Keselamatan Pertambangan (SMKP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Implementasi Food Safety/ Keamanan Pangan berbasis HACCP</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-outline-variant/40 mt-4">
              <a 
                className="font-label-md text-sm font-bold text-primary hover:text-secondary-dark inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer" 
                href="#marketplace"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateCatalog();
                }}
              >
                Lihat Silabus <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </a>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all justify-between border border-outline-variant/60 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-dark group-hover:bg-primary group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[30px]">workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-primary">Certification Program</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Penerbitan Surat Keputusan Penunjukan (SKP), lisensi resmi, dan sertifikasi BNSP berstandar SKKNI.
              </p>
              <ul className="flex flex-col gap-2 font-body-sm text-sm text-on-surface pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Lisensi Resmi Kemnaker RI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Sertifikasi Ujikom Profesi BNSP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>SKP Penunjukan Ahli K3 Perusahaan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Sertifikasi Auditor SMK3 PP 50</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Sistem Manajemen Keselamatan Pertambangan (SMKP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Implementasi Food Safety/ Keamanan Pangan berbasis HACCP</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-outline-variant/40 mt-4">
              <a 
                className="font-label-md text-sm font-bold text-primary hover:text-secondary-dark inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer" 
                href="#legalitas"
              >
                Validasi Izin <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </a>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all justify-between border border-outline-variant/60 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[30px]">analytics</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-primary">Management Consulting</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Konsultansi penyusunan SOP, manual MK3L, mitigasi risiko hingga pendampingan audit sertifikasi.
              </p>
              <ul className="flex flex-col gap-2 font-body-sm text-sm text-on-surface pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>ISO 9001, 14001, 45001 &amp; 31000</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Penyusunan SMK3 PP No. 50/2012</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Sistem CSMS &amp; HIRA/HIRADC</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Pre-Audit &amp; Gap Analysis System</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Sistem Manajemen Keselamatan Pertambangan (SMKP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Implementasi Food Safety/ Keamanan Pangan berbasis HACCP</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-outline-variant/40 mt-4">
              <button 
                type="button"
                onClick={() => {
                  if (onOpenWhatsApp) {
                    onOpenWhatsApp(
                      'Halo PT Jaya Pasific Solution, kami memerlukan layanan Konsultansi Sistem Manajemen (ISO / SMK3 / SMKP / HACCP). Mohon informasi proposal dan pendampingannya.',
                      'Konsultasi Sistem Manajemen (ISO / SMK3 / SMKP / HACCP)'
                    );
                  } else {
                    window.open('https://wa.me/628111595122?text=Halo%20JP%20Solution,%20kami%20memerlukan%20layanan%20Konsultansi%20ISO%20/%20SMK3.', '_blank');
                  }
                }}
                className="font-label-md text-sm font-bold text-primary hover:text-secondary-dark inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer text-left" 
              >
                <span>Konsultasi Sistem</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all justify-between border border-outline-variant/60 group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-dark group-hover:bg-primary group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[30px]">corporate_fare</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-primary">Corporate In-House</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Pelatihan on-site terpersonalisasi langsung di lokasi operasional, pabrik, tambang, atau kantor pusat.
              </p>
              <ul className="flex flex-col gap-2 font-body-sm text-sm text-on-surface pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Simulasi Tanggap Darurat (Damkar/ERP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Safety Leadership for Supervisors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Penanganan B3 &amp; IMDG Port Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Evaluasi &amp; Kunjungan Lapangan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Sistem Manajemen Keselamatan Pertambangan (SMKP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Konsultasi Implementasi Food Safety/ Keamanan Pangan berbasis HACCP</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-outline-variant/40 mt-4">
              <a 
                className="font-label-md text-sm font-bold text-primary hover:text-secondary-dark inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer" 
                href="#corporate-workflow"
              >
                Alur Pengajuan <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
