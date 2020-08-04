import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import cmsRoutes from './cms/routes'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

dotenv.config()
console.log(process.env.DB_URL)
const uri = process.env.DB_URL
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
}).catch((reason) => {
  console.log('Failed to connect to db', reason)
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB connected')
})

app.use('/cms', cmsRoutes)

app.get('/', (req, res) => {
  res.send(`Hello the db is at: ${process.env.DB_URL}`)
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
