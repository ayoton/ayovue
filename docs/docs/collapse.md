---
title: Collapse
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ref }  from "vue"
import { ACollapse, AButton } from '../../src/'
import { ACollapseMeta } from '../../src/components/ACollapse/ACollapse.meta'


const opened = ref(false);

</script>

<style>
  .my-p {
    border: 1px solid gray;
    padding: 22px;
    border-radius: 10px;
    background-color: #7fffd4;
  }
</style>

# Collapse

The <code>ACollapse</code> component is used to easily toggle visibility of almost any content on your pages in a vertically collapsing container. Includes support for making accordions.

## Import

```js
import { ACollapse } from 'Ayovue'
```

## Examples

<div>
  <AButton @click="opened = !opened">Show / Hide</AButton>
  <ACollapse :open="opened">
    <p class="my-p">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi cum
      asperiores magni blanditiis nostrum, nesciunt fuga ex mollitia veritatis
      aut dolorum ea! Cumque itaque perspiciatis culpa iste deleniti illo.
    </p>
  </ACollapse>
</div>

::: details View Codes

```vue
<template>
  <AButton @click="opened = !opened">Show / Hide</AButton>
  <ACollapse :open="opened">
    <p class="my-p">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi cum asperiores magni
      blanditiis nostrum, nesciunt fuga ex mollitia veritatis aut dolorum ea! Cumque itaque
      perspiciatis culpa iste deleniti illo.
    </p>
  </ACollapse>
</template>
```

:::

## Props

Collapse component has the following props.

| Prop name | Type    | Required | Default value | Details                   |
| --------- | ------- | -------- | ------------- | ------------------------- |
| open      | Boolean | No       | false         | To show or hide a section |

## Slots

Collapse component has the following slots.

| Slot name | Description       | Props |
| --------- | ----------------- | ----- |
| default   | Collapsed Content | N/A   |
