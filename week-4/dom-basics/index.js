const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

app.get('/sum' , (req , res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b
    res.send(sum.toString())
})

app.get('/interest' , (req , res)=>{
    const principle = parseInt(req.query.principle)
    const roi = parseInt(req.query.roi)
    const time = parseInt(req.query.time)

    const interest = (principle * roi * time) / 100;
    const total = principle + interest
    res.send({
        total: total,
        interest: interest
    })
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))