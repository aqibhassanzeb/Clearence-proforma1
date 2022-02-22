import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'
import './SignUpmail.css'

const SignUpmail = () => {
  const navigate =useNavigate();
    return (
      <div className='SignUpmail'>
      <div className="wrapper">
      <header className='loginwriting'>Registration Form</header>
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

        <div className="field password">
          <div className="input-area">
            <input type="password" placeholder="Conform Password"/>
            <i className="icon fas fa-lock"></i>
            <i className="error error-icon fas fa-exclamation-circle"></i>
          </div>
          <div className="error error-txt">Password can't be blank</div>
        </div>
        < div className='row'>
        <div className=' buttonssignupmail '>
               <div className=''> 
                  <button type="button" className="btn btn-primary" id='Btnsignupmailsubmit'>Submit</button>
                  </div>
                  <div className=' '>
                  <button type="button" className="btn btn-primary" id='Btnsigupmailback'
                  onClick={() => navigate(-1)}
                  >Back</button>
                
                  </div> </div></div>
      </form>
      
    </div>
    </div>
    )
}

export default SignUpmail;
