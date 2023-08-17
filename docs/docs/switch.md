---
title: Switch
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ASwitch} from '../../src/'
import { ASwitchMeta } from '../../src/components/ASwitch/ASwitch.meta'
import PG from '../../src/playground/PG.vue'
import { ref } from 'vue'
const v=ref(true);
const v1=ref(false);
</script>

# Switch

The <code>ASwitch</code> is a custom HTML5 input-type checkbox component that allows you to perform a toggle (on/off) action between checked and unchecked states. It supports different sizes, labels, label positions, and UI customization.

## Import

```js
import { ASwitch } from 'Ayovue'
```

## Example

<br/>
<ASwitch v-model=v /> &nbsp;
<ASwitch v-model=v1  onText="on" offText="off" /> &nbsp; <ASwitch disabled />

## Playground

<br/>

  <div>
    <PG :comp="ASwitch" :comp-meta="ASwitchMeta">
    </PG>
  </div>

## Props

Switch component has the following props.

| Prop name  | Type    | Required | Default value | Details                                                                                                                                                                                                 |
| ---------- | ------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue | Boolean | No       | false         | ModelValue to bind using v-model which specifies whether the switch should be on or off.                                                                                                                |
| onText     | String  | No       |               | Text to show while the value is true.                                                                                                                                                                   |
| offText    | String  | No       |               | Text to show while the value is false.                                                                                                                                                                  |
| onVariant  | String  | No       | primary       | Color variant of switch on state which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| offVariant | String  | No       | secondary     | Color variant of switch off state has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code>      |
| size       | Number  | No       | 16            | Defines the size of the checkbox.                                                                                                                                                                       |
| disabled   | Boolean | No       | false         | Make the switch disable.                                                                                                                                                                                |

## Events

Switch component supports all native events.
