const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors())

//
const escuchar =require('./routes')
escuchar(app)

app.listen('9090',function(){
    console.log('Escuchando en el puerto 9090')
})
