import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { Box, Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  drawerBG:{
    background: "#EEE3E7", 
    
  }
});


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
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Gallery', 'About Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} style={st.navLi} onClick={()=>{history.push(`/`+text)}}  />
          </ListItem>
        ))}
        <ListItem button key={"Reach Us"}>
            <ListItemText primary={"Reach Us"} style={st.navLi} onClick={()=> window.open("whatsapp://send?phone=+919854267811", "_blank")}  />
          </ListItem>
      </List>
     
    </div>
  );
  return (
    <AppBar position="static" style={st.navbarcl}>
      <Toolbar >
        <IconButton edge="start" color="inherit" aria-label="menu" />
        <Box flexGrow="1"  alignItems="center" textAlign="center">
          <h6 style={st.logo} >Eeternal Elite</h6>
        </Box>
        <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} style={{color:"#007F82"}}>{anchor}</MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} classes={{paper:classes.drawerBG  }}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar;