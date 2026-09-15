import React from 'react';
import { motion } from 'motion/react';

interface CorporateWorkflowProps {
  onRequestProposal: () => void;
}

export const CorporateWorkflow: React.FC<CorporateWorkflowProps> = ({ onRequestProposal }) => {
  const steps = [
    {
      num: '01',
      title: 'Company Inquiry',
      desc: 'Analisis kebutuhan (TNA) dan identifikasi regulasi wajib di industri Anda.',
    },
    {
      num: '02',
      title: 'Expert Consultation',
      desc: 'Sesi diskusi bersama Lead Auditor & Master Trainer kami guna merumuskan silabus.',
    },
    {
      num: '03',
      title: 'Customized Proposal',
      desc: 'Penerbitan proposal teknis terinci, rancangan anggaran, dan opsi jadwal fleksibel.',
    },
    {
      num: '04',
      title: 'Agreement & MoU',
      desc: 'Penetapan kontrak kerja resmi dengan garansi transparansi kelengkapan legalitas.',
    },
    {
      num: '05',
      title: 'Execution & Drill',
      desc: 'Penyelenggaraan pelatihan, simulasi praktik darurat, dan uji kompetensi terarah.',
    },
    {
      num: '06',
      title: 'Post-Audit & SKP',
      desc: 'Penerbitan sertifikat/lisensi resmi serta laporan evaluasi perilaku kerja aman.',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface" id="corporate-workflow">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4"
          >
            <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
              KOLABORASI B2B ENTERPRISE
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
              Solusi Terpadu Pelatihan &amp; Konsultansi Khusus Perusahaan Anda
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Setiap industri memiliki tingkat risiko dan matriks kepatuhan yang berbeda. Kami menyesuaikan kurikulum pelatihan, jadwal pelaksanaan (On-Site/Off-Site), serta format sertifikasi sesuai kebutuhan spesifik perusahaan Anda.
            </p>
            <div className="pt-2">
              <button
                onClick={onRequestProposal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-primary text-white font-headline-sm text-sm font-bold hover:bg-primary-light hover:shadow-lg transition-all shadow-md cursor-pointer text-center"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary">handshake</span>
                Jadwalkan Konsultasi Teknis Tim Kami
              </button>
            </div>
          </motion.div>

          {/* Right Column: 6 B2B Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-4 bg-white rounded-xl border border-outline-variant/60 flex flex-col gap-1.5 sm:gap-2 hover:border-secondary transition-colors shadow-2xs"
              >
                <span className="font-label-md text-xs font-bold text-secondary-dark">
                  LANGKAH {step.num}
                </span>
                <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary">
                  {step.title}
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
