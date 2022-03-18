import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import uoslogo from '../../../../assets/images/UOswabi.png'
import '..//../../Homepage/Navbar1.css'
import './DepttNavbar.css'
// import { useHistory } from 'react-router'
import { Navbar,  Nav, Container,Form,FormControl,Button, NavDropdown } from 'react-bootstrap'
const DepttNavbar = () => {
    let navigate = useNavigate();
    return (
        <div>
           

<Navbar bg="dark" expand="lg" style={{position:"sticky"}} fixed='top' >
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
  {/* <a className="navbar-brand " ><img src={Logo} className='logo' /></a> */}
      

        <Nav.Link className=' navbaritemlink'  onClick={() => { navigate('/deptthomepage') }} >Home</Nav.Link>
      

<NavDropdown title="StudentsRequest" className='navbaritemlink' id="navbarScrollingDropdowndeptt">
          <NavDropdown.Item onClick={()=>{navigate('/accountrequeststudent')}}>Account Requests</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>{navigate('/clearencerequeststudent')}}>Clearence Requests</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>{navigate('/pendingstudents')}}>Pending Students</NavDropdown.Item>
        </NavDropdown>
      
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('/career') }}>Help</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('/contact') }}>SignOut</Nav.Link>
        
      
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default DepttNavbar
