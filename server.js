//const mongoose = require('mongoose')
require('dotenv').config({path:'.env'})

const express = require('express')
let app = express()
const localPort=5001;

//local connection=>

//const db = require("./db")
//db.connectToDB()

//app.use(express.static('public'))//uncommenet for client html ,use it for public files,have to be before express.json
//app.use(express.static('/build'))//after npm run build
app.use(require('cors')())//cores package->uncomment that for requsts from other project client-approve to send to different domain
app.use(express.json())//for body creation,middleware
app.use(express.static('client/build'))
//app.use(express.urlencoded())//wait for detail from documents/From data

const router = require('./router')//require('./router')(app)

router(app)


app.listen(process.env.PORT || localPort, () =>process.env.PORT 
? console.log(`Server Is Running on general port: ${process.env.PORT } ` ):console.log(` Server Is Running on local port: ${localPort}`))

