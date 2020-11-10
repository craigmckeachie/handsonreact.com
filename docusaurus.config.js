module.exports = {
  title: 'Hands on React',
  tagline: 'The best way to learn React',
  url: 'https://handsonreact.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'craigmckeachie',
  projectName: 'handsonreact.com',
  // scripts: [
  //   {
  //     src: 'https://platform.twitter.com/widgets.js',
  //     async: true,
  //   },
  // ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'img/hands-on-react.png',
    announcementBar: {
      id: 'share',
      content: `If you like Hands on React, <a className="share-btn-twitter"
      rel="noopener" target="_blank"
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fhandsonreact.com%2Fdocs%2F&text=Hands+on+React.+The+best+way+to+learn+React.+by+%40cmckeachie&hashtags=">share it on Twitter.</a>`,
      backgroundColor: 'rgb(72, 77, 91)',
      textColor: '#ffffff',
      isCloseable: false,
    },
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
    </a><br/>Copyright © ${new Date().getFullYear()} Funny Ant, LLC <br/> All rights reserved.`,
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
