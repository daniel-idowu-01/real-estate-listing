import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'

dotenv.config();

const app = express();

// connecting to the database
mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to the database')
})
.catch(() => {
    console.log('Not connected')
})


///////////
app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!')
})