import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  FileDown, 
  FileText, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, WA_ADMINS, getWhatsAppUrl } from '../data';

interface FinalCtaProps {
  onRequestProposal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onRequestProposal }) => {
  const handleDownloadCompro = () => {
    // Generate an automatic company brochure summary text download
    const textContent = `PT JAYA PASIFIC SOLUTION
Training & Management Consultant
PJK3 KEMNAKER RI - SKP: ${COMPANY_INFO.skpNumber}
NIB: ${COMPANY_INFO.nibNumber}
NPWP: ${COMPANY_INFO.npwp}

ALAMAT KANTOR:
${COMPANY_INFO.address}

KONTAK RESMI:
- Telepon/Mobile: ${COMPANY_INFO.phone1}
- WhatsApp Hotline: ${COMPANY_INFO.phone2}
- Email Utama: ${COMPANY_INFO.email}
- Website: www.jayapasificsolution.com

LAYANAN UTAMA:
1. Pembinaan & Sertifikasi Kemnaker RI (Ahli K3 Umum, K3 Konstruksi, Listrik, Kebakaran)
2. Uji Sertifikasi Kompetensi BNSP (ToT Master Trainer Level 6 & Instruktur Level 4)
3. Sertifikasi Pertambangan Minerba ESDM (POP, POM, SMKP)
4. Pendampingan K3 Rumah Sakit (K3RS Permenkes 66/2016)
5. Konsultansi Sistem Manajemen (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, SMK3 PP 50/2012)
6. Contractor Safety Management System (CSMS) & Hazard Identification HIRADC
7. Corporate In-House Tailor-Made Safety Drills & Port IMDG Code

DIREKTUR & MASTER ASSESSOR:
Johannes Simanjuntak, SKM, M.Kes`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Company_Profile_PT_Jaya_Pasific_Solution.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Background ambient accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(#0B8F36 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Invitation & Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono-tech text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              HOTLINE RESMI KONSULTASI K3
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Konsultasikan Kebutuhan Pelatihan &amp; Audit K3 Perusahaan Anda
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tim spesialis kami siap memberikan panduan teknis mengenai kesesuaian regulasi, proposal biaya transparan, serta jadwal fleksibel untuk program public class maupun in-house.
              </p>
            </div>

            {/* Direct Contact Cards - Admin 1 & Admin 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {WA_ADMINS.map((admin) => (
                <a
                  key={admin.id}
                  href={getWhatsAppUrl(admin.waNumber, `Halo ${admin.name} PT Jaya Pasific Solution, saya ingin konsultasi layanan K3.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0A1B2D] border border-[#1A365D] hover:border-emerald-500 transition-all flex items-start gap-3 group hover:bg-[#0d2238]"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-slate-400 uppercase">
                      <span>WhatsApp {admin.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {admin.phone}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{admin.description}</div>
                  </div>
                </a>
              ))}

              <a
                href={`tel:${COMPANY_INFO.phone1.replace(/[^0-9]/g, '')}`}
                className="p-4 rounded-xl bg-[#0A1B2D] border border-[#1A365D] hover:border-slate-500 transition-colors flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech text-slate-400 uppercase">Direct Call Kantor</div>
                  <div className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                    {COMPANY_INFO.phone1}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Jam Kerja 08:00 - 17:00 WIB</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 rounded-xl bg-[#0A1B2D] border border-[#1A365D] hover:border-slate-500 transition-colors flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech text-slate-400 uppercase">Email Resmi</div>
                  <div className="text-sm font-bold text-white truncate max-w-[200px]">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Tanggapan 1x24 Jam Kerja</div>
                </div>
              </a>
            </div>

            {/* Office Address Bar */}
            <div className="p-4 rounded-xl bg-[#0A1B2D]/70 border border-[#1A365D] flex items-start gap-3 text-xs">
              <MapPin className="w-5 h-5 text-[#0B8F36] shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold text-white">Kantor Pusat Operasional:</span>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Proposal & Brochure Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white text-[#102A43] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6"
          >
            <div className="border-b border-[#E2E8F0] pb-4">
              <span className="font-mono-tech text-xs uppercase font-bold text-[#0B8F36] tracking-wider">
                CORPORATE INQUIRY DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#102A43] mt-1">
                Dapatkan Proposal & Silabus Lengkap
              </h3>
              <p className="text-xs text-[#627D98] mt-1">
                Kirimkan rincian kebutuhan pelatihan perusahaan Anda untuk menerima proposal penawaran teknis resmi dalam waktu 1x24 jam kerja.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={onRequestProposal}
                className="w-full py-3.5 px-4 rounded-lg bg-[#0B8F36] hover:bg-[#08702A] text-white text-sm font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Formulir Request Proposal</span>
              </button>

              <button
                onClick={handleDownloadCompro}
                className="w-full py-3 px-4 rounded-lg border-2 border-[#102A43] hover:bg-slate-50 text-[#102A43] text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#0B8F36]" />
                <span>Download Company Profile (Ringkasan Resmi)</span>
              </button>
            </div>

            <div className="pt-2 border-t border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0B8F36] shrink-0" />
                <span>Format Proposal Resmi dengan Rincian Biaya &amp; Silabus</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0B8F36] shrink-0" />
                <span>Dokumen Rekanan Lengkap (NIB, NPWP, SKP Kemnaker)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0B8F36] shrink-0" />
                <span>Fasilitas Negosiasi Termin Pembayaran Korporat</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
