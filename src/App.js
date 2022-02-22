// import React,{Suspense,lazy} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarLoader,FadeLoader,SyncLoader } from 'react-spinners';

// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routesclass from './Routesclass';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
// import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";

// const Routesclass =lazy(()=>import ("./Routesclass"))


function App() {
  return (<>
    <div>
{/* <Suspense fallback={<div><SyncLoader style={{textAlign: 'center'}}/></div>}> */}
<Routesclass/>

{/* </Suspense> */}
    </div>
  

  </>
  )
}
export default App;