import React from "react";
import mainImg from "../assets/12A.png";
import Wedding from "../assets/Wedding.svg";
import Parties from "../assets/Parties.svg";
import Birthday from "../assets/Birthday.svg";
import Corporate from "../assets/Corporate.svg";
import Image from "./subComponents/images";
import Bubble from './subComponents/bubbleRes';
import Footer from "./footerRes";
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
function importAll(r) {
    return r.keys().map(r);
  }
  const comments={
    1:" consectetur adipiscing elit. Cras a urna auctor, porttitor magna in, scelerisque mauris.",
    2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a urna auctor, porttitor magna in, scelerisque mauris.",
    3:"dolor sit amet, consectetur adipiscing elit. C"
};
var comment=comments[1];

function Home(){
    const imageStyle={
        height:"950px",
        width:"890px"

    }
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
    const dir=importAll(require.context('../assets/images/home', false, /\.(png)$/));
    return(
      
      <React.Fragment>      
            <Grid className={ style.root} container direction="row" alignItems="center" width="100%">
        <Box m={2}  className={style .left}  display="flex" justifyContent="flex-start"  p={4} width={"100%"} >
            <img src={mainImg } style={{height:"100%",width:"100%",float:"left"}}/>
            </Box>
            <Box mt={10}>
            <Grid direction="column" justify="center" container  >
            <Box my={2}>
                <Box  textAlign="center"  spacing={0}  mt={-2}>
                <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
                Make your big day memorable 
                
            </Typography>
           </Box>
           <Box textAlign="center" justifyContent="center" m={10}>
                <Typography className={style.right} variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}}  >Let us help you make the best of your day. We know this day is one of a kind, let us make it look like one of a kind.</Typography>
                
                    </Box>
             <Box textAlign="center" justifyContent="center" >       
                    <Button  variant="contained" style={{backgroundColor:"#007F82",color:'white',height:"auto",fontWeight:"bold",border:"none",marginTop:"10px"}}>Book Us</Button>               
                    
                    </Box>
                    </Box>
            </Grid>
            </Box>
            </Grid>
            <Bubble />
                <Box style={{backgroundColor:"#EEC9D2",borderRadius:"25px"}} mt={8} pb={5} width={"100%"}> 
                    <Grid container  direction="column" justify="center" >
                            <Box alignItems="center" display="flex" textAlign="center" flexDirection="column" height="auto" width="100%" >
                             <Box my={2} color="#8A0000" fontWeight="bold" height="auto" width="90%" style={imgBg}>
                                 <figure >
                                <img src={Wedding}   style={{height:"100%",width:"100%"}}/>
                                <figcaption>Wedding</figcaption>
                                </figure>
                             </Box>
                                <Box my={2} color="#8A0000" fontWeight="bold"  height="auto" width="90%" style={imgBg} >
                                <figure >
                                <img src={Birthday}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Birthday</figcaption>
                                </figure>
                                 </Box>
                                 <Box my={2} color="#8A0000" fontWeight="bold"  height="auto" width="90%" style={imgBg}>
                                <figure >
                                <img src={Parties}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Parties</figcaption>
                                </figure>
                                 </Box>
                                 <Box my={2} color="#8A0000" fontWeight="bold"  height="auto" width="90%" style={imgBg}>
                                <figure >
                                <img src={Corporate}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Corporate</figcaption>
                                </figure>
                                 </Box>
                            </Box>
                            <Box textAlign="center" width="100%">
                            <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} Wrap>
                            We are the best at what we do.
                
            </Typography>
            </Box>
                       </Grid> 
                </Box>
                <Box textAlign="center" width="100%" my={2}>
                            <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} Wrap>
                            Flowers of Happiness We’ve Planted So Far
                
            </Typography>
            </Box>
                <Box m={0} mt={8} > 
                <Image image={dir}/>
                <Box width="100%" textAlign="center"justifyContent="center" my={5}>
                <Button  variant="contained" style={{backgroundColor:"#007F82",color:'white',height:"auto",fontWeight:"bold",border:"none"}}>See More</Button>               
                </Box>
                </Box> 
                <Box style={{backgroundColor:"#EEC9D2",borderRadius:"25px"}} mt={8} pb={5} width={"100%"}> 
              <Grid direction="column" justify="center" container  >
            <Box>
                <Box  textAlign="center"  spacing={0}  mt={5}>
                <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center" }} >
                Don’t take our word, take theirs
                
            </Typography>
           </Box>
           <Box textAlign="center" justifyContent="center" m={10}>
                <Typography id="comment" className={style.right} variant="h5" style={{height:"auto", color:"#8A0000",align:"center"}}  >
               {comment}
                </Typography>
                
                    </Box>
                    <Box textAlign="center" justifyContent="center" m={10}>
                    <Typography variant="h5" style={{ height:"auto",fontWeight:"bold", color:"#007F82",align:"center"}} >
                  John D. Hemmingway
                      </Typography>
                        </Box>
             <Box textAlign="center" display="flex"  alignItems="center" justifyContent="center" >       
                   <div onClick={(e) => upate(e,comments[2])} onMouseOver={(e)=>hover(e)} onMouseLeave={(e)=>leave(e)} style={{height:"10px",width:"10px",backgroundColor:"#8A0000",borderRadius:"50%",margin:"2px"}}/>
                   <div onClick={(e) => upate(e,comments[1])} onMouseEnter={(e)=>hover(e)} onMouseLeave={(e)=>leave(e)} style={{height:"10px",width:"10px",backgroundColor:"#EEE3E7",borderRadius:"50%",margin:"2px"}}/>
                   <div onClick={(e) => upate(e,comments[3])} onMouseEnter={(e)=>hover(e)} onMouseLeave={(e)=>leave(e)} style={{height:"10px",width:"10px",backgroundColor:"#EEE3E7",borderRadius:"50%",margin:"2px"}}/>
                   
                    </Box>
                    </Box>
            </Grid>
           
                </Box>
           
            <Footer  />
 </React.Fragment>           
      
    );
}
function hover(e){
    e.target.style.backgroundColor="#8A0000";

   
}
function leave(e){
    e.target.style.backgroundColor="#EEE3E7";
}
function upate(e,i) {
   // e.target.siblings.style.backgroundColor="#EEASD";
    e.target.style.backgroundColor="#8A0000";

    console.log(e.target.innerHTML);
      document.getElementById("comment").innerHTML = i;
}
export default withRouter(Home);