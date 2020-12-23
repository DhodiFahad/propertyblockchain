import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv'
const app = express()


dotenv.config({path:'./.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Connected to db successfully...')
    }
})

app.use('/test',(req,res,next)=>{
    res.send('it works')
    next()
})

// Routes
app.use('/auth',require('./routes/auth'))

app.listen(4500,()=>{console.log("running on 4500")})