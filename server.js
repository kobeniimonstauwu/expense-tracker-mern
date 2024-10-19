const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const connectDB = require('./config/db')

const transactions = require('./routes/transactions')

dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// app.get('/', (req, res) => res.send('Hello')) //HTTP REQUEST, it will respond with hello when you hit this or get this request - '/' (at your port 5000) - Happens if it's in the same file
app.use('/api/v1/transactions', transactions) // The first one is the route you want to hit/connect, while transactions is the actual route
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))