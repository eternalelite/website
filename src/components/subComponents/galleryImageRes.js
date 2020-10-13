import React from "react";

export default function Image(prop){
    const images = prop.image;
    const grid={
  width: "100%",
  height: "175vh",
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)",
  gridTemplateRows: "repeat(12, 1fr)",

  rowGap: "2px",
  columnGap: "2px",

    };
    const img={
      display: "block",
      margin:"0px",
  width: "100%",
  height: "100%",
  objectFit:"fill",
  borderRadius:"1px",
  margin:"1px"
    };
    return(
        <div style={grid}>
          <figure style={{gridColumn: "1 / 4",gridRow: "1 / 3" ,margin:"1px"}}>
            <img src={images[9]} style={img}/>
            </figure>
            <figure  style={{gridColumn: "4/ 8",gridRow: "1/ 2" ,margin:"1px"}}>
            <img src={images[2]} style={img}  />
            </figure>
            <figure style={{gridColumn: "8 / 12",gridRow: "1 / 2" ,margin:"1px"}}>
            <img src={images[7]} style={img}/>
            </figure>
            <figure style={{gridColumn: " 4 /8",gridRow: "2 / 3" ,margin:"1px"}}>
            <img src={images[5]} style={img}/>
            </figure>
            <figure style={{gridColumn: "12 /16",gridRow: "1 / 3" ,margin:"1px"}}>
            <img src={images[18]} style={img}/>
            </figure>
            <figure style={{gridColumn: "8 /12",gridRow: "2/ 3" ,margin:"1px"}}>
            <img src={images[12]} style={img}/>
            </figure>
            <figure style={{gridColumn: "12/16",gridRow: "3 / 4" ,margin:"1px"}}>
            <img src={images[11]} style={img}/>
            </figure> 
            <figure style={{gridColumn: "12 /16",gridRow: "4 / 5" ,margin:"1px"}}>
            <img src={images[0]} style={img}/>
            </figure>
            <figure style={{gridColumn: "8 /12",gridRow: "4 / 5" ,margin:"1px"}}>
            <img src={images[13]} style={img}/>
            </figure>
            <figure style={{gridColumn: "8 /12",gridRow: "3 / 4" ,margin:"1px"}}>
            <img src={images[14]} style={img}/>
            </figure>
            <figure style={{gridColumn: "1 /8",gridRow: "3 / 5" ,margin:"1px"}}>
            <img src={images[19]} style={img}/>
            </figure>
            <figure style={{gridColumn: "1 /5",gridRow: "5 / 6" ,margin:"1px"}}>
            <img src={images[16]} style={img}/>
            </figure>
            <figure style={{gridColumn: "5 /12",gridRow: "5 / 6" ,margin:"1px"}}>
            <img src={images[15]} style={img}/>
            </figure>
            <figure style={{gridColumn: "12 /16",gridRow: "5 / 6" ,margin:"1px"}}>
            <img src={images[3]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "1 /8",gridRow: "6/ 8" ,margin:"1px"}}>
            <img src={images[4]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "8 /12",gridRow: "6 / 8" ,margin:"1px"}}>
            <img src={images[10]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "12 /16",gridRow: "6 / 7" ,margin:"1px"}}>
            <img src={images[8]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "12 /16",gridRow: "7 / 8" ,margin:"1px"}}>
            <img src={images[6]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "12 /16",gridRow: "8 / 9" ,margin:"1px"}}>
            <img src={images[14]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "8 /12",gridRow: "8 / 9" ,margin:"1px"}}>
            <img src={images[12]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "4 /8",gridRow: "8 / 9" ,margin:"1px"}}>
            <img src={images[13]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "1 /4",gridRow: "8 / 10" ,margin:"1px"}}>
            <img src={images[17]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "4 /8",gridRow: "9 / 10" ,margin:"1px"}}>
            <img src={images[5]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "8 /16",gridRow: "9 / 11" ,margin:"1px"}}>
            <img src={images[1]} style={img}/>
            </figure>
            
            <figure style={{gridColumn: "4 /8",gridRow: "10 / 11" ,margin:"1px"}}>
            <img src={images[0]} style={img}/>
            </figure>

            <figure style={{gridColumn: "1 /4",gridRow: "10 / 11" ,margin:"1px"}}>
            <img src={images[8]} style={img}/>
            </figure>
       </div>
    );
}