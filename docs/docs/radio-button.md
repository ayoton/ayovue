---
title: Radio Button
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ARadio} from '../../src/'
import { ARadioMeta } from '../../src/components/ARadio/ARadio.meta'
import PG from '../../src/playground/PG.vue'
import { ref } from 'vue'
const v=ref('value1');
</script>

# Radio Button

The <code>ARadio</code> component extend the standard html radio button with the support of various styles, states and size.

## Example

<br/>

<ARadio
  name="name"
  label="option1"
  variant="info"
  value="value1"
  v-model =v
 />
<ARadio
  name="name"
  label="option2"
  variant="info"
  value="value2"
  v-model =v
 />
<ARadio
  name="name"
  label="option3"
  variant="info"
  value="value3"
  v-model =v
 />
<br/><br/>
<b>Selected value:</b> {{v}}

## Playground

<br/>

  <div>
    <PG :comp="ARadio" :comp-meta="ARadioMeta">
      <template #default="{ vModels }">
        <ARadio v-bind="vModels" />
      </template>
    </PG>
  </div>

## Props

Radio component has the following props.

| Prop name | Type    | Required | Default value | Details                                                                                                                                                                                                              |
| --------- | ------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | String  | Yes      |               | Define a name for Radio Element.                                                                                                                                                                                     |
| label     | String  | No       | false         | Define a label.                                                                                                                                                                                                      |
| value     | Boolean | Yes      |               | Value for the current Radio component.                                                                                                                                                                               |
| disabled  | Boolean | No       | false         | Make the radio disable.                                                                                                                                                                                              |
| variant   | String  | No       | primary       | Defines the color variant of the Radio button which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size      | Number  | No       | 16            | Defines the size of the radio button.                                                                                                                                                                                |

## Slots

Radio component has the following slots.

| Slot name | Description                            | Props |
| --------- | -------------------------------------- | ----- |
| default   | Content of the radio button component. | N/A   |

## Events

Radio component supports all native events.
