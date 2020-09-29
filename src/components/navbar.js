import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { Box, Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core'

const style = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    color: "#007F82",
    fontFamily: "harlow solid",
    fontSize: "15pt",
  },
  navLi: {
    color: "#007F82",
    fontFamily: "Segoe UI",
    font: "bold",
    margin: "15px",
    fontSize: "12pt",
    cursor: 'pointer'
  },
  navbarcl: { 
    border: "none", 
    backgroundColor: "#EEE3E7", 
    boxShadow: "none", 
    width: "100%", 
    overflowX: "hidden", 
    margin: "0px" 
  }
});
const st = style();
function NavBar() {
  let history = useHistory()
  
  return (
    <AppBar position="static" style={st.navbarcl}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" />
        <Box flexGrow="1">
          <h6 style={st.logo} >Eeternal Elite</h6>
        </Box>
        <h6 style={st.navLi} onClick={()=>{history.push(`/`)}}> Home </h6>
        <h6 style={st.navLi} onClick={()=>{history.push(`/gallery`)}}>Gallery</h6>
        <h6 style={st.navLi} onClick={()=>{history.push(`/about`)}}>About US</h6>
        <h6 style={st.navLi} >Reach</h6>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;