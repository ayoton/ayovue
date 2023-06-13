---
title: Button Group
lang: en-US
layout: docs
---

<script setup lang="ts">
import { AButtonGroup} from '../../src/'
import { AButtonGroupMeta } from '../../src/components/AButtonGroup/AButtonGroup.meta'
import PG from '../../src/playground/PG.vue'
</script>

# Button Group

The <code>AButtonGroup</code> component is used to create a group of buttons.

## Button Group Playground

&nbsp;

  <div>
    <PG :comp="AButtonGroup" :comp-meta="AButtonGroupMeta">
    <span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Button 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">AButton</span><span style="color:#89DDFF;">&gt;</span></span>
    </PG>
  </div>

## Props

Button Group component has the following props.

| Prop name | Type    | Required | Default value | Details                                              |
| --------- | ------- | -------- | ------------- | ---------------------------------------------------- |
| outlined  | Boolean | No       | false         | Add a border class without a background initially.   |
| raised    | Boolean | No       | false         | Add a shadow to indicate elevation.                  |
| rounded   | Boolean | No       | false         | Add a circular border radius to the button group.    |
| flat      | Boolean | No       | false         | Remove border radius.                                |
| text      | Boolean | No       | false         | Show button as text without a background and border. |
| block     | Boolean | No       | false         | Show button with 100% width                          |
| size      | Number  | No       | 16            | Defines the size of the button.                      |

## Slots

Button component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| default   | Content of the button component. | N/A   |

## Events

Button Group component supports all native events.
