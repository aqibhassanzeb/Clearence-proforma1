import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import uoslogo from '../../assets/images/UOswabi.png'
import './Studenthomepagenavbar.css'
import { Navbar,  Nav, Container,Form,FormControl,Button } from 'react-bootstrap'
const Studenthomepagenavbar = () => {
    let navigate=useNavigate();
    return (
        <div>
           

<Navbar bg="dark" expand="lg"  fixed="top" >
  <Container fluid>
 <a href="https://uoswabi.edu.pk/">
  <img
                        src={uoslogo}
                        
                        className="d-inline-block align-top homelogo "
                        
                        alt="University Of Swabi"
                        href="https://uoswabi.edu.pk/"
                    /></a>
    <Navbar.Toggle aria-controls="navbarScroll" style={{border:'1px solid white'}} />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' 
    ,marginLeft:'30px'}}
        navbarScroll
      >
 
      

        <Nav.Link className='navbaritemlink'  onClick={() => { navigate('/studenthomepage') }} >Home</Nav.Link>
        <Nav.Link  className='navbaritemlink' onClick={() => { navigate('/studentstatus') }}>Status</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('#') }}>Help</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('#') }}>AboutUs</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('/') }}>LogOut</Nav.Link>
        
      
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Studenthomepagenavbar;
