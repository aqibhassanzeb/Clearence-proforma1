import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  return (<>
    <div className='Login'>
      <ToastContainer />
      <div className="login-wrapper">
        <header className='loginwriting'>Login Page</header>
        <form >
          <div className="field email">
            <div className="input-area">
              <input type="text" placeholder="Email Address" />
              <i className="icon fas fa-envelope"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">Email can't be blank</div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" placeholder="Password" />
              <i className="icon fas fa-lock"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">Password can't be blank</div>
          </div>
          <div className="pass-txt"><Link to='#'>Forgot password?</Link></div>
          <input type="submit" value="Login" />
          <div className="sign-txt">Not yet member? <Link to="/signupmail">Signup now</Link></div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login;
