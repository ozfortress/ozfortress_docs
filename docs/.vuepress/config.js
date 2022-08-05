const { defaultTheme } = require('@vuepress/theme-default')
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
    repo: 'https://github.com/ozfortress/ozfortress_docs',
    theme: defaultTheme({
      logo: '/images/ozf-docs-logo.png',
      navbar: [
        {
          text: 'Rules',
          children: [
            {
              text: 'Sixes (6v6)',
              link: '/rules/sixes/',
            },
            {
              text: 'Highlander (HL)',
              link: '/rules/highlander/',
            },
            {
              text: 'Community Guidelines',
              link: '/community_guidelines/',
            },
            {
              text: 'Infractions',
              link: '/rules/infractions/',
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
            {
              text: 'Bans',
              link: '/help/bans/',
            },
            {
              text: 'Staff',
              link: '/help/staff/',
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
      sidebar: {
        '/help/bans/': [
          {
          // Bans category
            collapsable: false,
            text: 'Bans',
            link: '/help/bans/',
            children: [
              {
                // Evidence Bans category
                  collapsable: false,
                  text: 'Evidence Bans',
                  link: '/help/bans/evidence_bans.md',
              },
              {
                // VAC Bans category
                  collapsable: false,
                  text: 'VAC Bans',
                  link: '/help/bans/vac_bans.md',
              },
              {
                // Infraction Threshold Bans category
                  collapsable: false,
                  text: 'Infraction Threshold Bans',
                  link: '/help/bans/infraction_bans.md',
              },
              {
                // Other Bans category
                  collapsable: false,
                  text: 'Other Bans',
                  link: '/help/bans/other_bans.md',
              },
              {
                // Past Bans category
                  collapsable: false,
                  text: 'Past Bans',
                  link: '/help/bans/past_bans.md',
              },
            ]
          },
        ],
      }
    }),
    plugins: [
      backToTopPlugin(),
      mediumZoomPlugin(),
    ],
}