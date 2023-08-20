---
title: Toasts
lang: en-US
layout: docs
---

<script setup lang="ts">

import { ref, reactive, computed } from "vue";
import { AButton, AToasts, AToast } from '../../src/'
import { generateComponentCode } from "../utils/functions";
import { useToast } from "../../src";
const { showToast } = useToast();
const toast = useToast();

const code = computed(() => {
  // return generateComponentCode(componentData);
  return `function showInfoToast() {
  showToast({
    type: "info",
    detail: "Account will be verified soon",
    summary: "Information",
    duration: 3333,
    group: "br"
  });
}`;
});

function generateToast(group?: string) {
  showToast({
    type: "info",
    detail: "Done successfully",
    summary: "Success -> info summary",
    duration: 44444,
    group
  });
}

function showSuccessToast() {
  toast.showToast({
    type: "success",
    detail: "successfully done",
    summary: "Success",
    duration: 3333,
    group: "tpr"
  });
}

function showDangerToast() {
  showToast({
    type: "danger",
    detail: "Something went wrong! tl",
    summary: "Error",
    duration: 3333,
    group: "tl"
  });
}

function showWarningToast() {
  showToast({
    type: "warning",
    detail: "This might cause error!",
    summary: "Warning",
    duration: 3333,
    group: "tc"
  });
}

function showInfoToast() {
  showToast({
    type: "info",
    detail: "Account will be verified soon",
    summary: "Information",
    duration: 3333,
    group: "br"
  });
}


</script>

<style>

.custom-toast {
  /* border: 1px solid gray; */
  min-height: 99px;
  width: 333px;
  padding: 15px 9px;
  color: #22c55e;
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 4px;
  position: relative;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  padding: 5px 9px;
  color: red;
  opacity: 0.8;
}

.close-button:hover {
  opacity: 1;
}
</style>

# Toast

The <code>AToasts</code> component is used to display messages in an overlay.

<div>
  <AToasts position="top-left" group="tl"></AToasts>
  <AToasts position="top-right" group="tpr"> </AToasts>
  <AToasts position="top-center" group="tc"> </AToasts>
  <AToasts position="bottom-left" group="bl"> </AToasts>
  <AToasts position="bottom-right" group="br"> </AToasts>
  <AToasts position="bottom-center" group="bc"> </AToasts>
  <AToasts position="top-right" group="tr">
    <template #default="{ toast, close }">
      <div class="custom-toast">
        <div class="ta-right">
          <button @click="close(toast)" class="close-button">X</button>
        </div>
        <div class="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" style="max-hright: 44px" alt="" />
          <h2>{{ toast.summary }}</h2>
          <p>{{ toast.detail }}</p>
        </div>
      </div>
    </template>
  </AToasts>
</div>

## Import

```js
import { AToasts } from 'ayovue'
```

### useToast

Toast component is controlled via the <code>useToast</code> composable that needs to be import.

```js
import { useToast } from 'ayovue'
```

Then the <code>showToast</code> function can be used to configure toasts as

```js
const toast = useToast()
toast.showToast(object)
```

### showToast()

showToast() function takes an object with the following properties to define toasts:

1. <b>type</b> : Defines the color variant of toast which has the values primary, secondary, info, success, warning, danger.
2. <b>detail</b> : Description of the toast.
3. <b>summary</b> : Title of the toast.
4. <b>duration</b> : Duration in seconds to show toast.
5. <b>group</b> : Define the group of toast witch is connected with the group prop of the toast component.

## Examples

<br/>

<AButton @click="showSuccessToast()">Top right primary</AButton> <br />
::: details View Codes

```vue
<template>
  <AButton @click="showSuccessToast()">Top right primary</AButton>
  <AToasts position="top-right" group="tr"> </AToasts>
</template>

<script setup>
// Imports
import { AButton, AToasts, useToast } from 'Ayovue';
const toast = useToast();

function showSuccessToast() {
  toast.showToast({
    type: "success",
    detail: "successfully done",
    summary: "Success",
    duration: 3000,
    group: "tr"
  });
}
<script>


```

:::

<div class="row gap-0 mt-4">
  <div class="col-md-4">
    <h2>Examples</h2>
    <div class="playground__item mt-3">
      <AButton @click="showSuccessToast()">Top right primary</AButton> <br />
      <AButton @click="showDangerToast" class="mt-2" variant="danger">
        Top Left Danger
      </AButton>
      <br />
      <AButton @click="showWarningToast" class="mt-2" variant="warning">
        Top Center Warning
      </AButton>
      <br />
      <AButton @click="showInfoToast" class="mt-2" variant="info">
        Bottom Right Info
      </AButton>
      <br />
      <AButton @click="generateToast('bl')" class="mt-2" variant="info">
        Bottom Left info
      </AButton>
      <br />
      <AButton @click="generateToast('bc')" class="mt-2" variant="info">
        Bottom Center Success
      </AButton>
      <AButton @click="generateToast('tr')" class="mt-2">
        Top Right Custom Slot
      </AButton>
    </div>
  </div>
</div>
