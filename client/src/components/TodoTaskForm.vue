<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" placeholder="Добавить задачу..." />
    <button type="submit">
      <img src="../assets/papper-plane.svg" alt="" />
    </button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(["addTodo"]);

const newTodo = ref("");

const addTodo = () => {
  emits("addTodo", newTodo.value);
  newTodo.value = "";
};
</script>

<style scoped lang="scss">
form {
  margin: 20px 20px 0px 20px;
  gap: 2.5rem;
  position: relative;
  display: flex;
}

input {
  padding: 15px 12px;
  border: 1px solid #dce1e6;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  transition: all 0.2s;
  &:focus {
    border-color: #5C61ED;
    outline: none;
  }
}

button {
  padding: 5px;
  border: none;
  background: rgba(174, 183, 194, 0.12);
  color: #222222;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
}
</style>
