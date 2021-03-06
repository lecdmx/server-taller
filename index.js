const express = require('express')
const app = express()
const router = require('./routes')
const { db } = require('./config/database')
const bodyParser = require('body-parser')

db.authenticate()

const PORT = 4001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => {
  console.log(`App listen port ${PORT}`)
})
