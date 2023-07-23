---
title: Select
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ASelect} from '../../src/'
import { ASelectMeta } from '../../src/components/ASelect/ASelect.meta'
import PG from '../../src/playground/PG.vue'
import { ref } from 'vue'
const v=ref(true);
const v1=ref(false);
</script>

# Select

The <code>ASelect</code> component extend the standard html select element with the support of various styles, states and size..

## Example

<br/>
<ASwitch v-model=v /> &nbsp;
<ASwitch v-model=v1  onText="on" offText="off" /> &nbsp; <ASwitch disabled />

## Playground

<br/>

  <div>
    <PG :comp="ASelect" :comp-meta="ASelectMeta">
    </PG>
  </div>

## Props

Select component has the following props.

| Prop name  | Type    | Required | Default value | Details                                                                                                                                                                                                 |
| ---------- | ------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue | Boolean | No       | false         | ModelValue to bind using v-model which specifies whether the switch should be on or off.                                                                                                                |
| onText     | String  | No       |               | Text to show while the value is true.                                                                                                                                                                   |
| offText    | String  | No       |               | Text to show while the value is false.                                                                                                                                                                  |
| onVariant  | String  | No       | primary       | Color variant of switch on state which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| offVariant | String  | No       | secondary     | Color variant of switch off state has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code>      |
| size       | Number  | No       | 16            | Defines the size of the checkbox.                                                                                                                                                                       |
| disabled   | Boolean | No       | false         | Make the switch disable.                                                                                                                                                                                |

## Slots

Select component has the following slots.

| Slot name | Description                            | Props |
| --------- | -------------------------------------- | ----- |
| default   | Content of the radio button component. | N/A   |

## Events

Select component supports all native events.
