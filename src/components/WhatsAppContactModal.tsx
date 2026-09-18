import React, { useEffect } from 'react';
import { MessageSquare, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WA_ADMINS, getWhatsAppUrl } from '../data';

interface WhatsAppContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
  contextTitle?: string;
}

export const WhatsAppContactModal: React.FC<WhatsAppContactModalProps> = ({
  isOpen,
  onClose,
  defaultMessage = 'Halo PT Jaya Pasific Solution, saya ingin konsultasi layanan pelatihan dan sertifikasi K3.',
  contextTitle = 'Pusat Layanan Konsultasi WhatsApp',
}) => {
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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl border border-secondary/40 shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary p-5 sm:p-6 text-white relative border-b border-primary-light/40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech uppercase tracking-wider text-secondary font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Customer Support Resmi
              </span>
              <h3 className="font-headline-sm font-bold text-base sm:text-lg text-white leading-tight">
                Pilih Kontak Admin WhatsApp
              </h3>
            </div>
          </div>
          <p className="text-xs text-white/80 mt-2 font-body-sm leading-relaxed">
            {contextTitle}. Silakan pilih Admin 1 atau Admin 2 di bawah ini untuk terhubung langsung:
          </p>
        </div>

        {/* Admin Cards */}
        <div className="p-5 sm:p-6 space-y-3.5 bg-surface/50">
          {WA_ADMINS.map((admin, idx) => (
            <div
              key={admin.id}
              className="p-4 rounded-xl bg-white border border-outline-variant/70 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm font-bold text-sm sm:text-base text-primary">
                    {admin.name}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online Aktif
                  </span>
                </div>
                <div className="text-xs font-mono-tech font-bold text-primary">
                  {admin.phone}
                </div>
                <div className="text-[11px] text-on-surface-variant font-medium">
                  {admin.description}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(admin.waNumber, defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat {admin.name}</span>
              </a>
            </div>
          ))}

          {/* Context Message Preview */}
          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <span className="font-bold text-slate-700 block text-[10px] uppercase tracking-wider">
              Pesan Pembuka Otomatis:
            </span>
            <p className="italic line-clamp-2 leading-relaxed">
              &ldquo;{defaultMessage}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Terverifikasi PT Jaya Pasific Solution</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold text-primary hover:bg-surface rounded-lg transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
