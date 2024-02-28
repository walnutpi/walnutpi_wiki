// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '核桃派',
  tagline: '-让数字化技术变得简单-',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.walnutpi.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  //baseUrl: '/E:/docusaurus/walnutpi_wiki/build/index.html/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'walnutpi', // Usually your GitHub org/user name.
  projectName: 'walnutpi_wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en','zh'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarCollapsible: false, //全部导航栏展开
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          //编辑开放
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'picow',
        path: 'picow',
        routeBasePath: 'picow',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '核桃派',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '核桃派1B教程',
          },
          {
            to: 'picow/directory',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '核桃派PicoW教程',
          },
          {
            href: 'https://forum.walnutpi.com',
            label: '论坛',
            position: 'left',
          },
          {
            href: 'https://walnutpi.taobao.com',
            label: '购买',
            position: 'right',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          /*{
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/facebook/docusaurus/issues/3526',
                label: 'Help Us Translate',
              },
            ],
          },*/
          {
            href: 'https://github.com/walnutpi',
            //label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '开发者资源',
            items: [
              {
                label: '教程',
                to: '/docs/directory',
              },
              {
                label: '论坛',
                href: 'https://forum.walnutpi.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/walnutpi',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: '电话: +86-15920954663 (微信同号)',
                to: '/',              
              },
              {
                label: '邮箱: walnutpi@qq.com',
                href: '/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'QQ群: 677173708',
                to: '/',
              },
              {
                label: '微信公众号: 核桃派Walnutpi',
                to:'/'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WalnutPi, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'RY7U130GIJ',
  
        // Public API key: it is safe to commit it
        apiKey: '7f49dba340170516ee1384f23b973d06',
  
        indexName: 'walnutpi',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
         // from: '/docs/', // or as RegExp: /\/docs\//
        //  to: '/',
       // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;