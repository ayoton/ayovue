---
title: Input
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ref }  from "vue"
import { ACollapse, AButton } from '../../src/'
import { ACollapseMeta } from '../../src/components/ACollapse/ACollapse.meta'


const opened = ref(false);

</script>

<style>
  .my-p {
    border: 1px solid gray;
    padding: 22px;
    border-radius: 10px;
    background-color: #7fffd4;
  }
</style>

<div>
  <h2> Collapse </h2>
  <p> {{ ACollapseMeta.description }} </p>
  <AButton @click="opened = !opened">Show / Hide</AButton>
  <ACollapse :open="opened">
    <p class="my-p">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi cum
      asperiores magni blanditiis nostrum, nesciunt fuga ex mollitia veritatis
      aut dolorum ea! Cumque itaque perspiciatis culpa iste deleniti illo.
    </p>
  </ACollapse>
</div>
