import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Mic2, Sparkles, Check, SlidersHorizontal, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const TwoWorlds: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].twoWorlds;

  // View mode: 'split' | 'soldier' | 'singer'
  const [activeView, setActiveView] = useState<'split' | 'soldier' | 'singer'>('split');

  return (
    <section id="two-worlds" className="relative py-24 bg-bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>

          {/* Interactive Mode Selector Pills (NO GLOWING SHADOWS) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-helvetica">
            <button
              onClick={() => setActiveView('soldier')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeView === 'soldier'
                  ? 'bg-neutral-800 text-white border border-neutral-400'
                  : 'bg-white/5 text-text-secondary hover:text-white border border-white/10'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-neutral-300" />
              <span>{t.toggleSoldier}</span>
            </button>

            <button
              onClick={() => setActiveView('split')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeView === 'split'
                  ? 'bg-white text-black border border-white font-bold'
                  : 'bg-white/5 text-text-secondary hover:text-white border border-white/10'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{t.toggleSplit}</span>
            </button>

            <button
              onClick={() => setActiveView('singer')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeView === 'singer'
                  ? 'bg-white text-black border border-white font-bold'
                  : 'bg-white/5 text-text-secondary hover:text-white border border-white/10'
              }`}
            >
              <Mic2 className="w-3.5 h-3.5" />
              <span>{t.toggleSinger}</span>
            </button>
          </div>
        </div>

        {/* Dual Worlds Container: Stable 2-column grid without reflow jitter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* THE SOLDIER - Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              opacity: activeView === 'soldier' ? 1 : activeView === 'split' ? 1 : 0.45,
              scale: activeView === 'soldier' ? 1.015 : activeView === 'split' ? 1 : 0.985,
              filter: activeView === 'singer' ? 'grayscale(50%)' : 'grayscale(0%)',
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border ${
              activeView === 'soldier'
                ? 'border-neutral-400 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black'
                : 'border-white/10 bg-gradient-to-b from-neutral-900/90 via-black to-[#0e0e0e]'
            }`}
          >
            {/* Subtle Metallic Top Border */}
            <div className="h-1 w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-transparent opacity-80" />

            <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-neutral-200">
                    <Shield className="w-5 h-5 text-neutral-200" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 font-helvetica">
                      Border Security Force
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-helvetica font-bold text-white">
                      {t.soldierTitle}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/15 text-neutral-300 font-helvetica">
                  {t.soldierSubtitle}
                </span>
              </div>

              {/* Authentic Crisp Portrait: Chakrapani in BSF Uniform with Beret */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 group">
                <img
                  src="/images/bsf_camo_outdoor.jpg"
                  alt="Chakrapani Nagiri BSF Uniform"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Sleek Military Watermark */}
                <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white flex items-center gap-2 font-helvetica">
                  <Shield className="w-4 h-4 text-neutral-300" />
                  <span className="font-medium">
                    {isTelugu ? 'బోర్డర్ సెక్యూరిటీ ఫోర్స్ (BSF జవాన్)' : 'BSF Soldier • Border Frontiers'}
                  </span>
                </div>
              </div>

              {/* Narrative description */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                {t.soldierDesc}
              </p>

              {/* Key Pillars */}
              <div className="space-y-3 pt-3 border-t border-white/10 font-helvetica">
                {t.soldierPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* THE SINGER - Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              opacity: activeView === 'singer' ? 1 : activeView === 'split' ? 1 : 0.45,
              scale: activeView === 'singer' ? 1.015 : activeView === 'split' ? 1 : 0.985,
              filter: activeView === 'soldier' ? 'grayscale(50%)' : 'grayscale(0%)',
            }}
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border ${
              activeView === 'singer'
                ? 'border-neutral-400 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black'
                : 'border-white/10 bg-gradient-to-b from-neutral-900/90 via-black to-[#0e0e0e]'
            }`}
          >
            {/* Subtle Metallic Top Border */}
            <div className="h-1 w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-transparent opacity-80" />

            <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                    <Mic2 className="w-5 h-5 text-neutral-200" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 font-helvetica">
                      Passionate Singer
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-helvetica font-bold text-white">
                      {t.singerTitle}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/15 text-neutral-300 font-helvetica">
                  {t.singerSubtitle}
                </span>
              </div>

              {/* Stage Performance Portrait */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 group">
                <img
                  src="/images/web_stage_performance_1.jpg"
                  alt="Chakrapani Nagiri Singing on Stage"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Stage Watermark */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2 font-helvetica">
                  <Mic2 className="w-3.5 h-3.5 text-neutral-300" />
                  <span className="font-medium">
                    {isTelugu ? 'ప్రత్యక్ష గానం • తెలుగు వేదికలు' : 'Soulful Vocals • Stage Artistry'}
                  </span>
                </div>
              </div>

              {/* Narrative description */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                {t.singerDesc}
              </p>

              {/* Key Pillars */}
              <div className="space-y-3 pt-3 border-t border-white/10 font-helvetica">
                {t.singerPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};