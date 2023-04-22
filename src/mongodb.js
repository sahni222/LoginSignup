const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignupTutirial")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LoginCollection = new mongoose.model('LoginCollection', logInSchema)

module.exports = LoginCollection