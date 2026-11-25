import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { galleryPhotos, GalleryPhoto } from '../data/mediaData';
import { Images, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].gallery;

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: t.filters.all },
    { id: 'stage', label: t.filters.stage },
    { id: 'soldier', label: t.filters.soldier },
    { id: 'idol', label: t.filters.idol },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="relative py-24 bg-bg-primary overflow-hidden border-t border-white/5">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-xs font-semibold tracking-wider uppercase">
            <Images className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serifDisplay font-bold text-white">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-accent-red text-white shadow-lg shadow-accent-red/40 border border-accent-highlight/50'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-bg-card cursor-pointer shadow-xl hover:border-accent-highlight/50 transition-all duration-300 aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.title[language]}
                  className={`w-full h-full object-cover ${photo.objectPosition || 'object-top'} filter contrast-105 group-hover:scale-108 transition-transform duration-700`}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Red spotlight bloom on hover */}
                <div className="absolute inset-0 bg-radial-gradient from-accent-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Floating zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption / Title Bottom */}
                <div className="absolute bottom-4 inset-x-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-highlight">
                    {photo.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-highlight transition-colors">
                    {photo.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    {photo.caption[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-accent-red text-white transition-colors border border-white/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-accent-red text-white transition-all border border-white/10 shadow-xl"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-accent-red text-white transition-all border border-white/10 shadow-xl"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-h-[68vh] bg-black">
                <img
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].title[language]}
                  className="max-h-[68vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="mt-4 text-center max-w-xl space-y-1 px-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-highlight">
                  {filteredPhotos[selectedPhotoIndex].category} • {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {filteredPhotos[selectedPhotoIndex].title[language]}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {filteredPhotos[selectedPhotoIndex].caption[language]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
