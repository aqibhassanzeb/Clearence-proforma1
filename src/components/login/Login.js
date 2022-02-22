import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  // const history=useHistory();
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
        <div className="pass-txt"><a href="#">Forgot password?</a></div>
        <input type="submit" value="Login"/>
      </form>
      <div className="sign-txt">Not yet member? <Link to="/signup">Signup now</Link></div>
    </div>
    </div>
    )
}

export default Login;
