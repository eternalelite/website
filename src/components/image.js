import React from "react";
import imageToRender from "../assets/images/home/24.png";
import { Grid, Box } from "@material-ui/core";
export default function image(){
    const a=imageToRender;
    function importAll(r) {
        return r.keys().map(r);
      }
      let masonry={
        position:"relative",
        height:"auto",
        width:"90%",
        margin:"auto",
        padding :"45px 0",
        display:"grid",
        gridTemplateColumns:"auto auto auto auto",
        gridGap:"2vmin",
        gridAutoFlow:"dense"
      };
      let img={
        positon:" relative",
        height:"100%",
        width:"100%",
        overflow:"contain"
    
      };
      const images = importAll(require.context('../assets/images/home', false, /\.(png)$/));
      let imgsrc=images.map(key=>{ 
   return  <img src={key} id="image" style={{width:"100%",objectFit:"contain"}}/>
      });
      
    return(
        <React.Fragment>
            {/* <div className="gallery" style={masonry}>
               
            {imgsrc}
             
            </div> */}
            <grid-container>
 {imgsrc}

</grid-container>
{/* <grid-container>
  <grid-item short>01</grid-item>
  <grid-item short>02</grid-item>
  <grid-item tall>03</grid-item>
  <grid-item tall>04</grid-item>
  <grid-item short>05</grid-item>
  <grid-item taller>06</grid-item>
  <grid-item short>07</grid-item>
  <grid-item tallest>08</grid-item>
  <grid-item tall>09</grid-item>
  <grid-item short>10</grid-item>
  <grid-item tallest>etc.</grid-item>
  <grid-item tall></grid-item>
  <grid-item taller></grid-item>
  <grid-item short></grid-item>
  <grid-item short></grid-item>
  <grid-item short></grid-item>
  <grid-item short></grid-item>
  <grid-item tall></grid-item>
  <grid-item short></grid-item>
  <grid-item taller></grid-item>
  <grid-item short></grid-item>
  <grid-item tall></grid-item>
  <grid-item short></grid-item>
  <grid-item tall></grid-item>
  <grid-item short></grid-item>
  <grid-item short></grid-item>
  <grid-item tallest></grid-item>
  <grid-item taller></grid-item>
  <grid-item short></grid-item>
  <grid-item tallest></grid-item>
  <grid-item tall></grid-item>
  <grid-item short></grid-item>
</grid-container> */}
       </React.Fragment>
    );
}