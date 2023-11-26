<template>
  <div class="todo-app">
    <Header title="Твой список задач" />
    <main class="main">
      <div class="container">
        <div class="todos">
          <NewTaskForm @addTodo="addNewTodo" />
          <TaskList
            :todos="state.todos"
            @delete-todo="deleteTodo"
            @complete-todo="completeTodo"
            @reopen-todo="reopenTodo"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, onMounted,} from "vue";
import Header from "../components/theHeader.vue";
import TaskList from "../components/TodoTaskList.vue";
import NewTaskForm from "../components/TodoTaskForm.vue";

import TodoAPI from "../services/todos.services";

const state = reactive({
  todos: [],
});

const props = defineProps({
  deleteTask: Function,
  completeTask: Function,
});

const todoAPI = new TodoAPI();

const fetchTodos = async () => {
  try {
    state.todos = await todoAPI.getTodos();
  } catch (error) {
    console.error("Ошибка при загрузке списка задач:", error);
  }
};

const addNewTodo = async (newTodo) => {
  try {
    if (newTodo.trim() !== "") {
      const addedTodo = await todoAPI.addTodo(newTodo);
      state.todos.unshift(addedTodo);
    } else {
      alert("Введите текст задачи");
    }
  } catch (error) {
    console.error("Ошибка при добавлении задачи:", error);
  }
};

const deleteTodo = async (id) => {
  console.log(id);
  try {
    await todoAPI.deleteTodo(id);
    state.todos = state.todos.filter((todo) => todo.id !== id);
  } catch (error) {
    console.error("Ошибка при удалении задачи:", error);
  }
};

const completeTodo = async (id) => {
  try {
    await todoAPI.completeTodo(id);
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: true };
      }
      return todo;
    });
    state.todos = updatedTodos;
  } catch (error) {
    console.error("Ошибка при завершении задачи:", error);
  }
};

const reopenTodo = async (id) => {
  try {
    await todoAPI.fetchReopenTodo(id);
    state.todos = state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: false };
      }
      return todo;
    });
  } catch (error) {
    console.error("Ошибка при возобновлении задачи:", error);
  }
};

onMounted(fetchTodos);
</script>

<style lang="scss" scoped>
.todo-app {
  font-family: Monserat, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.main {
  width: 100%;
}

.todos {
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding-right: 5px;
  border: 1px solid #dce1e6;
  padding-bottom: 20px;
}
</style>
