import React from 'react';
import './App.css';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import AboutUs from './components/about';
import Gallery from './components/gallery';
import NavbarRes from './components/navbarRes';
import HomeRes from './components/homeRes';
import AboutUsRes from './components/aboutRes';
import GalleryRes from './components/galleryRes';
class App extends React.Component{
  state={
    window:window.pageYOffset,
    isDesktopOrLaptop:1,
    isTabletOrMobile:0,
}
  render(){
    const Example = () => {
      this.state.isDesktopOrLaptop = useMediaQuery(
        {
          query: '(min-device-width: 1224px)'
        }// `device` prop
      )
      this.state.isTabletOrMobile = useMediaQuery(
       {query: '(max-width: 1224px)' }// `device` prop
     )
     return (""); 
      }
    console.log(this.state.isDesktopOrLaptop);
  return (<div>
    <Example />
    <MediaQuery query="(max-device-width: 1024px)" >
    <Router>
      <NavbarRes />
      <Switch>
        <Route exact path={["/","/Home"]} component={HomeRes} />
        <Route exact path="/about us" component={AboutUsRes} />
        <Route exact path="/gallery" component={GalleryRes} />
      </Switch>
    </Router>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 1025px)" >
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={["/","/Home"]} component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Router>
    </MediaQuery>
  </div>);
  }
}

export default App;