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

</script>

# Dialog

The <code>ADialog</code> component creates a popup dialog / modal on a web page to display content in an overlay window.

<!-- {{ADialogMeta.description}}. -->

## Import

```js
import { ADialog } from 'ayovue'
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
