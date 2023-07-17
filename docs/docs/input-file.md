---
title: Input File
lang: en-US
layout: docs
---

<script setup lang="ts">
 import {shallowRef} from "vue"; 
import { AInputFile } from '../../src/'
import { AInputFileMeta } from '../../src/components/AInputFile/AInputFile.meta'
// import PG from '../../src/playground/PG.vue'

// const showingDialog = shallowRef(false);

function handleChange(e) {
  console.log(e);
}

</script>

# Input File

{{AInputFileMeta.description}}.

## Example 1 with single file upload

  <div>
    <AInputFile
      aspect-ratio="5/3"
      width="360px"
      accept="all"
      @change="handleChange"
    >
    </AInputFile>
  </div>

## Example 2 with multiple file upload

  <div>
    <AInputFile
      aspect-ratio="5/3"
      width="360px"
      accept="all"
      @change="handleChange"
      multiple
    >
    </AInputFile>
  </div>

## Props

InputFile component has the following props.

| Slot name | Description |
| --------- | ----------- |
| nn        | dd          |

## Events

InputFile component has the following props.

| Event name | Description |
| ---------- | ----------- |
| change     | dd          |
