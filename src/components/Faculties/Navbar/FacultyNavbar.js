import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import uoslogo from '../../../assets/images/UOswabi.png'
import '../../Homepage/Navbar1.css'
import './DepttNavbar.css'
// import { useHistory } from 'react-router'
import { Navbar,  Nav, Container,Form,FormControl,Button } from 'react-bootstrap'
const FacultyNavbar = () => {
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
      

        <Nav.Link className=' navbaritemlink'  onClick={() => { navigate('/facultyhomepage') }} >Home</Nav.Link>
        <Nav.Link  className=' navbaritemlink dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="true">StudentsRequest</Nav.Link>
        
        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      
      <li><Nav.Link className="dropdown-item" onClick={()=>{navigate('/facultyrequestclearence')}}>Clearence Requests</Nav.Link></li>
      <li><Nav.Link className="dropdown-item" onClick={()=>{navigate('/facultypendingstudents')}}>Pending Students</Nav.Link></li>
    </ul>
      
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('/career') }}>Help</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { navigate('/contact') }}>SignOut</Nav.Link>
        
      
      </Nav>
      <Form className="d-flex">
        <FormControl
        style={{color:'black'}}
          type="search"
          placeholder="Search"
          className="me-2 searchtextfield"
          aria-label="Search"
        />
        <Button className='navbarbutton1' variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default FacultyNavbar
