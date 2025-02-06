<template>
  <hr :class="`style-seven ${props.class}`" />
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  class: String,
});
</script>
<style>
.style-seven {
  overflow: visible; /* For IE */
  height: 30px;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
.style-seven:before {
  /* Not really supposed to work, but does */
  display: block;
  content: '';
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: black;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}
</style>
