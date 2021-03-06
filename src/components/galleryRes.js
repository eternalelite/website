import React from "react";
import galleryImg from "../assets/galleryimg.png";
import {makeStyles} from '@material-ui/core/styles';
import Footer from "./footerRes";
import Image from "./subComponents/galleryImageRes";
import Bubble from './subComponents/bubbleRes';
import {withRouter} from 'react-router-dom';
import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
function importAll(r) {
    return r.keys().map(r);
  }
function Gallery(){

    const style=makeStyles(theme=>({
        left:{
            alignContent:"flex-Start",
            
        },
        right:{
            alignContent:"flex-end",
            margin: theme.spacing(1),
            width:"",
            height: theme.spacing(),     
        },
       
       
        root:{
            flexGrow:1,
            
        },
       
    }));
    const imgBg={
        backgroundColor:"#EEE3E7",borderRadius:"10%"
    };
    const dir=importAll(require.context('../assets/images/gallery', false, /\.(png)$/));
    return(
      
    <React.Fragment>      
          <Grid className={ style.root} container direction="row" alignItems="center" width="100%">
      <Box className={style .left}  display="flex" justifyContent="flex-start"  p={3} width={"100%"} >
          <img src={galleryImg}  style={{height:"auto",width:"100%",float:"left"}}/>
          </Box>
     <Box >
     <Grid direction="column" justify="center" container  >
          <Box>
              <Box  textAlign="center"  spacing={0}  mt={20}>
              <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
              Take a look at these moments we captured
              
          </Typography>
         </Box>
         <Box textAlign="center" justifyContent="center" m={10}>
              <Typography className={style.right} variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}}  >
              the moments that last a lifetime</Typography>
              
                  </Box>
           
                  </Box>
          </Grid>
     
         </Box>     
          </Grid>
          
          <Bubble />
              <Box style={{backgroundColor:"#EEC9D2",borderRadius:"25px"}} mt={8} pb={5} width={"100%"}> 
                  <Grid container  direction="row" justify="center" >
                         
                          <Box textAlign="center" height="100%" width="80%">
                          <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                          These moments happen once in a lifetime 
They aren’t waves to recur 
Hence is our job to capture the flicker
A moment in time, a memory of a lifetime
              
          </Typography>
          </Box>
                     </Grid> 
              </Box>
              <Box m={0} mt={8} > 
                <Image image={dir}/>
               </Box>
               
          <Footer color={"#EEC9D2"} />
</React.Fragment>           
)}
export default withRouter(Gallery);