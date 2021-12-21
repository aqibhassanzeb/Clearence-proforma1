import React, { useState } from 'react'
import { Card,Button, InputGroup } from 'react-bootstrap'
import './Cards.css'

const Cards = () => {

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
       <div className='Cardss '>
         <h2 className='studentstatus'>Student Status</h2>
        {
            count.map((data)=>(
                
            <Card disabled className='allCards mt-2  '>
  {/* <Card.Header as="h5" className='cardsHeader' >Faculty Name</Card.Header> */}
  <Card.Body className='cardsBody'>
    <Card.Title>{data.Faculty}</Card.Title>
    {/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
    <Button variant="primary" disabled className='cardsReminderbtn'>Reminder</Button>
    <Button variant="primary" disabled className='cardsCheckIssuebtn'>CheckIssue</Button>
    <Card.Text className='cardsRemarks' >Remarks</Card.Text>
    <input type="checkbox" className='Clearradiobtn' />

  </Card.Body>
</Card>


                
            ))
}

<Button variant="primary"  className='cardsClearenceproformabtn'>Clearence Proforma</Button>

  </div> )
    
}

export default Cards
