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
      { text: 'Docs', link: '/docs/intro' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Installation', link: '/docs/intro' }
          // { text: 'docs folder', link: 'docs/' },
          // { text: 'ex link', link: 'http://liton.info' }
        ]
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Button', link: '/docs/button.md' },
          { text: 'Button Group', link: '/docs/button-group.md' },
          { text: 'Input Field', link: '/docs/input.md' }
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
