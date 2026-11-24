import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Mic2, Play, Sparkles, Volume2, VolumeX, Award, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenVideoModal?: (videoSrc?: string, youtubeId?: string, title?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideoModal }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].hero;
  const [useVideoBackground, setUseVideoBackground] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoBg = () => {
    setUseVideoBackground(!useVideoBackground);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-bg-primary z-0">
        {/* Subtle Ambient Radial Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-accent-red/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-accent-darkRed/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-accent-highlight/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Video or Static Background */}
        {useVideoBackground ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/hero_loop.mp4"
              autoPlay
              loop
              muted={videoMuted}
              playsInline
              className="w-full h-full object-cover opacity-65 scale-105 filter contrast-125 brightness-90"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/40" />
            <div className="absolute inset-0 bg-radial-vignette opacity-80" />
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full opacity-35 bg-[radial-gradient(#1f0d10_1px,transparent_1px)] [background-size:24px_24px]" />
        )}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div
          className={`grid items-center gap-12 transition-all duration-700 ${
            useVideoBackground
              ? 'grid-cols-1 max-w-4xl mx-auto text-center'
              : 'grid-cols-1 lg:grid-cols-12'
          }`}
        >
          {/* Text Column */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`space-y-6 ${
              useVideoBackground
                ? 'col-span-1 text-center'
                : 'lg:col-span-7 text-center lg:text-left'
            }`}
          >
            {/* Dual Identity Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-accent-highlight text-xs font-semibold uppercase tracking-wider font-helvetica">
                <Shield className="w-3.5 h-3.5" />
                BSF Soldier
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-red-400 text-xs font-semibold uppercase tracking-wider font-helvetica">
                <Mic2 className="w-3.5 h-3.5" />
                Telugu Indian Idol S2 Top 7
              </span>
            </div>

            {/* Main Name Heading with HELVETICA NEUE */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                className={`font-helvetica font-extrabold tracking-tight text-white uppercase ${
                  isTelugu
                    ? 'text-4xl sm:text-5xl md:text-6xl leading-tight'
                    : 'text-4xl sm:text-6xl md:text-7xl tracking-wider'
                }`}
              >
                {t.title}
              </motion.h1>

              {/* Sub-line / Profession */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`mt-3 flex flex-wrap items-center gap-3 ${
                  useVideoBackground ? 'justify-center' : 'justify-center lg:justify-start'
                }`}
              >
                <span className="text-lg sm:text-xl font-medium text-accent-highlight tracking-wide font-helvetica">
                  {isTelugu ? 'గాయకుడు' : 'Singer'}
                </span>
                <span className="text-white/40">|</span>
                <span className="text-lg sm:text-xl font-medium text-text-secondary tracking-wide font-helvetica">
                  {isTelugu ? 'BSF సైనికుడు' : 'BSF Soldier'}
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs font-semibold text-neutral-300 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-helvetica">
                  {isTelugu ? 'శ్రీకాకుళం ముద్దుబిడ్డ' : 'Srikakulam, AP'}
                </span>
              </motion.div>
            </div>

            {/* Prominent Telugu / English Taglines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              {/* Main Tagline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug">
                "{t.tagline}"
              </p>

              {/* Poetic Subtitle */}
              <p
                className={`text-base sm:text-lg text-text-secondary font-normal leading-relaxed ${
                  useVideoBackground ? 'max-w-2xl mx-auto' : 'max-w-2xl mx-auto lg:mx-0'
                }`}
              >
                {t.subtitle}
              </p>

              {/* Secondary Tagline */}
              <div className="pt-1">
                <span className="inline-block text-xs sm:text-sm font-medium text-accent-highlight tracking-widest uppercase border-b border-accent-highlight/30 pb-0.5 font-helvetica">
                  "{t.quote}"
                </span>
              </div>
            </motion.div>

            {/* Action Buttons (Clean & Responsive for Mobile & Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`pt-4 ${
                useVideoBackground ? 'text-center' : 'text-center lg:text-left'
              }`}
            >
              {/* Primary 2 CTAs: 2 columns on mobile, flex-wrap on desktop */}
              <div
                className={`grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 ${
                  useVideoBackground ? 'justify-center' : 'justify-center lg:justify-start'
                }`}
              >
                {/* Primary CTA: Journey */}
                <button
                  onClick={() => scrollTo('journey')}
                  className="px-3 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-base text-white bg-accent-red hover:bg-accent-highlight border border-transparent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1 sm:gap-2 group font-helvetica cursor-pointer"
                >
                  <span className="whitespace-nowrap">{isTelugu ? 'నా ప్రస్థానం' : t.exploreJourney}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                {/* Secondary CTA: Music */}
                <button
                  onClick={() => scrollTo('music')}
                  className="px-3 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-base text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1 sm:gap-2 backdrop-blur-md font-helvetica cursor-pointer"
                >
                  <Mic2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-highlight" />
                  <span className="whitespace-nowrap">{t.listenMusic}</span>
                </button>
              </div>

              {/* Secondary Row: Watch Video & Backdrop Toggle */}
              <div
                className={`mt-3 flex flex-wrap items-center gap-2 sm:gap-3 ${
                  useVideoBackground ? 'justify-center' : 'justify-center lg:justify-start'
                }`}
              >
                {/* Video Modal Trigger */}
                <button
                  onClick={() =>
                    onOpenVideoModal &&
                    onOpenVideoModal(
                      undefined,
                      'lw9Mm7RqMu0',
                      isTelugu
                        ? 'శ్రీదేవి డ్రామా కంపెనీ ప్రత్యక్ష గానం (ఈటీవీ లైవ్)'
                        : 'Sridevi Drama Company Live Performance (ETV Telugu)'
                    )
                  }
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full font-medium text-xs sm:text-sm text-text-secondary hover:text-white bg-black/60 hover:bg-black/80 border border-white/15 transition-all flex items-center justify-center gap-2 font-helvetica cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-accent-red/20 flex items-center justify-center text-accent-highlight">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>{t.watchVideo}</span>
                </button>

                {/* Video Backdrop Toggle Pill */}
                <button
                  onClick={toggleVideoBg}
                  className={`px-3.5 py-2 rounded-full border transition-all text-xs font-helvetica flex items-center justify-center gap-1.5 cursor-pointer ${
                    useVideoBackground
                      ? 'bg-accent-red text-white border-accent-highlight'
                      : 'bg-white/5 border-white/10 hover:border-white/25 text-neutral-300'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-accent-highlight" />
                  <span>
                    {useVideoBackground
                      ? (isTelugu ? 'బ్యాక్‌డ్రాప్ ఆఫ్' : 'Turn Off')
                      : (isTelugu ? 'లైవ్ వీడియో' : 'Live Video')}
                  </span>
                </button>

                {useVideoBackground && (
                  <button
                    onClick={() => setVideoMuted(!videoMuted)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-neutral-300 transition-colors cursor-pointer"
                    aria-label="Toggle video sound"
                    title={videoMuted ? 'Unmute' : 'Mute'}
                  >
                    {videoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-accent-highlight" />}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait Card (Hides when video is on) */}
          <AnimatePresence>
            {!useVideoBackground && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative w-full max-w-md sm:max-w-lg">
                  {/* Main Card */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-neutral-900 to-black shadow-2xl shadow-black">
                    {/* Real Stage Performance Image */}
                    <div className="relative aspect-[3/4] overflow-hidden group">
                      <img
                        src="/images/web_stage_performance_1.jpg"
                        alt="Chakrapani Nagiri Singing on Stage"
                        className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                      {/* Static Clean Top Right Badge (NO BLINKING DOT) */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-accent-highlight/40 text-[11px] font-semibold text-white font-helvetica">
                        <Star className="w-3.5 h-3.5 text-accent-highlight fill-accent-highlight" />
                        <span>Telugu Indian Idol S2</span>
                      </div>

                      {/* Top Left BSF Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white font-helvetica">
                        <Shield className="w-3.5 h-3.5 text-neutral-300" />
                        <span>BSF Jawan</span>
                      </div>

                      {/* Bottom Info Floating Card */}
                      <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3
                              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                              className="font-helvetica font-bold text-white text-base"
                            >
                              {isTelugu ? 'చక్రపాణి నాగిరి' : 'CHAKRAPANI NAGIRI'}
                            </h3>
                            <p className="text-xs text-text-secondary font-helvetica">
                              {isTelugu ? 'జవాన్ & టాప్ 7 గాయకుడు' : 'BSF Soldier & Vocal Artist'}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-accent-highlight text-xs font-bold font-helvetica">
                            <Award className="w-3.5 h-3.5" />
                            <span>TOP 7</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] font-helvetica">
                          <div className="flex items-center gap-1.5 text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-highlight" />
                            <span>127K+ YouTube</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-highlight" />
                            <span>305K+ Instagram</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <span className="text-[11px] font-medium text-text-secondary tracking-widest uppercase mb-1 opacity-70 font-helvetica">
          {t.scrollDown}
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent-highlight"
          />
        </div>
      </div>
    </section>
  );
};
