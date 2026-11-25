import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Award, Star, Sparkles, ExternalLink, Play, ShieldAlert, Shuffle, RotateCcw, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

interface AchievementsProps {
  onOpenVideoModal?: (videoSrc?: string, youtubeId?: string, title?: string) => void;
  onNavigateToMedia?: () => void;
}

/* ==========================================================================
   1. Interactive Telugu Indian Idol S2 Golden Insignia
   ========================================================================== */
const IdolInteractiveLogo: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
      <motion.div
        animate={{
          scale: isHovered ? 1.25 : 1,
          opacity: isHovered ? 0.7 : 0.35,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 blur-xl pointer-events-none"
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotateY: isHovered ? 12 : 0,
          rotateX: isHovered ? -8 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="innerStage" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E1233" />
            <stop offset="50%" stopColor="#120824" />
            <stop offset="100%" stopColor="#080312" />
          </linearGradient>
          <radialGradient id="stageGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" fill="url(#innerStage)" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="50" cy="45" r="28" fill="url(#stageGlow)" />

        <g>
          <line x1="32" x2="32" y1="52" y2="38" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" x2="36" y1="54" y2="34" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="64" x2="64" y1="54" y2="34" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" x2="68" y1="52" y2="38" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
        </g>

        <polygon points="50,15 52,21 58,21 53,25 55,31 50,27 45,31 47,25 42,21 48,21" fill="url(#goldGrad)" />
        <rect x="44" y="32" width="12" height="18" rx="6" fill="url(#goldGrad)" stroke="#FFF3B0" strokeWidth="0.8" />
        <line x1="44" y1="38" x2="56" y2="38" stroke="#78350F" strokeWidth="0.8" />
        <line x1="44" y1="44" x2="56" y2="44" stroke="#78350F" strokeWidth="0.8" />
        <line x1="50" y1="32" x2="50" y2="50" stroke="#78350F" strokeWidth="0.8" />
        <rect x="47" y="50" width="6" height="4" fill="#B45309" />
        <rect x="47.5" y="54" width="5" height="13" rx="1.5" fill="url(#goldGrad)" />

        <path d="M 37 42 A 12 12 0 0 0 37 50" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 63 42 A 12 12 0 0 1 63 50" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />

        <path d="M 22 75 Q 50 71 78 75 L 75 84 Q 50 80 25 84 Z" fill="url(#goldGrad)" />
        <text x="50" y="80.5" textAnchor="middle" fill="#3B1A00" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">IDOL S2</text>
      </motion.svg>
    </div>
  );
};

/* ==========================================================================
   2. Interactive YouTube Silver Creator Insignia
   ========================================================================== */
const YouTubeInteractiveLogo: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
      {isHovered && (
        <>
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeOut' }}
            className="absolute w-16 h-12 rounded-2xl border-2 border-red-500 pointer-events-none"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="absolute w-16 h-12 rounded-2xl border border-red-500/60 pointer-events-none"
          />
        </>
      )}

      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.75 : 0.35,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl bg-red-600 blur-xl pointer-events-none"
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotateY: isHovered ? -12 : 0,
          rotateX: isHovered ? -6 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <defs>
          <linearGradient id="silverRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="ytRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1E27" />
            <stop offset="50%" stopColor="#E60000" />
            <stop offset="100%" stopColor="#8A000A" />
          </linearGradient>
          <linearGradient id="ytGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="8" y="18" width="84" height="64" rx="20" fill="url(#silverRim)" />
        <rect x="11" y="21" width="78" height="58" rx="17" fill="#0C0C0C" />
        <rect x="14" y="24" width="72" height="52" rx="14" fill="url(#ytRed)" />
        <path d="M 14 38 C 14 28 22 24 32 24 L 68 24 C 78 24 86 28 86 38 L 86 46 Q 50 38 14 46 Z" fill="url(#ytGlass)" />
        <polygon points="42,38 65,50 42,62" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" />
      </motion.svg>
    </div>
  );
};

/* ==========================================================================
   3. Interactive Instagram Verified 3D Insignia
   ========================================================================== */
const InstagramInteractiveLogo: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] blur-xl pointer-events-none"
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotateY: isHovered ? 12 : 0,
          rotateZ: isHovered ? 3 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <defs>
          <radialGradient id="igSunsetGrad" cx="30%" cy="107%" r="125%">
            <stop offset="0%" stopColor="#FFDF73" />
            <stop offset="15%" stopColor="#FFB338" />
            <stop offset="35%" stopColor="#FF385C" />
            <stop offset="65%" stopColor="#D80075" />
            <stop offset="90%" stopColor="#7E17C8" />
            <stop offset="100%" stopColor="#405DE6" />
          </radialGradient>
          <linearGradient id="verifiedBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B6FF" />
            <stop offset="100%" stopColor="#0077F5" />
          </linearGradient>
        </defs>

        <rect x="15" y="15" width="70" height="70" rx="20" fill="url(#igSunsetGrad)" />
        <rect x="15" y="15" width="70" height="70" rx="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <rect x="27" y="27" width="46" height="46" rx="13" stroke="#FFFFFF" strokeWidth="4.2" fill="none" />
        <circle cx="50" cy="50" r="11" stroke="#FFFFFF" strokeWidth="4.2" fill="none" />
        <circle cx="63" cy="37" r="2.8" fill="#FFFFFF" />

        <g transform="translate(62, 8)">
          <path
            d="M 12 0 L 15 4 L 20 4 L 19 9 L 23 12 L 20 16 L 21 21 L 16 20 L 12 24 L 9 20 L 4 21 L 5 16 L 1 12 L 5 9 L 4 4 L 9 4 Z"
            fill="url(#verifiedBlueGrad)"
            stroke="#080808"
            strokeWidth="1.5"
          />
          <path
            d="M 8 12 L 11 15 L 16 9"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </motion.svg>
    </div>
  );
};

/* ==========================================================================
   4. Interactive BSF Military Crest Insignia
   ========================================================================== */
const BSFInteractiveLogo: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.65 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-600/40 via-amber-500/30 to-amber-400/40 blur-xl pointer-events-none"
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotateY: isHovered ? -8 : 0,
          y: isHovered ? -3 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <defs>
          <linearGradient id="shieldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="40%" stopColor="#EAB308" />
            <stop offset="70%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#854D0E" />
          </linearGradient>
          <linearGradient id="tricolor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9933" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#138808" />
          </linearGradient>
        </defs>

        <line x1="20" y1="20" x2="80" y2="80" stroke="url(#brassGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3.5" fill="url(#brassGrad)" />
        <line x1="26" y1="18" x2="18" y2="26" stroke="url(#brassGrad)" strokeWidth="2.5" />

        <line x1="80" y1="20" x2="20" y2="80" stroke="url(#brassGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="20" r="3.5" fill="url(#brassGrad)" />
        <line x1="74" y1="18" x2="82" y2="26" stroke="url(#brassGrad)" strokeWidth="2.5" />

        <path d="M 25 24 L 75 24 L 75 52 C 75 68 50 84 50 84 C 50 84 25 68 25 52 Z" fill="url(#shieldMetal)" stroke="url(#brassGrad)" strokeWidth="2.5" />
        <path d="M 30 28 L 70 28 L 70 50 C 70 63 50 76 50 76 C 50 76 30 63 30 50 Z" stroke="url(#brassGrad)" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.65" />
        <rect x="36" y="30" width="28" height="3" rx="1.5" fill="url(#tricolor)" />
        <polygon points="50,35 52,39 56,39 53,42 54,46 50,43 46,46 47,42 44,39 48,39" fill="url(#brassGrad)" />
        <text x="50" y="58" textAnchor="middle" fill="url(#brassGrad)" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">BSF</text>
        <path d="M 18 82 Q 50 78 82 82 L 79 90 Q 50 86 21 90 Z" fill="url(#brassGrad)" />
        <text x="50" y="87" textAnchor="middle" fill="#2E1C02" fontSize="5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.4">DUTY UNTO DEATH</text>
      </motion.svg>
    </div>
  );
};

/* ==========================================================================
   Main Achievements Component with 3D Flipping Playing Cards & Shuffling
   ========================================================================== */
export const Achievements: React.FC<AchievementsProps> = ({ onOpenVideoModal, onNavigateToMedia }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].achievements;

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [shuffleKey, setShuffleKey] = useState<number>(0);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  // 3D Card Flip States (card index -> boolean)
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleShuffleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards({});
    setIsShuffling(true);
    setShuffleKey((prev) => prev + 1);
    setTimeout(() => setIsShuffling(false), 900);
  };

  const toggleCardFlip = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const flipAllCards = () => {
    const allFlipped = [0, 1, 2, 3].every((i) => flippedCards[i]);
    if (allFlipped) {
      setFlippedCards({});
    } else {
      setFlippedCards({ 0: true, 1: true, 2: true, 3: true });
    }
  };

  const handleActionClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    switch (idx) {
      case 0:
        if (onOpenVideoModal) {
          onOpenVideoModal(
            undefined,
            'lw9Mm7RqMu0',
            isTelugu
              ? 'శ్రీదేవి డ్రామా కంపెనీ ప్రత్యక్ష గానం - ఈటీవీ లైవ్'
              : 'Sridevi Drama Company Live Performance - ETV Live'
          );
        } else {
          document.getElementById('performances')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 1:
        window.open('https://youtube.com/@chakrapaninagiri3874', '_blank', 'noopener,noreferrer');
        break;
      case 2:
        window.open('https://www.instagram.com/chakrapani_soldier_official/', '_blank', 'noopener,noreferrer');
        break;
      case 3:
        document.getElementById('two-worlds')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  const actionLabels = [
    { te: 'ఆడిషన్ చూడండి ▶', en: 'Watch Audition ▶', icon: Play },
    { te: 'ఛానెల్ సందర్శించండి ↗', en: 'Visit Channel ↗', icon: ExternalLink },
    { te: 'ప్రొఫైల్ చూడండి ↗', en: 'Visit Profile ↗', icon: ExternalLink },
    { te: 'సైనిక సేవ విశేషాలు ⚔', en: 'Duty Unto Death ⚔', icon: ShieldAlert },
  ];

  const cardRanks = [
    { rank: 'A', suit: '★' },
    { rank: 'K', suit: '▶' },
    { rank: 'Q', suit: '✦' },
    { rank: 'J', suit: '⚔' },
  ];

  // Verified Details & Links for the Back of each card
  const cardBackData = [
    {
      title: { te: 'ఆహా తెలుగు ఇండియన్ ఐడల్ టాప్ 7', en: 'Aha Telugu Indian Idol Top 7' },
      detail: {
        te: 'ఎస్.ఎస్. థమన్, కార్తీక్, గీతా మాధురి వంటి దిగ్గజాల లేచి నిలబడి చేసిన గౌరవ వందనం. వేలాది మంది నుండి ఎంపికై టాప్ 7 గా నిలిచారు.',
        en: 'Standing ovation & salute from SS Thaman, Karthik & Geetha Madhuri on Aha TV, reaching Top 7 finalists nationwide.',
      },
      articleLabel: { te: 'సాక్షి కథనం చదవండి ↗', en: 'Read Sakshi Feature ↗' },
      articleUrl: 'https://www.sakshi.com/telugu-news/family/chakrapani-nagari-bsf-jawan-indian-idol-participant-chakrapani-special-story',
    },
    {
      title: { te: '127K+ సిల్వర్ క్రియేటర్ రికగ్నిషన్', en: '127K+ YouTube Silver Creator' },
      detail: {
        te: 'వైరల్ బోర్డర్ గీతం మరియు 230+ వీడియో అప్‌లోడ్స్. ఇండియా టుడే, ఆజ్ తక్ వంటి జాతీయ మీడియాలో విశేష కథనాలు.',
        en: 'Official Silver Creator Award with over 230 uploads. Viral border performance spotlighted by major national media.',
      },
      articleLabel: { te: 'ఆజ్ తక్ కథనం ↗', en: 'Read Aaj Tak Article ↗' },
      articleUrl: 'https://www.aajtak.in/trending/story/bsf-soldier-sings-border-song-sandese-aate-hai-viral-true-owner-tstf-dskc-2440530-2026-01-16',
    },
    {
      title: { te: '305K+ బ్లూ టిక్ వెరిఫైడ్ ఖాతా', en: '305K+ Verified Blue-Tick' },
      detail: {
        te: 'బోర్డర్ పాటను చూసి బాలీవుడ్ హీరో వరుణ్ ధావన్ స్వయంగా ప్రశంసలు కురిపించారు. దేశవ్యాప్తంగా కోట్ల వీక్షణలు.',
        en: 'Bollywood star Varun Dhawan publicly praised his voice. Millions of impressions and verified public acclaim.',
      },
      articleLabel: { te: 'ఇండియా టుడే కథనం ↗', en: 'Read India Today Feature ↗' },
      articleUrl: 'https://www.indiatoday.in/trending-news/story/bsf-soldiers-soulful-ghar-kab-aaoge-from-border-2-rendition-is-viral-varun-dhawan-reacts-2851124-2026-01-13',
    },
    {
      title: { te: 'బోర్డర్ సెక్యూరిటీ ఫోర్స్ జవాన్', en: 'Border Security Force Jawan' },
      detail: {
        te: "దేశ అంతర్జాతీయ సరిహద్దుల్లో రాజీలేని కర్తవ్య నిష్ట. అధికారిక నినాదం: 'జీవితాంతం కర్తవ్య నిర్వహణ' (Duty Unto Death).",
        en: "Guarding India's international frontiers with unwavering dedication. Official BSF motto: Duty Unto Death.",
      },
      articleLabel: { te: 'సాక్షి ప్రత్యేక కథనం ↗', en: 'Read Special Story ↗' },
      articleUrl: 'https://www.sakshi.com/telugu-news/family/chakrapani-nagari-bsf-jawan-indian-idol-participant-chakrapani-special-story',
    },
  ];

  return (
    <section id="achievements" className="relative py-16 sm:py-24 bg-bg-primary overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-red/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-highlight text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-helvetica">
              <Award className="w-3.5 h-3.5" />
              <span>{t.sectionBadge}</span>
            </div>

            {/* Re-shuffle Deck Pill */}
            <button
              onClick={handleShuffleClick}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-[11px] sm:text-xs font-semibold font-helvetica transition-all cursor-pointer group/shuffle"
              title={isTelugu ? 'కార్డ్స్ రీ-షఫుల్ చేయండి' : 'Re-shuffle Playing Cards'}
            >
              <Shuffle className={`w-3 h-3 text-accent-highlight transition-transform duration-500 ${isShuffling ? 'rotate-180' : 'group-hover/shuffle:rotate-180'}`} />
              <span>{isTelugu ? 'కార్డ్స్ షఫుల్' : 'Shuffle Deck'}</span>
            </button>

            {/* Flip All Cards Toggle Pill */}
            <button
              onClick={flipAllCards}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-[11px] sm:text-xs font-semibold font-helvetica transition-all cursor-pointer"
              title={isTelugu ? 'అన్ని కార్డులు తిప్పండి' : 'Flip All Playing Cards'}
            >
              <RotateCcw className="w-3 h-3 text-accent-highlight" />
              <span>{isTelugu ? 'కార్డ్స్ ఫ్లిప్' : 'Flip Cards'}</span>
            </button>

            {/* Go to Media & Press Page Button */}
            {onNavigateToMedia && (
              <button
                onClick={onNavigateToMedia}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 hover:text-white text-[11px] sm:text-xs font-semibold font-helvetica transition-all cursor-pointer"
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>{isTelugu ? 'మీడియా వార్తలు & ఇంటర్వ్యూలు →' : 'Media & Interviews →'}</span>
              </button>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-helvetica font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-lg text-text-secondary font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Core Achievement 3D Flipping Playing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 relative">
          {t.items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isFlipped = !!flippedCards[idx];
            const ActionIcon = actionLabels[idx].icon;
            const backInfo = cardBackData[idx];

            return (
              <motion.div
                key={`${idx}-${shuffleKey}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={
                  isShuffling
                    ? {
                        x: [(idx - 1.5) * 35, (1.5 - idx) * 25, 0],
                        y: [-25, 12, 0],
                        rotateZ: [(idx - 1.5) * 6, -(idx - 1.5) * 3, 0],
                        scale: [0.95, 1.03, 1],
                      }
                    : { x: 0, y: 0, rotateZ: 0, scale: 1 }
                }
                transition={{
                  duration: isShuffling ? 0.75 : 0.5,
                  delay: isShuffling ? idx * 0.08 : idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateZ: (idx - 1.5) * 1.2,
                  transition: { duration: 0.25 },
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ perspective: 1200 }}
                className="relative select-none min-h-[350px] sm:min-h-[380px]"
              >
                {/* 3D Flipping Card Container */}
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => toggleCardFlip(idx)}
                  className="w-full h-full relative cursor-pointer"
                >
                  
                  {/* ========================================================
                      FRONT FACE: Luxury Collector Playing Card
                      ======================================================== */}
                  <div
                    style={{ backfaceVisibility: 'hidden' }}
                    className="w-full h-full p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#141414] border border-white/10 hover:border-white/35 transition-colors duration-300 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Playing Card Corner Pips (Top-Left) */}
                    <div className="absolute top-3.5 left-3.5 flex flex-col items-center leading-none text-[10px] font-black text-white/30 group-hover:text-accent-highlight transition-colors select-none font-helvetica pointer-events-none">
                      <span>{cardRanks[idx].rank}</span>
                      <span className="text-[9px] mt-0.5">{cardRanks[idx].suit}</span>
                    </div>

                    {/* Flip Card Badge (Top-Right) */}
                    <button
                      onClick={(e) => toggleCardFlip(idx, e)}
                      className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[10px] text-text-muted hover:text-white font-helvetica flex items-center gap-1 transition-colors"
                      title={isTelugu ? 'కార్డ్ తిప్పండి' : 'Flip card to read details'}
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>{isTelugu ? 'ఫ్లిప్' : 'Flip'}</span>
                    </button>

                    {/* Playing Card Corner Pips (Bottom-Right, Inverted) */}
                    <div className="absolute bottom-3.5 right-3.5 rotate-180 flex flex-col items-center leading-none text-[10px] font-black text-white/30 group-hover:text-accent-highlight transition-colors select-none font-helvetica pointer-events-none">
                      <span>{cardRanks[idx].rank}</span>
                      <span className="text-[9px] mt-0.5">{cardRanks[idx].suit}</span>
                    </div>

                    {/* Spotlight Glow */}
                    <div
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                        idx === 0
                          ? 'bg-amber-500/20 group-hover:opacity-100 opacity-40'
                          : idx === 1
                          ? 'bg-red-600/20 group-hover:opacity-100 opacity-40'
                          : idx === 2
                          ? 'bg-pink-600/20 group-hover:opacity-100 opacity-40'
                          : 'bg-emerald-600/20 group-hover:opacity-100 opacity-40'
                      }`}
                    />

                    {/* Interactive Logo Area */}
                    <div className="mb-4 mt-2">
                      {idx === 0 && <IdolInteractiveLogo isHovered={isHovered} />}
                      {idx === 1 && <YouTubeInteractiveLogo isHovered={isHovered} />}
                      {idx === 2 && <InstagramInteractiveLogo isHovered={isHovered} />}
                      {idx === 3 && <BSFInteractiveLogo isHovered={isHovered} />}
                    </div>

                    {/* Numbers and Labels (Helvetica Neue) */}
                    <div className="space-y-1.5 my-2">
                      <span className="text-3xl sm:text-4xl font-helvetica font-black text-white block tracking-tight">
                        {item.num}
                      </span>
                      <span className="text-xs font-helvetica font-bold uppercase tracking-wider text-accent-highlight block">
                        {item.label}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                      {item.desc}
                    </p>

                    {/* Interactive Call-To-Action Pill */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => handleActionClick(idx, e)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-helvetica font-semibold transition-all duration-300 border ${
                          isHovered
                            ? 'bg-white text-black border-white'
                            : 'bg-white/5 text-neutral-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span>{isTelugu ? actionLabels[idx].te : actionLabels[idx].en}</span>
                        <ActionIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* ========================================================
                      BACK FACE: Luxury Playing Card Reverse Side with Verified Press
                      ======================================================== */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    className="w-full h-full p-6 rounded-3xl bg-gradient-to-br from-[#1a080b] via-[#100709] to-[#080808] border border-accent-highlight/40 shadow-2xl flex flex-col justify-between absolute inset-0 overflow-hidden"
                  >
                    {/* Luxury Card Back Geometric Border */}
                    <div className="absolute inset-2 rounded-2xl border border-accent-highlight/20 pointer-events-none" />

                    {/* Corner Pips on Back (Gold) */}
                    <div className="absolute top-3.5 left-3.5 flex flex-col items-center leading-none text-[10px] font-black text-amber-400/50 font-helvetica select-none pointer-events-none">
                      <span>{cardRanks[idx].rank}</span>
                      <span className="text-[9px] mt-0.5">{cardRanks[idx].suit}</span>
                    </div>
                    <div className="absolute bottom-3.5 right-3.5 rotate-180 flex flex-col items-center leading-none text-[10px] font-black text-amber-400/50 font-helvetica select-none pointer-events-none">
                      <span>{cardRanks[idx].rank}</span>
                      <span className="text-[9px] mt-0.5">{cardRanks[idx].suit}</span>
                    </div>

                    {/* Top Tag & Flip Back Button */}
                    <div className="flex items-center justify-between z-10 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-highlight font-helvetica">
                        ★ {isTelugu ? 'ధృవీకరించబడిన మైలురాయి' : 'Verified Honor'}
                      </span>
                      <button
                        onClick={(e) => toggleCardFlip(idx, e)}
                        className="px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[10px] text-white font-helvetica flex items-center gap-1 transition-colors"
                        title={isTelugu ? 'ముందు వైపుకి తిప్పండి' : 'Flip to front'}
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span>{isTelugu ? 'ముందుకు' : 'Front'}</span>
                      </button>
                    </div>

                    {/* Center Details */}
                    <div className="my-auto space-y-3 z-10 text-center px-1">
                      <div className="w-10 h-10 rounded-full bg-accent-red/20 border border-accent-highlight/40 flex items-center justify-center mx-auto text-accent-highlight">
                        <Sparkles className="w-5 h-5" />
                      </div>

                      <h4 className="text-sm sm:text-base font-helvetica font-bold text-white leading-snug">
                        {backInfo.title[language]}
                      </h4>

                      <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                        {backInfo.detail[language]}
                      </p>
                    </div>

                    {/* Bottom Link to Press Article (Direct Redirect) */}
                    <div className="pt-2 z-10 text-center">
                      <a
                        href={backInfo.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-red hover:bg-accent-highlight text-white text-[11px] font-semibold font-helvetica transition-colors shadow-md w-full"
                      >
                        <span>{backInfo.articleLabel[language]}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Card: Standing Ovation & Proof from Masters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-bg-card via-black to-[#1c080b] border border-accent-highlight/30 p-5 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-accent-red/20">
            <Star className="w-32 h-32" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-red/20 border border-accent-red/40 text-accent-highlight text-xs sm:text-sm font-bold uppercase tracking-wider font-helvetica">
                <Sparkles className="w-4 h-4" />
                <span>{t.standingOvationTitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-helvetica font-bold text-white leading-snug">
                {isTelugu
                  ? 'సరిహద్దు సైనికుడి గానానికి న్యాయనిర్ణేతల లేచి నిలబడి చేసిన వందనం'
                  : 'Standing Ovation and Military Salute from Esteemed Music Titans'}
              </h3>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
                {t.standingOvationDesc}
              </p>

              {/* Master names */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  'S.S. Thaman',
                  'Karthik',
                  'Geetha Madhuri',
                  'Nandamuri Balakrishna',
                  'S.P. Charan',
                ].map((name, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-helvetica bg-white/5 border border-white/15 text-neutral-200 hover:border-accent-highlight/40 transition-colors"
                  >
                    ★ {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-w-sm group">
                <img
                  src="/images/thaman_applause.jpg"
                  alt="Composer Thaman Applauds Chakrapani"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-black/85 backdrop-blur-md text-xs sm:text-sm text-white text-center font-medium font-helvetica">
                  {isTelugu ? 'ఎస్.ఎస్. థమన్ చప్పట్లతో సత్కారం' : 'Maestro Thaman Standing Ovation'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};