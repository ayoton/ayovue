import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: false
  },
  title: 'AyoVue',
  description:
    'Open source vue components librariy which provides building blocks to create productive user   interface.',
  themeConfig: {
    // outlineTitle: 'In hac pagina',
    aside: true,
    outline: [2, 3],
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
          { text: 'Checkbox', link: '/docs/checkbox.md' },
          { text: 'Dialog', link: '/docs/dialog.md' },
          { text: 'Input Field', link: '/docs/input.md' },
          { text: 'Input File', link: '/docs/input-file.md' },
          { text: 'Radio Button', link: '/docs/radio-button.md' },
          { text: 'Select', link: '/docs/select.md' },
          { text: 'Switch', link: '/docs/switch.md' },
          { text: 'Toasts', link: '/docs/toasts.md' },
          { text: 'Tooltip', link: '/docs/tooltip.md' },
          { text: 'Collapse', link: '/docs/collapse.md' },
          { text: 'Spinner', link: '/docs/spinner.md' }
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
