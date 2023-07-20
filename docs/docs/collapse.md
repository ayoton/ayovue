---
title: Input
lang: en-US
layout: docs
---

<script setup lang="ts">
import { ref }  from "vue"
import { ACollapse, AButton } from '../../src/'

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
  <p> Collapse is lorem ipsum ... </p>
  <AButton @click="opened = !opened">Show / Hide</AButton>
  <ACollapse :open="opened">
    <p class="my-p">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nisi cum
      asperiores magni blanditiis nostrum, nesciunt fuga ex mollitia veritatis
      aut dolorum ea! Cumque itaque perspiciatis culpa iste deleniti illo.
    </p>
  </ACollapse>
</div>
