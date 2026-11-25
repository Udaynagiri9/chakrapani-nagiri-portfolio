import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Instagram, Youtube, ExternalLink, CheckCircle2, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialMedia: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].social;

  return (
    <section className="relative py-20 bg-bg-secondary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Share2 className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Major Platform Cards (Clean, Plain, Human-Crafted Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-bg-card border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 group relative"
          >
            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 p-0.5 shrink-0 bg-neutral-900">
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
                    <h3 className="font-helvetica font-bold text-white text-base sm:text-lg">
                      chakrapani_soldier_official
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#3897f0] shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-helvetica">
                    Chakrapani Nagiri • Singer & BSF Soldier
                  </p>
                </div>
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-white transition-colors shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center font-helvetica">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">480+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Posts</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-white block">305K+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">{t.followers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Top 7</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Idol S2</span>
              </div>
            </div>

            {/* Bio quote snippet */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic bg-black/40 p-3.5 rounded-2xl border border-white/5 font-sans">
              “INprofessionally BSF soldier • 🎤 Passion SINGING 🎤 • TELUGU INDIAN IDOL S 2 TOP 7”
            </p>

            {/* Plain Button */}
            <a
              href="https://www.instagram.com/chakrapani_soldier_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center gap-2 font-helvetica shadow-none cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.instagramBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 text-white/60" />
            </a>
          </motion.div>

          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-bg-card border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 group relative"
          >
            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 p-0.5 shrink-0 bg-neutral-900">
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
                    <h3 className="font-helvetica font-bold text-white text-base sm:text-lg">
                      Chakrapani Nagiri
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-text-secondary shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5 font-helvetica">
                    @chakrapaninagiri3874
                  </p>
                </div>
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-white transition-colors shrink-0">
                <Youtube className="w-5 h-5" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center font-helvetica">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">230+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Videos</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-white block">127K+</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">{t.subscribers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Silver</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5 block">Creator</span>
              </div>
            </div>

            {/* Banner snippet */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic bg-black/40 p-3.5 rounded-2xl border border-white/5 font-sans">
              “A PROFESSIONAL SOLDIER WITH A MELODIC SOUL • 100K+ SUBSCRIBERS”
            </p>

            {/* Plain Button */}
            <a
              href="https://youtube.com/@chakrapaninagiri3874"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center gap-2 font-helvetica shadow-none cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
              <span>{t.youtubeBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 text-white/60" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
