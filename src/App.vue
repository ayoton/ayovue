<script setup lang="ts">
import { AButton } from '.'
import { AButtonMeta } from './components/AButton/AButton.meta'
import PG from './playground/PG.vue'
</script>

<template>
  <div>
    <!-- <AButton loading icon>Button</AButton>
    <AButton loading>Button</AButton> -->
    <hr />
    <PG :comp="AButton" :comp-meta="AButtonMeta"></PG>
  </div>
</template>
