const { logger } = require('../../utils/logger');
const { createTableTodos } = require('../queries');
const dbConfig = require('../../config/db.config');

(() => {
  dbConfig.query(createTableTodos, (err1, _) => {
    if (err1) {
      logger.error(err1.message);
      return;
    }
  });
})();

