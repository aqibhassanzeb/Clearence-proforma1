import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Studentstatus.css'
import {
  AiFillBell,
   AiFillQuestionCircle,
 } from "react-icons/ai";
import {reminder} from "../../assets/images/bellicon.png"
import Studenthomepagenavbar from '../StudentHomepage/studenthomepagenavbar'
const Studentstatus = () => {
const navigate=useNavigate();
   const [disabled, setDisabled] = useState(true)
   const [count, setCount] = useState([
        {
        
            
           Faculty:"Deputy Librarian"
    },
        {
        
            
           Faculty:"Res/Asst Wardon Hostal"
    },
        {
        
            
           Faculty:"Transport Incharge"
    },
        {
        
            
           Faculty:"Director Adminstration"
    },
        {
        
            
           Faculty:"Incharge Examination"
    },
        {
        
            
           Faculty:"Chief Proctor"
    },
        {
        
            
           Faculty:"Provost"
    },
        {
        
            
           Faculty:"Assistant Director Sports"
    },
        {
        
            
           Faculty:"Dealing Assistant"
    },
        {
        
            
           Faculty:"Chairman Department HOD"
    },
        {
        
            
           Faculty:"Treasures"
    }]
    )
   return(
<>
       
      <Studenthomepagenavbar/>
<div style={{marginTop:'70px'}}>
             <>
        <h1 className='headingstudentstatus'>Student Status</h1>
        <div  style={{overflow: "auto"}}>
            
            <table className="table tablestudentstatus ">
  <thead>
    <tr >
      <th scope="col">Faculty Name</th>
      {/* <th scope="col">Reminder</th> */}
      <th scope="col">Issue</th>
      <th scope="col">Remarks</th>
      <th scope="col">Done</th>
    </tr>
  </thead>
  <tbody>

  {
    count.map((elem)=>
    
    <tr key={elem.Faculty}>
      <th scope="row" className='facultytext'
      
      >{elem.Faculty}</th>
      {/* <td style={{paddingLeft:'30px'}}><AiFillBell className="bellicon" /></td> */}
      <td><a href='' style={{pointerEvents:'',paddingLeft:'10px'}}><AiFillQuestionCircle    className="bellicon"  /></a></td>
      <td><p >remarks</p></td>
      <td><p style={{color:'blue'}}>process...</p></td>
    
    </tr>
    
    )
}    
  </tbody>
</table>
        </div>
        </>
        </div>

<div className='cardsClearenceproformabtndiv'>
<button className='btn-primary cardsClearenceproformabtn' onClick={()=>navigate("/form")}>Get Certificate</button>
</div>


                    
                    
                

        

</>
       )
}

export default Studentstatus
