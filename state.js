const fetch = require('./fetch');
const put   = require('./put');

module.exports = async(dynamoDb, event, state, tableName) => {
  switch (state) {
    case 'up':
      // Closed
      break;
    case 'down':
      // Open and/or degraded

      break;
  }
};