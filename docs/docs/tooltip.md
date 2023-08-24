---
title: Tooltip
lang: en-US
---

<script setup lang="ts">
import { AButton, vTooltip } from '../../src/'

</script>

# Tooltip

The <code>v-tooltip</code> directive is used to specify extra information about something when the user moves the mouse pointer over an element. The tooltip can be displayed above, below, left, or right of the element. By default the position will be below.

## Examples

<br/>

<div>
  <AButton v-tooltip.left="'Left tooltip'">Left</AButton>
  <AButton v-tooltip="'Default tooltip'" class="ml-2">Default</AButton>
  <AButton v-tooltip.top="'Top tooltip'" class="ml-2">Top</AButton>
  <AButton v-tooltip.bottom="'Bottom tooltip'" class="ml-2">Bottom</AButton>
  <AButton v-tooltip.right="'Right tooltip'" class="ml-2">Right</AButton>
</div>

::: details View Codes

```vue
<template>
  <div>
    <AButton v-tooltip.left="'Left tooltip'">Left</AButton>
    <AButton v-tooltip="'Default tooltip'" class="ml-2">Default</AButton>
    <AButton v-tooltip.top="'Top tooltip'" class="ml-2">Top</AButton>
    <AButton v-tooltip.bottom="'Bottom tooltip'" class="ml-2">Bottom</AButton>
    <AButton v-tooltip.right="'Right tooltip'" class="ml-2">Right</AButton>
  </div>
</template>
```

:::
