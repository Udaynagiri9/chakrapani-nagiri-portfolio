import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { journeyMilestones } from '../data/mediaData';
import { Compass, Calendar, MapPin, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export const JourneyTimeline: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].journey;

  return (
    <section id="journey" className="relative py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serifDisplay font-bold text-white">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/15" />

          {/* Left Line for Mobile */}
          <div className="lg:hidden absolute left-4 top-4 bottom-4 w-px bg-white/15" />

          <div className="space-y-16 lg:space-y-24">
            {journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Central Node Badge */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border border-white/20 items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Mobile Node Badge */}
                  <div className="lg:hidden absolute left-4 -translate-x-1/2 w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Left Column (Content if Even, Media if Odd on Desktop) */}
                  <div
                    className={`pl-10 lg:pl-0 lg:col-span-6 ${
                      isEven ? 'lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12 lg:text-left'
                    }`}
                  >
                    {/* Glass Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-bg-card/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group">
                      {/* Milestone Header */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                          {milestone.year}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-text-muted px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                          <Tag className="w-3 h-3 text-neutral-400" />
                          {milestone.tag[language]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serifDisplay font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {milestone.title[language]}
                      </h3>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-1.5 text-xs text-text-secondary mb-4 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{milestone.location[language]}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {milestone.desc[language]}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Media Image) */}
                  <div
                    className={`pl-10 lg:pl-0 lg:col-span-6 ${
                      isEven ? 'lg:pl-12' : 'lg:order-1 lg:pr-12'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl bg-black aspect-[16/10]">
                      <img
                        src={milestone.image}
                        alt={milestone.title[language]}
                        className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                        <span className="font-medium text-neutral-300">
                          {milestone.tag[language]}
                        </span>
                        <span className="text-[11px] text-text-secondary">
                          Chakrapani Nagiri
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
