import { createWebHistory, createRouter } from "vue-router";
import todoListView from '../views/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: todoListView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
