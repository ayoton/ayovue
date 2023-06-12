---
title: Button
lang: en-US
layout: docs
---

<script setup lang="ts">
import { AButton} from '../../src/'
import { AButtonMeta } from '../../src/components/AButton/AButton.meta'
import PG from '../../src/playground/PG.vue'
</script>

# Button

The <code>AButton</code> component replaces the standard html button with the support of various styles, states and size. Ready to use and easy to customize. Also can use the component name as <code>a-button</code>.

## Button Playground

&nbsp;

  <div>
    <PG :comp="AButton" :comp-meta="AButtonMeta"></PG>
  </div>

## Props

Button component has the following props.

| Props name | Type    | Required | Default value | Details                                            |
| ---------- | ------- | -------- | ------------- | -------------------------------------------------- |
| outlined   | Boolean | No       | false         | Add a border class without a background initially. |
| raised     | Boolean | No       | false         | Add a shadow to indicate elevation.                |
