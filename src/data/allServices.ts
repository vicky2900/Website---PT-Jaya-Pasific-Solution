export interface ServiceItem {
  id: string;
  code: string;
  category: 'iso-risk' | 'bnsp-profesi' | 'rumah-sakit' | 'pertambangan' | 'lingkungan' | 'sdm-hr' | 'konstruksi-migas' | 'k3-spesialis';
  categoryLabel: string;
  title: string;
  titleEn: string;
  badge: string;
  duration: string;
  description: string;
  flyerImage?: string;
  flyerTitle?: string;
  canBimtek?: boolean;
  canBnsp?: boolean;
  priceNote?: string;
  additionalInfo?: string;
}

export const ALL_ADDITIONAL_SERVICES: ServiceItem[] = [
  // --- KATEGORI 1: MK3L&R (Mutu, K3L, Risiko) - ISO & Manajemen Risiko ---
  {
    id: 'iso-integrasi-45001-14001-9001-31000',
    code: 'ISO-INT-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Standar K3 (ISO 45001), Standar Lingkungan (ISO 14001), Standar Mutu (ISO 9001) & Standar Manajemen Risiko (ISO 31000)',
    titleEn: 'OHS Standard (ISO 45001), Environmental Standard (ISO 14001), Quality Standard (ISO 9001), Integration, and Risk Management (ISO 31000)',
    badge: 'ISO INTEGRATED',
    duration: '3 Hari + Ujikom',
    description: 'Pelatihan komprehensif integrasi sistem manajemen QHSE & manajemen risiko berbasis ISO 31000 untuk korporat multisektor.'
  },
  {
    id: 'audit-internal-iso-19011',
    code: 'ISO-AUD-19011',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Audit Internal ISO 19011 : Panduan Audit Sistem Manajemen',
    titleEn: 'Internal Audit ISO 19011 : Guidelines for auditing management systems',
    badge: 'ISO 19011',
    duration: '3 Hari + Ujikom',
    description: 'Pedoman metodologi dan kompetensi auditor internal untuk merencanakan, melaksanakan, dan mendokumentasikan temuan audit.'
  },
  {
    id: 'audit-internal-iso-14001',
    code: 'ISO-AUD-14001',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Audit Internal ISO 14001 : Sistem Manajemen Lingkungan',
    titleEn: 'Internal Audit ISO 14001 : Environmental Management System',
    badge: 'ISO 14001',
    duration: '3 Hari + Ujikom',
    description: 'Pelatihan teknis audit kepatuhan lingkungan hidup dan identifikasi kesenjangan sistem manajemen lingkungan perusahaan.'
  },
  {
    id: 'audit-internal-iso-45001',
    code: 'ISO-AUD-45001',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Audit Internal ISO 45001 : Sistem Manajemen Keselamatan Kesehatan Kerja',
    titleEn: 'Internal Audit ISO 45001 : OHS Management System',
    badge: 'ISO 45001',
    duration: '3 Hari + Ujikom',
    description: 'Pemeriksaan kepatuhan SMK3 berstandar internasional ISO 45001 untuk memitigasi bahaya dan risiko keselamatan kerja.'
  },
  {
    id: 'audit-internal-iso-9001',
    code: 'ISO-AUD-9001',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Audit Internal ISO 9001 : Sistem Manajemen Mutu',
    titleEn: 'Internal Audit ISO 9001 : Quality Management System',
    badge: 'ISO 9001',
    duration: '3 Hari + Ujikom',
    description: 'Evaluasi kesesuaian implementasi sistem mutu dan kepuasan pelanggan sesuai standar ISO 9001:2015.'
  },
  {
    id: 'penyelidikan-kecelakaan',
    code: 'K3-INC-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Penyelidikan Kecelakaan (Incident Investigation)',
    titleEn: 'Incident Investigation',
    badge: 'K3 INVESTIGASI',
    duration: '3 Hari + Ujikom',
    description: 'Metodologi analisis akar masalah (RCA), pembuatan kronologi, dan perumusan tindakan korektif pencegahan kecelakaan kerja berulang.'
  },
  {
    id: 'pelatihan-analisa-keselamatan-tugas-jsa',
    code: 'K3-JSA-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan Analisa Keselamatan Tugas / Job Safety Analysis (JSA)',
    titleEn: 'Job Safety Analysis (JSA) Training',
    badge: 'K3 OPERASIONAL',
    duration: '3 Hari + Ujikom',
    description: 'Teknik identifikasi potensi bahaya langkah demi langkah dalam setiap tugas kerja lapangan dan penentuan kendali pencegahan.'
  },
  {
    id: 'identifikasi-aspek-dampak-lingkungan-iadl',
    code: 'ENV-IADL-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Identifikasi Aspek dan Dampak Lingkungan (IADL)',
    titleEn: 'Identification of Environmental Aspect and Impact',
    badge: 'AMDAL & LINGKUNGAN',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan matriks aspek lingkungan, penentuan tingkat signifikansi, dan pengendalian pencemaran limbah serta emisi.'
  },
  {
    id: 'pelatihan-k3-rumah-sakit',
    code: 'K3RS-GEN-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pelatihan Keselamatan Kesehatan Kerja Rumah Sakit (K3RS)',
    titleEn: 'Hospital Occupational Health and Safety',
    badge: 'K3RS PERMENKES',
    duration: '3 Hari + Ujikom',
    description: 'Implementasi standar K3 fasilitas pelayanan kesehatan sesuai Permenkes 66/2016 guna perlindungan nakes, pasien, dan pengunjung.'
  },
  {
    id: 'limbah-b3-rumah-sakit',
    code: 'K3RS-B3-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pengelolaan Limbah B3 Rumah Sakit',
    titleEn: 'Hospital Hazardous and Toxic Waste',
    badge: 'LIMBAH MEDIS B3',
    duration: '3 Hari + Ujikom',
    description: 'Prosedur pemilahan, penyimpanan TPS B3 medis berizin, pengemasan, manifest elektronik festronik, dan pengolahan limbah klinis.'
  },
  {
    id: 'hygiene-dan-sanitasi-rumah-sakit',
    code: 'K3RS-SAN-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Hygiene dan Sanitasi Rumah Sakit',
    titleEn: 'Hospital Hygiene and Sanitation',
    badge: 'SANITASI RS',
    duration: '3 Hari + Ujikom',
    description: 'Standar baku mutu air bersih, sanitasi ruang isolasi, sterilisasi laundry, penyehatan makanan gizi, dan vektor penyakit di faskes.'
  },
  {
    id: 'pelatihan-rumah-sakit-lainnya',
    code: 'K3RS-OTH-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pelatihan - Pelatihan Rumah Sakit Lainnya (Kesiapsiagaan Bencana & Evakuasi)',
    titleEn: 'Others Hospital Training',
    badge: 'K3RS SPESIALIS',
    duration: '3 Hari + Ujikom',
    description: 'Program modular simulasi penanggulangan bencana gempa/kebakaran RS, Code Blue, Code Red, serta proteksi radiasi medis.'
  },
  {
    id: 'smk3-pp-50-2012',
    code: 'SMK3-PP50',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'SMK3 berdasarkan PP 50 tahun 2012 (Sistem Manajemen K3 Nasional)',
    titleEn: 'SHE Management System based on PP 50 2012',
    badge: 'KEMNAKER RI',
    duration: '3 Hari + Ujikom',
    description: 'Pemenuhan 166 kriteria audit SMK3 Kemnaker RI untuk meraih predikat Bendera Emas dan sertifikat kepatuhan hukum tertinggi.'
  },
  {
    id: 'smkp-keselamatan-pertambangan',
    code: 'ESDM-SMKP-01',
    category: 'pertambangan',
    categoryLabel: 'Pertambangan & ESDM',
    title: 'SMKP (Sistem Manajemen Keselamatan Pertambangan Minerba)',
    titleEn: 'Mine Safety Management System',
    badge: 'MINERBA ESDM',
    duration: '3 Hari + Ujikom',
    description: 'Implementasi 7 elemen SMKP Minerba sesuai Kepmen ESDM 1827 K/2018 dan Kepdirjen Minerba 185 K/2019.'
  },
  {
    id: 'berpikir-berdasarkan-risiko',
    code: 'ISO-RBT-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Berpikir Berdasarkan Risiko (Risk Based Thinking)',
    titleEn: 'Risk Based Thinking',
    badge: 'RISK GOVERNANCE',
    duration: '3 Hari + Ujikom',
    description: 'Konsep preventif integratif untuk memetakan ancaman operasional dan menangkap peluang bisnis dalam kerangka kerja ISO.'
  },
  {
    id: 'kesiapan-keadaan-darurat',
    code: 'K3-ERP-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Kesiapan Keadaan Darurat (Emergency Response Preparedness)',
    titleEn: 'Emergency Response',
    badge: 'EMERGENCY PLAN',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan Emergency Response Plan (ERP), pembentukan tim tanggap darurat, dan skenario evakuasi massal industri.'
  },
  {
    id: 'peningkatan-keberlanjutan',
    code: 'ESG-IMP-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Peningkatan Keberlanjutan (Continuous Improvement & ESG)',
    titleEn: 'Improvement',
    badge: 'KAIZEN & ESG',
    duration: '3 Hari + Ujikom',
    description: 'Metodologi Kaizen, PDCA berkelanjutan, dan integrasi target ESG (Environmental, Social, Governance) dalam strategi bisnis.'
  },
  {
    id: 'izin-kerja-work-permit',
    code: 'K3-PTW-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Izin Kerja Aman (Permit to Work - PTW)',
    titleEn: 'Work Permit',
    badge: 'SAFETY PERMIT',
    duration: '3 Hari + Ujikom',
    description: 'Prosedur otorisasi pekerjaan berisiko tinggi: Hot Work, Cold Work, Confined Space, Lifting, Excavation, dan Electrical Isolation.'
  },
  {
    id: 'dasar-k3-basic-safety',
    code: 'K3-BASIC-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Dasar K3 (Basic Safety for All Workforce)',
    titleEn: 'Basic Safety',
    badge: 'SAFETY INDUCTION',
    duration: '3 Hari + Ujikom',
    description: 'Pemahaman fundamental budaya K3, rambu keselamatan, penggunaan APD yang benar, dan penanganan insiden awal.'
  },
  {
    id: 'pelatihan-ibprp-hirac',
    code: 'K3-HIRAC-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan Identifikasi Bahaya, Penilaian Risiko dan Pengendaliannya (IBPRP / HIRADC)',
    titleEn: 'Hazard Identification Risk Assesment Control (HIRAC) Training',
    badge: 'HIRADC TEKNIK',
    duration: '3 Hari + Ujikom',
    description: 'Teknik kuantitatif & kualitatif menghitung tingkat risiko bahaya kerja serta hierarki pengendalian eliminasi hingga APD.'
  },
  {
    id: 'dasar-k3-pertambangan',
    code: 'MIN-BASE-01',
    category: 'pertambangan',
    categoryLabel: 'Pertambangan & ESDM',
    title: 'Dasar K3 Pertambangan (Basic Mining Safety)',
    titleEn: 'Basic Mining Safety',
    badge: 'MINING SAFETY',
    duration: '3 Hari + Ujikom',
    description: 'Pengenalan golden rules tambang terbuka & bawah tanah, blind spot alat berat, dumping area, dan pit safety induction.'
  },
  {
    id: 'dasar-lingkungan',
    code: 'ENV-BASE-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Dasar Perlindungan & Pengelolaan Lingkungan (Basic Environmental)',
    titleEn: 'Basic Enviromental',
    badge: 'LINGKUNGAN HIDUP',
    duration: '3 Hari + Ujikom',
    description: 'Pematuhan regulasi PP No. 22/2021, baku mutu air limbah, emisi udara cerobong, dan kesadaran konservasi sumber daya.'
  },
  {
    id: 'pelatihan-keselamatan-untuk-pengawas',
    code: 'K3-SUPV-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan Keselamatan untuk Pengawas Lapangan',
    titleEn: 'Safety leadership for supervisor line',
    badge: 'SAFETY LEADERSHIP',
    duration: '3 Hari + Ujikom',
    description: 'Keterampilan coaching, safety talk harian, inspeksi rutin, dan penegakan akuntabilitas K3 bagi supervisor lini depan.'
  },
  {
    id: 'pelatihan-kepemimpinan-keselamatan-manajemen',
    code: 'K3-MGMT-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan Kepemimpinan Keselamatan untuk Tingkat Manajemen',
    titleEn: 'Safety leadership for Management level',
    badge: 'EXECUTIVE SAFETY',
    duration: '3 Hari + Ujikom',
    description: 'Transformasi budaya K3 generatif, alokasi anggaran keselamatan, dan manajemen komitmen zero accident dari level pimpinan.'
  },
  {
    id: 'pelatihan-kepemimpinan-keselamatan-personel-k3l',
    code: 'K3-SHEOFF-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan Kepemimpinan Keselamatan untuk Personel K3L (SHE Officer)',
    titleEn: 'Safety leadership for Safety Health Environmental (SHE) Officer',
    badge: 'OFFICER SKILL',
    duration: '3 Hari + Ujikom',
    description: 'Penguatan pengaruh komunikasi persuasif, manajemen konflik operasional vs safety, dan pelaporan KPI K3L ke direksi.'
  },

  // --- KATEGORI 2: SKEMA SERTIFIKASI PROFESI BNSP (TOT, SDM / HR, ASESMEN) ---
  {
    id: 'pelatihan-pelatih-level-3-tot',
    code: 'BNSP-TOT-LV3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pelatihan untuk Pelatih level 3 (Junior/Asisten Trainer) - Sertifikasi BNSP',
    titleEn: 'Training of Trainer (TOT) Level 3',
    badge: 'BNSP LEVEL 3',
    duration: '3 Hari + Ujikom',
    description: 'Standarisasi kompetensi instruktur pemula dalam membantu penyelenggaraan pelatihan dan demonstrasi keterampilan kerja.'
  },
  {
    id: 'pelatihan-pelatih-level-5-tot',
    code: 'BNSP-TOT-LV5',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pelatihan untuk Pelatih level 5 (Pelatih Senior) - Sertifikasi BNSP',
    titleEn: 'Training of Trainer (TOT) Level 5 (Senior Trainer)',
    badge: 'BNSP LEVEL 5',
    duration: '3 Hari + Ujikom',
    description: 'Skema kompetensi bagi perancang program pelatihan kerja, validasi media ajar, dan instruktur madya korporat.'
  },
  {
    id: 'staf-sumberdaya-manusia-sdm',
    code: 'BNSP-HR-STF',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Staf Sumberdaya Manusia (SDM) - Sertifikasi Profesi BNSP',
    titleEn: 'Human Resources Staff',
    badge: 'BNSP SDM',
    duration: '3 Hari + Ujikom',
    description: 'Kompetensi administrasi pengupahan, pencatatan absensi, pengarsipan dokumen kerja kualifikasi SKKNI MSDM.'
  },
  {
    id: 'supervisor-sumberdaya-manusia-sdm',
    code: 'BNSP-HR-SPV',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Supervisor Sumberdaya Manusia (SDM) - Sertifikasi BNSP',
    titleEn: 'Human Resources Supervisor',
    badge: 'BNSP SDM',
    duration: '3 Hari + Ujikom',
    description: 'Supervisi operasional harian kepatuhan regulasi ketenagakerjaan, evaluasi kinerja, dan komunikasi karyawan.'
  },
  {
    id: 'supervisor-rekrutmen-dan-seleksi-sdm',
    code: 'BNSP-HR-REC',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Supervisor Rekrutmen dan Seleksi SDM - Sertifikasi BNSP',
    titleEn: 'Recruitment & Selection Supervisor',
    badge: 'BNSP REKRUTMEN',
    duration: '3 Hari + Ujikom',
    description: 'Metodologi wawancara berbasis kompetensi (BEI), penataan psikotes, dan onboarding talenta baru.'
  },
  {
    id: 'supervisor-hubungan-industrial',
    code: 'BNSP-HR-IRSPV',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Supervisor Hubungan Industrial - Sertifikasi BNSP',
    titleEn: 'Industrial Relations Supervisor',
    badge: 'BNSP HUB. INDUSTRIAL',
    duration: '3 Hari + Ujikom',
    description: 'Penanganan dinamika serikat pekerja, penyusunan Perjanjian Kerja Bersama (PKB), dan pencegahan perselisihan hak.'
  },
  {
    id: 'kepala-bagian-sdm',
    code: 'BNSP-HR-KABAG',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Kepala Bagian SDM - Sertifikasi Profesi BNSP',
    titleEn: 'Head Office of Human Resources',
    badge: 'BNSP SDM HEAD',
    duration: '3 Hari + Ujikom',
    description: 'Kepemimpinan operasional departemen SDM dalam menyelaraskan KPI divisi dengan target pertumbuhan korporasi.'
  },
  {
    id: 'kepala-bagian-rekrutmen-seleksi-sdm',
    code: 'BNSP-HR-KAREC',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Kepala Bagian Rekrutmen dan Seleksi SDM - Sertifikasi BNSP',
    titleEn: 'Head Office of Recruitment & Selection',
    badge: 'BNSP HEAD REC',
    duration: '3 Hari + Ujikom',
    description: 'Manajemen saluran talent acquisition, strategi employer branding, dan efisiensi biaya rekrutmen massal.'
  },
  {
    id: 'kepala-bagian-pelatihan-pengembangan',
    code: 'BNSP-HR-KATRNDEV',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Kepala Bagian Pelatihan dan Pengembangan - Sertifikasi BNSP',
    titleEn: 'Head Office Training and Development',
    badge: 'BNSP L&D HEAD',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan Training Need Analysis (TNA), kurikulum corporate university, dan pengukuran ROI pelatihan.'
  },
  {
    id: 'kepala-bagian-remunerasi',
    code: 'BNSP-HR-KAREM',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Kepala Bagian Remunerasi - Sertifikasi Profesi BNSP',
    titleEn: 'Head Office of Remuneration',
    badge: 'BNSP REMUNERASI',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan struktur skala upah, sistem insentif performa, analisis jabatan, dan benchmarking kompensasi.'
  },
  {
    id: 'kepala-bagian-hubungan-industrial',
    code: 'BNSP-HR-KAIR',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Kepala Bagian Hubungan Industrial - Sertifikasi BNSP',
    titleEn: 'Head Office of Industrial Relations',
    badge: 'BNSP HEAD IR',
    duration: '3 Hari + Ujikom',
    description: 'Mitigasi risiko sengketa ketenagakerjaan di tingkat Disnaker dan Pengadilan Hubungan Industrial (PHI).'
  },
  {
    id: 'manajer-sdm',
    code: 'BNSP-HR-MGR',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer SDM (Human Resources Manager) - Sertifikasi BNSP',
    titleEn: 'Human Resources Manager',
    badge: 'BNSP HR MANAGER',
    duration: '3 Hari + Ujikom',
    description: 'Pengelolaan portofolio menyeluruh SDM perusahaan berbasis standar kompetensi kerja nasional SKKNI MSDM.'
  },
  {
    id: 'manajer-hubungan-industrial',
    code: 'BNSP-HR-MGRIR',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer Hubungan Industrial - Sertifikasi BNSP',
    titleEn: 'Industrial Relations Manager',
    badge: 'BNSP IR MANAGER',
    duration: '3 Hari + Ujikom',
    description: 'Negosiasi strategis iklim kerja kondusif dan kepatuhan perundang-undangan cipta kerja ketenagakerjaan.'
  },
  {
    id: 'manajer-pengembangan-organisasi',
    code: 'BNSP-HR-MGROD',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer Pengembangan Organisasi (OD Manager) - Sertifikasi BNSP',
    titleEn: 'Organisation Development Manager',
    badge: 'BNSP OD MANAGER',
    duration: '3 Hari + Ujikom',
    description: 'Desain struktur organisasi adaptif, manajemen perubahan (change management), dan pembentukan budaya korporat.'
  },
  {
    id: 'manajer-pelatihan-dan-pengembangan',
    code: 'BNSP-HR-MGRLND',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer Pelatihan dan Pengembangan (L&D Manager) - Sertifikasi BNSP',
    titleEn: 'Training and Development Manager',
    badge: 'BNSP L&D MANAGER',
    duration: '3 Hari + Ujikom',
    description: 'Tata kelola strategi peningkatan kapabilitas sumber daya manusia jangka panjang berdaya saing global.'
  },
  {
    id: 'manajer-remunerasi',
    code: 'BNSP-HR-MGRREM',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer Remunerasi (Compensation & Benefit Manager) - Sertifikasi BNSP',
    titleEn: 'Remuneration Manager',
    badge: 'BNSP COMP & BEN',
    duration: '3 Hari + Ujikom',
    description: 'Arsitektur sistem imbalan kompetitif guna meningkatkan retensi talenta kunci dan efisiensi tenaga kerja.'
  },
  {
    id: 'manajer-manajemen-talenta',
    code: 'BNSP-HR-MGRTM',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Manajer Manajemen Talenta (Talent Management) - Sertifikasi BNSP',
    titleEn: 'Talent Management',
    badge: 'BNSP TALENT MGR',
    duration: '3 Hari + Ujikom',
    description: 'Perancangan jalur suksesi kepemimpinan, identifikasi high-potential employee, dan pemetaan kompetensi.'
  },
  {
    id: 'general-manager-sdm',
    code: 'BNSP-HR-GM',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'General Manager SDM (GM Human Resources) - Sertifikasi BNSP',
    titleEn: 'General Manager',
    badge: 'BNSP HR DIRECTOR',
    duration: '3 Hari + Ujikom',
    description: 'Penetapan arah strategis Human Capital Management tingkat eksekutif mendukung transformasi pertumbuhan perusahaan.'
  },

  // --- KATEGORI 3: PERTAMBANGAN, SMKP & TEKNIS LAPANGAN ---
  {
    id: 'pom-pertambangan-minerba',
    code: 'ESDM-POM-2026',
    category: 'pertambangan',
    categoryLabel: 'Pertambangan & ESDM',
    title: 'Pengawas Operasional Madya (POM) Pertambangan - Sertifikat BNSP',
    titleEn: 'Middle Operational Management',
    badge: 'MINERBA MADYA',
    duration: '3 Hari + Ujikom',
    description: 'Sertifikasi kompetensi pengawas tingkat menengah pertambangan sesuai regulasi teknis Ditjen Minerba ESDM.'
  },
  {
    id: 'investigasi-kecelakaan-tambang',
    code: 'MIN-INV-01',
    category: 'pertambangan',
    categoryLabel: 'Pertambangan & ESDM',
    title: 'Investigasi Kecelakaan Tambang (Mining Accident Investigations)',
    titleEn: 'Mining Accident Investigations',
    badge: 'MINING INVESTIGATION',
    duration: '3 Hari + Ujikom',
    description: 'Tata cara pemeriksaan tempat kejadian kecelakaan tambang berstandar inspektur tambang dan penyusunan Berita Acara.'
  },
  {
    id: 'inspeksi-k3',
    code: 'K3-INSP-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Inspeksi K3 (Occupational Health and Safety Inspection)',
    titleEn: 'Occupational Health And Safety Inspection',
    badge: 'K3 INSPEKSI',
    duration: '3 Hari + Ujikom',
    description: 'Pelatihan teknik inspeksi terencana, observasi perilaku bahaya, dan checklist keselamatan sarana kerja.'
  },
  {
    id: 'penyusunan-ibpr',
    code: 'K3-IBPR-02',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Penyusunan Identifikasi Bahaya dan Penilaian Resiko (IBPR)',
    titleEn: 'Preparation of Hazard Identification and Risk Assessment (IBPR)',
    badge: 'K3 RISK DRAFTING',
    duration: '3 Hari + Ujikom',
    description: 'Praktek merumuskan register risiko spesifik unit bisnis dan rencana mitigasi bahaya operasional.'
  },
  {
    id: 'penyusunan-jsa',
    code: 'K3-JSA-02',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Penyusunan Job Safety Analysis (JSA)',
    titleEn: 'Preparation of Job Safety Analysis',
    badge: 'JSA PRAKTEK',
    duration: '3 Hari + Ujikom',
    description: 'Pelatihan menyusun instruksi kerja aman (SOP) berdasarkan analisis langkah bahaya tugas operasional.'
  },
  {
    id: 'teknisi-ruang-terbatas',
    code: 'K3-CS-TECH',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Teknisi Ruang Terbatas (Confined Space Technician) - Sertifikasi BNSP',
    titleEn: 'Confined Space Technician',
    badge: 'CONFINED SPACE',
    duration: '3 Hari + Ujikom',
    description: 'Keterampilan memasuki dan bekerja aman di tangki, silo, sewer, serta pengoperasian blower dan gas detector.'
  },
  {
    id: 'ahli-muda-ruang-terbatas',
    code: 'K3-CS-MUD',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Ahli Muda Ruang Terbatas (Junior Expert of Confined Space)',
    titleEn: 'Junior Expert of Confined Space',
    badge: 'CONFINED EXPERT',
    duration: '3 Hari + Ujikom',
    description: 'Kewenangan supervisi izin masuk ruang terbatas, rescue darurat, dan penilaian kualitas atmosfer gas beracun.'
  },
  {
    id: 'bekerja-di-ketinggian-wah',
    code: 'K3-WAH-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Bekerja di Ketinggian (Working at Height) - Sertifikasi BNSP',
    titleEn: 'Working At Height',
    badge: 'FALL PROTECTION',
    duration: '3 Hari + Ujikom',
    description: 'Penggunaan full body harness, anchor point, lifeline, scaffolding inspection, dan teknik self-rescue saat jatuh.'
  },
  {
    id: 'supervisor-environment',
    code: 'ENV-SPV-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Supervisor Environment (Pengawas Lingkungan Hidup) - Sertifikasi BNSP',
    titleEn: 'Environment Supervisor',
    badge: 'BNSP LINGKUNGAN',
    duration: '3 Hari + Ujikom',
    description: 'Pemantauan kualitas air limbah, emisi udara, pelaporan dokumen RKL/RPL dan kepatuhan perizinan lingkungan.'
  },

  // --- KATEGORI 4: PENGELOLAAN LIMBAH, SAMPAH, LCA & HACCP ---
  {
    id: 'pengoperasian-instalasi-sampah-non-b3',
    code: 'ENV-WASTE-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pengoperasian Instalasi Pengelolaan Sampah / Limbah Padat Non B3',
    titleEn: 'Operational non Hazardous Waste Management Installation',
    badge: 'OPERASIONAL LIMBAH',
    duration: '3 Hari + Ujikom',
    description: 'Teknik pengolahan sampah padat ramah lingkungan: insinerasi terkendali, komposting, shredding, dan pemadatan.'
  },
  {
    id: 'pengawasan-pengolahan-sampah-non-b3',
    code: 'ENV-WASTE-02',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pengawasan Pengolahan Sampah / Limbah Padat Non B3',
    titleEn: 'Non Hazardous Waste Management Supervisor',
    badge: 'PENGAWAS LIMBAH',
    duration: '3 Hari + Ujikom',
    description: 'Supervisi kepatuhan pembuangan akhir dan efisiensi rantai pasok pengelolaan limbah non B3 korporasi.'
  },
  {
    id: 'pemantauan-analisis-sampah-non-b3',
    code: 'ENV-WASTE-03',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pemantauan dan Analisis Pengolahan Sampah / Limbah Padat Non B3',
    titleEn: 'Monitoring and Analysis of Non Hazardous Waste Management',
    badge: 'ANALISIS SAMPAH',
    duration: '3 Hari + Ujikom',
    description: 'Kajian neraca massa limbah, pengambilan sampel timbulan sampah, dan strategi reduksi 3R (Reduce, Reuse, Recycle).'
  },
  {
    id: 'keahlian-penghitungan-lca',
    code: 'ENV-LCA-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Keahlian Penghitungan Nilai Daur Hidup (Life Cycle Assessment - LCA)',
    titleEn: 'Life Cycle Assessment Skills',
    badge: 'LCA EXPERT',
    duration: '3 Hari + Ujikom',
    description: 'Metodologi audit jejak karbon dan jejak air produk dari hulu ke hilir (cradle to grave) sesuai ISO 14040/14044.'
  },
  {
    id: 'pengambilan-data-penilai-lca',
    code: 'ENV-LCA-02',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pengambilan Data Penilai Daur Hidup (Data Collection of LCA)',
    titleEn: 'Data Collection of Life Cycle Assessment',
    badge: 'DATA LCA',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan inventori data input-output energi dan material untuk mendukung pelaporan PROPER Emas/Hijau KLHK.'
  },
  {
    id: 'pengawas-pemilah-sampah',
    code: 'ENV-SORT-01',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pengawas Pemilah Sampah (Waste Sorting Supervisor)',
    titleEn: 'Waste sorting supervisor',
    badge: 'SUPERVISOR PILAH',
    duration: '3 Hari + Ujikom',
    description: 'Pengawasan sistematis fasilitas pemilihan sampah industri dan penjaminan mutu fraksi daur ulang bernilai ekonomis.'
  },
  {
    id: 'pemilah-sampah',
    code: 'ENV-SORT-02',
    category: 'lingkungan',
    categoryLabel: 'Lingkungan & Limbah',
    title: 'Pemilah Sampah (Operational of Waste Sorting)',
    titleEn: 'Operational of Waste Sorting',
    badge: 'OPERATOR PILAH',
    duration: '3 Hari + Ujikom',
    description: 'Standar keselamatan dan teknis pengelompokan jenis plastik, kertas, logam, organik, dan residu berbahaya.'
  },
  {
    id: 'keamanan-pangan-haccp',
    code: 'FOOD-HACCP-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Pelatihan Keamanan Pangan Berbasis HACCP (Hazard Analysis Critical Control Point)',
    titleEn: 'Food Safety Based On HACCP Training',
    badge: 'HACCP FOOD',
    duration: '1 Hari (Bimtek) / 3 Hari (BNSP)',
    description: 'Penerapan 7 prinsip dan 12 langkah HACCP untuk industri katering rumah sakit, manufaktur pangan, dan hotel.',
    flyerImage: '/assets/flyer_bimtek_haccp.jpg?v=2026',
    flyerTitle: 'Brosur Resmi: BIMTEK HACCP & Sertifikasi Uji Kompetensi BNSP - JP Solution',
    canBimtek: true,
    canBnsp: true,
    priceNote: 'Bimtek • Tersedia Opsi Uji Kompetensi BNSP',
    additionalInfo: 'Tersedia 2 pilihan skema: Bisa Bimbingan Teknis (Bimtek 1 Hari Penuh) bersertifikat JP Solution, dan juga bisa dengan Uji Kompetensi BNSP resmi.'
  },

  // --- KATEGORI 5: SKEMA PELATIH & INSTRUKTUR (KUALIFIKASI 3 SAMPAI 6) ---
  {
    id: 'instruktur-junior-kualifikasi-3',
    code: 'BNSP-INS-LV3A',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Junior (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Junior Instructor (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Kompetensi membawakan sesi demonstrasi praktek kerja dan pendampingan peserta pelatihan kejuruan.'
  },
  {
    id: 'asisten-instruktur-kualifikasi-3',
    code: 'BNSP-INS-LV3B',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Asisten Instruktur (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Assistant Instructor (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Kesiapan perangkat belajar, monitoring absensi, serta asistensi instruktur utama di workshop/laboratorium.'
  },
  {
    id: 'pelatih-kualifikasi-3',
    code: 'BNSP-INS-LV3C',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pelatih (Kualifikasi 3) - Sertifikasi Profesi BNSP',
    titleEn: 'Coach (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Metodologi coaching keterampilan dasar di tempat kerja (on-the-job training) untuk peserta magang.'
  },
  {
    id: 'mentor-kualifikasi-3',
    code: 'BNSP-INS-LV3D',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Mentor (Kualifikasi 3) - Sertifikasi Profesi BNSP',
    titleEn: 'Mentor (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Kompetensi mentoring vokasi, transfer keahlian praktis, dan pembinaan etika profesional kerja.'
  },
  {
    id: 'pengelola-rekrutmen-seleksi-kualifikasi-3',
    code: 'BNSP-HR-REC3',
    category: 'sdm-hr',
    categoryLabel: 'SDM & Human Resources',
    title: 'Pengelola Rekrutmen Dan Seleksi (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Recruitment and Selection Manager (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Penataan administrasi berkas pelamar kerja, penjadwalan psikotes, dan verifikasi referensi kerja kandidat.'
  },
  {
    id: 'pemelihara-mesin-alat-pelatihan-kualifikasi-3',
    code: 'BNSP-INS-MTC3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pemelihara Mesin Dan Alat Pelatihan (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Maintenance of Machinery and Training Equipment (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Perawatan berkala peralatan simulasi workshop, kalibrasi instrumen peraga, dan standar safety alat ajar.'
  },
  {
    id: 'penyedia-bahan-pelatihan-kualifikasi-3',
    code: 'BNSP-INS-MAT3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Penyedia Bahan Pelatihan (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Provider of Training Materials (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Inventarisasi consumable materials, modul cetak, dan kit pelatihan vokasi sesuai jumlah peserta.'
  },
  {
    id: 'pemasar-program-pelatihan-kualifikasi-3',
    code: 'BNSP-INS-MKT3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pemasar Program Pelatihan (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Training Program Marketer (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Strategi promosi program pelatihan korporasi, lead generation B2B, dan komunikasi value proposition training.'
  },
  {
    id: 'staff-administrasi-kualifikasi-3',
    code: 'BNSP-INS-ADM3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Staff Administrasi Pelatihan (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Administration Staff (Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Pengelolaan berkas sertifikasi, pengisian lembar asesmen mandiri, dan korespondensi penyelenggaraan uji.'
  },
  {
    id: 'penyelenggara-pelatihan-kualifikasi-3',
    code: 'BNSP-INS-EVT3',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Penyelenggara Pelatihan / Training Organizer (Kualifikasi 3) - Sertifikasi BNSP',
    titleEn: 'Training Organizer(Qualification 3)',
    badge: 'BNSP KUALIFIKASI 3',
    duration: '3 Hari + Ujikom',
    description: 'Manajemen logistik kelas pelatihan, akomodasi peserta, koordinasi jadwal instruktur, dan evaluasi kepuasan.'
  },
  {
    id: 'pengajar-vokasi-kualifikasi-4',
    code: 'BNSP-VOK-LV4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pengajar Vokasi (Kualifikasi 4) - Sertifikasi Profesi BNSP',
    titleEn: 'Vocational Teacher (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Kompetensi mengajar berbasis unit kompetensi SKKNI bagi guru SMK dan instruktur vokasi terpadu.'
  },
  {
    id: 'kepala-blk-uptd-eselon-4',
    code: 'BNSP-BLK-ES4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Kepala Balai Latihan Kerja UPTD Setingkat Eselon 4 (Kualifikasi 4)',
    titleEn: 'Head of the UPTD Vocational Training Center at Echelon 4 Level (Qualification 4)',
    badge: 'BNSP APARATUR',
    duration: '3 Hari + Ujikom',
    description: 'Pengelolaan kelembagaan balai pelatihan kerja pemerintah daerah dan standarisasi akreditasi program LPK.'
  },
  {
    id: 'instruktur-penyelia-kualifikasi-4',
    code: 'BNSP-INS-SPV4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Penyelia (Kualifikasi 4) - Sertifikasi BNSP',
    titleEn: 'Supervision Instructor (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Supervisi mutu penyampaian materi instruktur madya dan verifikasi rubrik penilaian unjuk kerja siswa.'
  },
  {
    id: 'instruktur-pertama-kualifikasi-4',
    code: 'BNSP-INS-PRT4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Pertama (Kualifikasi 4) - Sertifikasi BNSP',
    titleEn: 'First Instructor (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan lesson plan, perancangan skenario micro-teaching, dan delivery materi pelatihan interaktif.'
  },
  {
    id: 'penyelia-pelatihan-kualifikasi-4',
    code: 'BNSP-INS-SUP4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Penyelia Pelatihan (Kualifikasi 4) - Sertifikasi BNSP',
    titleEn: 'Training Supervisor (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Pengendalian mutu operasional training center dan evaluasi pencapaian kompetensi peserta berkala.'
  },
  {
    id: 'koordinator-pelatihan-kualifikasi-4',
    code: 'BNSP-INS-KOR4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Koordinator Pelatihan (Kualifikasi 4) - Sertifikasi BNSP',
    titleEn: 'Training Coordinator (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Koordinasi lintas departemen untuk penjadwalan master calendar pelatihan dan monitoring anggaran L&D.'
  },
  {
    id: 'kepala-seksi-kualifikasi-4',
    code: 'BNSP-INS-KAS4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Kepala Seksi Pelatihan (Kualifikasi 4) - Sertifikasi BNSP',
    titleEn: 'Head of Section (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Perencanaan teknis program pelatihan berkala dan pelaporan evaluasi penyelenggaraan ke kepala dinas/balai.'
  },
  {
    id: 'pengembang-kurikulum-fasilitas-kualifikasi-4',
    code: 'BNSP-INS-CUR4',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Pengembang Kurikulum Dan Fasilitas Pelatihan (Kualifikasi 4)',
    titleEn: 'Curriculum Developer and Training Facilities (Qualification 4)',
    badge: 'BNSP KUALIFIKASI 4',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan modul pelatihan berbasis kompetensi (CBT), perancangan lembar uji, dan standarisasi ruang lab.'
  },
  {
    id: 'instruktur-muda-kualifikasi-5',
    code: 'BNSP-INS-MDA5',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Muda (Kualifikasi 5) - Sertifikasi BNSP',
    titleEn: 'Junior Instructor (Qualification 5)',
    badge: 'BNSP KUALIFIKASI 5',
    duration: '3 Hari + Ujikom',
    description: 'Pengembangan media pembelajaran multimedia dan fasilitasi pembelajaran kelompok kerja tingkat lanjut.'
  },
  {
    id: 'kepala-uptd-eselon-3-kualifikasi-5',
    code: 'BNSP-INS-UPT5',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Kepala UPTD Setingkat Eselon 3 (Kualifikasi 5) - Sertifikasi BNSP',
    titleEn: 'Head of UPTD at Echelon 3 level (Qualification 5)',
    badge: 'BNSP APARATUR',
    duration: '3 Hari + Ujikom',
    description: 'Tata kelola strategis BLK / UPTD tingkat madya, kemitraan industri, dan link & match penyerapan kerja lulusan.'
  },
  {
    id: 'instruktur-senior-kualifikasi-5',
    code: 'BNSP-INS-SNR5',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Senior (Kualifikasi 5) - Sertifikasi Profesi BNSP',
    titleEn: 'Senior Instructor (Qualification 5)',
    badge: 'BNSP KUALIFIKASI 5',
    duration: '3 Hari + Ujikom',
    description: 'Pembimbingan instruktur junior, riset efektivitas metodologi andragogi, dan standardisasi instrumen tes.'
  },
  {
    id: 'analis-senior-kualifikasi-5',
    code: 'BNSP-INS-ANL5',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Analis Senior Pelatihan (Kualifikasi 5) - Sertifikasi BNSP',
    titleEn: 'Senior Analyst (Qualification 5)',
    badge: 'BNSP KUALIFIKASI 5',
    duration: '3 Hari + Ujikom',
    description: 'Analisis kebutuhan kompetensi industri regional dan validasi kualifikasi kerja nasional Indonesia (KKNI).'
  },
  {
    id: 'instruktur-madya-kualifikasi-6',
    code: 'BNSP-INS-MDY6',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Madya (Kualifikasi 6) - Sertifikasi Profesi BNSP',
    titleEn: 'Associate Instructor (Qualification 6)',
    badge: 'BNSP KUALIFIKASI 6',
    duration: '3 Hari + Ujikom',
    description: 'Kualifikasi instruktur tingkat sarjana/spesialis dalam merumuskan strategi instruksional korporat terintegrasi.'
  },
  {
    id: 'kepala-lembaga-pelatihan-kualifikasi-6',
    code: 'BNSP-INS-KLP6',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Kepala Lembaga Pelatihan / Direktur LPK (Kualifikasi 6) - Sertifikasi BNSP',
    titleEn: 'Head of Training Institute (Qualification 6)',
    badge: 'BNSP DIREKTUR LPK',
    duration: '3 Hari + Ujikom',
    description: 'Tata kelola kepatuhan regulasi lembaga pelatihan kerja swasta/pemerintah dan akreditasi LA-LPK Nasional.'
  },
  {
    id: 'instruktur-master-kualifikasi-6',
    code: 'BNSP-INS-MST6',
    category: 'bnsp-profesi',
    categoryLabel: 'Sertifikasi BNSP & Profesi',
    title: 'Instruktur Master (Kualifikasi 6) - Sertifikasi Profesi BNSP',
    titleEn: 'Master Instructor (Qualification 6)',
    badge: 'BNSP MASTER',
    duration: '3 Hari + Ujikom',
    description: 'Otoritas tertinggi perancangan kurikulum pelatihan nasional dan penguji master asesor kompetensi BNSP.'
  },

  // --- KATEGORI 6: KESELAMATAN PASIEN, MEDIS & RUMAH SAKIT LANJUTAN ---
  {
    id: 'pencegahan-pengendalian-infeksi-ppi',
    code: 'K3RS-PPI-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pencegahan dan Pengendalian Infeksi (PPI Rumah Sakit)',
    titleEn: 'Infection Control & Prevention',
    badge: 'AKREDITASI RS',
    duration: '3 Hari + Ujikom',
    description: 'Standar kewaspadaan isolasi, kebersihan tangan WHO, bundles HAIs (VAP, ISK, IDO), dan sterilisasi CSSD.'
  },
  {
    id: 'peningkatan-mutu-keselamatan-pasien-pmkp',
    code: 'K3RS-PMKP-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Peningkatan Mutu dan Keselamatan Pasien (PMKP)',
    titleEn: 'Quality Improvement & Patient Safety',
    badge: 'PATIENT SAFETY',
    duration: '3 Hari + Ujikom',
    description: 'Sasaran Keselamatan Pasien (SKP 1-6), manajemen insiden keselamatan pasien (IKP), RCA, dan FMEA faskes.'
  },
  {
    id: 'manajemen-penggunaan-obat-mpo',
    code: 'K3RS-MPO-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Manajemen Penggunaan Obat (MPO & K3 Farmasi)',
    titleEn: 'Medicine Use Management',
    badge: 'FARMASI KLINIS',
    duration: '3 Hari + Ujikom',
    description: 'Pengelolaan obat High Alert / LASA, penyimpanan dingin cold-chain, formularium, dan pencegahan medication error.'
  },
  {
    id: 'rekam-medis-rumah-sakit',
    code: 'K3RS-RM-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Manajemen Rekam Medis Rumah Sakit & Kerahasiaan Informasi Kesehatan',
    titleEn: 'Hospital Medical Record',
    badge: 'REKAM MEDIS',
    duration: '3 Hari + Ujikom',
    description: 'Standar rekam medis elektronik (RME) Permenkes 24/2022, keamanan data medis pasien, koding ICD-10 & ICD-9-CM.'
  },
  {
    id: 'pelatihan-kompetensi-rumah-sakit-lainnya',
    code: 'K3RS-OTH-02',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pelatihan - Pelatihan Kompetensi Rumah Sakit Lainnya (K3 Radiologi, Laboratorium, Gizi)',
    titleEn: 'Other Hospital Competency Training',
    badge: 'KOMPETENSI RS',
    duration: '3 Hari + Ujikom',
    description: 'Pelatihan tematik proteksi radiasi BAPETEN, biosafety laboratorium, dan sanitasi instalasi gizi RS.'
  },

  // --- KATEGORI 7: K3 KONSTRUKSI, DAMKAR & MANDOR ---
  {
    id: 'pelatihan-pengawas-k3-konstruksi',
    code: 'KON-K3-SPV',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan Pengawas K3 Konstruksi - Sertifikasi BNSP / PUPR',
    titleEn: 'Construction OSH Supervisor Training',
    badge: 'K3 KONSTRUKSI',
    duration: '3 Hari + Ujikom',
    description: 'Pengawasan SMKK sesuai Permen PUPR 10/2021 di proyek jalan, jembatan, bendungan, dan gedung bertingkat.'
  },
  {
    id: 'pelatihan-ahli-k3-muda-konstruksi',
    code: 'KON-K3-MDA',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan Ahli K3 Muda Konstruksi - Sertifikasi BNSP',
    titleEn: 'Junior OSH Expert Training of Construction',
    badge: 'AHLI K3 KONSTRUKSI',
    duration: '3 Hari + Ujikom',
    description: 'Penyusunan Rencana Keselamatan Konstruksi (RKK), identifikasi bahaya pekerjaan sipil dan arsitektur.'
  },
  {
    id: 'pelatihan-ahli-k3-madya-konstruksi',
    code: 'KON-K3-MDY',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan Ahli K3 Madya Konstruksi - Sertifikasi BNSP',
    titleEn: 'Middle OSH Expert Training',
    badge: 'K3 KONSTRUKSI MADYA',
    duration: '3 Hari + Ujikom',
    description: 'Kewenangan manajemen keselamatan pada proyek konstruksi berisiko tinggi dan anggaran menengah ke atas.'
  },
  {
    id: 'pelatihan-ahli-k3-utama',
    code: 'KON-K3-UTM',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan Ahli K3 Utama (Konstruksi / Industri) - Sertifikasi BNSP',
    titleEn: 'Advance OSH Expert Training',
    badge: 'AHLI K3 UTAMA',
    duration: '3 Hari + Ujikom',
    description: 'Tingkat tertinggi kepakaran K3 dalam mengaudit mega-proyek nasional dan perumusan kebijakan keselamatan.'
  },
  {
    id: 'pelatihan-k3-petugas-pemadam-kebakaran',
    code: 'K3-DAM-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 untuk Petugas Pemadam Kebakaran (Kelas D/C) - Sertifikasi Kemnaker',
    titleEn: 'First Fireman OSH Training',
    badge: 'DAMKAR KEMNAKER',
    duration: '3 Hari + Ujikom',
    description: 'Penguasaan APAR, hidran halaman, dry chemical powder, formasi regu pemadam, dan teknik evakuasi api awal.'
  },
  {
    id: 'pelatihan-k3-petugas-pemadam-kebakaran-2',
    code: 'K3-DAM-02',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 Petugas Pemadam Kebakaran Tingkat 2 (Regu Penanggulangan Kebakaran Kelas B/A)',
    titleEn: 'Fireman OSH Level 2 Training',
    badge: 'DAMKAR TINGKAT LANJUT',
    duration: '3 Hari + Ujikom',
    description: 'Sistem proteksi kebakaran aktif/pasif, SCBA, fire sprinkler, dan komando operasi pemadaman skala besar.'
  },
  {
    id: 'pelatihan-mandor-k3',
    code: 'KON-MND-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan Mandor K3 Konstruksi / Foreman OSH Officer Training',
    titleEn: 'Foreman OSH Officer Training',
    badge: 'MANDOR K3',
    duration: '3 Hari + Ujikom',
    description: 'Pembekalan mandor proyek dalam memastikan tukang & pekerja harian patuh memakai APD dan menerapkan safety SOP.'
  },
  {
    id: 'pelatihan-k3-umum-muda',
    code: 'K3-UMM-MDA',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 Umum Muda - Sertifikasi BNSP',
    titleEn: 'Junior OSH General Training',
    badge: 'K3 UMUM MUDA',
    duration: '3 Hari + Ujikom',
    description: 'Standardisasi kompetensi pelaksana K3 umum di industri manufaktur, perhotelan, dan logistik.'
  },
  {
    id: 'pelatihan-k3-umum-madya',
    code: 'K3-UMM-MDY',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 Umum Madya - Sertifikasi BNSP',
    titleEn: '"General Madya" OSH Training',
    badge: 'K3 UMUM MADYA',
    duration: '3 Hari + Ujikom',
    description: 'Kewenangan evaluasi program keselamatan kerja dan penyusunan laporan kepatuhan P2K3 berkala.'
  },
  {
    id: 'pelatihan-k3-umum-utama',
    code: 'K3-UMM-UTM',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 Umum Utama - Sertifikasi BNSP',
    titleEn: 'Advance OSH General Training',
    badge: 'K3 UMUM UTAMA',
    duration: '3 Hari + Ujikom',
    description: 'Tingkat kepakaran K3 umum untuk perancangan sistem pencegahan bahaya katastropik berskala multinasional.'
  },

  // --- KATEGORI 8: K3 MIGAS, GAS TESTER & HIGIENE INDUSTRI ---
  {
    id: 'operator-pengetesan-gas-agt',
    code: 'MIG-GAS-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Operator Pengetesan Gas (Authorized Gas Tester - AGT) Migas',
    titleEn: 'OSH Training : Gas Tester Operator',
    badge: 'AGT MIGAS',
    duration: '3 Hari + Ujikom',
    description: 'Pengukuran kadar LEL (gas mudah terbakar), O2 (oksigen), CO, dan H2S sebelum pekerjaan panas atau masuk manhole.'
  },
  {
    id: 'safety-inspector-migas-industri',
    code: 'MIG-INSP-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Safety Inspector - Sertifikasi BNSP / Migas',
    titleEn: 'OSH Training : Safety inspector',
    badge: 'SAFETY INSPECTOR',
    duration: '3 Hari + Ujikom',
    description: 'Pemeriksaan kepatuhan keselamatan fasilitas kilang, platform lepas pantai, boiler, dan pressure vessel.'
  },
  {
    id: 'operator-k3-migas',
    code: 'MIG-OPR-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Operator K3 Migas - Sertifikasi BNSP',
    titleEn: 'OSH Training : Oil and Gas Operator',
    badge: 'BNSP MIGAS',
    duration: '3 Hari + Ujikom',
    description: 'Dasar keselamatan operasi harian industri hulu dan hilir minyak bumi & gas alam.'
  },
  {
    id: 'pengawas-k3-migas-madya',
    code: 'MIG-SPV-MDY',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Training K3 : Pengawas K3 Migas (Madya) - Sertifikasi BNSP',
    titleEn: 'OSH Training : Oil and Gas Madya Supervisor',
    badge: 'PENGAWAS MIGAS',
    duration: '3 Hari + Ujikom',
    description: 'Supervisi kepatuhan safety aturan Ditjen Migas ESDM pada kegiatan pengeboran dan operasi fasilitas migas.'
  },
  {
    id: 'pengawas-k3-migas-utama',
    code: 'MIG-SPV-UTM',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Pengawas K3 Migas (Utama) - Sertifikasi BNSP',
    titleEn: 'OSH Training : Oil and Gas Advance Management',
    badge: 'MIGAS UTAMA',
    duration: '3 Hari + Ujikom',
    description: 'Tingkat pengawas senior dalam mengelola manajemen risiko proses dan emergency shut-down di industri migas.'
  },
  {
    id: 'petugas-laboratorium-k3',
    code: 'LAB-K3-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Petugas Laboratorium Pengujian & Kimia',
    titleEn: 'OSH Training : Lab Officer',
    badge: 'K3 LABORATORIUM',
    duration: '3 Hari + Ujikom',
    description: 'Penanganan reagen kimia berbahaya, Material Safety Data Sheet (MSDS), dan biosafety level lab.'
  },
  {
    id: 'petugas-penanganan-bahaya-gas-h2s',
    code: 'MIG-H2S-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Petugas Penanganan Bahaya Gas H2S (H2S Safety Training)',
    titleEn: 'OSH Training : Dangerous of H2S Gas Handling Officer',
    badge: 'H2S HAZARD',
    duration: '3 Hari + Ujikom',
    description: 'Karakteristik racun gas asam H2S, batas paparan TLV-TWA, penggunaan SCBA escape unit, dan evakuasi korban.'
  },
  {
    id: 'investigasi-kecelakaan-kerja-lanjutan',
    code: 'K3-INV-02',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Investigasi Kecelakaan Kerja & Loss Prevention',
    titleEn: 'OSH Training : Work Accident Investigation',
    badge: 'INVESTIGASI K3',
    duration: '3 Hari + Ujikom',
    description: 'Penerapan metode SCAT (Systematic Cause Analysis Technique) dan pembuatan laporan resmi ke Kemnaker.'
  },
  {
    id: 'petugas-p3k-di-tempat-kerja',
    code: 'K3-P3K-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Petugas P3K di Tempat Kerja (First Aid) - Sertifikasi Kemnaker RI',
    titleEn: 'OSH Training : First Aid Officer',
    badge: 'P3K KEMNAKER',
    duration: '3 Hari + Ujikom',
    description: 'Resusitasi Jantung Paru (RJP/CPR), pembidaian patah tulang, penanganan luka bakar, dan kotak P3K standar Permenaker.'
  },
  {
    id: 'higiene-industri-muda-himu',
    code: 'HIG-HIMU-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Higiene Industri Muda (HIMU) - Sertifikasi BNSP',
    titleEn: 'SH Training : Junior Industrial Hygiene',
    badge: 'HIMU BNSP',
    duration: '3 Hari + Ujikom',
    description: 'Pengukuran faktor fisika lingkungan kerja: kebisingan (Sound Level Meter), getaran, iklim kerja (ISBB), dan pencahayaan.'
  },
  {
    id: 'higiene-industri-madya-hima',
    code: 'HIG-HIMA-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Higiene Industri Madya (HIMA) - Sertifikasi BNSP',
    titleEn: 'OSH Training : Madya Industrial Hygiene',
    badge: 'HIMA BNSP',
    duration: '3 Hari + Ujikom',
    description: 'Evaluasi faktor kimia (debu, uap organik) dan faktor biologi tempat kerja sesuai Permenaker No. 5 Tahun 2018.'
  },
  {
    id: 'higiene-industri-utama-hiu',
    code: 'HIG-HIU-01',
    category: 'k3-spesialis',
    categoryLabel: 'K3 & Investigasi',
    title: 'Pelatihan K3 : Higiene Industri Utama (HIU) - Sertifikasi BNSP',
    titleEn: 'OSH Training : Advance Industrial Hygiene',
    badge: 'HIU BNSP',
    duration: '3 Hari + Ujikom',
    description: 'Desain rekayasa ventilasi industri (Local Exhaust Ventilation), program konservasi pendengaran, dan standar ergonomi.'
  },
  {
    id: 'auditor-smk3-pp-50-2012',
    code: 'SMK3-AUD-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Pelatihan K3 : Auditor SMK3 PP 50 tahun 2012 - Sertifikasi Kemnaker RI',
    titleEn: 'OSH Training : OSHE System Auditor based on PP 50 tahun 2012',
    badge: 'AUDITOR SMK3',
    duration: '3 Hari + Ujikom',
    description: 'Sertifikasi resmi auditor SMK3 untuk melakukan audit internal dan penyiapan audit eksternal lembaga sertifikasi ditunjuk Kemnaker.'
  },
  {
    id: 'studi-operasional-bahaya-hazop',
    code: 'K3-HAZOP-01',
    category: 'iso-risk',
    categoryLabel: 'ISO & Manajemen Risiko',
    title: 'Pelatihan K3 : Studi Operasional dan Bahaya (HAZOP - Hazard and Operability Study)',
    titleEn: 'OSH Training : Hazard and Operability Study (HAZOP)',
    badge: 'HAZOP STUDY',
    duration: '3 Hari + Ujikom',
    description: 'Teknik analisis keselamatan proses kimia/migas menggunakan kata pandu (guide words) pada diagram P&ID.'
  },
  {
    id: 'petugas-fasilitas-kesehatan-k3',
    code: 'K3RS-FAS-01',
    category: 'rumah-sakit',
    categoryLabel: 'K3 Rumah Sakit & Medis',
    title: 'Pelatihan K3 : Petugas Fasilitas Kesehatan (Klinik & Puskesmas)',
    titleEn: 'OSH Training : Health Facility Officer',
    badge: 'FASKES K3',
    duration: '3 Hari + Ujikom',
    description: 'Standarisasi keselamatan sarana faskes, sterilisasi alat, APD medis, dan keselamatan radiasi dasar.'
  },
  {
    id: 'pengawas-csms-kontraktor',
    code: 'CSMS-SPV-01',
    category: 'konstruksi-migas',
    categoryLabel: 'Konstruksi & Migas',
    title: 'Pelatihan K3 : Pengawas Sistem Manajemen K3 Kontraktor (CSMS)',
    titleEn: 'OSH Training : Contractor Safety Management System (CSMS) Supervisor Construction',
    badge: 'CSMS KONTRAKTOR',
    duration: '3 Hari + Ujikom',
    description: 'Kualifikasi prakualifikasi vendor (HSE Plan), audit implementasi keselamatan subkontraktor, dan evaluasi akhir CSMS.'
  }
];
