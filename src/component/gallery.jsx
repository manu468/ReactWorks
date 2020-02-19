import React from "react"
import NavBarG from "../Pages/NavBarG"
import Images from "./images"
import constants from "../assets/constants"
const Gallery=()=>{

    
    return(
        <div>
           <NavBarG /> 
           <div className="row mx-my-auto" >
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery1}></Images> 
            </div>
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery2}></Images> 
            </div>
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery3}></Images> 
            </div>
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery4}></Images> 
            </div>
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery5}></Images> 
            </div>
            <div className="col-sm-4">
            <Images img={constants.foodItems.gallery6}></Images> 
            </div>
            
             
           </div>
        </div>
    )
}

export default Gallery