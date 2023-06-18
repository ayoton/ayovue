---
title: Button
lang: en-US
layout: docs
---

<script setup lang="ts">
 import {shallowRef} from "vue"; 
import { ADialog, AButton} from '../../src/'
import { ADialogMeta } from '../../src/components/ADialog/ADialog.meta'
import PG from '../../src/playground/PG.vue'

const showingDialog = shallowRef(false);

</script>

# Dialog

{{ADialogMeta.description}}.

## Dialog Playground

&nbsp;

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

Button component has the following props.

## {{ADialogMeta.description}}.

| Slot name | Description |
| --------- | ----------- |
| nn        | dd          |

## Slots

Button component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| default   | Content of the button component. | N/A   |

## Events

Button component supports all native events.
