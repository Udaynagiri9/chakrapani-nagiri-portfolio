import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TwoWorlds } from './components/TwoWorlds';
import { JourneyTimeline } from './components/JourneyTimeline';
import { MusicSection } from './components/MusicSection';
import { Performances } from './components/Performances';
import { Achievements } from './components/Achievements';
import { SocialMedia } from './components/SocialMedia';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { MediaPressPage } from './components/MediaPressPage';

const MainContent: React.FC = () => {
  const { isTelugu } = useLanguage();

  // Page Routing State: 'home' or 'media'
  const [currentPage, setCurrentPage] = useState<'home' | 'media'>('home');

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState<string | undefined>(undefined);
  const [modalYoutubeId, setModalYoutubeId] = useState<string | undefined>(undefined);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  const handleOpenVideoModal = (videoSrc?: string, youtubeId?: string, title?: string) => {
    setModalVideoSrc(videoSrc);
    setModalYoutubeId(youtubeId);
    setModalTitle(title || (isTelugu ? 'ప్రత్యక్ష వేదిక దృశ్యాలు' : 'Live Stage Footage'));
    setVideoModalOpen(true);
  };

  const handleNavigate = (page: 'home' | 'media', sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-red selection:text-white">
      {/* Background Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 film-grain" />

      {/* Floating Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Flow vs Dedicated Media & Press Page */}
      {currentPage === 'home' ? (
        <main>
          {/* 1. Cinematic Hero Section */}
          <Hero onOpenVideoModal={handleOpenVideoModal} />

          {/* 2. Emotional Split-Screen About Section */}
          <About />

          {/* 3. The Two Worlds – Soldier & Singer */}
          <TwoWorlds />

          {/* 4. My Musical Journey Timeline */}
          <JourneyTimeline />

          {/* 5. Music and Songs Portfolio */}
          <MusicSection onOpenVideoModal={handleOpenVideoModal} />

          {/* 6. Live Performances & Stage Moments */}
          <Performances onOpenVideoModal={handleOpenVideoModal} />

          {/* 7. Achievements & Recognition (with 3D Flipping Playing Cards & Shuffling) */}
          <Achievements
            onOpenVideoModal={handleOpenVideoModal}
            onNavigateToMedia={() => handleNavigate('media')}
          />

          {/* 8. Social Media Integration */}
          <SocialMedia />

          {/* 9. Cinematic Masonry Gallery */}
          <Gallery />

          {/* 10. Contact & Performance Booking */}
          <Contact />
        </main>
      ) : (
        <main>
          {/* Dedicated National Media, News Articles & Exclusive Interviews Page */}
          <MediaPressPage
            onBackToHome={() => handleNavigate('home')}
            onOpenVideoModal={handleOpenVideoModal}
          />
        </main>
      )}

      {/* 11. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Reusable Video Lightbox Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={modalVideoSrc}
        youtubeId={modalYoutubeId}
        title={modalTitle}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
