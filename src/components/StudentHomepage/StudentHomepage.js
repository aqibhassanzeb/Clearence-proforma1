import React from 'react'
import Navbar1 from '../Homepage/Navbar1'
import './StudentHomepage.css'
import { useHistory } from 'react-router-dom';
import Studenthomepagenavbar from './studenthomepagenavbar';


const StudentHomepage = () => {
    const history=useHistory();
    return (
        <div>
             <>
        <Studenthomepagenavbar/>
        <div className='studenthomepage'>
        <h1 className='wellcomeuniversitytext' >Welcome to<br/> UNIVERSITY OF SWABI</h1>
        
        <h3 className='wellcomenametext'>Aqib Hassan Zeb </h3>
        <h3 className='wellcomeclearencetext'>Clearence Proforma </h3>
        
        <div className='homepagebuttons'>
        <button className='btnhomepage1 btn-primary'
         onClick={()=> history.push('/login')}
        >Apply</button>
        <br/>
       
        </div>
        </div>
        </>
        </div>
    )
}

export default StudentHomepage
