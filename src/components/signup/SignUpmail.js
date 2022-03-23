import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { studentReg } from '../../redux/services/StudentUser';
import { registerStudent } from '../../redux/features/StAuthSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUpmail.css'


const SignUpmail = () => {
  const userRegister = useSelector(state => state.studentuser.registerStudent)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const regHandler = () => {
    dispatch(studentReg({ email, password })).then(() => {
      navigate('/login')
      // setEmail('')
      // setPassword('')
    })

  }
  // if (userRegister == true) {
  //   navigate('/login')
  // }
  console.log(userRegister)




  return (
    <div className='SignUpmail'>
      <ToastContainer />
      <div className="wrapper">
        <header className='loginwriting'>SignUp </header>
        <form onSubmit={(e) => {
          e.preventDefault();
          regHandler();
        }}>
          <div className="field email">
            <div className="input-area">
              <input type="text" placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <i className="icon fas fa-envelope"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">Email can't be blank</div>
          </div>
          {/* <div className="field password">
            <div className="input-area">
              <input type="password" placeholder="Password" />
              <i className="icon fas fa-lock"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">Password can't be blank</div>
          </div> */}

          <div className="field password">
            <div className="input-area">
              <input type="password" placeholder="Conform Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <i className="icon fas fa-lock"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">Password can't be blank</div>
          </div>
          < div className='row'>
            <div className=' buttonssignupmail '>
              <div className=''>
                <button className="btn signupmailformbtn" id='Btnsignupmailsubmit'
                  type="submit"
                >Submit</button>
              </div>
              <div className=' '>
                <button type="button" className="btn signupmailformbtn" id='Btnsigupmailback'

                  onClick={() => navigate(-1)}
                >Back</button>

              </div> </div></div>
        </form>

      </div>
    </div>
  )
}

export default SignUpmail;
