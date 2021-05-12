
import React,{Component} from 'react';
import './login.css'
import axios from'axios'

  
class Login extends Component{
    state={
           email:'',
            password:'',
            registereUser:'',
            registerEmail:'',
            registerPassword:'',
            validUser: false,
           errorMsg :''
       }

loginHandler=(e)=>{
    e.preventDefault()
     axios.post('/login',{
         email: this.state.email,
       password : this.state.password
      
    }).then(res=>{
        
         if(res.status===200){
            this.props.history.push("/home")
        }
        }).catch(
              this.setState({errorMsg: 'invalid credentials'})
        )

    }
registerHandler=(e)=>{
    e.preventDefault()
     axios.post('/register',{
         userName: this.state.registereUser,
       password : this.state.registerPassword,
       email: this.state.registerEmail
      
    }).then(res=>{
        if(res.status===200){
            this.props.history.push("/home")
        }
       
        })

    }
  
 

   render(){
     
    return(
    <div className="Login">
      
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form >
			<h1>Create Account</h1>
			<input type="text" placeholder="Name" value={this.state.registereUser} onChange={e=>this.setState({registereUser:e.target.value})} />
			<input type="email" placeholder="Email" value={this.state.registerEmail} onChange={e=>this.setState({registerEmail:e.target.value})} />
			<input type="password" placeholder="Password" value={this.state.registerPassword} onChange={e=>this.setState({registerPassword:e.target.value})}/>
			<button onClick={(e)=>this.registerHandler(e)}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form>
            <h5>{this.state.errorMsg}</h5>
			<h1>Sign in</h1>
			<input type="email" placeholder="Email"value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
			<input type="password" placeholder="Password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
		
			<button  onClick={(e)=>this.loginHandler(e)}>Sign In</button>
		</form>
	</div>
	
</div>


    </div>
    )}
}

export default Login