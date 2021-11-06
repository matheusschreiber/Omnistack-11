const crypto = require('crypto')

module.exports = function createUniqueId(){
  return crypto.randomBytes(4).toString('HEX')
}