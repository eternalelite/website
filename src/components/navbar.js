import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { Box, Toolbar, Typography } from '@material-ui/core';
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
    fontWeight: "bold",
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
        
        <Box flexGrow="1">
          <Typography style={st.logo} >Eternal Elite</Typography>
        </Box>
        <Typography style={st.navLi} onClick={()=>{history.push(`/`)}}> Home </Typography>
        <Typography style={st.navLi} onClick={()=>{history.push(`/gallery`)}}>Gallery</Typography>
        <Typography style={st.navLi} onClick={()=>{history.push(`/about`)}}>About US</Typography>
        <Typography style={st.navLi} onClick={()=> window.open("https://api.whatsapp.com/send?phone=0000000000","_blank")} noWrap>Reach</Typography>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;