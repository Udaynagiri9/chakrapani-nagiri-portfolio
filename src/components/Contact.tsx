import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Mail, MapPin, Instagram, Youtube, Send, CheckCircle2, Shield, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language].contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: t.form.purposeOptions[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = 'chakrapaninagiri@gmail.com';
    const emailSubject = encodeURIComponent(
      `[Portfolio Enquiry] ${formState.purpose} - ${formState.name}`
    );
    const emailBody = encodeURIComponent(
      `Dear Chakrapani Nagiri & Team,\n\n` +
      `You have received a new performance booking / enquiry message from your portfolio website:\n\n` +
      `• Name: ${formState.name}\n` +
      `• Email: ${formState.email}\n` +
      `• Phone: ${formState.phone || 'Not provided'}\n` +
      `• Event Type / Purpose: ${formState.purpose}\n\n` +
      `--------------------------------------------------\n` +
      `Message Details:\n${formState.message}\n` +
      `--------------------------------------------------\n\n` +
      `Sent via: Chakrapani Nagiri Official Portfolio`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Directly launch user's email client to send to chakrapaninagiri@gmail.com
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-secondary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase font-helvetica">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serifDisplay font-bold text-white">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Info & Hometown Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Main Info Card */}
            <div className="p-8 rounded-3xl bg-bg-card border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-helvetica">
                  {isTelugu ? 'ప్రత్యక్ష సంప్రదింపులు' : 'Direct Enquiries'}
                </span>
                <h3
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  className="text-xl font-helvetica font-bold text-white uppercase tracking-wider"
                >
                  {isTelugu ? 'చక్రపాణి నాగిరి' : 'CHAKRAPANI NAGIRI'}
                </h3>
                <p className="text-xs text-text-secondary font-helvetica">
                  BSF Soldier & Vocal Artist
                </p>
              </div>

              {/* Verified Email Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300 uppercase tracking-wider font-helvetica">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>{t.officialEmail}</span>
                </div>
                <a
                  href="mailto:chakrapaninagiri@gmail.com"
                  className="text-base sm:text-lg font-bold text-white hover:text-neutral-200 transition-colors block break-all font-helvetica"
                >
                  chakrapaninagiri@gmail.com
                </a>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {isTelugu
                    ? 'కార్యక్రమాలు & అధికారిక సమాచారం కోసం నేరుగా మెయిల్ చేయవచ్చు'
                    : 'Direct inbox for performances, media and cultural invitations'}
                </p>
              </div>

              {/* Verified Hometown Details */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 font-helvetica">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>{t.hometown}</span>
                </div>
                <p className="text-sm font-medium text-white/95 leading-relaxed">
                  {t.hometownFull}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm text-neutral-400">
                  <Shield className="w-4 h-4 text-neutral-400" />
                  <span>{isTelugu ? 'ఆంధ్రప్రదేశ్ - శ్రీకాకుళం జిల్లా' : 'Srikakulam District, Andhra Pradesh'}</span>
                </div>
              </div>

              {/* Social Quick Buttons (NO GLOW) */}
              <div className="pt-2 flex items-center gap-3 font-helvetica">
                <a
                  href="https://www.instagram.com/chakrapani_soldier_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-white" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://youtube.com/@chakrapaninagiri3874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Youtube className="w-4 h-4 text-white" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Note regarding military duty */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-neutral-300 leading-relaxed">
              <span className="font-semibold text-white">
                {isTelugu ? 'గమనిక:' : 'Please Note:'}
              </span>{' '}
              {isTelugu
                ? 'చక్రపాణి నాగిరి గారు BSF విధుల్లో ఉంటారు కావున, ఆయన సెలవుల లభ్యత ఆధారంగా సంగీత కార్యక్రమాలకు హాజరవుతారు.'
                : 'As an active BSF soldier guarding the nation, live stage bookings and appearances are scheduled in alignment with his official military leave availability.'}
            </div>
          </motion.div>

          {/* Right Column: Performance Booking Form (NO BUTTON GLOWS) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-bg-card border border-white/10 shadow-2xl relative overflow-hidden font-helvetica">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serifDisplay font-bold text-white">
                    {t.form.successTitle}
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    {isTelugu
                      ? 'మీ సందేశం chakrapaninagiri@gmail.com కు పంపడానికి సిద్ధం చేయబడింది. చక్రపాణి నాగిరి బృందం త్వరలోనే పరిశీలిస్తుంది.'
                      : 'Your message has been addressed directly to chakrapaninagiri@gmail.com. Chakrapani Nagiri’s team will review it shortly.'}
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:chakrapaninagiri@gmail.com?subject=${encodeURIComponent('[Portfolio Enquiry] ' + formState.purpose)}&body=${encodeURIComponent(formState.message)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>chakrapaninagiri@gmail.com</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          phone: '',
                          purpose: t.form.purposeOptions[0],
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      {isTelugu ? 'మరొక సందేశం పంపండి' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white">
                      {isTelugu ? 'ప్రదర్శన సమాచార ఫారమ్' : 'Performance Booking & Enquiry'}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      {isTelugu
                        ? 'సంగీత కార్యక్రమాలు లేదా అభినందన సందేశం కోసం ఫారమ్‌ను పూరించండి.'
                        : 'Submit event details or an appreciation message directly to the team.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary">
                        {t.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={isTelugu ? 'మీ పూర్తి పేరు' : 'John Doe'}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 outline-none text-white text-sm transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary">
                        {t.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 outline-none text-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary">
                        {t.form.phone}
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 outline-none text-white text-sm transition-all"
                      />
                    </div>

                    {/* Purpose Selector with Custom Styled Dropdown Chevron */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary">
                        {t.form.purpose}
                      </label>
                      <div className="relative">
                        <select
                          value={formState.purpose}
                          onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-neutral-900 border border-white/10 focus:border-white/40 outline-none text-white text-sm transition-all cursor-pointer appearance-none"
                        >
                          {t.form.purposeOptions.map((opt, i) => (
                            <option key={i} value={opt} className="bg-neutral-900 text-white py-2">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-secondary">
                      {t.form.message} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={
                        isTelugu
                          ? 'కార్యక్రమ తేదీ, వేదిక మరియు వివరాలను ఇక్కడ రాయండి...'
                          : 'Provide event details, date, location or your message here...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 outline-none text-white text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-black bg-white hover:bg-neutral-200 border border-white transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 group font-helvetica shadow-lg"
                  >
                    <span>{isSubmitting ? t.form.sending : t.form.send}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
