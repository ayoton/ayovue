---
title: Button Group
lang: en-US
layout: docs
---

<script setup lang="ts">
import { AButtonGroup, AButton} from '../../src/'
import { AButtonGroupMeta } from '../../src/components/AButtonGroup/AButtonGroup.meta'
import PG from '../../src/playground/PG.vue'
</script>

# Button Group

The <code>AButtonGroup</code> component is used to create a group of buttons.

## Import

```js
import { AButtonGroup } from 'ayovue'
import 'ayovue/themes/default/buttongroup.css'
```

## Playground

<br/>

  <div>
    <PG :comp="AButtonGroup" :comp-meta="AButtonGroupMeta">
    <template #default="{vModels}">
      <AButtonGroup v-bind="vModels">
        <AButton>button 1</AButton>
        <AButton variant="secondary">button 2</AButton>
        <AButton variant="info">button 3</AButton>
        <AButton variant="warning">button 4</AButton>
        <AButton variant="danger">button 5</AButton>
      </AButtonGroup>
    </template>
    <template #code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button 3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button 4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span></span>
    </template>
    </PG>
  </div>

## Props

Button Group component has the following props.

| Prop name | Type    | Required | Default value | Details                                           |
| --------- | ------- | -------- | ------------- | ------------------------------------------------- |
| raised    | Boolean | No       | false         | Add a shadow to indicate elevation.               |
| rounded   | Boolean | No       | false         | Add a circular border radius to the button group. |
| flat      | Boolean | No       | false         | Remove border radius.                             |
| size      | Number  | No       | 16            | Defines the size of the button.                   |

## Slots

Button Group component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| default   | Content of the button component. | N/A   |

## Events

Button Group component supports all native events.
