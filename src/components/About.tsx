import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Music, MapPin, Heart, Compass, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-darkRed/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Verified Details Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Red glow halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-red/30 via-accent-highlight/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-bg-card shadow-2xl">
                {/* Photo: Dual Identity Fusion (Stage & BSF) */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/bsf_stage_uniform.jpg"
                    alt="Chakrapani Nagiri Singing in BSF Uniform"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-black/30 to-transparent" />
                  
                  {/* Floating BSF Badge in bottom left */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 shadow-xl space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-accent-red/20 border border-accent-highlight/40 flex items-center justify-center text-accent-highlight">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {isTelugu ? 'బోర్డర్ సెక్యూరిటీ ఫోర్స్' : 'Border Security Force'}
                          </p>
                          <p className="text-[10px] text-text-secondary">
                            {isTelugu ? 'దేశ రక్షణలో గర్వకారణమైన జవాన్' : 'Active Duty BSF Jawan'}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-accent-highlight px-2 py-0.5 rounded bg-accent-red/20 border border-accent-red/30">
                        {isTelugu ? 'సేవ & సాధన' : 'Duty & Soul'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid below image */}
                <div className="p-6 space-y-3.5 bg-gradient-to-b from-bg-card to-black/60">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent-highlight shrink-0 mt-1" />
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block">
                        {t.hometownLabel}
                      </span>
                      <p className="text-xs sm:text-sm text-white/90 font-medium">
                        {t.hometownVal}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                    <div className="flex items-start gap-2">
                      <Shield className="w-3.5 h-3.5 text-accent-highlight shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                          {t.serviceLabel}
                        </span>
                        <p className="text-xs font-medium text-white/90">
                          {t.serviceVal}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Music className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                          {t.recognitionLabel}
                        </span>
                        <p className="text-xs font-medium text-white/90">
                          {t.recognitionVal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Concept */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Core Lead Tagline */}
            <div className="border-l-4 border-accent-highlight pl-5 py-1">
              <p className="text-xl sm:text-2xl font-serifDisplay font-semibold text-white/95 leading-relaxed">
                "{t.lead}"
              </p>
              <p className="text-xs text-accent-highlight uppercase tracking-widest mt-1 font-helvetica font-semibold">
                {isTelugu ? 'చక్రపాణి నాగిరి జీవన వేదాంతం' : 'CHAKRAPANI NAGIRI • LIFE PHILOSOPHY'}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* 3 Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-highlight/30 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-accent-red/20 flex items-center justify-center text-accent-highlight mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {isTelugu ? 'దేశ రక్షణ' : 'National Service'}
                </h4>
                <p className="text-[11px] text-text-secondary mt-1">
                  {isTelugu ? 'సరిహద్దుల్లో రక్షణ విధుల్లో నిరంతర అప్రమత్తత.' : 'Unwavering border watch with iron discipline.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-highlight/30 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-red-950/50 flex items-center justify-center text-red-400 mb-2">
                  <Music className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {isTelugu ? 'సంగీత సాధన' : 'Musical Soul'}
                </h4>
                <p className="text-[11px] text-text-secondary mt-1">
                  {isTelugu ? 'సెలవుల్లోనూ తీరిక వేళల్లోనూ స్వర తపస్సు.' : 'Soulful melodies nurtured during precious leave.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-highlight/30 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-amber-950/50 flex items-center justify-center text-amber-400 mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {isTelugu ? 'పల్లె మూలాలు' : 'Srikakulam Pride'}
                </h4>
                <p className="text-[11px] text-text-secondary mt-1">
                  {isTelugu ? 'మందస మండలం పొత్తంగి మట్టి పరిమళం.' : 'Grounded deeply in his ancestral village roots.'}
                </p>
              </div>
            </div>

            {/* Quote Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-accent-darkRed/20 via-black to-accent-red/10 border border-accent-highlight/20 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-highlight shrink-0" />
              <p className="text-xs sm:text-sm text-white/90 italic">
                {isTelugu
                  ? '“దేశానికి సేవ చేయడం నా బాధ్యత... సంగీతంలో జీవించడం నా ఆత్మ.”'
                  : '“Serving my nation is my sacred duty... Living in music is my soul.”'}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
