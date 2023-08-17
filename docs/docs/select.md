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

const vModel = ref("");

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

const options = [
  {
    index: 1,
    name: 'Bangladesh',
    value: 'bn',
    flag: 'https://flagcdn.com/16x12/bd.png',
    obj: {
      name: 'bd',
      lang: 'bn'
    }
  },
  {
    index: 2,
    name: 'India',
    value: 'in',
    flag: 'https://flagcdn.com/16x12/in.png',
    obj: {
      name: 'in',
      lang: 'id'
    }
  },
  {
    index: 3,
    name: 'China',
    value: 'cn',
    flag: 'https://flagcdn.com/16x12/cn.png',
    obj: {
      name: 'cn',
      lang: 'ch'
    }
  },
  {
    index: 4,
    name: 'USA',
    value: 'us',
    flag: 'https://flagcdn.com/16x12/us.png',
    obj: {
      name: 'usa',
      lang: 'Uni'
    }
  },
  {
    index: 5,
    name: 'UK',
    value: 'uk',
    flag: 'https://flagcdn.com/16x12/gb-eng.png',
    obj: {
      name: 'uk',
      lang: 'en'
    }
  },
  {
    index: 6,
    name: 'Russia',
    value: 'ru',
    flag: 'https://flagcdn.com/16x12/ru.png',
    obj: {
      name: 'run',
      lang: 'rus'
    }
  },
  {
    index: 7,
    name: 'Srilanka',
    value: 'sr',
    flag: 'https://flagcdn.com/16x12/sr.png',
    obj: {
      name: 'sr',
      lang: 'sri'
    }
  }
];

const groupedCountries = [
  {
    continent: 'Asia',
    countries: [
      {
        name: 'Bangladesh',
        value: 'bn',
        flag: 'https://flagcdn.com/16x12/bd.png'
      },
      {
        name: 'India',
        value: 'in',
        flag: 'https://flagcdn.com/16x12/in.png'
      },
      {
        name: 'China',
        value: 'cn',
        flag: 'https://flagcdn.com/16x12/cn.png'
      },
      {
        name: 'Russia',
        value: 'ru',
        flag: 'https://flagcdn.com/16x12/ru.png'
      },
      {
        name: 'Srilanka',
        value: 'sr',
        flag: 'https://flagcdn.com/16x12/sr.png'
      }
    ]
  },
  {
    continent: 'Europe',
    countries: [
      {
        name: 'UK',
        value: 'uk',
        flag: 'https://flagcdn.com/16x12/gb-eng.png'
      },
      {
        name: 'Germany',
        value: 'de',
        flag: 'https://flagcdn.com/16x12/de.png'
      },
      {
        name: 'Portugal',
        value: 'pt',
        flag: 'https://flagcdn.com/16x12/pt.png'
      }
    ]
  },
  {
    continent: 'North America',
    countries: [
      {
        name: 'USA',
        value: 'us',
        flag: 'https://flagcdn.com/16x12/us.png'
      }
    ]
  }
];

const labelFieldFunction = (option: any) => option.name + "-" + option.value;
const isDisabledFunction = (option: any) => {
  console.log(option);
  return option && option.name === "India";
};
const valueFieldFunction = (option: any) => {
  if (!option) {
    return;
  }
  return option.name + "(" + option.value + ")";
};

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
      <div  class="flex-1">
        <ASelect
          v-bind="vModels"
          :options="countries"
          v-model="selectedCountry" />
      </div>    
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
const countries = [
  "Bangladesh", "India", "China", "USA", "Pakistan", "Srilanka"
];
<script>

```

## Array of objects as options

Selected Country: {{objectSelectedCountry}}
<ASelect
  v-model="objectSelectedCountry"
  placeholder="Select Country"
  :options="objectCountries"
  labelField="name"
  valueField="value"></ASelect>

::: details View Codes

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

:::

## With slots

Selected Country: {{objectSelectedCountry}}
<ASelect
  v-model="objectSelectedCountry"
  placeholder="Select Country"
  :options="objectCountries"
  labelField="name"
  valueField="value">
<template #selected="{ selectedOption }">

<div class="d-flex ai-center" v-if="selectedOption">
<img :src="selectedOption.flag" alt="" />
<div class="ml-2">{{ selectedOption.name }}</div>
</div>
</template>

<template #option="{ option }">

<div class="d-flex ai-center">
<img :src="option.flag" alt="" />
<div class="ml-2">{{ option.name }}</div>
</div>
</template>

</ASelect>

::: details View Codes

```vue
<template>
  <ASelect
    v-model="selectedCountry"
    placeholder="Select Country"
    :options="countries"
    labelField="name"
    valueField="value"
  >
    <template #selected="{ selectedOption }">
      <div class="d-flex ai-center" v-if="selectedOption">
        <img :src="selectedOption.flag" alt="" />
        <div class="ml-2">{{ selectedOption.name }}</div>
      </div>
    </template>

    <template #option="{ option }">
      <div class="d-flex ai-center">
        <img :src="option.flag" alt="" />
        <div class="ml-2">{{ option.name }}</div>
      </div>
    </template>
  </ASelect>
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

:::

## With grouped options

Selected Country: {{objectSelectedCountry}}
<ASelect
v-model="objectSelectedCountry"
:options="groupedCountries"
placeholder="Select Country"
labelField="name"
valueField="value"
grouped
groupedLabelField="continent"
groupedOptionsField="countries"
/>

::: details View Codes

```vue
<template>
  <ASelect
    v-model="selectedCountry"
    :options="groupedCountries"
    placeholder="Select Country"
    labelField="name"
    valueField="value"
    grouped
    groupedLabelField="continent"
    groupedOptionsField="countries"
  />
</template>

<script setup>
// Imports
const selectedCountry = ref('')
const groupedCountries = [
  {
    continent: 'Asia',
    countries: [
      {
        name: 'Bangladesh',
        value: 'bn',
        flag: 'https://flagcdn.com/16x12/bd.png'
      },
      {
        name: 'India',
        value: 'in',
        flag: 'https://flagcdn.com/16x12/in.png'
      },
      {
        name: 'China',
        value: 'cn',
        flag: 'https://flagcdn.com/16x12/cn.png'
      },
      {
        name: 'Russia',
        value: 'ru',
        flag: 'https://flagcdn.com/16x12/ru.png'
      },
      {
        name: 'Srilanka',
        value: 'sr',
        flag: 'https://flagcdn.com/16x12/sr.png'
      }
    ]
  },
  {
    continent: 'Europe',
    countries: [
      {
        name: 'UK',
        value: 'uk',
        flag: 'https://flagcdn.com/16x12/gb-eng.png'
      },
      {
        name: 'Germany',
        value: 'de',
        flag: 'https://flagcdn.com/16x12/de.png'
      },
      {
        name: 'Portugal',
        value: 'pt',
        flag: 'https://flagcdn.com/16x12/pt.png'
      }
    ]
  },
  {
    continent: 'North America',
    countries: [
      {
        name: 'USA',
        value: 'us',
        flag: 'https://flagcdn.com/16x12/us.png'
      }
    ]
  }
]
</script>
```

:::

## With label, value & isDisabled as function

Selected Country: {{objectSelectedCountry}}

<ASelect
v-model="objectSelectedCountry"
:options="options"
placeholder="Select Country"
:labelField="labelFieldFunction"
:valueField="valueFieldFunction"
:is-disabled="isDisabledFunction"
/>

::: details View Codes

```vue
<template>
  <ASelect
    v-model="selectedCountry"
    :options="cointries"
    placeholder="Select Country"
    :labelField="labelFieldFunction"
    :valueField="valueFieldFunction"
    :is-disabled="isDisabledFunction"
  />
</template>

<script setup>
// Imports

const labelFieldFunction = (option: any) => option.name + '-' + option.value
const isDisabledFunction = (option: any) => {
  return option && option.name === 'India'
}
const valueFieldFunction = (option: any) => {
  if (!option) {
    return
  }
  return option.name + '(' + option.value + ')'
}

const selectedCountry = ref('')
const Countries = [
  {
    continent: 'Asia',
    countries: [
      {
        name: 'Bangladesh',
        value: 'bn',
        flag: 'https://flagcdn.com/16x12/bd.png'
      },
      {
        name: 'India',
        value: 'in',
        flag: 'https://flagcdn.com/16x12/in.png'
      },
      {
        name: 'China',
        value: 'cn',
        flag: 'https://flagcdn.com/16x12/cn.png'
      },
      {
        name: 'Russia',
        value: 'ru',
        flag: 'https://flagcdn.com/16x12/ru.png'
      },
      {
        name: 'Srilanka',
        value: 'sr',
        flag: 'https://flagcdn.com/16x12/sr.png'
      }
    ]
  },
  {
    continent: 'Europe',
    countries: [
      {
        name: 'UK',
        value: 'uk',
        flag: 'https://flagcdn.com/16x12/gb-eng.png'
      },
      {
        name: 'Germany',
        value: 'de',
        flag: 'https://flagcdn.com/16x12/de.png'
      },
      {
        name: 'Portugal',
        value: 'pt',
        flag: 'https://flagcdn.com/16x12/pt.png'
      }
    ]
  },
  {
    continent: 'North America',
    countries: [
      {
        name: 'USA',
        value: 'us',
        flag: 'https://flagcdn.com/16x12/us.png'
      }
    ]
  }
]
</script>
```

:::

## Props

Select component has the following props.

| Prop name           | Type              | Required | Default value | Details                                                                                                                                                                                                              |
| ------------------- | ----------------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue          | Any               | True     |               | ModelValue to bind using <code>v-model</code> which Specifies the value of the select component                                                                                                                      |
| options             | Array             | True     |               | An array of available options                                                                                                                                                                                        |
| showSearchField     | Boolean, Function | No       | false         | Show a search input field.                                                                                                                                                                                           |
| isDisabled          | Boolean, Function | No       | false         | To disable the select field                                                                                                                                                                                          |
| clearable           | Boolean           | No       | false         | Show a clearable icon when value is available.                                                                                                                                                                       |
| autofocus           | Boolean           | No       | false         | To focus the select field automatically                                                                                                                                                                              |
| loading             | Boolean           | No       | false         | To show a spinner icon inside select field.                                                                                                                                                                          |
| variant             | String            | No       | primary       | Defines the color variant of the select field which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size                | Number            | No       | 16            | Defines the size of the select field.                                                                                                                                                                                |
| width               | String            | No       | auto          | To set a custome width for the select field.                                                                                                                                                                         |
| scrollHeight        | Number            | No       | 188           | To set a height of options list in pixel.                                                                                                                                                                            |
| placeholder         | String            | No       |               | To add placeholder.                                                                                                                                                                                                  |
| floatingLabel       | String            | No       |               | To add floatingLabel.                                                                                                                                                                                                |
| grouped             | Boolean           | No       | false         | To show a grouped select field.                                                                                                                                                                                      |
| groupedLabelField   | String            | No       |               | Property name for showing group title.                                                                                                                                                                               |
| groupedOptionsField | String            | No       |               | Property name for getting options for each group.                                                                                                                                                                    |

## Slots

Select component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| option    | Custom design for option items.  | N/A   |
| selected  | Custom design for selected item. | N/A   |

## Events

Select component has the following events.

| Event name | Description                       | Props |
| ---------- | --------------------------------- | ----- |
| aChange    | Emit event when modelValue change | N/A   |
| blur       | Emit event on blur                | N/A   |
| focus      | Emit event on focus               | N/A   |
