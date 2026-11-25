import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SongItem } from '../data/mediaData';
import { Play, Pause, Volume2, VolumeX, X, Disc, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerBarProps {
  currentSong: SongItem | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onClose,
}) => {
  const { language, isTelugu } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(formatTime(audio.currentTime));
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(audio.duration));
    };

    const handleEnded = () => {
      setProgress(0);
      setCurrentTime('0:00');
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;
    const audio = audioRef.current;

    if (currentSong.audioUrl) {
      if (audio.src !== window.location.origin + currentSong.audioUrl) {
        audio.src = currentSong.audioUrl;
      }
      if (isPlaying) {
        audio.play().catch((err) => console.log('Audio autoplay prevented:', err));
      } else {
        audio.pause();
      }
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const seekTo = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTo;
    setProgress(parseFloat(e.target.value));
  };

  if (!currentSong) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="fixed bottom-0 inset-x-0 z-40 p-2 sm:p-4 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto rounded-2xl bg-black/90 backdrop-blur-2xl border border-accent-highlight/40 shadow-2xl p-3 sm:p-4 pointer-events-auto">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Song Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-white/10">
                <img
                  src={currentSong.thumbnail}
                  alt={currentSong.title[language]}
                  className="w-full h-full object-cover"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Disc className="w-5 h-5 text-accent-highlight animate-spin" />
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {currentSong.title[language]}
                  </h4>
                  <span className="hidden sm:inline px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent-red/20 text-accent-highlight uppercase">
                    {currentSong.category}
                  </span>
                </div>
                <p className="text-[11px] text-text-secondary truncate">
                  {currentSong.composer
                    ? currentSong.composer[language]
                    : 'Chakrapani Nagiri'}
                </p>
              </div>
            </div>

            {/* Playback Controls & Scrubber */}
            <div className="flex-1 max-w-md hidden md:flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-3">
                <button
                  onClick={onTogglePlay}
                  className="w-9 h-9 rounded-full bg-accent-highlight hover:bg-accent-red text-white flex items-center justify-center transition-all shadow-md shadow-accent-red/40"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
              </div>

              {/* Progress Slider */}
              <div className="w-full flex items-center gap-2">
                <span className="text-[10px] text-text-muted w-8 text-right">{currentTime}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-highlight"
                />
                <span className="text-[10px] text-text-muted w-8">{duration}</span>
              </div>
            </div>

            {/* Mobile Play Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onTogglePlay}
                className="w-9 h-9 rounded-full bg-accent-highlight text-white flex items-center justify-center"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
            </div>

            {/* Right Tools: Volume, YouTube link, Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg text-text-secondary hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-accent-highlight" />}
              </button>

              {currentSong.youtubeUrl && (
                <a
                  href={currentSong.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex p-2 rounded-lg text-text-secondary hover:text-red-400 transition-colors"
                  title="Watch on YouTube"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-text-secondary hover:text-white transition-colors"
                title="Close player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
