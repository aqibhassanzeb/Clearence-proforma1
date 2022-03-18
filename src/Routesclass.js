import React from 'react'
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Deptthomepage from './components/Deptt/CSdeptt/Homepage/Deptthomepage';
import DepttNavbar from './components/Deptt/CSdeptt/Navbar/DepttNavbar';
import AccountRequestStudent from './components/Deptt/CSdeptt/AccountRequestStd/AccountRequestStudent';
import ClearenceRequestStudents from './components/Deptt/CSdeptt/ClearenceRequest/ClearenceRequestStudents';
import Faculty from './components/Faculties/Faculty';
import RequestClearece from './components/Faculties/ClearenceStudents/RequestClearence';
const Routesclass = () => {
    return (
        <div>

{/* <Routes>
<Route path="/" element={<LoginDepartment/>}/>
<Route path="/signup" element={<SignupForm/>}/>

</Routes> */}



            <Routes>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/registrationform"  element={<SignupForm/>}/>
    <Route path="/signupmail"  element={<SignUpmail/>}/>
    <Route path="/form"  element={<Form/>}/>
    <Route path="/navbar"  element={<Navbar1/>}/>
    <Route path="/"  element={<Home/>} exact/>
    <Route path="/studenthomepage"  element={<StudentHomepage/>}/>
    <Route path="/studentstatus"  element={<Studentstatus/>}/>
    <Route path="/depttlogin"  element={<LoginDepartment/>}/>
    <Route path="/deptthomepage"  element={<Deptthomepage/>}/>
    <Route path="/depttnavbar"  element={<DepttNavbar/>}/>
    <Route path="/accountrequeststudent"  element={<AccountRequestStudent/>}/>
    <Route path="/clearencerequeststudent"  element={<ClearenceRequestStudents title="Clearence Request Students"/> }/>
    <Route path="/pendingstudents"  element={<ClearenceRequestStudents title="Pending Students"/> }/>
    <Route path="/facultyhomepage"  element={<Faculty/> }/>
    <Route path="/facultyrequestclearence"  element={<RequestClearece title="Clearence Request"/> }/>
    <Route path="/facultypendingstudents"  element={<RequestClearece title="Pending Students"/> }/>

     <Route path="*" element={<Error/>}/>
 
    </Routes>
        </div>
    )
}

export default Routesclass
