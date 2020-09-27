import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from "react-dom";

import {BrowserRouter as Router,Route,Link,withRouter,Switch} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Image from './components/image';
import AboutUs from './components/about';
import Gallery from './components/gallery';
function App(){
  
  return ( <div><Router><Navbar />
  
   <Switch>
    <Route exact path="/" >
    <Home /> 
        <Image />
    </Route>
    <Route path="/about" component={AboutUs}> 
    
    </Route>
    <Route path="/gallery"> 
      <Gallery />
    </Route>
   </Switch>
   </Router>
    </div>);
}
function About(){
  return(<AboutUs />);
}

// ReactDom.render((
//    <Router>
//     <Switch>
//     <Route exact path="/" component={withRouter(App)} /> 
//      <Route exact path="/about" component={withRouter(About)} />
//      </Switch>
    
//     </Router>
// ),document.getElementById("root"));

export default App;