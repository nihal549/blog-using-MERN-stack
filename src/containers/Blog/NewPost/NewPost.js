import React, { Component } from 'react';
import axios from 'axios'
import {Redirect,NavLink} from 'react-router-dom'
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        submitted: false
    }
    

    addPostHandler= ()=>{
    axios.post('/add',{
         title: this.state.title,
        content: this.state.content,
        author: this.state.author
        }).then(res=>{
           this.setState({
                submitted:true
            })
        
        })
    }

    render () {
        let redirect =null;

        
        if(this.state.submitted===true){
            redirect=<Redirect to="/home"/>
        }
        return (
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
            <div className="NewPost">
                 {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <input type="text" value={this.state.author} onChange={(event)=>{this.setState({author:event.target.value})}}/>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
            </div>
        );
    }
}

export default NewPost;