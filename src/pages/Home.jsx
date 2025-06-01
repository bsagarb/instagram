import { useEffect, useState } from "react";
import "./Home.css";
import rupeeimg from "../assets/500.png";

const Home = () => {
  const [couponId, setCouponId] = useState("");

  useEffect(() => {
    const generateCouponId = () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };

    setCouponId(generateCouponId());
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponId);
    alert("Coupon code copied!");
  };

  return (
    <div className="home-wrapper">
      <div className="coupon-card">
          {/* <img
          src={rupeeimg}
          alt="welcome"
          className="home-image"
        /> */}
        <h3 className="coupon-title">Use this coupon for shopping only</h3>
        <h2 className="coupon-code">{couponId}</h2>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default Home;
