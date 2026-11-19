import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { newsArticlesData, interviewVideosData, NewsArticleItem, InterviewVideoItem } from '../data/mediaPressData';
import { ArrowLeft, ExternalLink, Play, Newspaper, Tv, Sparkles, Award, Star, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface MediaPressPageProps {
  onBackToHome: () => void;
  onOpenVideoModal: (videoSrc?: string, youtubeId?: string, title?: string) => void;
}

export const MediaPressPage: React.FC<MediaPressPageProps> = ({ onBackToHome, onOpenVideoModal }) => {
  const { language, isTelugu } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-accent-darkRed/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16">

        {/* Top Back Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold font-helvetica transition-all hover:-translate-x-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-highlight" />
            <span>{isTelugu ? '← ప్రధాన పేజీ' : '← Back to Portfolio'}</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-red/15 border border-accent-red/30 text-accent-highlight text-[11px] sm:text-xs font-bold uppercase tracking-wider font-helvetica">
            <Newspaper className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{isTelugu ? 'జాతీయ మీడియా & ఇంటర్వ్యూలు' : 'National Press & Media'}</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {isTelugu
              ? 'మీడియా విశేషాలు & ప్రత్యేక ఇంటర్వ్యూలు'
              : 'Press Coverage & Exclusive Interviews'}
          </h1>
          <p className="text-sm sm:text-lg text-text-secondary font-sans leading-relaxed">
            {isTelugu
              ? 'భారతదేశ ప్రముఖ జాతీయ వార్తా సంస్థలు, దినపత్రికల కథనాలు మరియు ప్రముఖ ఛానెల్స్ తో చక్రపాణి నాగిరి ప్రత్యేక సంభాషణలు.'
              : 'National newspaper features, trending viral reports, celebrity reactions, and exclusive video interviews covering BSF Soldier & Singer Chakrapani Nagiri.'}
          </p>
        </div>

        {/* Celebrity Highlight Banner: Bollywood Star Varun Dhawan Reacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#200a0d] via-[#12080a] to-[#1c080e] border border-accent-highlight/40 p-5 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-accent-red/10 pointer-events-none">
            <Flame className="w-44 h-44" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider font-helvetica">
                <Flame className="w-3.5 h-3.5 text-accent-highlight" />
                <span>{isTelugu ? 'జాతీయ ట్రెండింగ్ వార్త' : 'National Trending Sensation'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-helvetica font-bold text-white leading-snug">
                {isTelugu
                  ? 'సరిహద్దు జవాన్ చక్రపాణి గానానికి బాలీవుడ్ హీరో వరుణ్ ధావన్ ఫిదా!'
                  : "Bollywood Superstar Varun Dhawan Reacts to BSF Soldier Chakrapani's Viral Singing!"}
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                {isTelugu
                  ? "బోర్డర్ 2 చిత్రం నుండి 'సందేశే ఆతే హై / ఘర్ కబ్ ఆవోగే' గీతాన్ని చక్రపాణి సరిహద్దుల్లో పాడిన భావోద్వేగ వీడియోపై స్టార్ హీరో వరుణ్ ధావన్ స్వయంగా ప్రశంసలు కురిపించారు. ఇండియా టుడే, ఆజ్ తక్, ఎన్‌డీటీవీ వంటి ప్రముఖ వార్తా సంస్థలు దీనిపై ప్రత్యేక కథనాలను ప్రచురించాయి."
                  : "Chakrapani's border post rendition of 'Sandese Aate Hai / Ghar Kab Aaoge' touched millions across India. Bollywood superstar Varun Dhawan shared and lauded his performance, sparking widespread nationwide press coverage."}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.indiatoday.in/trending-news/story/bsf-soldiers-soulful-ghar-kab-aaoge-from-border-2-rendition-is-viral-varun-dhawan-reacts-2851124-2026-01-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-red hover:bg-accent-highlight text-white text-xs font-bold font-helvetica transition-colors shadow-lg cursor-pointer"
                >
                  <span>{isTelugu ? 'ఇండియా టుడే కథనం చదవండి' : 'Read India Today Article'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.aajtak.in/trending/story/bsf-soldier-sings-border-song-sandese-aate-hai-viral-true-owner-tstf-dskc-2440530-2026-01-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold font-helvetica transition-colors cursor-pointer"
                >
                  <span>{isTelugu ? 'ఆజ్ తక్ రిపోర్ట్' : 'Aaj Tak Feature'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-w-sm group">
                <img
                  src="/images/bsf_singing_idol.jpg"
                  alt="Chakrapani singing in uniform"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-center text-xs font-semibold text-white bg-black/80 backdrop-blur-md py-1.5 px-3 rounded-lg border border-white/10 font-helvetica">
                  {isTelugu ? 'వైరల్ సైనిక గాయకుడు • చక్రపాణి నాగిరి' : 'Viral Soldier-Singer • Chakrapani Nagiri'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 1: Major News Articles & Press Features */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Newspaper className="w-5 h-5 text-accent-highlight" />
              <h2 className="text-2xl sm:text-3xl font-helvetica font-bold text-white">
                {isTelugu ? 'ప్రముఖ వార్తా కథనాలు & పత్రికా విశేషాలు' : 'Verified News Articles & Editorial Stories'}
              </h2>
            </div>
            <span className="text-xs text-text-secondary font-helvetica hidden sm:inline-block">
              {newsArticlesData.length} {isTelugu ? 'ప్రధాన కథనాలు' : 'Major Features'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticlesData.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-[#141414] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top Bar: Source Badge & Date */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border font-helvetica ${article.sourceBadgeColor}`}>
                      {article.source}
                    </span>
                    <span className="text-[11px] text-text-muted font-helvetica">
                      {article.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base sm:text-lg font-helvetica font-bold text-white group-hover:text-accent-highlight transition-colors line-clamp-2">
                    {article.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-text-secondary leading-relaxed font-sans line-clamp-3">
                    {article.summary[language]}
                  </p>
                </div>

                {/* Bottom Action: Redirect Link */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-text-muted font-helvetica">
                    {article.readTime || 'Verified News'}
                  </span>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 group-hover:bg-accent-red text-neutral-300 group-hover:text-white border border-white/10 group-hover:border-accent-highlight text-xs font-semibold font-helvetica transition-all duration-300 cursor-pointer"
                  >
                    <span>{isTelugu ? 'కథనం చదవండి' : 'Read Article'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Exclusive Video Interviews */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Tv className="w-5 h-5 text-accent-highlight" />
              <h2 className="text-2xl sm:text-3xl font-helvetica font-bold text-white">
                {isTelugu ? 'ప్రత్యేక వీడియో ఇంటర్వ్యూలు' : 'Exclusive Video Interviews'}
              </h2>
            </div>
            <span className="text-xs text-text-secondary font-helvetica hidden sm:inline-block">
              {interviewVideosData.length} {isTelugu ? 'వీడియోలు' : 'Interviews'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewVideosData.map((interview, idx) => (
              <motion.div
                key={interview.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                {/* Thumbnail with Modal Play Trigger */}
                <div
                  onClick={() => onOpenVideoModal(undefined, interview.youtubeId, interview.title[language])}
                  className="relative aspect-[16/9] overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={interview.thumbnail}
                    alt={interview.title[language]}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />

                  {/* Channel Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold text-accent-highlight font-helvetica">
                    {interview.channel}
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white/80 font-helvetica">
                    {interview.duration}
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent-red group-hover:bg-accent-highlight text-white flex items-center justify-center border border-white/20 transform group-hover:scale-105 transition-all duration-200">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Interview Info */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-helvetica font-bold text-white group-hover:text-accent-highlight transition-colors line-clamp-2">
                      {interview.title[language]}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans mt-2 line-clamp-3">
                      {interview.description[language]}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between font-helvetica">
                    <button
                      onClick={() => onOpenVideoModal(undefined, interview.youtubeId, interview.title[language])}
                      className="text-xs font-bold text-accent-highlight hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isTelugu ? 'వీడియో చూడండి' : 'Watch Interview'}</span>
                    </button>

                    <a
                      href={interview.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Return Button */}
        <div className="text-center pt-8 border-t border-white/10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent-red hover:bg-accent-highlight text-white text-sm font-bold font-helvetica transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isTelugu ? 'ప్రధాన పోర్ట్‌ఫోలియోకు తిరిగి వెళ్ళండి' : 'Back to Main Portfolio'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};