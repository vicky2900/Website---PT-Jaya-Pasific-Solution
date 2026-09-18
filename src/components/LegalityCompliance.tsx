import React from 'react';
import { motion } from 'motion/react';

export const LegalityCompliance: React.FC = () => {
  const cards = [
    {
      icon: 'verified',
      tag: 'Resmi RI',
      title: 'SKP Kemnaker RI',
      desc: 'Surat Keputusan Penunjukan Perusahaan Jasa K3 Bidang Pembinaan Keselamatan Kerja.',
      status: 'Status: Aktif Terdaftar',
    },
    {
      icon: 'workspace_premium',
      tag: 'Nasional',
      title: 'Lisensi Asesor BNSP',
      desc: 'Dewan instruktur memiliki sertifikasi Asesor Kompetensi berlisensi Badan Nasional Sertifikasi Profesi.',
      status: 'Status: Assessor',
    },
    {
      icon: 'domain_verification',
      tag: 'Kemenkumham',
      title: 'AHU PT Resmi',
      desc: 'Badan hukum perseroan terbatas disahkan Kemenkumham RI dengan NIB & OSS RBA berbasis risiko.',
      status: 'Status: Perseroan Aktif',
    },
    {
      icon: 'receipt_long',
      tag: 'Pajak PKP',
      title: 'NPWP & Faktur Pajak',
      desc: 'Kepatuhan administrasi fiskal penuh, siap menerbitkan e-Faktur Pajak resmi bagi mitra korporasi.',
      status: 'Status: Tertib Pajak',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface-container" id="legalitas">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
            AKREDITASI &amp; KEPATUHAN HUKUM
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
            Legalitas Resmi Perusahaan
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Sebagai Perusahaan Jasa Keselamatan dan Kesehatan Kerja (PJK3) yang sah terdaftar di Republik Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 bg-white rounded-2xl border border-outline-variant/60 flex flex-col gap-3 shadow-2xs hover:border-secondary hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-primary text-[26px] sm:text-[28px]">{card.icon}</span>
                <span className="font-label-md text-xs font-bold text-secondary-dark uppercase bg-secondary/15 px-2 py-0.5 rounded">
                  {card.tag}
                </span>
              </div>
              <h4 className="font-headline-sm text-base sm:text-lg font-bold text-primary">{card.title}</h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {card.desc}
              </p>
              <span className="font-label-md text-xs text-primary font-bold mt-auto pt-2 border-t border-outline-variant/40">
                {card.status}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
