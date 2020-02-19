import React from "react";

const Images=(props)=>{

    return(
        <div>
             <img style={{width:"100%",height:"100%",padding:"1rem",borderRadius:"30px"}} src={props.img}></img> 
        </div>
    )

}

export default Images