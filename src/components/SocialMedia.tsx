import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Instagram, Youtube, ExternalLink, CheckCircle2, Share2, Users, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialMedia: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].social;

  return (
    <section className="relative py-20 bg-bg-secondary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-xs font-semibold tracking-wider uppercase">
            <Share2 className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serifDisplay font-bold text-white">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Major Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-bg-card border border-white/10 hover:border-pink-500/40 p-8 transition-all duration-300 shadow-2xl space-y-6 group relative overflow-hidden"
          >
            {/* Ambient Pink Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src="/images/web_stage_performance_1.jpg"
                      alt="Chakrapani Nagiri"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-lg sm:text-xl">
                      chakrapani_soldier_official
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-sky-400 fill-sky-400/20 shrink-0" />
                  </div>
                  <p className="text-sm text-text-secondary mt-0.5">
                    Chakrapani Nagiri • Singer & BSF Soldier
                  </p>
                </div>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500 shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">480+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Posts</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-pink-400 block">305K+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">{t.followers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Top 7</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Idol S2</span>
              </div>
            </div>

            {/* Bio quote snippet */}
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic bg-black/50 p-3.5 rounded-2xl border border-white/10">
              “INprofessionally BSF soldier • 🎤 Passion SINGING 🎤 • TELUGU INDIAN IDOL S 2 TOP 7”
            </p>

            {/* Button */}
            <a
              href="https://www.instagram.com/chakrapani_soldier_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:opacity-90 transition-all flex items-center justify-center gap-2 font-helvetica shadow-lg shadow-pink-600/25"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.instagramBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>

          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-bg-card border border-white/10 hover:border-red-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl space-y-5 group relative overflow-hidden"
          >
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full p-0.5 bg-red-600 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src="/images/bsf_singing_idol.jpg"
                      alt="Chakrapani Nagiri"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      Chakrapani Nagiri
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-red-500 fill-red-500/20 shrink-0" />
                  </div>
                  <p className="text-xs text-text-secondary mt-0.5">
                    @chakrapaninagiri3874
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 shrink-0">
                <Youtube className="w-5 h-5" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">230+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Videos</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-red-400 block">127K+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">{t.subscribers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Silver</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Creator</span>
              </div>
            </div>

            {/* Banner snippet */}
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic bg-black/50 p-3.5 rounded-2xl border border-white/10">
              “A PROFESSIONAL SOLDIER WITH A MELODIC SOUL • 100K+ SUBSCRIBERS”
            </p>

            {/* Button */}
            <a
              href="https://youtube.com/@chakrapaninagiri3874"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center gap-2 font-helvetica shadow-lg shadow-red-600/25"
            >
              <Youtube className="w-4 h-4" />
              <span>{t.youtubeBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
