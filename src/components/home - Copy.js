import React from "react";
import mainImg from "../assets/12A.png";
import Wedding from "../assets/Wedding.svg";
import Parties from "../assets/Parties.svg";
import Birthday from "../assets/Birthday.svg";
import Corporate from "../assets/Corporate.svg";
import {makeStyles} from '@material-ui/core/styles';
import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
export default function Home(){
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
    return(
      
      <React.Fragment>      
            <Grid className={ style.root} container direction="row" alignItems="center" width="100%">
        <Box className={style .left}  display="flex" justifyContent="flex-start"  pl={4} width={"50%"} >
            <img src={mainImg } style={{height:"60%",width:"100%",float:"left"}}/>
            <Grid direction="row" >
            <Box justifyContent="center"  alignItems="center" display="flex" alignContent="center" mt={20} ml={10} >
             <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} noWrap>
                Make your big day memorable 
                
            </Typography>
           
            </Box>
            <Grid alignContent="center" container justifyContent="center" >
                <Box mt={10 } mb={10} textAlign="center" justifyContent="center">
                    <Typography className={style.right} variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",marginLeft:"50px",align:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
            <Button  variant="contained" style={{backgroundColor:"#007F82",color:'white',height:"auto",fontWeight:"bold",border:"none",margin:"auto"}}>Book Us</Button>
        </Grid>
            </Grid>
            </Box>
            
            </Grid>
            <Box overflow="hidden" style={{height:"200px",width:"250px",borderRadius:"50%",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-70px",marginRight:"300px",float:"right"}}>
                </Box>
                <Box style={{height:"200px",width:"90px",borderTopLeftRadius:"400px",borderBottomLeftRadius:"400px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-680px",marginRight:"-550px",float:"right"}}>
                </Box>
                <Box  style={{overflow:"hidden",height:"700px",width:"500px",borderTopLeftRadius:"2000px",borderBottomLeftRadius:"2000px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-600px",marginRight:"-550px",float:"right",overflowX:"hidden"}}>
                </Box>
                
           
                <Box style={{backgroundColor:"#EEC9D2"}} mt={5} pb={5} width={"100%"}> 
                    <Grid container spacing={1} direction="row" >
                            <Box display="flex" textAlign="center" flexDirection="row" height="100%" width="100%" mt={-6}>
                             <Box ml={5} m={3}  color="#8A0000" fontWeight="bold" height="100%" width="20%" style={imgBg}>
                                 <figure >
                                <img src={Wedding}   style={{height:"100%",width:"100%"}}/>
                                <figcaption>Wedding</figcaption>
                                </figure>
                             </Box>
                         
                            
                                <Box m={3} color="#8A0000" fontWeight="bold"  height="100%" width="20%" style={imgBg} >
                                <figure >
                                <img src={Birthday}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Birthday</figcaption>
                                </figure>
                                 </Box>
                                 <Box m={3} color="#8A0000" fontWeight="bold"  height="100%" width="20%" style={imgBg}>
                                <figure >
                                <img src={Parties}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Parties</figcaption>
                                </figure>
                                 </Box>
                                 <Box m={3} color="#8A0000" fontWeight="bold"  height="100%" width="20%" style={imgBg}>
                                <figure >
                                <img src={Corporate}  style={{height:"100%",width:"100%",margin:"0px"}} />
                                <figcaption>Corporate</figcaption>
                                </figure>
                                 </Box>
                                 
                            </Box>
                            <Box textAlign="center" width="100%">
                            <Typography className={style.right}   variant="h4" style={{height:"auto",fontWeight:"bold", color:"#8A0000",align:"center"}} noWrap>
                            We are the best at what we do.
                
            </Typography>
            </Box>
                       </Grid> 
                </Box>
            
 </React.Fragment>           
      
    );
}