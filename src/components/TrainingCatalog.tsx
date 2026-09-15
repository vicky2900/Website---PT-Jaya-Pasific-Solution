import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { COURSES, FEATURED_COURSE } from '../data';
import { ALL_ADDITIONAL_SERVICES, ServiceItem } from '../data/allServices';

interface TrainingCatalogProps {
  onSelectCourse: (courseId: string) => void;
  onRequestProposal: (courseTitle?: string) => void;
}

export const TrainingCatalog: React.FC<TrainingCatalogProps> = ({ onSelectCourse, onRequestProposal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    { id: 'all', label: 'Semua Program' },
    { id: 'bnsp-profesi', label: 'BNSP & TOT' },
    { id: 'sdm-hr', label: 'SDM / HR' },
    { id: 'iso-risk', label: 'ISO & Risiko' },
    { id: 'pertambangan', label: 'Pertambangan' },
    { id: 'rumah-sakit', label: 'K3 Rumah Sakit' },
    { id: 'konstruksi-migas', label: 'Konstruksi & Migas' },
    { id: 'lingkungan', label: 'Lingkungan & Limbah' },
    { id: 'k3-spesialis', label: 'K3 & Investigasi' },
  ];

  const filteredServices = useMemo(() => {
    return ALL_ADDITIONAL_SERVICES.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.titleEn.toLowerCase().includes(term) ||
        item.code.toLowerCase().includes(term) ||
        item.badge.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term);
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  const displayedServices = useMemo(() => {
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount]);
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background" id="marketplace">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Header Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
              KATALOG JADWAL &amp; BIAYA RESMI
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
              Pelatihan Sertifikasi Terjadwal
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Sertifikat Resmi Kemnaker RI &amp; BNSP dengan jaminan transparansi fasilitas dan biaya pelatihan.
            </p>
          </div>

          <a 
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white text-primary font-headline-sm text-xs sm:text-sm font-bold border border-secondary/40 hover:bg-secondary/15 hover:-translate-y-0.5 transition-all shadow-2xs shrink-0 text-center" 
            href="https://wa.me/628111595122?text=Halo,%20mohon%20kirimkan%20katalog%20lengkap%20jadwal%20training%202026." 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary-dark">calendar_month</span>
            Unduh Kalender Pelatihan 2026
          </a>
        </motion.div>

        {/* Highlight Hero Card: AK3U Kemnaker RI */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white rounded-2xl shadow-sm border-2 border-secondary/40 p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-bl-full pointer-events-none"></div>
          
          <div className="lg:w-7/12 flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary text-secondary font-label-md text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                TRAINING FULL OFFLINE
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-[11px] sm:text-xs font-bold">
                13 HARI + 1 HARI UJIAN KEMNAKER
              </span>
            </div>

            <h3 
              onClick={() => onSelectCourse(FEATURED_COURSE.id)}
              className="font-headline-lg text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight cursor-pointer hover:text-secondary-dark transition-colors"
              title="Klik untuk detail silabus & modul"
            >
              Pembinaan &amp; Sertifikasi Ahli K3 Umum (AK3U) Kemnaker RI
            </h3>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Pelatihan intensif di hotel berbintang dengan studi lapangan industri. Mempersiapkan praktisi K3 berkompeten sesuai UU No. 1 Tahun 1970 dan Peraturan Menteri Tenaga Kerja RI.
            </p>

            {/* Highlight Location & Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-background rounded-xl font-body-sm text-xs sm:text-sm border border-outline-variant/60">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[18px]">calendar_today</span>
                <div>
                  <strong className="block text-primary">Periode Pelaksanaan:</strong>
                  <span className="text-on-surface-variant">24 Agustus – 08 September 2026</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[18px]">pin_drop</span>
                <div>
                  <strong className="block text-primary">Lokasi Pelaksanaan:</strong>
                  <span className="text-on-surface-variant">Parkside's Hotel Palembang (Ilir Tim. I)</span>
                </div>
              </div>
            </div>

            {/* Included Facilities List */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-label-md text-xs text-secondary-dark font-bold uppercase tracking-wider">
                Fasilitas All-Inclusive Peserta:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-body-sm text-xs sm:text-sm text-on-surface">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>Sertifikat Calon AK3U</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>SKP &amp; Lisensi Kemnaker</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>Hardcopy UU K3 &amp; Pin</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>Safety Polo Shirt</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>Tas Backpack &amp; Tumbler</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[17px] shrink-0">check_circle</span>
                  <span>Lunch &amp; 2x Coffee Break</span>
                </span>
              </div>
            </div>
          </div>

          {/* Price & Action Box */}
          <div className="lg:w-5/12 w-full flex flex-col p-4 sm:p-6 bg-surface rounded-xl gap-3 sm:gap-4 justify-between border border-secondary/30 shadow-2xs">
            <div className="flex flex-col gap-3">
              <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
                Skema Investasi Pelatihan
              </span>
              
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-secondary/40 shadow-2xs flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[20px]">verified</span>
                  <span className="font-label-md text-xs font-bold text-secondary-dark uppercase tracking-wider">
                    Jaminan Penawaran Terbaik
                  </span>
                </div>
                <div className="font-headline-sm text-base sm:text-lg font-bold text-primary leading-snug">
                  Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Dapatkan penawaran harga terbaik untuk pendaftaran personal (mandiri) maupun utusan rombongan perusahaan dengan fasilitas sertifikasi resmi terlengkap.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button 
                onClick={() => onRequestProposal('Pembinaan Calon Ahli K3 Umum (AK3U) Kemnaker RI')}
                className="w-full py-3 sm:py-3.5 text-center rounded-xl bg-primary text-white font-headline-sm text-sm sm:text-base font-bold hover:bg-primary-light hover:shadow-lg transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary">request_quote</span>
                Konsultasi Sekarang
              </button>
              <a 
                className="w-full py-2.5 text-center rounded-xl bg-secondary/20 text-primary font-headline-sm text-xs sm:text-sm font-bold hover:bg-secondary/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-secondary/40" 
                href="https://wa.me/628111595122?text=Halo%20JP%20Solution,%20saya%20ingin%20berkonsultasi%20AK3U%20Kemnaker%20RI%20di%20Hotel%20Parkside." 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">chat</span>
                Chat WhatsApp Langsung
              </a>
              <span className="font-label-md text-[11px] text-center text-on-surface-variant font-medium">
                Kuota terbatas: Maksimal 25 peserta per batch
              </span>
            </div>
          </div>
        </motion.div>

        {/* Training Grid: Other Popular Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* ToT Master Trainer Level 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col bg-white p-5 sm:p-6 rounded-2xl shadow-2xs justify-between gap-4 border border-outline-variant/60 hover:shadow-md hover:border-secondary transition-all"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-secondary/30 text-primary font-label-md text-[11px] font-bold">
                  BNSP LEVEL 6
                </span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold">
                  3 Hari + Ujikom
                </span>
              </div>

              <h4 
                onClick={() => onSelectCourse('tot-bnsp-level-6')}
                className="font-headline-sm text-base sm:text-lg font-bold text-primary mt-1.5 cursor-pointer hover:text-secondary-dark transition-colors leading-snug"
              >
                Training of Trainer (TOT) Master Trainer Level 6 - Sertifikasi BNSP
              </h4>
              
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Instruktur: Johannes Simanjuntak, SKM, M.Kes. Uji kompetensi resmi BNSP berstandar SKKNI bidang instruktur &amp; pelatih kerja.
              </p>

              <div className="p-3 bg-background rounded-xl mt-1 text-xs font-body-sm flex flex-col gap-1 text-on-surface border border-outline-variant/40">
                <span>📍 Gedung Yustinus Lt. 14, Atma Jaya Sudirman, Jakarta</span>
                <span>📅 Batch 1: 28-30 April 2025 | Batch 2: 19-21 Mei 2025</span>
              </div>
            </div>

            <div className="pt-3.5 border-t border-outline-variant/50 flex flex-col gap-3 mt-auto">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-secondary-dark font-label-md text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[15px]">price_change</span>
                  <span>Investasi Pelatihan</span>
                </div>
                <div className="font-headline-sm text-xs sm:text-sm font-bold text-primary leading-snug">
                  Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
                </div>
              </div>
              <button 
                onClick={() => onRequestProposal('Training of Trainer (TOT) Master Trainer Level 6 - Sertifikasi BNSP')}
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-light text-white rounded-xl font-body-sm text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span className="material-symbols-outlined text-[17px] text-secondary group-hover:scale-110 transition-transform">request_quote</span>
                <span>Konsultasi Sekarang</span>
              </button>
            </div>
          </motion.div>

          {/* ToT Instruktur Level 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex flex-col bg-white p-5 sm:p-6 rounded-2xl shadow-2xs justify-between gap-4 border border-outline-variant/60 hover:shadow-md hover:border-secondary transition-all"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-label-md text-[11px] font-bold">
                  BNSP LEVEL 4
                </span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold">
                  3 Hari + Ujikom
                </span>
              </div>

              <h4 
                onClick={() => onSelectCourse('tot-bnsp-level-4')}
                className="font-headline-sm text-base sm:text-lg font-bold text-primary mt-1.5 cursor-pointer hover:text-secondary-dark transition-colors leading-snug"
              >
                Training of Trainer (TOT) Instruktur Level 4 - Sertifikasi BNSP
              </h4>
              
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Membekali calon trainer perusahaan dengan metodologi penyusunan modul, micro-teaching, dan delivery interaktif kelas korporat.
              </p>

              <div className="p-3 bg-background rounded-xl mt-1 text-xs font-body-sm flex flex-col gap-1 text-on-surface border border-outline-variant/40">
                <span>📍 Unika Atma Jaya Jakarta / Hybrid Class Online</span>
                <span>💼 Sertifikat Kompetensi BNSP RI + Training Kit</span>
              </div>
            </div>

            <div className="pt-3.5 border-t border-outline-variant/50 flex flex-col gap-3 mt-auto">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-secondary-dark font-label-md text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[15px]">price_change</span>
                  <span>Investasi Pelatihan</span>
                </div>
                <div className="font-headline-sm text-xs sm:text-sm font-bold text-primary leading-snug">
                  Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
                </div>
              </div>
              <button 
                onClick={() => onRequestProposal('Training of Trainer (TOT) Instruktur Level 4 - Sertifikasi BNSP')}
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-light text-white rounded-xl font-body-sm text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span className="material-symbols-outlined text-[17px] text-secondary group-hover:scale-110 transition-transform">request_quote</span>
                <span>Konsultasi Sekarang</span>
              </button>
            </div>
          </motion.div>

          {/* POP Pertambangan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col bg-white p-5 sm:p-6 rounded-2xl shadow-2xs justify-between gap-4 border border-outline-variant/60 hover:shadow-md hover:border-secondary transition-all"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-secondary/30 text-primary font-label-md text-[11px] font-bold">
                  MINERBA ESDM
                </span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold">
                  3 Hari + Ujikom
                </span>
              </div>

              <h4 
                onClick={() => onSelectCourse('pop-pertambangan-minerba')}
                className="font-headline-sm text-base sm:text-lg font-bold text-primary mt-1.5 cursor-pointer hover:text-secondary-dark transition-colors leading-snug"
              >
                Pengawas Operasional Pertama (POP) Pertambangan - Sertifikat BNSP
              </h4>
              
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Program kepatuhan teknis penanggung jawab operasional tambang mineral dan batubara sesuai Kepmen ESDM No. 1827 K/30/MEM/2018.
              </p>

              <div className="p-3 bg-background rounded-xl mt-1 text-xs font-body-sm flex flex-col gap-1 text-on-surface border border-outline-variant/40">
                <span>📍 In-House Site / Training Center Jakarta</span>
                <span>📑 Pendampingan Portofolio Ujikom LSP ESDM</span>
              </div>
            </div>

            <div className="pt-3.5 border-t border-outline-variant/50 flex flex-col gap-3 mt-auto">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 text-secondary-dark font-label-md text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[15px]">price_change</span>
                  <span>Investasi Pelatihan</span>
                </div>
                <div className="font-headline-sm text-xs sm:text-sm font-bold text-primary leading-snug">
                  Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
                </div>
              </div>
              <button 
                onClick={() => onRequestProposal('Pengawas Operasional Pertama (POP) Pertambangan - Sertifikat BNSP')}
                className="w-full py-2.5 px-4 bg-secondary hover:bg-secondary-light text-primary rounded-xl font-body-sm text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span className="material-symbols-outlined text-[17px] group-hover:scale-110 transition-transform">request_quote</span>
                <span>Konsultasi Sekarang</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* --- DIREKTORI LENGKAP SEMUA PROGRAM PELATIHAN --- */}
        <div id="direktori-layanan" className="pt-8 sm:pt-12 border-t border-outline-variant/60 flex flex-col gap-6 sm:gap-8 scroll-mt-24">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="font-label-md text-xs uppercase tracking-wider text-secondary-dark font-bold">
                DIREKTORI LENGKAP 70+ PROGRAM PELATIHAN &amp; SERTIFIKASI
              </span>
              <h3 className="font-headline-lg text-xl sm:text-2xl lg:text-3xl text-primary font-bold tracking-tight">
                Katalog Lengkap Program QHSE, BNSP &amp; Profesi Spesialis
              </h3>
              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant max-w-3xl">
                Temukan seluruh skema sertifikasi resmi BNSP, Kemnaker RI, Minerba ESDM, Kemenkes, serta implementasi standar internasional ISO.
              </p>
            </div>

            <div className="text-xs font-semibold text-on-surface-variant bg-white px-3.5 py-2 rounded-lg border border-outline-variant/60 shadow-2xs self-start md:self-auto">
              Total: <span className="text-primary font-bold">{ALL_ADDITIONAL_SERVICES.length + 3} Program Pelatihan</span>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/60 shadow-2xs">
            
            {/* Search Input Bar */}
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Cari nama pelatihan, topik, atau kata kunci (contoh: ISO, SDM, HACCP, Damkar, CSMS, Higiene)..."
                className="w-full pl-11 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl border border-outline-variant/70 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 bg-background transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors"
                  title="Hapus pencarian"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setVisibleCount(12);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-headline-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-secondary shadow-2xs'
                        : 'bg-background hover:bg-secondary/15 text-on-surface-variant hover:text-primary border border-outline-variant/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Results Count Bar */}
            <div className="flex items-center justify-between text-xs text-on-surface-variant pt-1 border-t border-outline-variant/40">
              <span>
                Menampilkan <strong className="text-primary">{displayedServices.length}</strong> dari <strong className="text-primary">{filteredServices.length}</strong> program
                {searchTerm && ` untuk pencarian "${searchTerm}"`}
              </span>
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setVisibleCount(12);
                  }}
                  className="text-xs text-secondary-dark hover:underline font-bold"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>

          {/* Directory Grid */}
          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center flex flex-col items-center gap-3 border border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">search_off</span>
              <p className="text-sm font-bold text-primary">Tidak ada program pelatihan yang sesuai dengan pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-primary text-white text-xs rounded-xl font-bold hover:bg-primary-light transition-colors"
              >
                Lihat Semua Program
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {displayedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="flex flex-col bg-white p-5 sm:p-6 rounded-2xl shadow-2xs justify-between gap-4 border border-outline-variant/60 hover:shadow-md hover:border-secondary transition-all"
                >
                  <div className="flex flex-col gap-2">
                    {/* Badge & Duration */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-label-md text-[10px] sm:text-[11px] font-bold tracking-wide uppercase truncate max-w-[170px]">
                        {service.badge}
                      </span>
                      <span className="font-label-md text-[11px] sm:text-xs text-on-surface-variant font-semibold shrink-0">
                        {service.duration}
                      </span>
                    </div>

                    {/* Indonesian Title */}
                    <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary mt-1 leading-snug">
                      {service.title}
                    </h4>

                    {/* English Title */}
                    <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant italic leading-relaxed">
                      {service.titleEn}
                    </p>

                    {/* Description */}
                    <p className="font-body-sm text-xs text-on-surface-variant/90 leading-relaxed line-clamp-3 mt-0.5">
                      {service.description}
                    </p>

                    {/* Program Code & Tag */}
                    <div className="inline-flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-background border border-outline-variant/50 text-on-surface-variant">
                        Kode: {service.code}
                      </span>
                      <span className="text-[10px] font-medium text-secondary-dark">
                        {service.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Price Block & Action Button */}
                  <div className="pt-3.5 border-t border-outline-variant/50 flex flex-col gap-3 mt-auto">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 text-secondary-dark font-label-md text-[11px] font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[15px]">price_change</span>
                        <span>Investasi Pelatihan</span>
                      </div>
                      <div className="font-headline-sm text-xs sm:text-sm font-bold text-primary leading-snug">
                        Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
                      </div>
                    </div>
                    <button
                      onClick={() => onRequestProposal(service.title)}
                      className="w-full py-2.5 px-4 bg-primary hover:bg-primary-light text-white rounded-xl font-body-sm text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
                    >
                      <span className="material-symbols-outlined text-[17px] text-secondary group-hover:scale-110 transition-transform">
                        request_quote
                      </span>
                      <span>Konsultasi Sekarang</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination / Load More & Show Less Controls */}
          {filteredServices.length > 12 && (
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-4">
              {displayedServices.length < filteredServices.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-secondary/15 text-primary border border-secondary/50 rounded-xl font-headline-sm text-xs sm:text-sm font-bold shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  <span>Tampilkan Lebih Banyak ({filteredServices.length - displayedServices.length} program lagi)</span>
                </button>
              )}

              {displayedServices.length < filteredServices.length && (
                <button
                  onClick={() => setVisibleCount(filteredServices.length)}
                  className="text-xs text-on-surface-variant hover:text-primary font-semibold underline cursor-pointer px-3 py-2"
                >
                  Tampilkan Semua ({filteredServices.length})
                </button>
              )}

              {visibleCount > 12 && (
                <button
                  onClick={() => {
                    setVisibleCount(12);
                    const el = document.getElementById('direktori-layanan');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-red-50 text-error-dark border border-outline-variant/80 hover:border-error rounded-xl font-headline-sm text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">expand_less</span>
                  <span>Tampilkan Lebih Sedikit (Ciutkan)</span>
                </button>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
