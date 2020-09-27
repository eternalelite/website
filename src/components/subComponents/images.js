import React from "react";
import image from "../image";
export default function Image(){
    function importAll(r) {
        return r.keys().map(r);
      }
    const images = importAll(require.context('../../assets/images/home', false, /\.(png)$/));
    const style={
      float:"left"  
    };
    return(
        <div >
        <img src={images[1]} style={style}/>
        <img src={images[0]} style={style}/>
        <img src={images[2]} style={style}/>
        <img src={images[3]} style={style}/>

        </div>
    );
}