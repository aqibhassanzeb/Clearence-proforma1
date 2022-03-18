import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Homepage/Navbar1'
import './StudentHomepage.css'
import Studenthomepagenavbar from './studenthomepagenavbar';


function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Clearacne-Proforma
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <p>
          Are you sure to apply for Clearence Proforma! 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button >Conform</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const StudentHomepage = () => {
  const navigate=useNavigate();
  
    const [modal, setmodal] = useState(false)
    return (
       
             <>
        <Studenthomepagenavbar/>
        <div className='studenthomepage'>
        <h1 className='wellcomeuniversitytext' >Welcome to<br/> UNIVERSITY OF SWABI</h1>
        
        <h3 className='wellcomenametext'>Aqib Hassan Zeb </h3>
        <h3 className='wellcomeclearencetext'>Clearence Proforma </h3>
        
        <div className='homepagebuttons'>
        <button className='btnhomepage1 btn-primary'
        onClick={()=>{navigate('/registrationform')}} 
        >Registar</button>
        <br/>
        <button className='btnhomepage1 btn-primary'
         onClick={()=>setmodal(true)} 
        >Apply</button>
        <br/>
        <MyVerticallyCenteredModal
        show={modal}
        onHide={() => setmodal(false)}
      />
        </div>
        </div>


        
        
        </>
      
    )
}

export default StudentHomepage
