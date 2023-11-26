import axios from 'axios';

class TodoAPI {
  constructor() {
    this.baseURL = import.meta.env.VITE_BASE_URL;
    this.todosURL = `${this.baseURL}/todos`;
    this.addTodosUrl = `${this.baseURL}/addTodos`;
  }

  async getTodos() {
    try {
      const response = await axios.get(this.todosURL);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении списка задач:', error);
      throw error;
    }
  }

  async addTodo(title) {
    try {
      const response = await axios.post(this.addTodosUrl, { title, status: false });
      return response.data;
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
      throw error;
    }
  }

  async deleteTodo(id) {
    try {
      const deleteURL = `${this.todosURL}/deleteTodos/${id};`;
      const response = await axios.delete(deleteURL);
      return response.data;
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
      throw error;
    }
  }
  
  async completeTodo(id) {
    try {
      const completeURL = `${this.todosURL}/complateTodos/${id};`;
      const response = await axios.put(completeURL, { status: true });
      return response.data;
    } catch (error) {
      console.error('Ошибка при завершении задачи:', error);
      throw error;
    }
  }

  async fetchReopenTodo(id) {
    try {
      const reopenURL = `${this.todosURL}/reopenTodo/${id};`;
      const response = await axios.put(reopenURL, { status: true });
      return response.data;
    } catch (error) {
      console.error('Ошибка при завершении задачи:', error);
      throw error;
    }
  }
}

export default TodoAPI;