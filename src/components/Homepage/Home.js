import React from 'react'
import {  useNavigate } from 'react-router-dom'
//  import { useHistory } from 'react-router-dom';
import './Home.css'
import Navbar1 from './Navbar1'

const Home = () => {
    const navigate=useNavigate();
    return (

        <>
        <Navbar1/>
        <div className='Home'>
        <h1 className='wellcomeuniversitytext' >Welcome to<br/> UNIVERSITY OF SWABI</h1>
        <h3 className='wellcomeclearencetext'>Clearence Proforma </h3>
        
        <div className='homepagebuttons'>
        <button className='btnhomepage12 btn-primary'
         onClick={()=> navigate('/login')}
        >Student Login</button>
        <br/>
        <button className='btnhomepage2 btn-success' 
         onClick={()=> navigate('/depttlogin')}
        >Department Login</button>
        </div>
        </div>
        </>
    )
}

export default Home
