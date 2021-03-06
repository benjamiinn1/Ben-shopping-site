import express from 'express'
import dotenv from 'dotenv'
import 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

// added a comment
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
)
