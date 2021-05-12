import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null,
        title:null,
        body: null
    }
     componentDidMount () {

        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
              
               axios.get('/'+this.props.match.params.id)
                    .then( response => {
                    this.setState( { loadedPost: response.data,
                                         title:response.data.title,
                                          body: response.data.content } );
                    } );
               
            }
        }
    }
    deleHandler=()=>{
     axios.delete('/delete/'+this.state.loadedPost._id)
        .then(res=>{
             if(res.status===200){
            this.props.history.push("/home")
        }
        })
    }
    redirectHandler=()=>{
         this.props.history.push("/home")
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = (
                
            <div className="FullPost">
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
                <div className="Edit">
                    <button onClick={this.redirectHandler}>Back</button>
                { /* <button className="Delete" onClick={this.deleHandler}>Delete</button>*/}
                </div>
            </div>

        );
        }
        return post;
    }
}

export default FullPost;