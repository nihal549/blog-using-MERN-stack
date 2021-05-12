import React, { Component } from 'react';
import FullPost from './FullPost/FullPost'
import {Route,NavLink,Switch} from 'react-router-dom'
import Posts from './posts/Posts'
import NewPost from './NewPost/NewPost'

import './Blog.css';
//import Login from './Login/Login';


class Blog extends Component {
  
    render () {
       
        return (
            <div className="blog">
                <div className="blog">
                <header>
                    <nav>
                        <ul>
                           
                            <li><NavLink to="/posts" exact>Home</NavLink></li>
                            <li><NavLink to ={{
                                pathname:'/new-post'
                            }}>NewPost</NavLink></li>
                           
                          
                        </ul>
                    </nav>
                </header>
                <Switch>
                  
                   <Route path ="/posts" exact component={Posts}/>
                 <Route path ="/new-post" exact component={NewPost}/>
                
                  <Route path ="/:id" exact component={FullPost}/>
               
                </Switch>
            
            </div>
            </div>
        );
    }
}

export default Blog;