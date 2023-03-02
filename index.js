import express from 'express'
const app = express()
import cors from 'cors'
import connectdB from './db.js'
import userRouter from './backend/routes.js'
app.use(cors())
app.use(express.json())
app.use('/',userRouter)
app.listen(8080,()=>{
    console.log('server conected')
    connectdB()
})