---
title: Button
lang: en-US
layout: docs
---

<script setup lang="ts">
import { AButton} from '../../src/'
import { AButtonMeta } from '../../src/components/AButton/AButton.meta'
import PG from '../../src/playground/PG.vue'
</script>

# Button

The <code>AButton</code> component extend the standard html button with the support of various styles, states and size.

## Import

```js
import { AButton } from 'ayovue'
import 'ayovue/themes/default/button.css'
```

## Playground

<br />

  <div>
    <PG :comp="AButton" :comp-meta="AButtonMeta"></PG>
  </div>

## Props

Button component has the following props.

| Prop name    | Type    | Required | Default value | Details                                                                                                                                                                                                        |
| ------------ | ------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outlined     | Boolean | No       | false         | Add a border class without a background initially.                                                                                                                                                             |
| raised       | Boolean | No       | false         | Add a shadow to indicate elevation.                                                                                                                                                                            |
| rounded      | Boolean | No       | false         | Add a circular border radius to the button.                                                                                                                                                                    |
| flat         | Boolean | No       | false         | Remove border radius.                                                                                                                                                                                          |
| text         | Boolean | No       | false         | Show button as text without a background and border.                                                                                                                                                           |
| icon         | Boolean | No       | false         | Show icon type button                                                                                                                                                                                          |
| loading      | Boolean | No       | false         | Whether the button is in loading state.                                                                                                                                                                        |
| block        | Boolean | No       | false         | Show button with 100% width                                                                                                                                                                                    |
| disabled     | Boolean | No       | false         | To disable the button                                                                                                                                                                                          |
| loader-class | String  | No       | a-loading     | Set the class name of loder element                                                                                                                                                                            |
| variant      | String  | No       | primary       | Defines the color variant of the button which has the following values: <br> <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code> , <code>danger</code> |
| size         | Number  | No       | 16            | Defines the size of the button.                                                                                                                                                                                |

## Slots

Button component has the following slots.

| Slot name | Description                      | Props |
| --------- | -------------------------------- | ----- |
| default   | Content of the button component. | N/A   |

## Events

Button component supports all native events.
