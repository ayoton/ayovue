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

The <code>AInputFile</code> component is a customized file uploader which can select single or multiple files with dragdrop support and can show detailed selection information, progress tracking and validations.

## Single file upload

  <div>
    <AInputFile
      aspect-ratio="5/3"
      width="360px"
      accept="all"
      @change="handleChange"
    >
    </AInputFile>
  </div><br/>

```vue
<AInputFile aspect-ratio="5/3" width="360px" accept="all" @change="handleChange">
</AInputFile>
```

## Multiple files upload

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
