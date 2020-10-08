import React from "react";
import image from "../image";
export default function Image(prop){
    function importAll(r) {
        return r.keys().map(r);
      }
    const images = prop.image;
    const grid={
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(7, 1fr)",

  rowGap: "10px",
  columnGap: "10px",

    };
    const img={
      display: "block",
  width: "100%",
  height: "100%",
  objectFit:"fill",
  borderRadius:"1px",
  margin:"1px"
    };
    return(
        <div style={grid}>
          <figure style={{gridColumn: "1 / 5",gridRow: "1 / 3" ,margin:"1px"}}>
            <img src={images[4 ]} style={img}/>
            </figure>
            <figure style={{}} style={{gridColumn: "5/ 7",gridRow: "1 / 4" ,margin:"1px"}}>
            <img src={images[7]} style={img}  />
            </figure>
            <figure style={{gridColumn: "7 / 9",gridRow: "1 / 3" ,margin:"1px"}}>
            <img src={images[0]} style={img}/>
            </figure>
            <figure style={{gridColumn: "1 /3",gridRow: "3 / 5" ,margin:"1px"}}>
            <img src={images[8]} style={img}/>
            </figure>
            <figure style={{gridColumn: "3 /5",gridRow: "3 / 5" ,margin:"1px"}}>
            <img src={images[2]} style={img}/>
            </figure>
            <figure style={{gridColumn: "5 /7",gridRow: "4 / 5" ,margin:"1px"}}>
            <img src={images[11]} style={img}/>
            </figure>
            <figure style={{gridColumn: "7 /9",gridRow: "3 / 4" ,margin:"1px"}}>
            <img src={images[10]} style={img}/>
            </figure>
            <figure style={{gridColumn: "7 /9",gridRow: "4 / 5" ,margin:"1px"}}>
            <img src={images[6]} style={img}/>
            </figure>
            <figure style={{gridColumn: "1 /3",gridRow: "5 / 8" ,margin:"1px"}}>
            <img src={images[9]} style={img}/>
            </figure>
            <figure style={{gridColumn: "3 /7",gridRow: "5 / 7" ,margin:"1px"}}>
            <img src={images[3]} style={img}/>
            </figure>
            <figure style={{gridColumn: "7 /9",gridRow: "5/ 6" ,margin:"1px"}}>
            <img src={images[11]} style={img}/>
            </figure>
            <figure style={{gridColumn: "7 /9",gridRow: "6/ 7" ,margin:"1px"}}>
            <img src={images[10]} style={img}/>
            </figure>
            <figure style={{gridColumn: "3 /5",gridRow: "7/8" ,margin:"1px"}}>
            <img src={images[1]} style={img}/>
            </figure>
            <figure style={{gridColumn: "5 /9",gridRow: "7/ 8" ,margin:"1px"}}>
            <img src={images[5]} style={img}/>
            </figure>
        </div>
    );
}