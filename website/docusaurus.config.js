// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#30DaysOf Learning',
  tagline: 'Learn By Building - Concepts to Code To Cloud!',
  url: 'https://microsoft.github.io',
  baseUrl: '/30daysof/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: '30DaysOf', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '#30DaysOf',
        logo: {
          alt: '30DaysOf Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Content', position: 'left'},
          {to: '/calendar', label: 'Calendar', position: 'left'},
          {to: '/curricula', label: 'Curricula', position: 'left'},
          {to: 'https://github.com/microsoft/30daysof/discussions', label: 'Chat', position: 'left'},
          
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'right',
            items: [             
              { label: '1. Roadmaps', type: 'doc', docId: '/category/roadmaps',  },
              { label: '2. Curricula', to: '/http://aka.ms/curricula', },
              { label: '3. Challenges', to: '/challenges', },

            ],
          },
          {
            href: 'https://github.com/microsoft/30DaysOf',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        /*
        logo: {
          alt: 'Serverless September Logo',
          src: 'img/campaign_banner.png',
          href: 'https://aka.ms/serverless-september',
          width: 280,
          height: 100,
        },
        */
        links: [
          {
            label: 'Student Ambassadors',
            to: 'https://studentambassadors.microsoft.com/',
          },
          {
            label: 'Imagine Cup',
            to: 'https://imaginecup.microsoft.com/en-us/Events',
          },
          {
            label: 'Student Hub',
            to: 'https://docs.microsoft.com/en-us/learn/student-hub/',
          },
          {
            label: 'Microsoft Reactor',
            to: 'https://developer.microsoft.com/en-us/reactor/',
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/en-us/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://microsoft.github.io/30DaysOf'
        },
        {
          name: 'twitter:title', 
          content: '#30DaysOfLearning: Concepts to Code to Cloud'
        },
        {
          name: 'twitter:description', 
          content: 'The beginner\'s one-stop resources to skilling up on Cloud and AI!'
        },
        {
          name: 'twitter:image', 
          content: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/378805iDA20565658980B26/image-size/large?v=v2&px=999'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },

      ],

      announcementBar: {
        id: 'Kickstart #30DaysOfLearning!',
        content:
          '<b>Found this project helpful? Give us a star on <a href="https://github.com/microsoft/30DaysOf"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#4f2e85',
        textColor: '#ffffff',
        isCloseable: false,
      },

    }),
};

module.exports = config;
