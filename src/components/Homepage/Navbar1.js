import React from 'react'
import { NavLink } from 'react-router-dom'
import uoslogo from '../../assets/images/UOswabi.png'
import './Navbar1.css'
import { useHistory } from 'react-router'
import { Navbar,  Nav, Container,Form,FormControl,Button } from 'react-bootstrap'
const Navbar1 = () => {
    let history = useHistory();
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
      

        <Nav.Link className='navbaritemlink'  onClick={() => { history.push('/') }} >Home</Nav.Link>
        <Nav.Link  className='navbaritemlink' onClick={() => { history.push('/signup') }}>SignUp</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { history.push('/career') }}>Help</Nav.Link>
        <Nav.Link className='navbaritemlink' onClick={() => { history.push('/contact') }}>AboutUs</Nav.Link>
        
      
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

export default Navbar1
