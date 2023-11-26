<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span class="line" :style="{ backgroundColor: todo.color }"></span>
        <div class="block">
          <span class="title">{{ todo.title }}</span>
          <span
            :class="{ status: true, completed: todo.status }"
            :style="{ backgroundColor: todo.color }"
          >
            {{ todo.status ? "Завершено" : "В процессе" }}</span
          >
        </div>
        <div class="buttons">
          <vBtn
            @click="deleteHandler(todo.id)"
            :delete="true"

          />

          <vBtn
            :return="true"
            v-if="todo.status"
            @click="reopenHandler(todo.id)"
          />
          <vBtn
            v-else
            @click="completeHandler(todo.id)"
            :complete="true"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, } from "vue";
import vBtn from "../components/common/VBtn.vue";
const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});

const todos = ref([]);

const emit = defineEmits(["delete-todo", "complete-todo", "reopen-todo"]); // Добавлен emit для возобновления задачи

const deleteHandler = (id) => {
  emit("delete-todo", id);
};

const completeHandler = (id) => {
  emit("complete-todo", id);
};

const reopenHandler = (id) => {
  emit("reopen-todo", id);
};


const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

watch(() => {
  props.todos.forEach((todo) => {
    todo.color = todo.color || getRandomColor();
  });
  todos.value = [...props.todos];
});
</script>

<style lang="scss" scoped>
.todo-list {
  margin-top: 20px;
  max-height: 60rem;
  padding: 0 20px 20px 20px;
  overflow: auto;
  ul {
    list-style: none;
    padding: 0;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  .todo-item {
    position: relative;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    span {
      margin-right: 4px;
    }
  }
}

.line {
  position: absolute;
  content: "";
  height: 100%;
  width: 3.5px;
  border-radius: 15px;
  left: 0;
  top: 0;
}

.title {
  font-size: 20px;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.status {
  color: #fff;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 1.5rem;
}

</style>
