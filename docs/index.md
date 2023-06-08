---
# https://vitepress.dev/reference/default-theme-home-page
title: Home
layout: home
hero:
  name: 'AyoVue'
  text: 'A progressive vue components library'
  tagline: Designed to simplify and accelerate your web development process.
  image:
    src: /ayovue.png
    alt: AyoVue
  actions:
    - theme: brand
      text: Try Now
      link: /docs/intro
    - theme: alt
      text: Documentation
      link: /docs/intro

features:
  - title: Faster Development
    details: Ayovue saves your valuable time by providing ready-to-use pre-built UI components that offer consistent styling, optimized performance and can be easily integrate to enhance Vue projects.
  - title: Easy to integrate
    details: No need to start from scratch or spend hours for designing and coding common UI elements. Simply import the desired component and focus on building your application logic.
  - title: Reusability
    details: Ayovue promotes modular development to easily reuse the components within a project. This reduces duplication of code and effort which results a clean and more maintainable codebases.
  - title: Compatibility
    details: You can confidently use our components in any Vue.js project, ensuring a smooth integration process and consistent performance across different environments and browsers.
  - title: Consistent Design
    details: We follow a unified design system, ensuring consistency in styles, colors, and interactions. This helps to create a seamless user experience throughout your project and saves you from reinventing the wheel.
  - title: Performance Optimization
    details: Our components are optimized for efficiency, minimizing unnecessary re-renders and ensuring smooth user interactions and enhance the performance without sacrificing functionality or user experience.
  - title: Responsive Design
    details: It's designed to be responsive, adapting to different screen sizes. Whether your application is accessed from desktops, tablets, or mobile devices, our components provide a seamless and intuitive user experience.
  - title: Community Support
    details: We thrives on a vibrant and supportive community of developers. By choosing Ayovue you gain access to a valuable network of like-minded individuals who are passionate about Vue.js
---

<script setup>
  import hello from "/components/hello.vue";

const members = [
  {
    avatar: '/hasinoor.jpg',
    name: 'Hasinoor',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/hasinoorit' },
      { icon: 'facebook', link: 'https://facebook/hasinoorit' }
    ]
  },
  {
    avatar: '/rimon.jpg',
    name: 'Rimon',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/rimon' },
      { icon: 'twitter', link: 'https://twitter.com/rimon' }
    ]
  },
  {
    avatar: '/liton.jpg',
    name: 'Liton',
    title: 'Designer',
    links: [
      { icon: 'github', link: 'https://github.com/litonbd' },
      { icon: 'facebook', link: 'https://facebook.com/litonfb' }
    ]
  },
]
</script>

<hello title="Our Team" :members="members">The development of AyoVue is guided by an international
team, some of whom have chosen to be featured below.</hello>
