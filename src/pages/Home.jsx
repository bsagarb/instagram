import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [couponId, setCouponId] = useState("");
  const [timer, setTimer] = useState(10); // 60 seconds
  const [copied, setCopied] = useState(false);

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

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="home-wrapper">
      <div className="coupon-card">
        <h3 className="coupon-title">Use this coupon for shopping only</h3>

        {timer > 0 ? (
          <div className="timer-message">Please wait... Coupon will appear in <strong>{timer}s</strong></div>
        ) : (
          <>
            {/* <h2 className="coupon-code">{couponId}</h2>
            <button className="copy-button" onClick={copyToClipboard}>
              {copied ? "Copied!" : "Copy"}
            </button> */}
            <h3 className="expire-code">Sorry, You are not eligible for this time</h3>
            <h3>Better luck next time.</h3>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;
