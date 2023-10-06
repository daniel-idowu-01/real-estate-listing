import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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
app.get('/', (req, res) => {
    res.send('Hello!! Server is active');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!')
})