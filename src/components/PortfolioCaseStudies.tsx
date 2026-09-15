import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

interface PortfolioCaseStudiesProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const PortfolioCaseStudies: React.FC<PortfolioCaseStudiesProps> = ({ onOpenLightbox }) => {
  return (
    <section className="w-full py-16 px-6 bg-background" id="portofolio-klien">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
            REKAM JEJAK &amp; PORTOFOLIO DOKUMENTASI
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
            Implementasi Lapangan Terbukti
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Komitmen nyata pendampingan keselamatan kerja di berbagai instansi pemerintah, BUMN, dan korporasi swasta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Case 1: Mining Training PT Cita Mineral Investindo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/60 cursor-pointer group"
            onClick={() => onOpenLightbox(ASSETS.citaMineral, 'PT Cita Mineral Investindo - Basic Mining Safety')}
          >
            <div className="w-full h-48 bg-surface-container relative overflow-hidden">
              <img 
                alt="Pelatihan Dasar-Dasar Keselamatan Pertambangan PT Cita Mineral Investindo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src={ASSETS.citaMineral}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-secondary rounded-full text-xs font-bold shadow">
                SEKTOR PERTAMBANGAN
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-xs text-secondary-dark font-bold">In-House Site Safety</span>
                <h4 className="font-headline-sm text-base font-bold text-primary">PT Cita Mineral Investindo</h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Pelatihan Dasar-Dasar Keselamatan Pertambangan (Basic Mining Safety) untuk personel teknis dan operasional site.
                </p>
              </div>
              <div className="flex items-center gap-1 text-label-md text-xs text-primary font-bold pt-3 border-t border-outline-variant/40">
                <span className="material-symbols-outlined text-[16px] text-secondary-dark">verified</span> 
                100% Peserta Teruji
              </div>
            </div>
          </motion.div>

          {/* Case 2: Healthcare K3RS RSUD dr Hadrianus Sinaga */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/60 cursor-pointer group"
            onClick={() => onOpenLightbox(ASSETS.rsudHadrianus, 'RSUD dr. Hadrianus Sinaga - K3 Rumah Sakit (K3RS)')}
          >
            <div className="w-full h-48 bg-surface-container relative overflow-hidden">
              <img 
                alt="Pelatihan Keselamatan Kesehatan Kerja Rumah Sakit K3RS RSUD dr. Hadrianus Sinaga" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src={ASSETS.rsudHadrianus}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-secondary rounded-full text-xs font-bold shadow">
                FASILITAS KESEHATAN
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-xs text-secondary-dark font-bold">Keselamatan Rumah Sakit</span>
                <h4 className="font-headline-sm text-base font-bold text-primary">RSUD dr. Hadrianus Sinaga</h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Pelatihan &amp; Penyusunan Sistem K3 Rumah Sakit (K3RS) untuk mendukung akreditasi fasilitas kesehatan daerah.
                </p>
              </div>
              <div className="flex items-center gap-1 text-label-md text-xs text-primary font-bold pt-3 border-t border-outline-variant/40">
                <span className="material-symbols-outlined text-[16px] text-secondary-dark">verified</span> 
                Standar Kemenkes RI
              </div>
            </div>
          </motion.div>

          {/* Case 3: IMDG Code Maritime Hazardous Goods */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/60 cursor-pointer group"
            onClick={() => onOpenLightbox(ASSETS.imdgPort, 'IMDG Code Port Operations - Hazardous Material Handling')}
          >
            <div className="w-full h-48 bg-surface-container relative overflow-hidden">
              <img 
                alt="Pelatihan Penanganan Barang Berbahaya IMDG Code Pelabuhan Maritim" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src={ASSETS.imdgPort}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-secondary rounded-full text-xs font-bold shadow">
                IMDG CODE
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-xs text-secondary-dark font-bold">Hazardous Material Handling</span>
                <h4 className="font-headline-sm text-base font-bold text-primary">IMDG Code Port Operations</h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Penanganan &amp; Pengangkutan Barang Berbahaya (IMDG Code) di pelabuhan laut logistik berstandar maritim internasional.
                </p>
              </div>
              <div className="flex items-center gap-1 text-label-md text-xs text-primary font-bold pt-3 border-t border-outline-variant/40">
                <span className="material-symbols-outlined text-[16px] text-secondary-dark">verified</span> 
                Regulasi IMO Compliance
              </div>
            </div>
          </motion.div>

          {/* Case 4: Corporate Development PLN & LAPI ITB */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/60 cursor-pointer group"
            onClick={() => onOpenLightbox(ASSETS.plnItb, 'PLN & LAPI ITB - Leadership & Risk Management')}
          >
            <div className="w-full h-48 bg-surface-container relative overflow-hidden">
              <img 
                alt="Leadership Training Collaboration PLN dan LAPI ITB" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src={ASSETS.plnItb}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-secondary rounded-full text-xs font-bold shadow">
                BUMN &amp; AKADEMISI
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-xs text-secondary-dark font-bold">Executive Development</span>
                <h4 className="font-headline-sm text-base font-bold text-primary">PLN &amp; LAPI ITB Collab</h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Program peningkatan kapabilitas kepemimpinan dan manajemen risiko korporasi bersama lembaga riset perguruan tinggi terkemuka.
                </p>
              </div>
              <div className="flex items-center gap-1 text-label-md text-xs text-primary font-bold pt-3 border-t border-outline-variant/40">
                <span className="material-symbols-outlined text-[16px] text-secondary-dark">verified</span> 
                Kelas Eksekutif
              </div>
            </div>
          </motion.div>

        </div>

        {/* Additional Photo Banner Detail */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full p-6 bg-white rounded-2xl flex flex-col sm:flex-row items-center gap-6 border border-secondary/30 shadow-sm"
        >
          <div 
            className="w-full sm:w-56 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm cursor-pointer group"
            onClick={() => onOpenLightbox(ASSETS.fieldHybrid, 'Pelaksanaan Hybrid & Offline Seluruh Indonesia')}
          >
            <img 
              alt="Dokumentasi Teknis Pelatihan JP Solution" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src={ASSETS.fieldHybrid}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-label-md text-xs text-secondary-dark font-bold uppercase tracking-wider">
              PELAKSANAAN HYBRID &amp; OFFLINE SELURUH INDONESIA
            </span>
            <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-primary">
              Siap Melayani Pelatihan On-Site di Lokasi Perusahaan Anda
            </h4>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              Tim instruktur dan asesor JP Solution memiliki kesiapan mobilisasi ke seluruh penjuru Nusantara termasuk area terpencil (remote mine site, kilang lepas pantai, dan instalasi terisolasi).
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
