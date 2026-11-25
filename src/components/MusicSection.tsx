import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { songsData, SongItem } from '../data/mediaData';
import { Play, Pause, ExternalLink, Radio, Volume2, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicSectionProps {
  onOpenVideoModal?: (videoSrc?: string, youtubeId?: string, title?: string) => void;
  playingSongId?: string | null;
  onTogglePlayAudio?: (song: SongItem) => void;
  onStopAudio?: () => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({
  onOpenVideoModal,
  playingSongId: controlledPlayingSongId,
  onTogglePlayAudio: controlledTogglePlayAudio,
  onStopAudio,
}) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].music;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [internalPlayingSongId, setInternalPlayingSongId] = useState<string | null>(null);
  const internalAudioRef = useRef<HTMLAudioElement | null>(null);

  const isControlled = controlledPlayingSongId !== undefined;
  const currentPlayingId = isControlled ? controlledPlayingSongId : internalPlayingSongId;

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'melody', label: t.categories.melody },
    { id: 'folk', label: t.categories.folk },
  ];

  const filteredSongs = activeCategory === 'all'
    ? songsData
    : songsData.filter((song) => song.category === activeCategory);

  const togglePlayAudio = (song: SongItem) => {
    if (isControlled && controlledTogglePlayAudio) {
      controlledTogglePlayAudio(song);
      return;
    }

    if (!song.audioUrl) return;

    if (internalPlayingSongId === song.id) {
      // Pause
      internalAudioRef.current?.pause();
      setInternalPlayingSongId(null);
    } else {
      // Play new
      if (internalAudioRef.current) {
        internalAudioRef.current.pause();
      }
      const audio = new Audio(song.audioUrl);
      internalAudioRef.current = audio;
      setInternalPlayingSongId(song.id);
      audio.play().catch((err) => console.log('Audio play failed:', err));
      audio.onended = () => setInternalPlayingSongId(null);
      audio.onerror = () => setInternalPlayingSongId(null);
    }
  };

  const handleWatchVideo = (song: SongItem) => {
    // 1. Stop any currently playing audio immediately so audio & video never collide
    if (onStopAudio) {
      onStopAudio();
    }
    if (internalAudioRef.current) {
      internalAudioRef.current.pause();
      internalAudioRef.current.currentTime = 0;
      setInternalPlayingSongId(null);
    }

    // 2. Open the video modal
    if (onOpenVideoModal) {
      onOpenVideoModal(undefined, song.youtubeId, song.title[language]);
    }
  };

  useEffect(() => {
    return () => {
      if (internalAudioRef.current) {
        internalAudioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="music" className="relative py-24 bg-bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Radio className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>

          {/* YouTube Channel Direct Link Pill */}
          <div className="pt-2">
            <a
              href="https://youtube.com/@chakrapaninagiri3874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 transition-colors font-helvetica"
            >
              <span>@chakrapaninagiri3874</span>
              <span className="text-white/40">•</span>
              <span>127K+ Subscribers</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-helvetica">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black border border-white font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
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
              const isPlaying = currentPlayingId === song.id;

              return (
                <motion.div
                  key={song.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl overflow-hidden bg-[#141414] border transition-all duration-300 shadow-xl group flex flex-col justify-between ${
                    isPlaying ? 'border-white/50 ring-1 ring-white/30' : 'border-white/10 hover:border-white/25'
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
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-medium uppercase tracking-wider text-neutral-300 font-helvetica">
                      {song.category}
                    </div>

                    {/* Duration Badge Top Right */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/80 font-helvetica">
                      {song.duration}
                    </div>

                    {/* Playing Equalizer Indicator */}
                    {isPlaying && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                        <span className="text-[10px] font-medium text-white uppercase tracking-wider font-helvetica">
                          {isTelugu ? 'ప్లే అవుతోంది' : 'Playing Audio'}
                        </span>
                      </div>
                    )}

                    {/* Central Play/Pause Audio Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => togglePlayAudio(song)}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 transform group-hover:scale-105 cursor-pointer border border-white/20 ${
                          isPlaying
                            ? 'bg-white text-black'
                            : 'bg-white/90 hover:bg-white text-black'
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
                      <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-1 font-helvetica">
                        {song.title[language]}
                      </h3>

                      {song.composer && (
                        <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1 font-helvetica">
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
                        className="text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 fill-current text-white" />
                            <span>{t.pauseTrack}</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current text-white" />
                            <span>{t.playTrack}</span>
                          </>
                        )}
                      </button>

                      {/* Video Watch Modal Trigger */}
                      {(song.videoUrl || song.youtubeId) && (
                        <button
                          onClick={() => handleWatchVideo(song)}
                          className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Film className="w-4 h-4 text-neutral-400" />
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