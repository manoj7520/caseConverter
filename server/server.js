const express=require('express')
const Connect=require('./connection.js')
const bodyParser = require('body-parser');
const cors = require('cors')
const app=express()
require('dotenv').config()


const Port=process.env.PORT_NUM

//middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
 app.use(express.urlencoded({extended: false}))
app.use('/',cors(),require('./controller.js'))

Connect()
app.listen(Port,(req,res)=>{
    console.log(`${Port}`)
})
