import React,{Component} from 'react'
import axios from 'axios'
import {Link,NavLink} from 'react-router-dom'
import Post from '../../../components/Post/Post'
import  './Posts.css'
class Posts extends Component{
 state={
        posts: [],
      
    }
    componentDidMount(){
       // axios.get('https://jsonplaceholder.typicode.com/posts')
       axios.get('/posts')
        .then(res=>{
            const posts= res.data
          /* const updatedPost = posts.map(post=>{
                return{
                    ...post,   author:"NIHAL"
                }
            })*/
         this.setState({
             posts
         })
        })
    }

  postClickHandler= (id)=>{
    this.setState({
        
        selectedId:id})
  }
  render(){
       const posts = this.state.posts.map(post=>{
            return(<Link to={"/"+post._id} key={post._id} >
               <Post
               clicked={()=>this.postClickHandler(post._id)}
                 title={post.title} author={post.author} key={post._id}/>
             </Link>)
        })
        return(
            <div>
             <div className="nav">
                  <header>
                    <nav>
                        <ul>
                           
                            <li><NavLink to="/home" exact>Home</NavLink></li>
                            <li><NavLink to ={{
                                pathname:'/new-post'
                            }}>NewPost</NavLink></li>
                           <li><NavLink to ={{
                                pathname:'/logout'
                            }}>Logout</NavLink></li>
                          
                        </ul>
                    </nav>
                </header>
                </div>
            <section className ="Posts">
                
                {posts}
            </section>
            </div>
        )
  }
}

export default Posts