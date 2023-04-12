import React from "react";
import "../Body/Home.css"
import pass from "../Images/herbal seven.jpg";
import down from "../Images/herbal six.jpg";
import up from "../Images/herbal three.jpg";
import make from "../Images/herbal two.jpg"

export const Home=()=>{
    return(
    <body>
<div class="container">
        <div className="card">
         <img className="img" src={pass} alt="not allowed here">     
        </img>
        <div className="tittle">
THIS IS TITLE
        </div>
        <div className="text">
you should have eighteen years of age when joining this session. am pround to be a programmer. This is card .
        </div>
        </div>
        <div className="card">
        <img className="img" src={down} alt="not allowed here">     
        </img>
        <div className="tittle">
THIS IS TITLE
        </div>
        <div className="text">
you should have eighteen years of age when joining this session. am pround to be a programmer. This is card .
        </div>
        </div>
        <div className="card">
        <img className="img" src={up} alt="not allowed here">     
        </img>
        <div className="tittle">
THIS IS TITLE
        </div>
        <div className="text">
you should have eighteen years of age when joining this session. am pround to be a programmer. This is card .
        </div>
        </div>
        <div className="card">
        <img className="img" src={make} alt="not allowed here">     
        </img>
        <div className="tittle">
THIS IS TITLE
        </div>
        <div className="text">
you should have eighteen years of age when joining this session. am pround to be a programmer. This is card .
        </div>
        </div>
            </div>
        
 
</body>
    )
}