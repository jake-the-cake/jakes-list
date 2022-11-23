import Express from 'express'
import Mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const APP = Express()
const PORT = process.env.PORT || 4200
dotenv.config()

APP.use( Express.urlencoded({ extended: true }))
APP.use( Express.json() )
APP.use( cors() )

Mongoose
  .connect( process.env.MONGO_DB as string, () => {
    console.log( 'Database is running...' )
  } )

APP.listen( PORT, () => {  
  console.log(`Jake's List API live on port ${ PORT }`)
})