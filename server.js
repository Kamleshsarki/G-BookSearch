require('./config')
const express = require('express')
const { join } = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(join(__dirname, 'client', 'build', 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connection.once('open', () => app.listen(PORT))