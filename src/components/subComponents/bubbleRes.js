import React from "react";

import { Box, Grid ,Typography,Button, SvgIcon} from "@material-ui/core";
export default function bubble(){
    return(
    <React.Fragment> <Box style={{height:"200px",width:"90px",borderTopLeftRadius:"400px",borderBottomLeftRadius:"400px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-480px",marginRight:"0px",float:"right"}}>
    </Box>
    <Box  style={{overflow:"hidden",height:"500px",width:"50%",borderTopLeftRadius:"2000px",borderBottomLeftRadius:"2000px",backgroundColor:"#EEC9D2",zIndex:"-1",marginTop:"-350px",marginRight:"0px",float:"right",overflowX:"hidden"}}>
    </Box>
    </React.Fragment>
);

}