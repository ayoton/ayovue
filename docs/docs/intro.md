---
title: Introduction
lang: en-US
---

# Introduction

AyoVue is a progressive vue components library with a comprehensive collection of reusable rich UI components designed to simplify and accelerate your web development process.

## Installation

Use your favorite package manager to install Ayovue on your project

::: code-group

```sh[npm]
npm i ayovue
```

```sh[pnpm]
pnpm i ayovue
```

```sh[yarn]
yarn add ayovue
```

:::

<!-- ## CDN

Coming Soon... -->

<!-- You can also add AyoVue in your project from CDN:

```html -->
<!-- import stylesheet -->
<!-- <link rel="stylesheet" href="https://unpkg.com/ayovue@1.0.1/themes/default/all.css" /> -->
<!-- import ayovue -->
<!-- <script src="https://unpkg.com/ayovue@1.0.1/dist/ayovue.min.js"></script> -->
<!-- ``` -->

## Usages

You can import full bundle of components or can import individual component.

### Full bundle

<!-- Coming Soon... -->

```js [main.js]
import { createApp } from 'vue'
import { AyoVue } from 'ayovue'
import App from './App.vue'
import 'ayovue/themes/default/all.css'
const app = createApp(App)
app.use(AyoVue)
app.mount('#app')
```

### Individual component

To import individual component 1st import `required.css` file in <code>main.js</code> file.

```js [main.js]
import { createApp } from 'vue'
import App from './App.vue'
import 'ayovue/themes/default/required.css'
createApp(App).mount('#app')
```

Then import the required component with related css in any files.
For example to import Button component use the following steps.

```js
import { AButton } from 'ayovue'
import 'ayovue/themes/default/button.css'
```
