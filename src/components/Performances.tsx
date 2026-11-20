import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { performancesData, PerformanceItem } from '../data/mediaData';
import { Play, Tv, Film } from 'lucide-react';
import { motion } from 'framer-motion';

interface PerformancesProps {
  onOpenVideoModal: (videoSrc?: string, youtubeId?: string, title?: string) => void;
}

export const Performances: React.FC<PerformancesProps> = ({ onOpenVideoModal }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].performances;

  return (
    <section id="performances" className="relative py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent-darkRed/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Film className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Video Grid: 3 columns on large screens for 6 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performancesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-bg-card border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl group flex flex-col justify-between"
            >
              {/* Video Thumbnail with Hover Play Button */}
              <div
                onClick={() => onOpenVideoModal(item.localVideo, item.youtubeId, item.title[language])}
                className="relative aspect-[16/9] overflow-hidden bg-black cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title[language]}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/30 to-transparent" />

                {/* Event Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-accent-highlight flex items-center gap-1.5 font-helvetica">
                  <Tv className="w-3 h-3" />
                  <span>{item.event[language]}</span>
                </div>

                {/* Center Play Button Overlay (Clean, NO GLOW) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent-red group-hover:bg-accent-highlight text-white flex items-center justify-center border border-white/20 transform group-hover:scale-105 transition-all duration-200">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Subtitle */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-white/90 font-helvetica">
                  <span className="font-medium bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md truncate max-w-[70%]">
                    {item.subtitle[language]}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {t.watchModal}
                  </span>
                </div>
              </div>

              {/* Performance Info */}
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-helvetica font-bold text-white group-hover:text-accent-highlight transition-colors">
                  {item.title[language]}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {item.description[language]}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-helvetica">
                  <button
                    onClick={() => onOpenVideoModal(item.localVideo, item.youtubeId, item.title[language])}
                    className="text-sm font-bold text-accent-highlight hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t.watchModal}</span>
                  </button>

                  <span className="text-xs text-text-muted">
                    {isTelugu ? 'అధికారిక ఫుటేజ్' : 'Verified Video'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};