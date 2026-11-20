import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Instagram, Youtube, Mail, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'media', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate('home', sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info with HELVETICA NEUE */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-white/20 overflow-hidden shrink-0 shadow-md bg-black">
                <img
                  src="/images/logo_avatar.jpg"
                  alt="Chakrapani Nagiri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  className="font-helvetica font-bold text-xl text-white uppercase tracking-wider"
                >
                  {isTelugu ? 'చక్రపాణి నాగిరి' : 'CHAKRAPANI NAGIRI'}
                </h3>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-helvetica">
                  BSF Soldier • Vocal Artist
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              "{t.tagline}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/chakrapani_soldier_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/@chakrapaninagiri3874"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="mailto:chakrapaninagiri@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3 font-helvetica">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-highlight">
              {isTelugu ? 'ముఖ్యమైన విభాగాలు' : 'Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
              <button onClick={() => handleNav('home')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'హోమ్' : 'Home'}
              </button>
              <button onClick={() => handleNav('about')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'గురించి' : 'About'}
              </button>
              <button onClick={() => handleNav('two-worlds')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'రెండు ప్రపంచాలు' : 'Two Worlds'}
              </button>
              <button onClick={() => handleNav('journey')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'ప్రస్థానం' : 'Journey'}
              </button>
              <button onClick={() => handleNav('music')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'సంగీతం' : 'Music'}
              </button>
              <button onClick={() => handleNav('performances')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'వేదికలు' : 'Performances'}
              </button>
              <button onClick={() => handleNav('achievements')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'విజయాలు' : 'Achievements'}
              </button>
              <button onClick={() => handleNav('gallery')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'గ్యాలరీ' : 'Gallery'}
              </button>
              <button onClick={() => onNavigate ? onNavigate('media') : null} className="text-left text-accent-highlight hover:text-white transition-colors py-1 cursor-pointer font-semibold">
                {isTelugu ? 'మీడియా వార్తలు ★' : 'Media & Press ★'}
              </button>
              <button onClick={() => handleNav('contact')} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
                {isTelugu ? 'సంప్రదించండి' : 'Contact'}
              </button>
            </div>
          </div>

          {/* Hometown & Duty Badge */}
          <div className="md:col-span-3 space-y-3 font-helvetica">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              {isTelugu ? 'జన్మభూమి & సైనిక విభాగం' : 'Roots & Regard'}
            </h4>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1 text-xs text-text-secondary">
              <p className="font-semibold text-white">
                Pottangi (Pothangi) Village
              </p>
              <p>Mandasa Mandal, Srikakulam</p>
              <p>Andhra Pradesh - 532264</p>
              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-accent-highlight font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>Border Security Force</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Clean Credit & Navigation) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-text-muted font-helvetica text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {isTelugu ? 'చక్రపాణి నాగిరి' : 'CHAKRAPANI NAGIRI'}. {t.rights}
          </p>

          {/* Designed & Developed by Uday Nagiri Credit */}
          <div className="flex items-center gap-1.5 text-neutral-300">
            <span>{isTelugu ? 'రూపకల్పన & అభివృద్ధి:' : 'Designed & Developed by'}</span>
            <a
              href="https://udaynagiri.netmaxin.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent-highlight hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer underline decoration-accent-highlight/40 hover:decoration-white"
            >
              <span>Uday Nagiri</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors border border-white/10 cursor-pointer"
          >
            <span>{isTelugu ? 'పైకి వెళ్ళండి' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
