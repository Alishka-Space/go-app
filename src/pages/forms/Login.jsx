import React from 'react'
import './forms.css'

const Login = () => {
  return ( <div className="form-wrapper">
    <form className="form">
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='password'/>
      <button className="form-btn">Go</button>
    </form>
  </div>
    
  )
}

export default Login
