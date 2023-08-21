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
function handleDrop(e) {
  console.log(e);
}

</script>

# Input File

The <code>AInputFile</code> component is a customized file uploader which can select single or multiple files with dragdrop support and can show detailed selection information, progress tracking and validations.

## Import

```js
import { AInputFile } from 'ayovue'
import 'ayovue/themes/default/inputfile.css'
```

## Single file upload

  <div>
    <AInputFile
      aspect-ratio="5/3"
      width="360px"
      accept="all"
      @change="handleChange"
      @drop="handleDrop"
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
      @drop="handleDrop"
      multiple
    >
    </AInputFile>
  </div><br/>

```vue
<AInputFile aspect-ratio="5/3" width="360px" accept="all" @change="handleChange" multiple>
</AInputFile>
```

## Props

Input File component has the following props.

| Prop name    | Type    | Required | Default value | Details                                                                                                                            |
| ------------ | ------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| multiple     | Boolean | No       | false         | Specify if it supports multiple file uploads or not                                                                                |
| aspect-ratio | String  | No       | 1/1           | Define the ration of width and height                                                                                              |
| accept       | String  | No       | all           | Default HTML <code>accept</code> attribute specifies a filter for what file types the user can pick from the file input dialog box |
| width        | String  | No       | 100%          | Define the width of input file field                                                                                               |

## Events

Input File component emits the following custom events.

| Event name | Description                                        |
| ---------- | -------------------------------------------------- |
| change     | Emit this event when select new file/files.        |
| drop       | Emit this event when drag and drop new file/files. |
