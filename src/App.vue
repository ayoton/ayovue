<script setup lang="ts">
import { AButton, AInput } from '.'
import { AInputMeta } from './components/AInput/AInput.meta'
import { AButtonMeta } from './components/AButton/AButton.meta'
import PG from './playground/PG.vue'
</script>

<template>
  <div>
    <!-- <AButton loading icon>Button</AButton>
    <AButton loading>Button</AButton> -->
    <hr />
    <PG :comp="AButton" :comp-meta="AButtonMeta"></PG>
    <!-- <PG :comp="AInput" :comp-meta="AInputMeta"></PG> -->
  </div>
</template>
