<!-- Header.vue -->
<template>
  <header class="header">
    <div class="container">
      <h1 class="todo-title">{{ title }}</h1>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.todo-title {
  color: #222222;
  font-size: 25px;
}
</style>
