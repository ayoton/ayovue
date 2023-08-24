---
title: CheckBox
lang: en-US
---

<script setup lang="ts">
import { ACheckbox} from '../../src/'
import { ACheckboxMeta } from '../../src/components/ACheckbox/ACheckbox.meta'
import PG from '../../src/playground/PG.vue'
import { ref } from 'vue'
const v=ref(true);
</script>

# Checkbox

The <code>ACheckbox</code> component extend the standard html checkbox element with the support of various styles, states and size.

## Import

```js
import { ACheckbox } from 'ayovue'
import 'ayovue/themes/default/checkbox.css'
```

## Example

<br/>

<ACheckbox variant="info" label="default"/>
<ACheckbox variant="info" outlined label="outlined"
 />
 <ACheckbox variant="info" outlined disabled label="disabled"
 />
 <ACheckbox variant="info" outlined disabled v-model=v label="checked"
 />
 <ACheckbox variant="info" disabled v-model=v label="checked"
 /><br/>
 <ACheckbox variant="info" rounded label="rounded"
 />
 
 <ACheckbox variant="info" rounded outlined label="outlined"
 />
 <ACheckbox variant="info" rounded disabled label="disabled"
 />
 <ACheckbox variant="info" rounded outlined disabled v-model=v label="checked"
 />
 <ACheckbox variant="info" rounded disabled v-model=v label="checked"
 />

## Playground

<br/>

  <div>
    <PG :comp="ACheckbox" :comp-meta="ACheckboxMeta">
      <template #default="{ vModels }">
        <ACheckbox v-bind="vModels" />
      </template>
    </PG>
  </div>

## Props

Checkbox component has the following props.

| Prop name  | Type    | Required | Default value | Details                                                                                                                                                                                                      |
| ---------- | ------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| label      | String  | No       |               | Define a lable for the checkbox.                                                                                                                                                                             |
| name       | String  | No       |               | <b>Define a name for the checkbox Element.</b>                                                                                                                                                               |
| value      | any     | No       |               | Value for the checkbox Element.                                                                                                                                                                              |
| modelValue | any     | No       |               | ModelValue to bind using v-model.                                                                                                                                                                            |
| outlined   | Boolean | No       | false         | Enable outlined variant.                                                                                                                                                                                     |
| rounded    | Boolean | No       | false         | Enable rounded variant.                                                                                                                                                                                      |
| disabled   | Boolean | No       | false         | Make the checkbox disable.                                                                                                                                                                                   |
| variant    | String  | No       | primary       | Defines the color variant of checkbox which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size       | Number  | No       | 16            | Defines the size of the checkbox.                                                                                                                                                                            |

## Slots

Checkbox component has the following slots.

| Slot name | Description                        | Props |
| --------- | ---------------------------------- | ----- |
| default   | Content of the Checkbox component. | N/A   |

## Events

Checkbox component supports all native events.
