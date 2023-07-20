---
title: Input
lang: en-US
layout: docs
---

<script setup lang="ts">
import { AButton, vTooltip } from '../../src/'

</script>

<div>
  <p> Tooltip is lorem ipsum ... </p>
  <AButton v-tooltip.left="'Left tooltip'">Left</AButton>
  <AButton v-tooltip="'Default tooltip'" class="ml-2">Default</AButton>
  <AButton v-tooltip.top="'Top tooltip'" class="ml-2">Top</AButton>
  <AButton v-tooltip.bottom="'Bottom tooltip'" class="ml-2">Bottom</AButton>
  <AButton v-tooltip.right="'Right tooltip'" class="ml-2">Right</AButton>

</div>
