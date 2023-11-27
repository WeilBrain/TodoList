const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('../utils/secrets');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой данных установлено успешно.');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
})();

module.exports = sequelize;
