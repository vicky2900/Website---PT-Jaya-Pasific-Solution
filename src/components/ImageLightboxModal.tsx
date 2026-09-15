import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  imageUrl: string | null;
  title: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ imageUrl, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (imageUrl) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <span className="font-bold text-xs sm:text-sm text-slate-200 font-mono-tech truncate pr-4">
            {title}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-2 sm:p-4 flex items-center justify-center bg-black max-h-[75vh]">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-[70vh] object-contain rounded-md"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-3 bg-slate-950 text-[11px] text-slate-400 font-mono-tech text-center border-t border-slate-800">
          PT JAYA PASIFIC SOLUTION • Dokumentasi Rekam Jejak Lapangan & Sertifikasi Asesor
        </div>
      </div>
    </div>
  );
};
