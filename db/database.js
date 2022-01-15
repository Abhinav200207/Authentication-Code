var mongoose = require('mongoose');


const connectDatabase = () => {
    return mongoose.connect("mongodb+srv://Abhinav:abhinav123@nodejsproject.pwxex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((data)=>{
        console.log(`Connected to database ${data}`)
    })
}

module.exports = connectDatabase
