import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const StickyWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      <div className="hidden sm:flex flex-col items-end bg-primary text-white px-3.5 py-2 rounded-xl border border-secondary/40 shadow-xl text-xs font-headline-sm">
        <span className="flex items-center gap-1.5 text-secondary font-bold">
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
          Customer Desk Online
        </span>
        <span className="text-secondary-light font-body-sm text-[11px]">
          Konsultasi WA: {COMPANY_INFO.phone2}
        </span>
      </div>

      <a
        href={`https://wa.me/628111595122?text=${encodeURIComponent('Halo PT Jaya Pasific Solution, saya ingin konsultasi pelatihan dan sertifikasi K3.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-secondary hover:bg-secondary-light text-primary flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-primary group"
        title="Chat WhatsApp Resmi"
        aria-label="Chat WhatsApp Resmi"
      >
        <MessageSquare className="w-6 h-6 fill-primary stroke-none group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
