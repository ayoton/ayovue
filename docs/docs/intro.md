---
title: Introduction
lang: en-US
layout: docs
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

## Import AyoVue

You can import full bundle of components or can import individual component.

### Full bundle

<!-- Coming Soon... -->

```js
import Vue from 'vue'
import { AyoVue } from 'ayovue'
import 'ayovue/themes/default/all.css'

Vue.use(AyoVue)
```

### Individual component

```js
import Vue from 'vue'
import { AButton } from 'ayovue'
import 'ayovue/themes/default/button.css'
```
