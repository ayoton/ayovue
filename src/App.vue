<script setup lang="ts">
import { ACheckbox } from '.'
import { ACheckboxMeta } from './components/ACheckbox/ACheckbox.meta'
import PG from './playground/PG.vue'
</script>

<template>
  <div>
    <!-- <AButton loading icon>Button</AButton>
    <AButton loading>Button</AButton> -->
    <hr />
    <!-- <PG :comp="AButton" :comp-meta="AButtonMeta"></PG> -->
    <PG :comp="ACheckbox" :comp-meta="ACheckboxMeta">
      <template #default="{ vModels }">
        <ACheckbox v-bind="vModels" />
      </template>
    </PG>
  </div>
</template>
