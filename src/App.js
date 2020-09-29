import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import AboutUs from './components/about';
import Gallery from './components/gallery';
function App() {

  return (<div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  </div>);
}

export default App;