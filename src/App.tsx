import React, { useState } from 'react';
import { Header } from './components/Header';
import { RegulatoryNotice } from './components/RegulatoryNotice';
import { Hero } from './components/Hero';
import { TrustIndustry } from './components/TrustIndustry';
import { CoreServices } from './components/CoreServices';
import { TrainingCatalog } from './components/TrainingCatalog';
import { CorporateWorkflow } from './components/CorporateWorkflow';
import { PortfolioCaseStudies } from './components/PortfolioCaseStudies';
import { FieldDocumentation } from './components/FieldDocumentation';
import { LegalityCompliance } from './components/LegalityCompliance';
import { OfficeLocation } from './components/OfficeLocation';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { CourseModal } from './components/CourseModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { COURSES } from './data';
import { TrainingCourse } from './types';

export default function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedCourseForProposal, setSelectedCourseForProposal] = useState<string>('');
  const [activeCourseDetail, setActiveCourseDetail] = useState<TrainingCourse | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const handleOpenProposal = (courseTitle?: string) => {
    setSelectedCourseForProposal(courseTitle || '');
    setProposalModalOpen(true);
  };

  const handleSelectCourse = (courseId: string) => {
    const course = COURSES.find((c) => c.id === courseId);
    if (course) {
      setActiveCourseDetail(course);
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightboxImage({ url: imageUrl, title });
  };

  const handleNavigateCatalog = () => {
    const el = document.getElementById('marketplace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body antialiased pt-16 sm:pt-[72px]">
      {/* 1. Header with sleek navigation & responsive slide-over sidebar */}
      <Header onRequestProposal={() => handleOpenProposal()} />

      {/* 2. Official SKP Kemnaker & BNSP Notification Strip */}
      <RegulatoryNotice />

      <main className="flex-1">
        {/* 3. Hero Section (Authority, metrics, Johannes Simanjuntak profile) */}
        <Hero 
          onRequestProposal={() => handleOpenProposal()} 
          onSelectCourse={handleSelectCourse} 
        />

        {/* 4. Trust Industry Sectors (Mining, Healthcare, Construction, Maritime, etc.) */}
        <TrustIndustry />

        {/* 5. 4 Core Service Pillars */}
        <CoreServices 
          onRequestProposal={() => handleOpenProposal()} 
          onNavigateCatalog={handleNavigateCatalog} 
        />

        {/* 6. Training Marketplace (AK3U Palembang Featured & Full Course Catalog) */}
        <TrainingCatalog 
          onSelectCourse={handleSelectCourse} 
          onRequestProposal={handleOpenProposal} 
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Corporate B2B Workflow (6-Step Timeline) */}
        <CorporateWorkflow 
          onRequestProposal={() => handleOpenProposal()} 
        />

        {/* 8. Portfolio & Real Case Studies (Cita Mineral, RSUD dr Hadrianus, IMDG, PLN/ITB) */}
        <PortfolioCaseStudies 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* 9. Field Documentation & Official Assessor Recognition */}
        <FieldDocumentation 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* 10. Legality & Official Licenses */}
        <LegalityCompliance />

        {/* 11. Office Location & Interactive Maps */}
        <OfficeLocation 
          onRequestProposal={handleOpenProposal} 
          onOpenLightbox={handleOpenLightbox} 
        />
      </main>

      {/* 11. Corporate Footer */}
      <Footer onRequestProposal={() => handleOpenProposal()} />

      {/* 12. Floating WhatsApp Consultation */}
      <StickyWhatsApp />

      {/* Interactive Modals */}
      <ProposalModal 
        isOpen={proposalModalOpen} 
        onClose={() => setProposalModalOpen(false)} 
        prefilledTopic={selectedCourseForProposal} 
      />

      <CourseModal 
        course={activeCourseDetail} 
        onClose={() => setActiveCourseDetail(null)} 
        onRequestProposal={handleOpenProposal} 
      />

      <ImageLightboxModal 
        imageUrl={lightboxImage?.url || null} 
        title={lightboxImage?.title || ''} 
        onClose={() => setLightboxImage(null)} 
      />
    </div>
  );
}
