---
title: Toast
lang: en-US
layout: docs
---

<script setup lang="ts">

import { ref, reactive, computed } from "vue";

import { AButton, AToasts, AToast } from '../../src/'
import { generateComponentCode } from "../utils/functions";


import { useToast } from "../../src";

const { showToast } = useToast();

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
    type: "success",
    detail: "Done successfully",
    summary: "Success",
    duration: 44444,
    group
  });
}

function showSuccessToast() {
  showToast({
    type: "success",
    detail: "Done successfully",
    summary: "Success",
    duration: 3333
  });
}

function showDangerToast() {
  showToast({
    type: "danger",
    detail: "Something went wrong!",
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

The <code>AToast</code> component is used to display messages in an overlay.

<div>
  <AToasts position="top-right"> </AToasts>
  <AToasts position="top-left" group="tl"> </AToasts>
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

<div class="row gap-0 mt-4">
  <div class="col-md-4">
    <h2>Default toast</h2>
    <div class="playground__item mt-3">
      <AButton @click="showSuccessToast()">Success Toast</AButton> <br />
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
      <AButton @click="generateToast('bl')" class="mt-2">
        Bottom Left Success
      </AButton>
      <br />
      <AButton @click="generateToast('bc')" class="mt-2">
        Bottom Center Success
      </AButton>
      <AButton @click="generateToast('tr')" class="mt-2">
        Top Right Custom Slot
      </AButton>
    </div>
  </div>
</div>
