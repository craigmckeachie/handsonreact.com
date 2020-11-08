module.exports = {
  title: 'Hands on React',
  tagline: 'The best way to learn React',
  url: 'https://handsonreact.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'craigmckeachie',
  projectName: 'handsonreact.com',
  themeConfig: {
    navbar: {
      title: 'Hands on React',
      logo: {
        alt: 'React Logo',
        src:
          'https://user-images.githubusercontent.com/1474579/98455653-856c7300-2141-11eb-9bf2-090d7d7e4d00.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Docs',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Labs',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Links',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: 'blog',
        //     // },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/craigmckeachie/handsonreact.com',
        //     },
        //   ],
        // },
      ],
      copyright: `This site is licensed under <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html">
      GPL version 3.
    </a><br/>Copyright © ${new Date().getFullYear()} Funny Ant LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/craigmckeachie/handsonreact.com/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/craigmckeachie/handsonreact.com/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
