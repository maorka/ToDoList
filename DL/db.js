require('dotenv').config({path:'Server/.env'})

/////credentials for sign-up to mongoDB cloud-atlas
let mongoose = require('mongoose')
connectionString=process.env.CONNECTION_STRING
//let userName = '',pass = '',//...
//  connectionString = `mongodb+srv://${userName}:${pass}@cluster0.9pdxq.mongodb.net/MyDB?retryWrites=true&w=majority`
 //local connection=> 
//  connectionString= 'mongodb://127.0.0.1:27017/testDB'

 /////connect to the  mongoDB cloud-atlas
// async function connectToDB() {
//     try {
//         console.log("try to connect...")
//         await mongoose.connect(connectionString,
//             {
//                 UseNewUrlParser: true,//avoid the DeprecationWarning.
//                 useUnifiedTopology: true,
//             })

//         console.log('mongo connected successfully!')
//     }
//     catch(error) {
//         //throw 'Mongo Not connectes'
//         console.error("mongo not connect: ",error.message)
//     }   
// }
// module.exports = {
//     connectToDB,
// }
 /////connect to the  mongoDB cloud-atlas
console.log('connecting ..')
mongoose.connect(connectionString)
    .then(() => {
        console.log('Mongo connected!')
    })//export automatically