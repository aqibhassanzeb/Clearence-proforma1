import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Studentstatus from './components/Cards/Studentstatus'
import Form from './components/Form/Form'
import Home from './components/Homepage/Home'
import Navbar1 from './components/Homepage/Navbar1'
import Login from './components/login/Login'
import LoginDepartment from './components/login/LoginDepartment'
import SignupForm from './components/signup/SignupForm'
import SignUpmail from './components/signup/SignUpmail'
import StudentHomepage from './components/StudentHomepage/StudentHomepage'
import Error from './components/Error/Error'
import Homepage from './components/Deptt/CSdeptt/Homepage/Homepage';
const Routes = () => {
    return (
        <div>
            <Router>
      <Switch>
    
    <Route path="/login"  component={Login}/>
    <Route path="/signup"  component={SignupForm}/>
    <Route path="/signupmail"  component={SignUpmail}/>
    <Route path="/form"  component={Form}/>
    <Route path="/navbar"  component={Navbar1}/>
    <Route path="/"  component={Home} exact/>
    <Route path="/studenthomepage"  component={StudentHomepage}/>
    <Route path="/studentstatus"  component={Studentstatus}/>
    <Route path="/depttlogin"  component={LoginDepartment}/>
    <Route path="/csdeptthomepage"  component={Homepage}/>

     <Route  component={Error}/>


    


    </Switch>
    </Router>
        </div>
    )
}

export default Routes
