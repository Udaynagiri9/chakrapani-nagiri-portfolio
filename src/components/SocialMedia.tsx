import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Instagram, Youtube, ExternalLink, CheckCircle2, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialMedia: React.FC = () => {
  const { language } = useLanguage();
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serifDisplay font-bold text-white">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Major Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Instagram Card - Plain, Clean, Human-Crafted */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#141414] border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 group relative overflow-hidden"
          >
            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-900">
                  <img
                    src="/images/web_stage_performance_1.jpg"
                    alt="Chakrapani Nagiri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-lg sm:text-xl font-helvetica">
                      chakrapani_soldier_official
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-neutral-400 shrink-0" />
                  </div>
                  <p className="text-sm text-neutral-400 mt-0.5 font-helvetica">
                    Chakrapani Nagiri • Singer & BSF Soldier
                  </p>
                </div>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center font-helvetica">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">480+</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">Posts</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-white block">305K+</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">{t.followers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Top 7</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">Idol S2</span>
              </div>
            </div>

            {/* Bio quote snippet */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 font-sans">
              “INprofessionally BSF soldier • 🎤 Passion SINGING 🎤 • TELUGU INDIAN IDOL S 2 TOP 7”
            </p>

            {/* Plain Clean Button (No Neon Gradient, No Glow Shadow) */}
            <a
              href="https://www.instagram.com/chakrapani_soldier_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors flex items-center justify-center gap-2 font-helvetica cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.instagramBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>
          </motion.div>

          {/* YouTube Card - Plain, Clean, Human-Crafted */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#141414] border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 group relative overflow-hidden"
          >
            {/* Profile Snapshot Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-900">
                  <img
                    src="/images/bsf_singing_idol.jpg"
                    alt="Chakrapani Nagiri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-base sm:text-lg font-helvetica">
                      Chakrapani Nagiri
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5 font-helvetica">
                    @chakrapaninagiri3874
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Youtube className="w-5 h-5" />
              </div>
            </div>

            {/* Verified Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center font-helvetica">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">230+</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">Videos</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-bold text-white block">127K+</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">{t.subscribers}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Silver</span>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-0.5 block">Creator</span>
              </div>
            </div>

            {/* Banner snippet */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 font-sans">
              “A PROFESSIONAL SOLDIER WITH A MELODIC SOUL • 100K+ SUBSCRIBERS”
            </p>

            {/* Plain Solid YouTube Button (Clean Red, No Neon Glow Shadow) */}
            <a
              href="https://youtube.com/@chakrapaninagiri3874"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-white bg-[#CC0000] hover:bg-[#b00000] transition-colors flex items-center justify-center gap-2 font-helvetica border border-transparent cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
              <span>{t.youtubeBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
