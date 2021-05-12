const express = require('express')
const app = express()
const port = process.env.Port || 5454
const bcrypt = require('bcrypt')
//fetching from db
const Blog= require('./BlogSchema')
const User = require('./UserSchema')


//using json data
app.use(express.json())

//blog related routes
app.get('/posts',(req,res)=>{
    Blog.find({}).then(allDocs=>{
      res.send(allDocs)
    })
})

app.post('/add',async(req,res)=>{
    const title = req.body.title
    const content = req.body.content
    const author=req.body.author

     const data={ title,
                  content ,
                  author}
     const addedData = new Blog(data)

    try {
        await addedData.save()
        res.status(200).send(addedData)
    } catch (e) {
        res.status(400).send(e)
    }
})
app.get('/:id', async (req, res) => {
     const _id = req.params.id

    try {
        const blog = await Blog.findById(_id)
        if (!blog) {
            return res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)

        if (!blog) {
            res.status(404).send()
        }

        res.send(blog)
    } catch (e) {
        res.status(500).send()
    }
})

//user routes
app.post('/register',async (req,res)=>{
    const password = req.body.password
const hashedPassword = await bcrypt.hash(password, 8)
  const user = new User({userName:req.body.userName,
                         email: req.body.email,
                         password:hashedPassword})

    try {
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(400)
    }
  
})
//login
app.post('/login',async (req,res)=>{
 
    try {
        
        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password,user.password)
      // const token = await User.generateAuthToken()
        if (isMatch) {
            res.status(200).send()
        }
     } catch (e) {
        res.status(400).send('error')
    }
})

app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})