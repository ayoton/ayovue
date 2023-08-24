---
title: Input Field
lang: en-US
---

<script setup lang="ts">
import { AInput} from '../../src/'
import { AInputMeta } from '../../src/components/AInput/AInput.meta'
import PG from '../../src/playground/PG.vue'
</script>

# Input Field

The <code>AInput</code> component extend the standard input element which has various types such as text, number, email, password, search, url, tel, date, time, range and color with the support of various styles, states and size.

## Import

```js
import { AInput } from 'ayovue'
import 'ayovue/themes/default/input.css'
```

## Examples

<br/>

<AInput placeholder="text" /><br/>
<AInput type="number" placeholder="number"/><br/>
<AInput type="password" placeholder="password"/><br/>
<AInput type="search" placeholder="search"/><br/>
<AInput type="date" placeholder="date"/><br/>
<AInput type="time" placeholder="time"/><br/>
<AInput type="range" placeholder="range"/><br/>
<AInput type="color" placeholder="color"/><br/>
<AInput type="text" floatingLabel="Floating Label"/><br/>

## Playground

<br/>

  <div>
    <PG :comp="AInput" :comp-meta="AInputMeta"></PG>
  </div>

## Props

Input component has the following props.

| Prop name     | Type    | Required | Default value | Details                                                                                                                                                                                                                                                                    |
| ------------- | ------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabled      | Boolean | No       | false         | To disable the input field                                                                                                                                                                                                                                                 |
| clearable     | Boolean | No       | false         | To clear the input.                                                                                                                                                                                                                                                        |
| variant       | String  | No       | primary       | Defines the color variant of the input field which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code>                                                        |
| size          | Number  | No       | 16            | Defines the size of the input field.                                                                                                                                                                                                                                       |
| type          | String  | No       | text          | Defines the type of input which has the following values: <br> <code>text</code>, <code>number</code>, <code>email</code>, <code>password</code>, <code>search</code> , <code>url</code> , <code>date</code> , <code>time</code> , <code>range</code> , <code>color</code> |
| placeholder   | String  | No       |               | To add placeholder.                                                                                                                                                                                                                                                        |
| floatingLabel | String  | No       |               | To add floatingLabel.                                                                                                                                                                                                                                                      |

## Slots

Input component has the following slots.

| Slot name | Description                     | Props |
| --------- | ------------------------------- | ----- |
| default   | Content of the input component. | N/A   |

## Events

Input component supports all native events.
