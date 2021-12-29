import React, { useState } from 'react'
import { Button } from 'bootstrap'
import './Studentstatus.css'
const Studentstatus = () => {
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
        {
            count.map((elem)=>(
               
                    <div>
                    <h1>{elem.Faculty}</h1>
                   <div className='row'>
                    <button className='col-2 cardreminderbutton' >Reminder</button>
                    <button className='col-2 cardissuebutton'>Issue</button>
                    <input className='col-5 cardcheckbox'  type="checkbox" />
                       </div>
                    <hr/>
                    </div>
                    
                    )
                )

        }

{/* <Button variant="primary"  className='cardsClearenceproformabtn'>Clearence Proforma</Button> */}
</>
       )
}

export default Studentstatus
