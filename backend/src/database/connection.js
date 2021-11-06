const knex = require('knex')
const configuration = require('../../knexfile.js')
const variable = process.env.NODE_ENV == 'test'?configuration.test:configuration.development
const connection = knex(variable)

module.exports = connection;