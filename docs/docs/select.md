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


const objectSelectedCountry = ref("");
  const objectCountries = [
  {
    index: 1,
    name: "Bangladesh",
    value: "bn",
    flag: "https://flagcdn.com/16x12/bd.png"
  },
  {
    index: 2,
    name: "India",
    value: "in",
    flag: "https://flagcdn.com/16x12/in.png"
  },
  {
    index: 3,
    name: "China",
    value: "cn",
    flag: "https://flagcdn.com/16x12/cn.png"
    
  },
  {
    index: 4,
    name: "USA",
    value: "us",
    flag: "https://flagcdn.com/16x12/us.png"
  },
  {
    index: 5,
    name: "UK",
    value: "uk",
    flag: "https://flagcdn.com/16x12/gb-eng.png"
  },
  {
    index: 6,
    name: "Russia",
    value: "ru",
    flag: "https://flagcdn.com/16x12/ru.png"
  },
  {
    index: 7,
    name: "Srilanka",
    value: "sr",
    flag: "https://flagcdn.com/16x12/sr.png"
  }
];

</script>

# Select

The <code>ASelect</code> component is used to select information from a collection of options.

## Playground

<div>
  <PG :comp="ASelect"
    :comp-meta="ASelectMeta"
    modelVar="selectedCountry"
    :additionalProps="{':options': 'countries'}"
    :disabledProps="[`grouped`, `groupedLabelField`, `groupedOptionsField`, `autofocus`]">
    <template #default="{ vModels }">
      <div class="d-flex ai-center">
        <ASelect class="flex-1"
          v-bind="vModels"
          :options="countries"
          v-model="selectedCountry" />
        <div class="flex-1 pl-5"> Selected: {{selectedCountry}}</div>
      </div>
    </template>
    <template #extra>
        Script
    </template>

  </PG>
</div>

```vue
<script setup>
// Imports
const selectedCountry = ref("");
const objectCountries = [
  "Bangladesh", "India", "China", "USA", "Pakistan", "Srilanka"
];
<script>

```

## Select with array of objects as options

Selected Country: {{objectSelectedCountry}}
<ASelect
  v-model="objectSelectedCountry"
  placeholder="Select Country"
  :options="objectCountries"
  labelField="name"
  valueField="value"></ASelect>
<br/>

```vue
<template>
  <ASelect
    v-model="selectedCountry"
    placeholder="Select Country"
    labelField="name"
    valueField="value"
    :options="countries"
  />
</template>

<script setup>
// Imports
const selectedCountry = ref('')
const countries = [
  {
    index: 1,
    name: 'Bangladesh',
    value: 'bn',
    flag: 'https://flagcdn.com/16x12/bd.png'
  },
  {
    index: 2,
    name: 'India',
    value: 'in',
    flag: 'https://flagcdn.com/16x12/in.png'
  },
  {
    index: 3,
    name: 'China',
    value: 'cn',
    flag: 'https://flagcdn.com/16x12/cn.png'
  },
  {
    index: 4,
    name: 'USA',
    value: 'us',
    flag: 'https://flagcdn.com/16x12/us.png'
  },
  {
    index: 5,
    name: 'UK',
    value: 'uk',
    flag: 'https://flagcdn.com/16x12/gb-eng.png'
  },
  {
    index: 6,
    name: 'Russia',
    value: 'ru',
    flag: 'https://flagcdn.com/16x12/ru.png'
  },
  {
    index: 7,
    name: 'Srilanka',
    value: 'sr',
    flag: 'https://flagcdn.com/16x12/sr.png'
  }
]
</script>
```
