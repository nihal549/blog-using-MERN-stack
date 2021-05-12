import React from 'react'
import './logout.css'

const Logout =(props)=>{
   

  const  loginHandler=()=>{
          props.history.push('/')
    }
   
    return(
  
        <div className="logout">
            <h1>you logged out Successfully</h1>
            <button onClick={loginHandler}>login again</button>
        </div>
    )
}
export default Logout
