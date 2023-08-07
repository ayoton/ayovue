---
title: Select
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ref } from 'vue'
import { ASelect} from '../../src/'
import { ASelectMeta } from '../../src/components/ASelect/ASelect.meta'
import PG from '../../src/playground/PG.vue'

const selectedCountry = ref("");

const countries = [
  "Bangladesh", "India", "China", "USA", "Pakistan", "Srilanka"
];


</script>

# Select

The <code>ASelect</code> component extend the standard html select element with the support of various styles, states and size..

## Playground

<div>
  <PG :comp="ASelect"
    :comp-meta="ASelectMeta"
    modelVar="selectedCountry"
    :disabledProps="[`grouped`, `groupedLabelField`, `groupedOptionsField`]">
    <template #default="{ vModels }">
      <div class="d-flex ai-center">
        <ASelect class="flex-1" v-bind="vModels" :options="countries" v-model="selectedCountry" />
        <div class="flex-1 pl-5"> Selected: {{selectedCountry}}</div>
      </div>
    </template>

  </PG>
</div>

## Simple Select

Selected Country: {{selectedCountry}}
<ASelect v-model="selectedCountry" placeholder="Select Country" :options="countries"></ASelect>
<br/>

```vue

<script setup>
  // Imports
  const selectedCountry = ref("");
  const countries = [
    "Bangladesh", "India", "China", "USA", "Pakistan", "Srilanka"
  ];
<script>

<template>
  <ASelect
    v-model="selectedCountry"
    placeholder="Select Country"
    :options="countries" />
</template>
```
