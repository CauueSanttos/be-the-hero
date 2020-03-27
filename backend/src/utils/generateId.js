const crypto = require('crypto');

module.exports = function () {
  return crypto.randomBytes(4).toString('HEX');
}
