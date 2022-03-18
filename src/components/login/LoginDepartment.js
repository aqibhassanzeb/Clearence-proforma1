import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'


const LoginDepartment = () => {
  
    return (
      <div className='Login'>
      <div className="login-wrapper">
      <header className='loginwriting'>Login Page</header>
      <form action="#">
        <div className="field email">
          <div className="input-area">
            <input type="text" placeholder="Email Address"/>
            <i className="icon fas fa-envelope"></i>
            <i className="error error-icon fas fa-exclamation-circle"></i>
          </div>
          <div className="error error-txt">Email can't be blank</div>
        </div>
        <div className="field password">
          <div className="input-area">
            <input type="password" placeholder="Password"/>
            <i className="icon fas fa-lock"></i>
            <i className="error error-icon fas fa-exclamation-circle"></i>
          </div>
          <div className="error error-txt">Password can't be blank</div>
        </div>
        <input type="submit" value="Login"/>
      
        <div className="pass-txt mt-4"><Link to='#'>Forgot password?</Link></div>
      </form>
      
    </div>
    </div>
    )
}

export default LoginDepartment;
