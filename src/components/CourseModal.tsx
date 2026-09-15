import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  MessageSquare,
  FileText
} from 'lucide-react';
import { TrainingCourse } from '../types';

interface CourseModalProps {
  course: TrainingCourse | null;
  onClose: () => void;
  onRequestProposal: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onRequestProposal }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [course, onClose]);

  if (!course) return null;

  const handleRegisterWhatsapp = () => {
    const msg = `Halo PT Jaya Pasific Solution, saya ingin mendaftar program:\n*${course.title}*\nKode: ${course.code}\nJadwal: ${course.dates}\nLokasi: ${course.location}\n\nMohon informasi formulir pendaftaran dan ketersediaan kuota.`;
    const url = `https://wa.me/628111595122?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-secondary/30 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary p-6 text-white flex items-start justify-between sticky top-0 z-10 border-b border-primary-light/40">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary text-primary font-mono-tech text-[11px] font-bold tracking-wide">
                {course.badge}
              </span>
              <span className="font-mono-tech text-xs text-secondary-light">
                KODE: {course.code}
              </span>
            </div>
            <h3 className="font-headline-sm font-bold text-lg sm:text-xl text-white leading-snug">
              {course.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-surface rounded-xl border border-outline-variant/60 font-body-sm text-xs">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-on-surface-variant block text-[10px] uppercase font-bold">Durasi:</span>
                <span className="font-bold text-primary">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-secondary-dark shrink-0 mt-0.5" />
              <div>
                <span className="text-on-surface-variant block text-[10px] uppercase font-bold">Jadwal:</span>
                <span className="font-bold text-on-surface">{course.dates}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-on-surface-variant block text-[10px] uppercase font-bold">Lokasi:</span>
                <span className="font-bold text-on-surface">{course.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary">
              Deskripsi &amp; Landasan Regulasi
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Syllabus Modules */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary">
                Materi &amp; Silabus Kurikulum
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {course.syllabus.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-surface border border-outline-variant/50 flex items-start gap-2">
                    <span className="font-mono-tech font-bold text-[11px] text-secondary-dark shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span className="text-on-surface leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          <div className="space-y-3">
            <h4 className="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary">
              Fasilitas All-Inclusive Peserta
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface">
              {course.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <div className="space-y-2.5 p-4 rounded-xl bg-secondary/15 border border-secondary/40">
              <h4 className="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary-dark" />
                Persyaratan Berkas Peserta
              </h4>
              <ul className="space-y-1 text-xs text-on-surface list-disc list-inside">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="leading-snug">{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing Box */}
          <div className="p-5 rounded-xl bg-primary text-white flex flex-col gap-3.5 border border-secondary/30">
            <div className="flex flex-col gap-1">
              <div className="text-[11px] font-mono-tech text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SKEMA INVESTASI PELATIHAN</span>
              </div>
              <div className="font-headline-sm text-base sm:text-lg font-bold text-white leading-snug">
                Konsultasikan Program &amp; Dapatkan Penawaran Terbaik
              </div>
              <div className="text-surface-container text-xs leading-relaxed">
                Konsultasikan kebutuhan Anda untuk penawaran harga terbaik, diskon rombongan, atau paket in-house korporat.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t border-white/15">
              <button
                onClick={() => {
                  onClose();
                  onRequestProposal(course.title);
                }}
                className="flex-1 px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-light text-primary text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Konsultasi Sekarang</span>
              </button>

              <button
                onClick={handleRegisterWhatsapp}
                className="px-4 py-2.5 rounded-xl border border-white/30 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
