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

const options = [
  "Bangladesh", "India", "China", "USA", "Pakistan", "Srilanka"
];


</script>

# Select

The <code>ASelect</code> component extend the standard html select element with the support of various styles, states and size..

## Playground

<br/>

  <div>
    <PG :comp="ASelect" :comp-meta="ASelectMeta">
      <template #default="{ vModels }">
        <ASelect v-bind="vModels" :options="options" v-model="vModel" />
      </template>
    </PG>
  </div>

## Example

{{vModel}}
<ASelect v-model="vModel" :options="options"></ASelect>

<br/>

<br/>

<!-- <div>
  <PG :comp="ASelect" :comp-meta="ASelectMeta">
  </PG>
</div> -->
