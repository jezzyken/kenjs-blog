//Dependencies
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

//custom
const connectDB = require('./config/database.js')

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} at Port ${PORT}`)
})
