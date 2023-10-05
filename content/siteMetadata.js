const siteMetadata = {
  title: 'Alaeddine Douagi',
  author: 'Alaeddine Douagi',
  headerTitle: 'aladouagi',
  description: 'Senior Web Developer at Metro Markets GmbH',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://aladouagi.com',
  siteRepo: 'https://github.com/AlaDouagi/portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ala.douagi@gmail.com',
  github: 'https://github.com/AlaDouagi',
  twitter: 'https://twitter.com/AlaDouagi',
  facebook: 'https://www.facebook.com/profile.php?id=100014137479257',
  linkedin: 'https://www.linkedin.com/in/aladouagi/',
  spotify: 'https://open.spotify.com/user/313rcbgck6p66vl3fi227xtv4o5m?si=ebb6a82ad09944ce',
  steam: '',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
