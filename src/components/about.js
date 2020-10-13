import React from "react";
import aboutImg from "../assets/aboutimg.png";
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Footer from './footer';
import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
function AboutUs(){

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
          <img src={aboutImg}  style={{height:"auto",width:"50%",float:"left"}}/>
          <Grid direction="column" justify="center" container  >
          <Box>
              <Box  textAlign="center"  spacing={0}  mt={0}>
              <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
              Curabitur sed enim eu sollicitudin
              
          </Typography>
         </Box>
         <Box textAlign="center" justifyContent="center" m={10}>
              <Typography className={style.right} variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}}  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              
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
                          Vestibulum sed magna in orci vehicula gravida sed quis lacus. Proin dignissim erat nec ante consequat finibus. Nam sed nulla ac nisl tincidunt suscipit
              
          </Typography>
          </Box>
                     </Grid> 
              </Box>
       <Box display="flex" textAlign="center" flexDirection="column">
          <Box display="flex" m={3} flexDirection="row">
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
                  <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
                  
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
              <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
              <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
                  
              </Box>
              <Box display="flex" m={3} flexDirection="row">
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
              <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
                  
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
              <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
              <Box m={1} alignItems="center" display="flex" flexDirection="column"width="33.3%">
              <img src={aboutImg}   style={{height:"75%",width:"100%" ,borderRadius:"50%",backgroundColor:"#EEC9D2"}}/>
                  <Typography variant="h4" style={{ height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                      <Typography wrap variant="h5" style={{ height:"auto",fontWeight:"", color:"#007F82",align:"center"}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis purus vel sapien suscipit tincidunt
                      </Typography>
                  
                  </Box>
                  
              </Box>
              </Box>
              <Box style={{backgroundColor:"#EEC9D2",borderRadius:"25px"}} mt={8} pb={5} width={"100%"}> 
              <Grid direction="column" justify="center" container  >
            <Box>
                <Box  textAlign="center"  spacing={0}  mt={5}>
                <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
                Vestibulum sed magna in orci vehicula gravida sed quis
                
            </Typography>
           </Box>
           <Box textAlign="center" justifyContent="center" m={10}>
                <Typography className={style.right} variant="h5" style={{height:"auto", color:"#8A0000",align:"center"}}  >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a urna auctor, porttitor magna in, scelerisque mauris.
                </Typography>
                
                    </Box>
             <Box textAlign="center" justifyContent="center" >       
                    <Button  variant="contained" style={{backgroundColor:"#007F82",color:'white',height:"auto",fontWeight:"bold",border:"none",marginTop:"10px"}}>Book Us</Button>               
                    
                    </Box>
                    </Box>
            </Grid>
           
                </Box>
              <Footer />
</React.Fragment>           
)}
export default withRouter(AboutUs);