<script setup lang="ts">
import { ARadio } from '.'
import { ARadioMeta } from './components/ARadio/ARadio.meta'
import PG from './playground/PG.vue'
</script>

<template>
  <div>
    <!-- <AButton loading icon>Button</AButton>
    <AButton loading>Button</AButton> -->
    <hr />
    <!-- <PG :comp="AButton" :comp-meta="AButtonMeta"></PG> -->
    <PG :comp="ARadio" :comp-meta="ARadioMeta">
      <template #default="{ vModels }">
        <ARadio v-bind="vModels" />
      </template>
    </PG>
  </div>
</template>
