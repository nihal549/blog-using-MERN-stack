const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    }
})



const Blog = mongoose.model('blog', blogSchema)


module.exports = Blog