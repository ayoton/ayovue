---
title: CheckBox
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ACheckbox} from '../../src/'
import { ACheckboxMeta } from '../../src/components/ACheckbox/ACheckbox.meta'
import PG from '../../src/playground/PG.vue'
import { ref } from 'vue'
const v=ref(true);
</script>

# Checkbox

The <code>ACheckbox</code> component extend the standard html checkbox element with the support of various styles, states and size.

## Example

<br/>

<ACheckbox variant="info" />
<ACheckbox variant="info" outlined
 />
 <ACheckbox variant="info" outlined disabled
 />
 <ACheckbox variant="info" outlined disabled v-model=v
 />
 <ACheckbox variant="info" rounded 
 />
 
 <ACheckbox variant="info" rounded outlined
 />
 <ACheckbox variant="info" rounded disabled
 />
 <ACheckbox variant="info" rounded outlined disabled v-model=v
 />

## Playground

<br/>

  <div>
    <PG :comp="ACheckbox" :comp-meta="ACheckboxMeta">
      <template #default="{ vModels }">
        <ACheckbox v-bind="vModels" />
      </template>
    </PG>
  </div>

## Props

Checkbox component has the following props.

| Prop name  | Type    | Required | Default value | Details                                                                                                                                                                                                              |
| ---------- | ------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label      | String  | No       |               | Define lable for the checkbox.                                                                                                                                                                                       |
| modelValue | any     | No       |               | modelValue to bind using v-model.                                                                                                                                                                                    |
| outlined   | Boolean | No       | false         | Enable outlined variant.                                                                                                                                                                                             |
| rounded    | Boolean | No       | false         | Enable rounded variant.                                                                                                                                                                                              |
| disabled   | Boolean | No       | false         | Make the radio disable.                                                                                                                                                                                              |
| variant    | String  | No       | primary       | Defines the color variant of the Radio button which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size       | Number  | No       | 16            | Defines the size of the checkbox.                                                                                                                                                                                    |

## Slots

Checkbox component has the following slots.

| Slot name | Description                            | Props |
| --------- | -------------------------------------- | ----- |
| default   | Content of the radio button component. | N/A   |

## Events

Checkbox component supports all native events.
