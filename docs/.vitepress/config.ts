import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  markdown: {
    lineNumbers: false
  },
  title: 'AyoVue',
  description:
    'Open source vue components librariy which provides building blocks to create productive user   interface.',
  themeConfig: {
    lastUpdatedText: 'Last Updated Date',
    siteTitle: false,
    logo: '/ayovue.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/intro' },
      {
        text: 'Examples',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          {
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },

              { text: 'Section B Item B', link: '...' }
            ]
          },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/docs/intro' },
          { text: 'docs folder', link: 'docs/' },
          { text: 'ex link', link: 'http://liton.info' }
        ]
      },
      {
        text: 'Section Title A',
        collapsed: true,
        items: [
          { text: 'liton in docs', link: '/docs/liton.md' },
          { text: 'Home', link: '/docs/home' },
          { text: 'Item B', link: 'docs/item-b' }
        ]
      },
      {
        text: 'Level 1',
        collapsed: true,
        items: [
          {
            text: 'Level 2',
            items: [
              { text: 'Item A', link: '/item-a' },
              {
                text: 'Level 3',
                items: [
                  { text: 'hello', link: '/hello' },
                  { text: 'Item A', link: '/item-a' }
                ]
              }
            ]
          },
          { text: 'Item A', link: '/item-a' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ayoton/ayovue' },
      { icon: 'facebook', link: 'https://www.facebook.com/ayotonofficial' }
    ],

    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-2023 Ayoton'
    }
  }
})
