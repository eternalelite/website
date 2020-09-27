import React from "react";
import galleryImg from "../assets/galleryimg.png";
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
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
    
    return(
      
    <React.Fragment>      
          <Grid className={ style.root} container direction="row" alignItems="center" width="100%">
      <Box className={style .left}  display="flex" justifyContent="flex-start"  pl={4} width={"100%"} >
          <img src={galleryImg}  style={{height:"auto",width:"50%",float:"left"}}/>
          <Grid direction="column" justify="center" container  >
          <Box>
              <Box  textAlign="center"  spacing={0}  mt={20}>
              <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
              We believe actions speak louder than words 
              
          </Typography>
         </Box>
         <Box textAlign="center" justifyContent="center" m={10}>
              <Typography className={style.right} variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}}  >
              Let our work speak for itself</Typography>
              
                  </Box>
           
                  </Box>
          </Grid>
          </Box>
          
          </Grid>
          
          <Box overflow="hidden" style={{height:"200px",width:"250px",borderRadius:"50%",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-70px",marginRight:"300px",float:"right"}}>
              </Box>
              <Box style={{height:"200px",width:"90px",borderTopLeftRadius:"400px",borderBottomLeftRadius:"400px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-580px",marginRight:"-550px",float:"right"}}>
              </Box>
              <Box  style={{overflow:"hidden",height:"700px",width:"500px",borderTopLeftRadius:"2000px",borderBottomLeftRadius:"2000px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-500px",marginRight:"-550px",float:"right",overflowX:"hidden"}}>
              </Box>
          
              <Box style={{backgroundColor:"#EEC9D2",borderRadius:"25px"}} mt={8} pb={5} width={"100%"}> 
                  <Grid container  direction="row" justify="center" >
                         
                          <Box textAlign="center" height="100%" width="80%">
                          <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                          Curabitur sed enim eu nisi sollicitudin Vestibulum lobortis, ligula sit amet finibus
              
          </Typography>
          </Box>
                     </Grid> 
              </Box>
          
</React.Fragment>           
)}
export default withRouter(Gallery);