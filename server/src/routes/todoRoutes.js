// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Маршрут для получения всех задач
router.get('/todos', todoController.getTodos);

// Маршрут для добавления новой задачи
router.post('/addTodos', todoController.addTodo);

// Маршрут для удаления задачи
router.delete('/todos/deleteTodos/:id', todoController.deleteTodo);

// Маршрут для завершения задачи
router.put('/todos/complateTodos/:id', todoController.completeTodo);

// Маршрут для повторного открытия задачи
router.put('/todos/reopenTodo/:id', todoController.reopenTodo);

module.exports = router;
