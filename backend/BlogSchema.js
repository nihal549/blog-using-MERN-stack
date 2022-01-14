const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nv1723:nv1723@cluster0.hkkvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
