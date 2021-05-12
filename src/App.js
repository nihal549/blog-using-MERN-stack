import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Blog from './containers/Blog/Blog';
import Login from './containers/Blog/Login/Login'
import FullPost from './containers/Blog/FullPost/FullPost'
import Posts from './containers/Blog/posts/Posts'
import NewPost from './containers/Blog/NewPost/NewPost'
import Logout from './components/Post/logout/logout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
       <Route path ="/" exact component={Login}/>
       <Route path ="/home" exact component={Posts}/>
       <Route path ="/new-post" exact component={NewPost}/>
       <Route path ="/logout" exact component={Logout}/>
       <Route path ="/:id" exact component={FullPost}/>
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
