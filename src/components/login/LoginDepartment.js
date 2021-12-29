import React from 'react'
import { GiMailbox } from 'react-icons/gi';
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
        {/* <hr/> */}
        {/* <p>For Thechnical Issue</p> */}
        {/* <Link onPress={() => Linking.openURL('aqibhassanzeb@gmail.com') } className='emaillinkdepttloginpage'>aqibhassanzeb@gmail.com</Link> */}
       
      </form>
      
    </div>
    </div>
    )
}

export default LoginDepartment;
