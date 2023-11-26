const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Todo = sequelize.define('todos', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false, // Отключаем автоматические поля createdAt и updatedAt
});

module.exports = Todo;

