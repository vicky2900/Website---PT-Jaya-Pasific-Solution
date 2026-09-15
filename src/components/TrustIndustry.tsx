import React from 'react';
import { motion } from 'motion/react';

export const TrustIndustry: React.FC = () => {
  const sectors = [
    { name: 'Pertambangan', icon: 'landslide' },
    { name: 'Kesehatan / RS', icon: 'local_hospital' },
    { name: 'Konstruksi Sipil', icon: 'construction' },
    { name: 'Manufaktur', icon: 'precision_manufacturing' },
    { name: 'Finansial & Bank', icon: 'account_balance' },
    { name: 'Migas & Energi', icon: 'oil_barrel' },
    { name: 'Maritim & Port', icon: 'anchor' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-primary py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-white border-y border-secondary/30 shadow-inner"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5">
          <span className="font-label-md text-xs tracking-widest uppercase text-secondary font-bold">
            AKREDITASI &amp; RUANG LINGKUP SEKTOR
          </span>
          <h3 className="font-headline-sm text-sm sm:text-lg text-white font-semibold">
            Mitra Resmi Pelatihan &amp; Konsultansi Industri Strategis
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 pt-2">
          {sectors.map((sec, idx) => (
            <motion.div
              key={sec.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-all cursor-default text-xs sm:text-sm"
            >
              <span className="material-symbols-outlined text-secondary text-[18px] sm:text-[20px] shrink-0">
                {sec.icon}
              </span>
              <span className="font-body-sm font-semibold truncate">
                {sec.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
