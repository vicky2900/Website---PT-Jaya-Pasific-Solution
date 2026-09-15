import React from 'react';
import { 
  Building2, 
  Award, 
  Scale, 
  FileCheck, 
  FileText, 
  ShieldCheck, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { LEGALITY_BLOCKS, COMPANY_INFO } from '../data';

export const LegalitySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#0B8F36]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#0B8F36]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#0B8F36]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#0B8F36]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0B8F36]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0B8F36]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#0B8F36]" />;
    }
  };

  return (
    <section id="legality" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-mono-tech text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#0B8F36]" />
            LEGALITY & COMPLIANCE VERIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Legalitas Hukum & Akreditasi Lembaga
          </h2>
          <p className="text-sm sm:text-base text-[#627D98]">
            Seluruh penyelenggaraan pembinaan sertifikasi dan jasa konsultansi PT Jaya Pasific Solution beroperasi di bawah payung hukum Republik Indonesia yang sah dan tertib perpajakan.
          </p>
        </div>

        {/* 6 Legality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGALITY_BLOCKS.map((block) => (
            <div
              key={block.id}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-xs transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {getIcon(block.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded-sm bg-slate-200 text-slate-700 font-mono-tech text-[10px] font-bold">
                    {block.badge}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-mono-tech text-[#0B8F36] font-bold uppercase tracking-wider">
                    {block.authority}
                  </div>
                  <h3 className="text-base font-bold text-[#102A43] mt-0.5">
                    {block.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs text-emerald-700 font-medium font-mono-tech">
                <CheckCircle2 className="w-4 h-4 text-[#0B8F36] shrink-0" />
                <span>Status Aktif & Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Procurement & Vendor Readiness Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono-tech text-emerald-400 font-semibold">
              KESIAPAN REKANAN PERUSAHAAN (VENDOR LIST)
            </div>
            <div className="text-sm sm:text-base font-bold text-white">
              Kelengkapan Dokumen Pra-Kualifikasi Vendor Korporat & BUMN
            </div>
            <p className="text-xs text-slate-400">
              NIB, NPWP PKP, Akta Notaris, Rekening Koran Perusahaan, dan Company Profile siap dikirimkan untuk proses onboarding vendor procurement Anda.
            </p>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}?subject=Permohonan%20Kelengkapan%20Dokumen%20Vendor%20PT%20Jaya%20Pasific%20Solution`}
            className="shrink-0 px-5 py-2.5 rounded-md bg-[#0B8F36] hover:bg-[#08702A] text-white text-xs font-bold transition-colors whitespace-nowrap"
          >
            Request Berkas Vendor
          </a>
        </div>

      </div>
    </section>
  );
};
