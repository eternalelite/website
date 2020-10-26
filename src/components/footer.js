import React from 'react';
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography, Button, SvgIcon } from "@material-ui/core";
export default function Footer(prop) {

   let history = useHistory()

   const greentxt = {
      color: "#007F82",
    cursor: 'pointer'
   };
   const brown = {
      color: "#8A0000",
      fontWeight: "bold",
      backgroundColor: prop.color
   }
   return (
      <React.Fragment>
         <Box display="flex" flexDirection="row" style={{ backgroundColor: prop.color }}>
            <Box width="20%" flexGrow={0.6} m={10}>
               <table>
                  <th>
                     <Typography variant="h6" style={brown} noWrap>
                        Say hello to us!
                     </Typography>
                  </th>
                  <tr>
                     <td><Box style={greentxt} my={0} paddingTop={0}><Typography>Address.</Typography></Box>
                     </td>
                     <td><Box my={0} style={greentxt} width="50%"><Typography wrap>#446, Anna Salai Near Ratna Theatre Puducherry – 605001, India
                           </Typography>
                     </Box>
                     </td>
                  </tr>
                  <tr>
                     <td><Box my={1} style={greentxt}><Typography>Phone No.
                        </Typography>
                     </Box>
                     </td><td>
                        <Box my={1} style={greentxt}><Typography onClick={() => window.open("whatsapp://send?phone=+919854267811", "_blank")}>9854267811</Typography></Box>
                     </td>
                  </tr>
                  <tr>
                     <td><Box my={1} style={greentxt}><Typography>Email.</Typography></Box>
                     </td><td><Box my={1} style={greentxt}><Typography>contact@eternalelite.com</Typography></Box>
                     </td>
                  </tr>

               </table>
            </Box>
            <Box m={10}  >
               <table>
                  <th>
                     <Box >   <Typography variant="h6" style={brown}>
                        Menu
                     </Typography>
                     </Box>
                  </th>
                  <tr>
                     <td><Box mx={1} style={greentxt} onClick={() => { history.push(`/`) }}><Typography>Home
                        </Typography></Box>
                     </td>
                     <td><Box mx={1} style={greentxt} onClick={() => { history.push(`/gallery`) }}><Typography>Spotlight</Typography></Box>
                     </td>
                  </tr>
                  <tr>
                     <td><Box mx={1} style={greentxt} onClick={() => { history.push(`/about`) }}><Typography>About Us</Typography></Box>
                     </td>
                     <td><Box mx={1} style={greentxt} > <Typography>Contact Us</Typography></Box>
                     </td>
                  </tr>
                  <tr>
                     <td><Box mx={1} style={greentxt} onClick={() => { history.push(`/`) }}><Typography>Services</Typography></Box>
                     </td>
                  </tr>
                  <tr>
                     <td><Box mx={1} style={greentxt} onClick={() => { history.push(`/gallery`) }}><Typography>Our Work</Typography></Box>
                     </td>
                  </tr>

               </table>
            </Box>

         </Box>
         <Box width="100%" textAlign="center" style={brown}><Typography >Copyright @ 2020 - Eternal Elite Event Planners
            </Typography></Box>
      </React.Fragment>
   );
}
