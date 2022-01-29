// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome',
  tagline: 'My Website',
  url: 'https://kind-murdock-987e6d.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'my-website-docusaurus', // Usually your GitHub org/user name.
  projectName: 'my-website-docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'programming',
        path: 'programming',
        routeBasePath: 'programming',
        sidebarPath: require.resolve('./programming.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'cloud',
        sidebarPath: require.resolve('./cloud.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devops',
        path: 'devops',
        routeBasePath: 'devops',
        sidebarPath: require.resolve('./devops.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },

          // left side
          
          {
            to: '/programming/intro',    // ./docs-api/Intro.md
            label: 'Programming',
            position: 'left',
            // activeBaseRegex: `/programming/`,
          },
          {
            to: '/cloud/intro',    // ./docs-api/Intro.md
            label: 'Cloud',
            position: 'left',
            // activeBaseRegex: `/programming/`,
          },
          {
            to: '/devops/intro',    // ./docs-api/Intro.md
            label: 'DevOps',
            position: 'left',
            // activeBaseRegex: `/programming/`,
          },

          // right side
          { to: '/getting-started', label: 'Getting Started', position: 'right' },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/ibnul42/my-website-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Programming',
                to: '/programming/intro',
              },
              {
                label: 'Cloud',
                to: '/cloud/intro',
              },
              {
                label: 'DevOps',
                to: '/devops/intro',
              },
            ],
          },
          {
            title: 'Find Us',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Privacy',
                to: '/privacy',
              },
              {
                label: 'Terms of Services',
                to: '/terms-of-services',
              },
              {
                label: 'Contributor',
                to: '/contributor',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 my-website`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/palenight'),
        darkTheme: require('prism-react-renderer/themes/palenight'),
      },
    }),
};

module.exports = config;
