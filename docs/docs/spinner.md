---
title: Spinner
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ASpinner} from '../../src/'
import { ASpinnerMeta } from '../../src/components/ASpinner/ASpinner.meta'
import PG from '../../src/playground/PG.vue'

</script>

# Spinner

The <code>ASpinner</code> component is used to show a loading icon.

## Import

```js
import { ASpinner } from 'ayovue'
```

## Playground

<br/>

<div>
  <PG :comp="ASpinner" :comp-meta="ASpinnerMeta"></PG>
</div>

## Props

Spinner component has the following props.

| Prop name | Type   | Required | Default value | Details                                                                                                                                                                                                         |
| --------- | ------ | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| variant   | String | No       | primary       | Defines the color variant of the spinner which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size      | Number | No       | 16            | Defines the size of the spinner.                                                                                                                                                                                |
