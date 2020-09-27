import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { Box, makeStyles, Grid, Container, Toolbar } from '@material-ui/core';
import {Typography,IconButton,Button} from '@material-ui/core'

const style=theme=>({
  root:{
    flexGrow:1
  },
    logo:{
     color:"#007F82",
     fontFamily:"harlow solid",
     fontSize:"15pt",
            
        
    },
    navLi:{
        color:"#007F82",
        fontFamily:"Segoe UI",
        font:"bold",
        margin:"15px",
        fontSize:"12pt"
    }
    
});
const st=style();
class navbar extends Component{
    
    render(){
        const navbarcl={border:"none",backgroundColor:"#EEE3E7" ,boxShadow:"none" ,width:"100%",overflowX:"hidden",margin:"0px"};
        return (<AppBar position="static" style={navbarcl}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <Box flexGrow="1">
          <BrowserRouter><Link to="/">
          <Typography variant="h6" style={st.logo} >
        
            Eeternal Elite
            
          </Typography>
          </Link>
            </BrowserRouter>
          </Box>
          <BrowserRouter><Link to="/">
          <Typography variant="h6" style={st.navLi} >
            Home 
          </Typography>
          </Link>
            </BrowserRouter>
            <BrowserRouter><Link to="/gallery">
          <Typography variant="h6" style={st.navLi} >
            Gallery
            
          </Typography>
          </Link></BrowserRouter>
          <BrowserRouter><Link to="/about">

          <Typography variant="h6" style={st.navLi} >
            About US
          </Typography>
          </Link>
            </BrowserRouter>

          <Typography variant="h6" style={st.navLi} >
            Reach 
          </Typography>
        </Toolbar>
      </AppBar>
        );  
    }
}
export default  navbar;