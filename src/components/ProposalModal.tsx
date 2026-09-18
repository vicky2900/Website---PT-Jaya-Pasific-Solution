import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Building2 } from 'lucide-react';
import { WA_ADMINS, getWhatsAppUrl } from '../data';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose, prefilledTopic = '' }) => {
  const [companyName, setCompanyName] = useState('');
  const [picName, setPicName] = useState('');
  const [picRole, setPicRole] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [programType, setProgramType] = useState('In-House Training (Di Perusahaan)');
  const [topic, setTopic] = useState('');
  const [participants, setParticipants] = useState('5 - 15 Orang');
  const [locationPreference, setLocationPreference] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [proposalMessage, setProposalMessage] = useState('');

  useEffect(() => {
    if (prefilledTopic) {
      setTopic(prefilledTopic);
    } else {
      setTopic('Pembinaan & Sertifikasi Calon Ahli K3 Umum (AK3U) Kemnaker RI');
    }
  }, [prefilledTopic, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = 
`*PERMINTAAN PROPOSAL KORPORAT - PT JAYA PASIFIC SOLUTION*
--------------------------------------------------
*Perusahaan:* ${companyName}
*Nama PIC:* ${picName} (${picRole || 'Representative'})
*No. WhatsApp:* ${phone}
*Email:* ${email || '-'}
*Topik Kebutuhan:* ${topic}
*Format Program:* ${programType}
*Estimasi Peserta:* ${participants}
*Rencana Lokasi:* ${locationPreference || 'Sesuai Rekomendasi JPS'}
*Catatan Tambahan:* ${notes || 'Mohon dikirimkan proposal penawaran teknis & investasi resmi.'}
--------------------------------------------------
_Dikirim via Web Portal PT Jaya Pasific Solution_`;

    setProposalMessage(formattedMessage);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-secondary/30 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-primary p-6 text-white flex items-center justify-between sticky top-0 z-10 border-b border-primary-light/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm font-bold text-base text-white">
                Request Proposal &amp; Penawaran Investasi
              </h3>
              <p className="text-[11px] font-mono-tech text-secondary-light">
                PT Jaya Pasific Solution • PJK3 Kemnaker RI Resmi
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 bg-secondary/15 rounded-xl border border-secondary/40 text-xs text-on-surface flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Isi data perusahaan Anda di bawah ini. Dokumen penawaran teknis, silabus detail, dan faktur pajak akan kami siapkan secara resmi.
                </span>
              </div>

              {/* Company & PIC Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    Nama Perusahaan / Instansi *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: PT Sumber Energi Makmur"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    Nama PIC / Penanggung Jawab *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Bambang Sutrisno"
                    value={picName}
                    onChange={(e) => setPicName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    Jabatan PIC
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: HSE Manager / HRD"
                    value={picRole}
                    onChange={(e) => setPicRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    No. WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary font-headline-sm">
                  Alamat Email Perusahaan
                </label>
                <input
                  type="email"
                  placeholder="corporate.hse@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                />
              </div>

              {/* Program Topic */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary font-headline-sm">
                  Topik Pelatihan / Layanan K3 *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-white font-medium"
                >
                  {topic && ![
                    "Pembinaan & Sertifikasi Calon Ahli K3 Umum (AK3U) Kemnaker RI",
                    "Training of Trainer (TOT) Master Trainer Level 6 - Sertifikasi BNSP",
                    "Training of Trainer (TOT) Instruktur Level 4 - Sertifikasi BNSP",
                    "Pengawas Operasional Pertama (POP) Pertambangan - Sertifikat BNSP",
                    "Pelatihan & Pendampingan K3 Rumah Sakit (K3RS Permenkes 66/2016)",
                    "Konsultansi & Pendampingan Sertifikasi ISO (9001 / 14001 / 45001)",
                    "Penerapan & Audit SMK3 PP 50/2012 (Bendera Emas Kemnaker)",
                    "Contractor Safety Management System (CSMS) & HIRADC",
                    "Custom In-House Safety Training & Emergency Drill"
                  ].includes(topic) && (
                    <option value={topic}>
                      [Pilihan Anda] {topic}
                    </option>
                  )}
                  <option value="Pembinaan & Sertifikasi Calon Ahli K3 Umum (AK3U) Kemnaker RI">
                    Ahli K3 Umum (AK3U) Kemnaker RI (Batch Palembang &amp; Nasional)
                  </option>
                  <option value="Training of Trainer (TOT) Master Trainer Level 6 - Sertifikasi BNSP">
                    Training of Trainer (TOT) Master Trainer Level 6 - Sertifikasi BNSP
                  </option>
                  <option value="Training of Trainer (TOT) Instruktur Level 4 - Sertifikasi BNSP">
                    Training of Trainer (TOT) Instruktur Level 4 - Sertifikasi BNSP
                  </option>
                  <option value="Pengawas Operasional Pertama (POP) Pertambangan - Sertifikat BNSP">
                    Pengawas Operasional Pertama (POP) Pertambangan - Sertifikat BNSP
                  </option>
                  <option value="Pelatihan & Pendampingan K3 Rumah Sakit (K3RS Permenkes 66/2016)">
                    Pelatihan &amp; Pendampingan K3 Rumah Sakit (K3RS Permenkes 66/2016)
                  </option>
                  <option value="Konsultansi & Pendampingan Sertifikasi ISO (9001 / 14001 / 45001)">
                    Konsultansi &amp; Pendampingan Sertifikasi ISO (9001 / 14001 / 45001)
                  </option>
                  <option value="Penerapan & Audit SMK3 PP 50/2012 (Bendera Emas Kemnaker)">
                    Penerapan &amp; Audit SMK3 PP 50/2012 (Bendera Emas Kemnaker)
                  </option>
                  <option value="Contractor Safety Management System (CSMS) & HIRADC">
                    Contractor Safety Management System (CSMS) &amp; HIRADC
                  </option>
                  <option value="Custom In-House Safety Training & Emergency Drill">
                    Custom In-House Safety Training &amp; Emergency Drill
                  </option>
                </select>
              </div>

              {/* Program Format & Participants */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    Format Pelaksanaan
                  </label>
                  <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-white"
                  >
                    <option value="In-House Training (Di Kantor / Site Perusahaan)">
                      In-House Training (On-Site di Perusahaan)
                    </option>
                    <option value="Public Class (Mengikuti Jadwal Batch Terdekat)">
                      Public Class (Batch Reguler Hotel)
                    </option>
                    <option value="Hybrid / Daring (Online Zoom + Asesmen)">
                      Hybrid (Online Zoom + Tatap Muka)
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary font-headline-sm">
                    Estimasi Peserta
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-white"
                  >
                    <option value="1 - 4 Orang (Utusan Perusahaan)">1 - 4 Orang</option>
                    <option value="5 - 15 Orang (Satu Tim Kerja)">5 - 15 Orang</option>
                    <option value="16 - 30 Orang (Kelas Eksklusif)">16 - 30 Orang</option>
                    <option value="Lebih dari 30 Orang (Multi-Batch)">30+ Orang (Multi-Batch)</option>
                  </select>
                </div>
              </div>

              {/* Location Preference */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary font-headline-sm">
                  Lokasi Kota / Site yang Diinginkan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Palembang, Balikpapan, Jakarta, Pontianak, dll."
                  value={locationPreference}
                  onChange={(e) => setLocationPreference(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary font-headline-sm">
                  Catatan Tambahan / Kebutuhan Khusus
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Memerlukan pelatihan dengan fokus hazard pertambangan bauksit dan evaluasi CSMS kontraktor."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-outline-variant/80 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-outline-variant/50">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-xl border border-outline-variant/80 text-xs font-semibold text-on-surface hover:bg-surface transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary-light text-primary text-xs font-bold tracking-wide transition-all shadow-sm flex items-center gap-2 cursor-pointer font-headline-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Proses Permintaan Proposal</span>
                </button>
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-secondary/20 text-primary flex items-center justify-center mx-auto ring-4 ring-secondary/30">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="text-xl font-bold text-primary font-headline-sm">
                  Permintaan Proposal Siap Dikirimkan
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Data penawaran untuk <strong>{companyName}</strong> telah berhasil disusun. Anda dapat langsung mengirimkannya ke WhatsApp Business Resmi kami agar tim account executive segera merespon.
                </p>
              </div>

              <div className="p-4 bg-surface rounded-xl border border-outline-variant/60 max-w-md mx-auto text-left font-body-sm text-xs space-y-1 text-on-surface">
                <div><strong>Perusahaan:</strong> {companyName}</div>
                <div><strong>PIC:</strong> {picName} ({phone})</div>
                <div><strong>Topik:</strong> {topic}</div>
                <div><strong>Format:</strong> {programType} ({participants})</div>
              </div>

              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <div className="text-[11px] font-mono-tech text-on-surface-variant font-bold uppercase tracking-wider text-center">
                  Pilih Admin WhatsApp untuk Mengirim Proposal:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WA_ADMINS.map((admin) => (
                    <a
                      key={admin.id}
                      href={getWhatsAppUrl(admin.waNumber, proposalMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-primary hover:bg-primary-light text-white transition-all shadow-sm flex flex-col items-start gap-1 group border border-secondary/30 text-left"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-bold text-secondary flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {admin.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech font-bold">
                          Online
                        </span>
                      </div>
                      <div className="text-[12px] font-mono-tech font-bold text-white">
                        {admin.phone}
                      </div>
                      <div className="text-[10px] text-white/70 line-clamp-1">
                        {admin.description}
                      </div>
                      <div className="mt-1.5 w-full py-1 rounded bg-secondary text-primary text-center text-[10.5px] font-bold group-hover:bg-secondary-light transition-colors">
                        Kirim ke {admin.name} &rarr;
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={resetAndClose}
                    className="px-5 py-2.5 rounded-xl border border-outline-variant/80 text-xs font-semibold text-primary hover:bg-surface transition-colors cursor-pointer"
                  >
                    Tutup Formulir
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
