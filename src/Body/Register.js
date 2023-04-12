import Axios from "axios";
import {  useState } from "react";
import {useNavigate} from "react-router-dom";
import "./About.css"



function About(){
    const [Email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const [list,setlist]=useState([""]);
    const navigate=useNavigate();
  
    const display=async(e)=>{
  e.preventDefault();
  const da={Email,password}
  if(Email&&password){
    setlist([...list,da]);
    setEmail("");
    setpassword("");
  }
 
  else{
 console.log("error")
  }
  // ,{
    const posturl=await Axios.post("http://localhost:5001/Users/add",da)
    fetch(posturl,{
      body:JSON.stringify({Email,password})})
    
    try {

      if(!da){
        
        alert("fail")
      }
      else{
        alert("success")
        navigate("/")
      }
    } catch (error) {
      alert("plz fill in all the field as required")
    }
 
}

    return(
          <div className="contactthis">

        <form onSubmit={display}>
                 <div className="forminput">
                        <input type='Email 'placeholder="email"label='Email address' value={Email} size="lg"onChange={(e)=>setEmail(e.target.value)}></input>
                        <input type='password 'value={password}placeholder='password'onChange={(e)=>setpassword(e.target.value)}></input>
                        </div>
                    <button>sign up</button>
                      </form>
                      </div>  
     
        
          )
       }
        


export default About;