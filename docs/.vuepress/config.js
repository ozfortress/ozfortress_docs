const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')


module.exports = {
    lang: 'en-US',
    title: 'ozfortress docs',
    description: 'Public rulesets, guides and other documentation for ozfortress.com leagues.',
    backToHome: 'Well, this is embarrassing. Click here to return to the homepage.',
    lastUpdatedText: 'This doc page was last updated at',
    contributors: true,
    editLink: false,
    theme: defaultTheme({
      logo: '/images/ozf-docs-logo.png',
      navbar: [
        {
          text: 'Rulesets',
          children: [
            {
              text: 'Sixes (6v6)',
              link: '/rulesets/sixes/',
            },
            {
              text: 'Highlander (HL)',
              link: '/rulesets/highlander/',
            },
            {
              text: 'Community Guidelines',
              link: '/community_guidelines/',
            },
            {
              text: 'Infractions',
              link: '/rulesets/infractions/',
            },
          ],
        },
        {
          text: 'Help',
          children: [
            {
              text: 'Server Configs',
              link: '/help/server_configs/',
            },
            {
              text: 'Transfers',
              link: '/help/transfers/',
            },
            {
              text: 'Anti-Cheat & You',
              link: '/help/anticheat_and_you/',
            },
          ],
        },
        {
          text: 'Guides',
          children: [
            {
              text: 'Newbie Guide',
              link: '/guides/newbie_guide/',
            },
            {
              text: 'Book a Server',
              link: '/guides/book_a_server/',
            },
            {
              text: 'Self-managed Servers',
              link: '/guides/selfmanaged_servers/',
            },
          ],
        },
        {
          text: 'ozfortress.com',
          link: 'https://ozfortress.com',
        },
      ],
    }),
  plugins: [
      docsearchPlugin({
        // options
      }),
      backToTopPlugin(),
      mediumZoomPlugin({
          // options
        }),
  ],
  }