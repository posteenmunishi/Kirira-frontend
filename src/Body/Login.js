import React, { useState } from 'react';
// import "./login.css"
import About from './Register';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
    const[ Email,setEmail]=useState();
    const[ password,setpassword]=useState();
    const[list,setlist]=useState();
    const Navigate = useNavigate()
//function to update the valuables
const logiin=async(e)=>{
e.preventDefault();
const m={Email,password};
if(Email&&password){
  // setlist([...list,m]);
  const logi=await Axios.post("http://localhost:5001/Users/login",m);
 

if(logi?.data!=="success"){
  alert("Login Failed")
  Navigate('/Register')
}
else{
  alert("success")
  Navigate("/")
}
  setEmail('')
  setpassword('')
}
else{
  alert("Please provide email and password")
  // Navigate('/Register')
}

}


    return(
        <div className="contact">
             
      <form >
        <input type="Email"placeholder='email'value={Email}onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password"placeholder='password'value={password}onChange={(e)=>setpassword(e.target.value)}></input>
      </form>
     <button onClick={logiin} type='submit'>login here</button>
      
      </div>
    )
}

export default Login
