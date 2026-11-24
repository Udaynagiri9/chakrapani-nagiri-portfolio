export interface JourneyMilestone {
  id: string;
  year: string;
  title: { te: string; en: string };
  location: { te: string; en: string };
  desc: { te: string; en: string };
  image: string;
  tag: { te: string; en: string };
}

export interface SongItem {
  id: string;
  title: { te: string; en: string };
  category: 'melody' | 'folk' | 'patriotic' | 'devotional' | 'album';
  duration: string;
  youtubeId?: string;
  youtubeUrl: string;
  audioUrl?: string;
  videoUrl?: string;
  thumbnail: string;
  composer?: { te: string; en: string };
  description: { te: string; en: string };
}

export interface PerformanceItem {
  id: string;
  title: { te: string; en: string };
  subtitle: { te: string; en: string };
  event: { te: string; en: string };
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  localVideo?: string;
  description: { te: string; en: string };
}

export interface GalleryPhoto {
  id: string;
  title: { te: string; en: string };
  category: 'soldier' | 'stage' | 'idol' | 'personal';
  src: string;
  span?: string;
  caption: { te: string; en: string };
  objectPosition?: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "roots",
    year: "ప్రారంభం / Roots",
    title: {
      te: "శ్రీకాకుళం మట్టిలో సంగీత పరిమళం",
      en: "Musical Roots in Srikakulam Soil",
    },
    location: {
      te: "పొత్తంగి, మందస మండలం, శ్రీకాకుళం జిల్లా",
      en: "Pottangi, Mandasa Mandal, Srikakulam Dist, AP",
    },
    desc: {
      te: "ఆంధ్రప్రదేశ్ శ్రీకాకుళం జిల్లాలోని పొత్తంగి గ్రామంలో జన్మించిన చక్రపాణి, చిన్నతనం నుండే జానపద మరియు శాస్త్రీయ మెలోడీల పట్ల ప్రగాఢమైన ఆసక్తిని పెంచుకున్నారు. పల్లె వాతావరణం ఆయన గళానికి స్వచ్ఛతను ఇచ్చింది.",
      en: "Born in Pottangi village, Mandasa Mandal in Srikakulam, Chakrapani nurtured an innate love for folk melodies and timeless Telugu music, laying the foundation of his raw, soulful vocal texture.",
    },
    image: "/images/instagram_verified.png",
    tag: { te: "మూలాలు", en: "Origins" },
  },
  {
    id: "bsf-duty",
    year: "కర్తవ్యం / Duty",
    title: {
      te: "బోర్డర్ సెక్యూరిటీ ఫోర్స్ (BSF) లో ప్రవేశం",
      en: "Enlistment into the Border Security Force",
    },
    location: {
      te: "దేశ అంతర్జాతీయ సరిహద్దులు",
      en: "Indian Frontiers",
    },
    desc: {
      te: "కఠినమైన శిక్షణ పూర్తిచేసి దేశ సరిహద్దుల రక్షణ బాధ్యతను స్వీకరించారు. విధుల్లో అంకితభావం, దేశభక్తి ఆయన నిత్య జీవనంలో భాగమయ్యాయి.",
      en: "Underwent rigorous military training and stood guard at the nation's critical frontiers, embracing discipline, duty, and patriotism as the core of his life.",
    },
    image: "/images/bsf_camo_outdoor.jpg",
    tag: { te: "దేశ రక్షణ", en: "Military Service" },
  },
  {
    id: "riayaz-in-duty",
    year: "సాధన / Dedication",
    title: {
      te: "సెలవుల్లో, విశ్రాంతి సమయాల్లో స్వర సాధన",
      en: "Riyaz on Frontier Posts & Official Leaves",
    },
    location: {
      te: "బీఎస్ఎఫ్ క్యాంప్‌లు & సొంతూరు",
      en: "BSF Posts & Srikakulam",
    },
    desc: {
      te: "కఠిన సరిహద్దు విధుల అనంతరం లభించిన స్వల్ప విశ్రాంతి క్షణాలు, వార్షిక సెలవుల్లో కుటుంబంతో గడిపే సమయంలోనే పాటలు సాధన చేస్తూ సంగీత దాహాన్ని తీర్చుకున్నారు. ఎలాంటి ప్రొఫెషనల్ శిక్షణ లేకున్నా స్వతహాగా గళాన్ని తీర్చిదిద్దుకున్నారు.",
      en: "Practiced vocal scales during brief post-duty breaks and annual home leaves, developing his rich tone through sheer passion without formal academy training.",
    },
    image: "/images/stage_performance_2.jpg",
    tag: { te: "స్వర సాధన", en: "Self-Made" },
  },
  {
    id: "idol-audition",
    year: "2023",
    title: {
      te: "తెలుగు ఇండియన్ ఐడల్ సీజన్ 2 ఆడిషన్స్",
      en: "Telugu Indian Idol Season 2 Audition",
    },
    location: {
      te: "ఆహా (aha) వేదిక, హైదరాబాద్",
      en: "aha OTT Stage, Hyderabad",
    },
    desc: {
      te: "బీఎస్ఎఫ్ అధికారిక యూనిఫాంలో వేదికపైకి అడుగుపెట్టి గానం చేసిన చక్రపాణిని చూసి న్యాయనిర్ణేతలు ఎస్.ఎస్. థమన్, కార్తీక్, గీతా మాధురి లేచి నిలబడి గౌరవ వందనం సమర్పించారు.",
      en: "Stepped onto the prestigious aha Telugu Indian Idol stage in crisp BSF uniform; judges SS Thaman, Karthik, and Geetha Madhuri gave him a standing ovation and military salute.",
    },
    image: "/images/bsf_salute.jpg",
    tag: { te: "సంచలనం", en: "Historic Debut" },
  },
  {
    id: "top-7-milestone",
    year: "2023",
    title: {
      te: "టాప్ 7 ఫైనలిస్ట్‌గా తెలుగు ప్రేక్షకుల గుండెల్లో స్థానం",
      en: "Top 7 Finalist Milestone on National TV",
    },
    location: {
      te: "తెలుగు ఇండియన్ ఐడల్ S2",
      en: "aha Studios",
    },
    desc: {
      te: "ఎపిసోడ్ తర్వాత ఎపిసోడ్ అద్భుతమైన మెలోడీలు పాడుతూ టాప్ 7 స్థానం వరకు ప్రయాణించారు. నందమూరి బాలకృష్ణ, ఎస్.పి. చరణ్ వంటి ప్రముఖుల సమక్షంలో ప్రశంసలు అందుకున్నారు.",
      en: "Advanced through intense elimination rounds to reach the Top 7 of Telugu Indian Idol Season 2, receiving accolades from Telugu cinema legend Nandamuri Balakrishna and singer SP Charan.",
    },
    image: "/images/nbk_top12.jpg",
    tag: { te: "టాప్ 7 ఘనత", en: "Top 7 Finalist" },
  },
  {
    id: "live-performances",
    year: "2024 - 2026",
    title: {
      te: "ప్రత్యక్ష వేదికలు & సంగీత ప్రస్థానం",
      en: "Live Concerts & Ongoing Musical Journey",
    },
    location: {
      te: "ఆంధ్రప్రదేశ్ & తెలంగాణ వేదికలు",
      en: "National Stages & YouTube",
    },
    desc: {
      te: "శ్రీదేవి డ్రామా కంపెనీ (ETV) వంటి ప్రముఖ టీవీ షోల ప్రత్యక్ష ప్రదర్శనలు, రాష్ట్రవ్యాప్తంగా సంగీత విభావరిలు మరియు 100K+ యూట్యూబ్ మైలురాయితో దేశ సేవతో పాటు సంగీత ప్రయాణాన్ని విజయవంతంగా కొనసాగిస్తున్నారు.",
      en: "Performing on television shows like Sridevi Drama Company, headline stage concerts across Telugu states, and achieving 127K+ YouTube subscribers and 300K+ Instagram followers while proudly continuing BSF service.",
    },
    image: "/images/web_stage_performance_1.jpg",
    tag: { te: "ప్రస్తుతం", en: "Ongoing Era" },
  },
];

/* ==========================================================================
   Songs Data - From user's "audio songs" folder
   ========================================================================== */
export const songsData: SongItem[] = [
  {
    id: "nuvvu-nenu-iddaram",
    title: {
      te: "నువ్వు నేను ఇద్దరం (సీమంతం పాట 2026)",
      en: "Nuvvu Nenu Iddaram (Seemantham Song 2026)",
    },
    category: "folk",
    duration: "4:23",
    youtubeId: "X6vSW0pewco",
    youtubeUrl: "https://youtu.be/X6vSW0pewco?si=ySSN-IHig2DpaBP0",
    audioUrl: "/audio/nuvvu_nenu_iddaram.mp3",
    videoUrl: "https://youtu.be/X6vSW0pewco?si=ySSN-IHig2DpaBP0",
    thumbnail: "/images/thumb_nuvvu_nenu.jpg",
    composer: {
      te: "గానం: చక్రపాణి నాగిరి & అనిత నాగరాజు",
      en: "Vocals: Chakrapani Nagiri & Anitha Nagaraju",
    },
    description: {
      te: "శ్రీకాకుళం సంప్రదాయ వేడుకల నేపథ్యంతో చక్రపాణి నాగిరి మరియు అనిత నాగరాజు ఆలపించిన అధికారిక సీమంతం గీతం.",
      en: "Official Seemantham festive release 2026 featuring heartfelt melodic vocals by Chakrapani Nagiri & Anitha Nagaraju.",
    },
  },
  {
    id: "jaamu-raatiri",
    title: {
      te: "జాము రాతిరి (ఆలాపన)",
      en: "Jaamu Raatiri (Unplugged Soul Melody)",
    },
    category: "melody",
    duration: "1:04",
    youtubeId: "x-lm3eTXHB4",
    youtubeUrl: "https://youtube.com/shorts/x-lm3eTXHB4?si=SJLbN1cp2xc4S2Fw",
    audioUrl: "/audio/jaamu_raatiri.mp3",
    videoUrl: "https://youtube.com/shorts/x-lm3eTXHB4?si=SJLbN1cp2xc4S2Fw",
    thumbnail: "/images/thumb_jaamu_raatiri.jpg",
    composer: {
      te: "గానం: చక్రపాణి నాగిరి (ఎస్పీబీ స్మృతి)",
      en: "Vocals: Chakrapani Nagiri (SPB Tribute)",
    },
    description: {
      te: "గాన గంధర్వుడు ఎస్పీ బాలసుబ్రహ్మణ్యం గారి సుమధుర క్లాసిక్ గీతాన్ని తన స్వచ్ఛమైన గళంతో ఆలపించిన అద్భుత మెలోడీ.",
      en: "Soulful melodious tribute to Dr. S.P. Balasubrahmanyam, rendered with natural raw emotion and acoustic texture by Chakrapani Nagiri.",
    },
  },
  {
    id: "telusa-manasa",
    title: {
      te: "తెలుసా మనసా (ఎస్పీబీ స్మృతి గీతం)",
      en: "Telusa Manasa (Soulful Tribute Cover)",
    },
    category: "melody",
    duration: "5:06",
    youtubeId: "SdnRHoFCW9g",
    youtubeUrl: "https://youtu.be/SdnRHoFCW9g?si=RKiFm2ZFnCrbfunT",
    audioUrl: "/audio/telusa_manasa.mp3",
    videoUrl: "https://youtu.be/SdnRHoFCW9g?si=RKiFm2ZFnCrbfunT",
    thumbnail: "/images/thumb_telusa_manasa.jpg",
    composer: {
      te: "గానం: చక్రపాణి నాగిరి",
      en: "Vocals: Chakrapani Nagiri",
    },
    description: {
      te: "ఎవర్ గ్రీన్ రొమాంటిక్ మెలోడీ 'తెలుసా మనసా'కు చక్రపాణి నాగిరి ప్రాణం పోస్తూ ఆలపించిన పూర్తి నిడివి గల భావోద్వేగ స్వర సమర్పణ.",
      en: "Full-length emotional tribute cover to the legendary romantic melody Telusa Manasa, showcasing his high vocal range and expressive depth.",
    },
  },
];

/* ==========================================================================
   Performances Data - "Official Video Releases" (Connected via YouTube)
   ========================================================================== */
export const performancesData: PerformanceItem[] = [
  {
    id: "video-nuvvu-nenu",
    title: {
      te: "నువ్వు నేను ఇద్దరం (అధికారిక సీమంతం వీడియో 2026)",
      en: "Nuvvu Nenu Iddaram (Official Seemantham Video 2026)",
    },
    subtitle: {
      te: "గానం: చక్రపాణి నాగిరి & అనిత నాగరాజు",
      en: "Vocals: Chakrapani Nagiri & Anitha Nagaraju",
    },
    event: {
      te: "సొంత వీడియో పాట",
      en: "Official Video Release",
    },
    thumbnail: "/images/thumb_nuvvu_nenu.jpg",
    youtubeId: "X6vSW0pewco",
    videoUrl: "https://youtu.be/X6vSW0pewco?si=ySSN-IHig2DpaBP0",
    description: {
      te: "చక్రపాణి నాగిరి మరియు అనిత నాగరాజు గానంలో విడుదలైన అధికారిక సీమంతం గీతం వీడియో దృశ్యాలు.",
      en: "Full official music video for Seemantham Song 2026 featuring Chakrapani Nagiri & Anitha Nagaraju.",
    },
  },
  {
    id: "video-jaamu-raatiri",
    title: {
      te: "జాము రాతిరి (ప్రత్యేక మెలోడీ వీడియో)",
      en: "Jaamu Raatiri (Special Melody Video)",
    },
    subtitle: {
      te: "ఎస్పీబీ గారి క్లాసిక్ మెలోడీ ఆలాపన",
      en: "Soulful SPB Tribute by Chakrapani",
    },
    event: {
      te: "సొంత మెలోడీ వీడియో",
      en: "Melody Video Single",
    },
    thumbnail: "/images/thumb_jaamu_raatiri.jpg",
    youtubeId: "x-lm3eTXHB4",
    videoUrl: "https://youtube.com/shorts/x-lm3eTXHB4?si=SJLbN1cp2xc4S2Fw",
    description: {
      te: "ఎవర్ గ్రీన్ క్లాసిక్ జాము రాతిరి గీతాన్ని చక్రపాణి నాగిరి పాడిన ప్రత్యేక హై-డెఫినిషన్ వీడియో దృశ్యాలు.",
      en: "Chakrapani's enchanting rendition of Jaamu Raatiri captured in high-definition video.",
    },
  },
  {
    id: "video-telusa-manasa",
    title: {
      te: "తెలుసా మనసా (ఫుల్ కవర్ సాంగ్ వీడియో)",
      en: "Telusa Manasa (Full Cover Music Video)",
    },
    subtitle: {
      te: "ఎస్పీ బాలసుబ్రహ్మణ్యం గారి స్మృతి గీతం",
      en: "SP Balasubrahmanyam Tribute Cover",
    },
    event: {
      te: "సొంత కవర్ వీడియో",
      en: "Official Cover Video",
    },
    thumbnail: "/images/thumb_telusa_manasa.jpg",
    youtubeId: "SdnRHoFCW9g",
    videoUrl: "https://youtu.be/SdnRHoFCW9g?si=RKiFm2ZFnCrbfunT",
    description: {
      te: "కాలాతీత ప్రేమగీతం 'తెలుసా మనసా'ను చక్రపాణి నాగిరి పూర్తి నిడివితో పాడిన అధికారిక కవర్ వీడియో.",
      en: "Soul-stirring full cover music video of the classic Telugu melody Telusa Manasa.",
    },
  },
  {
    id: "video-sridevi-drama-company",
    title: {
      te: "శ్రీదేవి డ్రామా కంపెనీ ప్రత్యక్ష గానం (ETV Telugu)",
      en: "Sridevi Drama Company Live Performance (ETV Telugu)",
    },
    subtitle: {
      te: "ఈటీవీ శ్రీదేవి డ్రామా కంపెనీ ప్రత్యేక వేదిక",
      en: "Special Stage on ETV Sridevi Drama Company",
    },
    event: {
      te: "టీవీ ప్రత్యక్ష వేదిక",
      en: "Television Live Stage",
    },
    thumbnail: "/images/thumb_sridevi_drama_company.jpg",
    youtubeId: "lw9Mm7RqMu0",
    videoUrl: "https://youtu.be/lw9Mm7RqMu0?si=jqaV_FFkzkn4HBYH",
    description: {
      te: "ఈటీవీ శ్రీదేవి డ్రామా కంపెనీ వేదికపై రష్మి గౌతమ్ మరియు ప్రేక్షకుల హర్షధ్వానాల నడుమ చక్రపాణి నాగిరి గానం చేసిన చిరస్మరణీయ ప్రదర్శన.",
      en: "Electrifying live singing appearance by Chakrapani Nagiri on ETV's flagship Sridevi Drama Company before television audiences.",
    },
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-bsf-camo",
    title: { te: "బీఎస్ఎఫ్ సైనికుడిగా చక్రపాణి", en: "BSF Soldier Chakrapani Nagiri" },
    category: "soldier",
    src: "/images/bsf_camo_outdoor.jpg",
    span: "col-span-1 row-span-2",
    objectPosition: "object-top",
    caption: {
      te: "బోర్డర్ సెక్యూరిటీ ఫోర్స్ (BSF) కామో యూనిఫాంలో గర్వంగా నిలిచిన చక్రపాణి నాగిరి.",
      en: "BSF Jawan Chakrapani Nagiri standing tall and proud in full military camouflage uniform.",
    },
  },
  {
    id: "gal-bsf-stage",
    title: { te: "సైనిక దుస్తుల్లో స్వర ఝరి", en: "Singing in BSF Uniform" },
    category: "soldier",
    src: "/images/bsf_stage_uniform.jpg",
    span: "col-span-1 row-span-2",
    objectPosition: "object-top",
    caption: {
      te: "సైనిక యూనిఫాంలో స్వర్ణ మైక్ పట్టి వేదికపై భక్తిభావంతో గానం చేస్తున్న అపురూప దృశ్యం.",
      en: "Singing passionately on stage with the golden microphone while proudly donning the BSF uniform.",
    },
  },
  {
    id: "gal-1",
    title: { te: "దేశ సరిహద్దుల్లో సైనికుడు", en: "Guarding National Frontiers" },
    category: "soldier",
    src: "/images/soldier_portrait_cinematic.jpg",
    span: "col-span-1 row-span-2",
    caption: {
      te: "బోర్డర్ సెక్యూరిటీ ఫోర్స్ (BSF) యూనిఫాంలో గర్వంగా చక్రపాణి నాగిరి.",
      en: "Chakrapani Nagiri in crisp Border Security Force uniform, standing tall for the motherland.",
    },
  },
  {
    id: "gal-2",
    title: { te: "వేదికపై స్వర ఝరి", en: "Live Stage Passion" },
    category: "stage",
    src: "/images/web_stage_performance_1.jpg",
    span: "col-span-1 row-span-1",
    caption: {
      te: "వేలాది మంది ప్రేక్షకుల సమక్షంలో మైక్ పట్టుకుని పాడుతున్న దృశ్యం.",
      en: "Holding the microphone and captivating audiences with pure melodic resonance.",
    },
  },
  {
    id: "gal-3",
    title: { te: "ఇండియన్ ఐడల్ ప్రవేశం", en: "Telugu Indian Idol Entry" },
    category: "idol",
    src: "/images/bsf_salute.jpg",
    span: "col-span-1 row-span-2",
    caption: {
      te: "ఆహా ఇండియన్ ఐడల్ 2 వేదికపై సైనిక వందనం సమర్పిస్తున్న క్షణం.",
      en: "The historic salute on the Aha TV Indian Idol Season 2 stage.",
    },
  },
  {
    id: "gal-4",
    title: { te: "నటసింహం బాలకృష్ణ ఆశీస్సులు", en: "Blessings from Nandamuri Balakrishna" },
    category: "idol",
    src: "/images/balakrishna_special.jpg",
    span: "col-span-1 row-span-1",
    caption: {
      te: "నందమూరి బాలకృష్ణ గారి నుండి ప్రశంసలు మరియు సత్కారం అందుకుంటున్న క్షణం.",
      en: "Special moment on stage with superstar Nandamuri Balakrishna.",
    },
  },
  {
    id: "gal-5",
    title: { te: "ఎస్.ఎస్. థమన్ చప్పట్లు", en: "Composer Thaman Applauds" },
    category: "idol",
    src: "/images/thaman_applause.jpg",
    span: "col-span-1 row-span-1",
    caption: {
      te: "సంగీత దర్శకుడు థమన్ నిలబడి చప్పట్లు కొడుతూ అభినందించిన దృశ్యం.",
      en: "Music Director SS Thaman standing up to applaud the BSF jawan's pure singing.",
    },
  },
  {
    id: "gal-6",
    title: { te: "సంగీత రసజ్ఞుల సమ్మేళనం", en: "Musical Celebration" },
    category: "stage",
    src: "/images/web_stage_performance_2.jpg",
    span: "col-span-1 row-span-1",
    caption: {
      te: "వేదికపై హృద్యంగా గానం చేస్తున్న చక్రపాణి నాగిరి.",
      en: "Delivering a heartfelt Telugu melody on a brightly lit concert stage.",
    },
  },
];
