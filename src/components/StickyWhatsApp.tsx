import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, ShieldCheck } from 'lucide-react';
import { WA_ADMINS, getWhatsAppUrl } from '../data';

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded 2-Admin Popup Card */}
      {isOpen && (
        <div className="w-80 sm:w-88 bg-white rounded-2xl border border-secondary/40 shadow-2xl p-4 animate-in zoom-in-95 fade-in duration-200 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <h4 className="font-headline-sm font-bold text-xs sm:text-sm text-primary leading-none">
                  Customer Desk WhatsApp
                </h4>
                <span className="text-[10px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  PT Jaya Pasific Solution
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11.5px] text-on-surface-variant my-2.5 leading-relaxed">
            Silakan pilih nomor Admin untuk konsultasi pelatihan, jadwal sertifikasi, atau penawaran korporat:
          </p>

          <div className="space-y-2">
            {WA_ADMINS.map((admin) => (
              <a
                key={admin.id}
                href={getWhatsAppUrl(admin.waNumber, `Halo ${admin.name} PT Jaya Pasific Solution, saya ingin konsultasi layanan pelatihan dan sertifikasi K3.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm font-bold text-xs text-primary group-hover:text-emerald-700">
                      {admin.name}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">
                      Aktif
                    </span>
                  </div>
                  <div className="text-[11.5px] font-mono-tech font-bold text-primary">
                    {admin.phone}
                  </div>
                  <div className="text-[10.5px] text-slate-500 line-clamp-1">
                    {admin.description}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-600 group-hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4 fill-white" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-center text-[10px] text-slate-400">
            Jam Layanan: 08.00 - 21.00 WIB (Senin - Minggu)
          </div>
        </div>
      )}

      {/* Floating Trigger Button with Tooltip */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex flex-col items-end bg-primary text-white px-3.5 py-2 rounded-xl border border-secondary/40 shadow-xl text-xs font-headline-sm cursor-pointer hover:bg-primary-light transition-all"
          >
            <span className="flex items-center gap-1.5 text-secondary font-bold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              Pilih Admin WhatsApp
            </span>
            <span className="text-secondary-light font-body-sm text-[11px]">
              Admin 1 &amp; Admin 2 Online
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-secondary hover:bg-secondary-light text-primary flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-primary group"
          title="Chat WhatsApp Resmi (Pilih Admin 1 atau Admin 2)"
          aria-label="Pilih Admin WhatsApp"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <MessageSquare className="w-6 h-6 fill-primary stroke-none group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};
