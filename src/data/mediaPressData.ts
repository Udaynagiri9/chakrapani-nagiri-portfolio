export interface NewsArticleItem {
  id: string;
  source: string;
  sourceLogo?: string;
  sourceBadgeColor: string;
  title: { te: string; en: string };
  date: string;
  url: string;
  highlight?: { te: string; en: string };
  summary: { te: string; en: string };
  readTime?: string;
}

export interface InterviewVideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: { te: string; en: string };
  channel: string;
  description: { te: string; en: string };
  duration: string;
  thumbnail: string;
}

export const newsArticlesData: NewsArticleItem[] = [
  {
    id: "india-today-border2",
    source: "India Today",
    sourceBadgeColor: "bg-red-600/20 text-red-400 border-red-500/30",
    title: {
      te: "బీఎస్ఎఫ్ జవాన్ చక్రపాణి గానం వైరల్ - స్పందించిన బాలీవుడ్ హీరో వరుణ్ ధావన్",
      en: "BSF Soldier's Soulful 'Ghar Kab Aaoge' from Border 2 Goes Viral; Varun Dhawan Reacts",
    },
    date: "13 Jan 2026",
    url: "https://www.indiatoday.in/trending-news/story/bsf-soldiers-soulful-ghar-kab-aaoge-from-border-2-rendition-is-viral-varun-dhawan-reacts-2851124-2026-01-13",
    highlight: {
      te: "బాలీవుడ్ స్టార్ వరుణ్ ధావన్ ప్రశంసలు",
      en: "Bollywood Star Varun Dhawan Reacted",
    },
    summary: {
      te: "సరిహద్దుల్లో విధులు నిర్వహిస్తూ చక్రపాణి పాడిన బోర్డర్ 2 గీతం దేశవ్యాప్తంగా ట్రెండ్ అయింది. బాలీవుడ్ స్టార్ నటుడు వరుణ్ ధావన్ దీనిపై ప్రత్యేకంగా స్పందిస్తూ ప్రశంసల వర్షం కురిపించారు.",
      en: "Chakrapani's emotive singing of the iconic Border anthem resonated across the country, prompting Bollywood star Varun Dhawan to publicly praise his raw talent and dedication.",
    },
    readTime: "3 min read",
  },
  {
    id: "sakshi-special-story",
    source: "Sakshi",
    sourceBadgeColor: "bg-orange-600/20 text-orange-400 border-orange-500/30",
    title: {
      te: "చక్రపాణి నాగిరి: సరిహద్దు జవాన్.. ఇండియన్ ఐడల్ గాయకుడు (ప్రత్యేక కథనం)",
      en: "Chakrapani Nagiri: BSF Jawan & Telugu Indian Idol Singer (Exclusive Special Story)",
    },
    date: "Sakshi Family",
    url: "https://www.sakshi.com/telugu-news/family/chakrapani-nagari-bsf-jawan-indian-idol-participant-chakrapani-special-story",
    highlight: {
      te: "సాక్షి దినపత్రిక ప్రత్యేక కథనం",
      en: "Sakshi Main Editorial Feature",
    },
    summary: {
      te: "శ్రీకాకుళం జిల్లా పొత్తంగి గ్రామం నుండి బీఎస్ఎఫ్ సైనికుడిగా, అక్కడి నుండి ప్రముఖ ఆహా ఇండియన్ ఐడల్ వేదికపై టాప్ 7 వరకు ఎదిగిన చక్రపాణి స్ఫూర్తిదాయక జీవన ప్రయాణంపై సాక్షి ప్రత్యేక కథనం.",
      en: "A comprehensive human-interest story detailing his roots in Pottangi village, Mandasa Mandal, and his dual journey protecting India's borders while winning hearts across Telugu states.",
    },
    readTime: "5 min read",
  },
  {
    id: "aaj-tak-viral",
    source: "Aaj Tak",
    sourceBadgeColor: "bg-red-700/20 text-red-300 border-red-600/30",
    title: {
      te: "ఆజ్ తక్: సరిహద్దుల్లో 'సందేశే ఆతే హై' పాడిన సైనికుడు - నిజమైన గాయకుడిపై కథనం",
      en: "Aaj Tak: BSF Soldier Sings Border Song 'Sandese Aate Hai', Nation Stunned by Soulful Voice",
    },
    date: "16 Jan 2026",
    url: "https://www.aajtak.in/trending/story/bsf-soldier-sings-border-song-sandese-aate-hai-viral-true-owner-tstf-dskc-2440530-2026-01-16",
    highlight: {
      te: "జాతీయ మీడియాలో ట్రెండింగ్ వార్త",
      en: "National Hindi Media Spotlight",
    },
    summary: {
      te: "దేశ సరిహద్దులను కాపాడే బీఎస్ఎఫ్ జవాన్ చక్రపాణి గళం నుండి జాలువారిన దేశభక్తి గీతానికి యావత్ భారతదేశం ఫిదా అయిందని ప్రముఖ జాతీయ ఛానల్ ఆజ్ తక్ వెల్లడించింది.",
      en: "National news leader Aaj Tak highlighted Chakrapani Nagiri as the original soldier-singer whose soulful performance captured the patriotic heartbeat of the entire nation.",
    },
    readTime: "4 min read",
  },
  {
    id: "ndtv-emotional",
    source: "NDTV",
    sourceBadgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",
    title: {
      te: "ఎన్‌డీటీవీ: సైనికుడి భావోద్వేగ గానానికి దేశవ్యాప్త హృదయాలు పరవశం",
      en: "NDTV: BSF Soldier's Emotional Performance of 'Sandese Aate Hain' Wins Hearts",
    },
    date: "National Trend",
    url: "https://www.ndtv.com/offbeat/bsf-soldiers-emotional-performance-of-sandese-aate-hain-wins-hearts-10762838",
    highlight: {
      te: "కోట్ల మంది అభిమానుల ప్రశంసలు",
      en: "Millions Touched by Voice",
    },
    summary: {
      te: "కార్యక్షేత్రంలో అంకితభావంతో పనిచేసే సైనికుడి స్వచ్ఛమైన స్వరం సోషల్ మీడియాలో దావానలంలా వ్యాపించి కోట్లాది భారతీయులను భావోద్వేగానికి గురిచేసిందని ఎన్‌డీటీవీ పేర్కొంది.",
      en: "NDTV featured Chakrapani's viral video, noting how his earnest vocal delivery and military uniform moved citizens across all generations.",
    },
    readTime: "3 min read",
  },
  {
    id: "hindustan-times-dil-khush",
    source: "Hindustan Times",
    sourceBadgeColor: "bg-amber-600/20 text-amber-300 border-amber-500/30",
    title: {
      te: "హిందుస్థాన్ టైమ్స్: 'దిల్ ఖుష్ హో గయా' - ఇంటర్నెట్ ను ఉర్రూతలూగించిన సైనికుడి గానం",
      en: "Hindustan Times: 'Dil Khush Ho Gaya' — BSF Soldier's Soulful Rendition Goes Viral, Internet Reacts",
    },
    date: "Trending Feature",
    url: "https://www.hindustantimes.com/trending/bsf-soldier-s-soulful-sandese-aate-hai-rendition-goes-viral-internet-reacts-dil-khush-ho-gaya-101768384651822.html",
    highlight: {
      te: "హెచ్‌టీ ట్రెండింగ్ రిపోర్ట్",
      en: "HT Trending Viral Report",
    },
    summary: {
      te: "సరిహద్దు జవాన్ ప్రతిభకు నెటిజన్లు జేజేలు పలుకుతూ 'దిల్ ఖుష్ హో గయా' అంటూ కామెంట్ల వర్షం కురిపించారని హిందుస్థాన్ టైమ్స్ ప్రత్యేకంగా ప్రచురించింది.",
      en: "Hindustan Times documented the massive viral wave celebrating Chakrapani, with readers and netizens cheering his dual identity as soldier and artist.",
    },
    readTime: "4 min read",
  },
];

export const interviewVideosData: InterviewVideoItem[] = [
  {
    id: "interview-1",
    youtubeId: "4rKd2Wo3usg",
    youtubeUrl: "https://youtu.be/4rKd2Wo3usg?si=h0Pk9PCGIlma9iLE",
    title: {
      te: "చక్రపాణి నాగిరితో ప్రత్యేక ఇంటర్వ్యూ - సరిహద్దు అనుభవాలు & సంగీత ప్రయాణం",
      en: "Chakrapani Nagiri Exclusive Interview: Border Duty & Musical Triumphs",
    },
    channel: "Telugu Digital Media",
    description: {
      te: "బోర్డర్ సెక్యూరిటీ ఫోర్స్ (BSF) కఠిన శిక్షణ, సరిహద్దుల్లో విధులు, మరియు సంగీత సాధన గురించి చక్రపాణి నాగిరి మనసువిప్పి మాట్లాడిన పూర్తి ఇంటర్వ్యూ.",
      en: "An in-depth candid interview discussing his life in the Border Security Force, practicing vocals on remote posts, and rising to national stage acclaim.",
    },
    duration: "Exclusive Talk",
    thumbnail: "https://img.youtube.com/vi/4rKd2Wo3usg/hqdefault.jpg",
  },
  {
    id: "interview-2",
    youtubeId: "6qTOvypn_kc",
    youtubeUrl: "https://youtu.be/6qTOvypn_kc?si=hL9y1gOIMclrJh-i",
    title: {
      te: "ఇండియన్ ఐడల్ ప్రయాణం & బీఎస్ఎఫ్ జీవితం - ప్రత్యేక ముఖాముఖి",
      en: "Telugu Indian Idol Journey & BSF Life: Special Conversation",
    },
    channel: "Celebrity Spotlight",
    description: {
      te: "తెలుగు ఇండియన్ ఐడల్ సీజన్ 2 ఆడిషన్స్ నుండి టాప్ 7 వరకు సాగిన జ్ఞాపకాలు, థమన్ మరియు బాలకృష్ణ గారితో అనుభవాలను పంచుకున్న క్షణాలు.",
      en: "Reflecting on his historic Indian Idol audition in uniform, standing ovations from SS Thaman, and performances before superstar Nandamuri Balakrishna.",
    },
    duration: "Full Interview",
    thumbnail: "https://img.youtube.com/vi/6qTOvypn_kc/hqdefault.jpg",
  },
  {
    id: "interview-3",
    youtubeId: "lIHG6FU7UXE",
    youtubeUrl: "https://youtu.be/lIHG6FU7UXE?si=kki2rVtHi20aiTmg",
    title: {
      te: "హోమ్‌టౌన్ ప్రత్యేక ముఖాముఖి - శ్రీకాకుళం మట్టి నుండి జాతీయ వేదికల దాకా",
      en: "Hometown Special Interview: Srikakulam Soil to National Acclaim",
    },
    channel: "Regional Feature",
    description: {
      te: "శ్రీకాకుళం జిల్లా పొత్తంగి గ్రామ మూలాలు, కుటుంబ సభ్యుల ప్రోత్సాహం మరియు భవిష్యత్ సంగీత లక్ష్యాలపై ఆత్మీయ సంభాషణ.",
      en: "Heart-to-heart talk covering his upbringing in Pottangi, Srikakulam, family values, and his vision of serving the nation while singing for the world.",
    },
    duration: "Special Feature",
    thumbnail: "https://img.youtube.com/vi/lIHG6FU7UXE/hqdefault.jpg",
  },
];
