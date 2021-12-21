import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
// import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";

import Login from './components/login/Login';
import SignupForm from './components/signup/SignupForm';
import SignUpmail from './components/signup/SignUpmail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Homepage/Navbar';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';


function App() {
  return (
   <Router>
      <Switch>
    
    <Route path="/login"  component={Login}/>
    <Route path="/signup"  component={SignupForm}/>
    <Route path="/signupmail"  component={SignUpmail}/>
    <Route path="/"  component={Navbar}/>
    <Route path="/cards"  component={Cards}/>
    <Route path="/form"  component={Form}/>

    


    </Switch>
    </Router>
  )
}
export default App;