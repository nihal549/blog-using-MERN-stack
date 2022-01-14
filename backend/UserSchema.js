const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

mongoose.connect('', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})



const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },

     password: {
        type: String,
        required: true,
        trim: true
    },
    //  tokens: [{
    //    token: {
        //    type: String,
      //      required: true
       // }
    //}]
 
})
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismylastwar')

    user.tokens = user.tokens.concat({ token })
    await user.save()
    console.log('from auth')
    return token
}

const User = mongoose.model('user', userSchema)

module.exports = User
