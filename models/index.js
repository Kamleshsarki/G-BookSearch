const { model, Schema } = require('mongoose')

const Book = require('./Book')(model, Schema)

module.exports = { Book }