// controllers/todoController.js
const Todo = require('../models/todoModel');

class TodoService {
  getTodos = async (req, res) => {
    try {
      const todos = await Todo.findAll();
      res.json(todos);
    } catch (err) {
      res.status(200).json({ message: err.message });
    }
  }

  addTodo = async (req, res) => {
    const { title } = req.body;
    try {
      const newTodo = await Todo.create({ title });
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ message: 'Задача не найдена' });
      }
      await todo.destroy();
      res.status(200).json({ message: 'Задача удалена успешно' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  updateTodoStatus = async (req, res, status) => {
    const id = req.params.id;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ message: 'Задача не найдена' });
      }
      todo.status = status;
      await todo.save();
      const message = status ? 'Задача завершена успешно' : 'Задача возобновлена успешно';
      res.status(200).json({ message });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  completeTodo = async (req, res) => {
    await this.updateTodoStatus(req, res, true);
  }

  reopenTodo = async (req, res) => {
    await this.updateTodoStatus(req, res, false);
  }
}

module.exports = new TodoService();
