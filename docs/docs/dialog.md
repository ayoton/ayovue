---
title: Dialog
lang: en-US
layout: docs
---

<script setup lang="ts">
 import {shallowRef} from "vue"; 
import { ADialog, AButton} from '../../src/'
import { ADialogMeta } from '../../src/components/ADialog/ADialog.meta'
import PG from '../../src/playground/PG.vue'

const showingDialog = shallowRef(false);
const showingDialog1 = shallowRef(false);
const showingDialog2 = shallowRef(false);
const headerslot = shallowRef(false);
const viewfooterslot = shallowRef(false);



</script>

# Dialog

The <code>ADialog</code> component creates a popup dialog / modal on a web page to display content in an overlay window.

<!-- {{ADialogMeta.description}}. -->

## Import

```js
import { ADialog } from 'ayovue'
import 'ayovue/themes/default/dialog.css'
```

<!-- <ADialog closeOnOutsideClick width="500px" title="Dialog titles" v-model="showingDialog">
<template #footer>Footer slot</template>
<template #header>Header slot</template>
<template #default>Lorem ipsum dolar...</template>
</ADialog> -->

## Playground

<br/>

  <div>
    <PG :comp="ADialog" :comp-meta="ADialogMeta">
      <template #default="{ vModels }">
        <AButton @click="showingDialog = true">Show Dialog</AButton>
        <ADialog v-bind="vModels" v-model="showingDialog">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </ADialog>
      </template>
    </PG>

  </div>

## Header slot

<AButton @click="headerslot = true">Show dialog</AButton>
<ADialog v-model="headerslot" width="500px">
<template #header="{ close }">

<div
      class="d-flex jc-between ai-center"
      style="background: #e3e3e3; padding: 4px 16px"
    >
<div class="flex-1 d-flex ai-center">
<img src="/q.png" alt="are you sure" />
<div class="px-2">Are you sure?</div>
</div>
<AButton icon text @click="close" size="10" variant="danger">
X
</AButton>
</div>

  </template>
  <template #default>
    <p>This is modal content using default slot: Lorem ipsum dolor sit ... ?</p>
    <div class="py-3 d-flex jc-end">
      <AButton class="primary" @click="headerslot = false">
        Yes
      </AButton>
      <AButton
        class="secondary ml-3"
        @click="headerslot = false"
        variant="danger"
      >
        No
      </AButton>
    </div>

  </template>
</ADialog>

::: details View Codes

```vue
<template>
  <AButton @click="showingDialog = true">Show dialog</AButton>
  <ADialog v-model="showingDialog" width="500px">
    <template #header="{ close }">
      <div class="d-flex jc-between ai-center" style="background: #e3e3e3; padding: 4px 16px">
        <div class="flex-1 d-flex ai-center">
          <img src="/q.png" alt="are you sure" />
          <div class="px-2">Are you sure?</div>
        </div>
        <AButton icon text @click="close" size="10" variant="danger"> X </AButton>
      </div>
    </template>
    <template #default>
      <p>This is modal content using default slot : Lorem ipsum dolor sit ... ?</p>
      <div class="py-3 d-flex jc-end">
        <AButton class="primary" @click="showingDialog = false"> Yes </AButton>
        <AButton class="secondary ml-3" @click="showingDialog = false" variant="danger">
          No
        </AButton>
      </div>
    </template>
  </ADialog>
</template>

<script setup>
// Imports
const showingDialog = ref('')
</script>
```

:::

## Footer slot

<AButton @click="viewfooterslot = true">Show dialog</AButton>
<ADialog v-model="viewfooterslot" width="500px" title="License Agreement">
<template #default>

<p v-for="i in 5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias, amet esse doloribus dolore aperiam dolorem dolor omnis earum illo nemo debitis quidem saepe repudiandae error deleniti eveniet quod enim?
</p>
</template>
<template #footer="{ close }">

  <div class="p-3 text-right d-flex jc-between" style="background: #f5f5f5">
    <AButton @click="close" variant="success"> I Agree </AButton>
    <AButton @click="close" variant="danger"> Cancel </AButton>
  </div>
  </template>
</ADialog>

::: details View Codes

```vue
<template>
  <AButton @click="showingDialog = true">Show dialog</AButton>
  <ADialog v-model="showingDialog" width="500px" title="License Agreement">
    <template #default>
      <p v-for="i in 5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias, amet esse doloribus
        dolore aperiam dolorem dolor omnis earum illo nemo debitis quidem saepe repudiandae error
        deleniti eveniet quod enim?
      </p>
    </template>
    <template #footer="{ close }">
      <div class="p-3 text-right d-flex jc-between" style="background: #f5f5f5">
        <AButton @click="close" variant="success"> I Agree </AButton>
        <AButton @click="close" variant="danger"> Cancel </AButton>
      </div>
    </template>
  </ADialog>
</template>

<script setup>
// Imports
const showingDialog = ref('')
</script>
```

:::

## Nested Dialog

A Dialog can be nested within another Dialog.

<AButton @click="showingDialog1 = true">Show 1st dialog</AButton>
<ADialog v-model="showingDialog1" width="500px" title="First Dialog">

  <p>First dialog content</p>
  <AButton
      @click="showingDialog2 = true"
      variant="success"
      class="my-3"
    >
      Show 2nd dialog
    </AButton>
    <ADialog
    v-model="showingDialog2"
    width="200px"
    title="Second Dialog"
  >
    <p>
      This is second dialog content. You can open as many dialog as
      you want recursively
    </p>
  </ADialog>
  </ADialog>

::: details View Codes

```vue
<template>
  <AButton @click="showingDialog1 = true">Show 1st dialog</AButton>
  <ADialog v-model="showingDialog1" width="500px" title="First Dialog">
    <p>First dialog content</p>
    <AButton @click="showingDialog2 = true" variant="success" class="my-3">
      Show 2nd dialog
    </AButton>
    <ADialog v-model="showingDialog2" width="200px" title="Second Dialog">
      <p>This is second dialog content. You can open as many dialog as you want recursively</p>
    </ADialog>
  </ADialog>
</template>
```

:::

## Props

Dialog component has the following props.

| Prop name           | Type    | Required | Default value | Details                                                                                                   |
| ------------------- | ------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| modelValue          | Boolean | True     |               | ModelValue to bind using <code>v-model</code> which Specifies whether the dialog should be open or close. |
| closeOnOutsideClick | Boolean | No       | false         | Specify if the dialog will be closed on outside click.                                                    |
| hideHeader          | Boolean | No       | false         | To hide dialog header                                                                                     |
| title               | String  | No       | Dialog title  | Title of the dialog header                                                                                |
| width               | String  | No       | 800px         | Width of the dialog container                                                                             |

## Slots

Dialog component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| default   | Content of the dialog component. | N/A   |
| header    | Content of the dialog header.    | N/A   |
| footer    | Content of the dialog footer.    | N/A   |

## Events

Dialog component supports all native events.
