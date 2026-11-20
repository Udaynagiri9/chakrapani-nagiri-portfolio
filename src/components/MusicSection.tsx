import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { songsData, SongItem } from '../data/mediaData';
import { Play, Pause, ExternalLink, Radio, Volume2, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicSectionProps {
  onOpenVideoModal?: (videoSrc?: string, youtubeId?: string, title?: string) => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({ onOpenVideoModal }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].music;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'melody', label: t.categories.melody },
    { id: 'folk', label: t.categories.folk },
  ];

  const filteredSongs = activeCategory === 'all'
    ? songsData
    : songsData.filter((song) => song.category === activeCategory);

  const togglePlayAudio = (song: SongItem) => {
    if (!song.audioUrl) return;

    if (playingSongId === song.id) {
      // Pause
      audioRef.current?.pause();
      setPlayingSongId(null);
    } else {
      // Play new
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(song.audioUrl);
      audioRef.current = audio;
      setPlayingSongId(song.id);
      audio.play().catch((err) => console.log('Audio play failed:', err));
      audio.onended = () => setPlayingSongId(null);
      audio.onerror = () => setPlayingSongId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="music" className="relative py-24 bg-bg-primary overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent-red/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-darkRed/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Radio className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>

          {/* YouTube Channel Direct Link Pill (NO GLOW) */}
          <div className="pt-2">
            <a
              href="https://youtube.com/@chakrapaninagiri3874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-xs font-semibold text-red-300 transition-colors font-helvetica"
            >
              <span>@chakrapaninagiri3874</span>
              <span className="text-white/40">•</span>
              <span>127K+ Subscribers</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Category Tabs (NO GLOWING SHADOWS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-helvetica">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent-red text-white border border-accent-highlight font-bold'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSongs.map((song) => {
              const isPlaying = playingSongId === song.id;

              return (
                <motion.div
                  key={song.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl overflow-hidden bg-bg-card border transition-all duration-300 shadow-xl group flex flex-col justify-between ${
                    isPlaying ? 'border-accent-highlight ring-1 ring-accent-highlight/50' : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Song Thumbnail & Audio Play Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={song.thumbnail}
                      alt={song.title[language]}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/40 to-transparent" />

                    {/* Category Badge Top Left */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-accent-highlight font-helvetica">
                      {song.category}
                    </div>

                    {/* Duration Badge Top Right */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/80 font-helvetica">
                      {song.duration}
                    </div>

                    {/* Playing Equalizer Indicator */}
                    {isPlaying && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-accent-highlight/50 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-accent-highlight animate-pulse" />
                        <span className="text-[10px] font-bold text-accent-highlight uppercase tracking-wider font-helvetica">
                          {isTelugu ? 'ప్లే అవుతోంది' : 'Playing Audio'}
                        </span>
                      </div>
                    )}

                    {/* Central Play/Pause Audio Button (Clean, NO GLOW) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => togglePlayAudio(song)}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 transform group-hover:scale-105 cursor-pointer border border-white/20 ${
                          isPlaying
                            ? 'bg-white text-black'
                            : 'bg-accent-red hover:bg-accent-highlight text-white'
                        }`}
                        title={isPlaying ? 'Pause' : 'Play Audio'}
                        aria-label={isPlaying ? 'Pause song' : 'Play audio song'}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-current" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Song Details Body */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-highlight transition-colors line-clamp-1 font-helvetica">
                        {song.title[language]}
                      </h3>

                      {song.composer && (
                        <p className="text-xs sm:text-sm text-accent-highlight font-semibold mt-1 font-helvetica">
                          {song.composer[language]}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed font-sans">
                        {song.description[language]}
                      </p>
                    </div>

                    {/* Bottom Actions: Audio Play & Video Watch */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-helvetica">
                      {/* Audio Play/Pause Button */}
                      <button
                        onClick={() => togglePlayAudio(song)}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-accent-highlight flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 fill-current text-accent-highlight" />
                            <span>{t.pauseTrack}</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current text-accent-highlight" />
                            <span>{t.playTrack}</span>
                          </>
                        )}
                      </button>

                      {/* Video Watch Modal Trigger */}
                      {song.videoUrl && (
                        <button
                          onClick={() => {
                            if (onOpenVideoModal) {
                              onOpenVideoModal(song.videoUrl, undefined, song.title[language]);
                            }
                          }}
                          className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Film className="w-4 h-4 text-accent-highlight" />
                          <span>{isTelugu ? 'వీడియో చూడండి' : 'Watch Video'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};