import "./Home.css";
import rupeeimg from "../assets/500.png"

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <img
          src={rupeeimg}
          alt="welcome"
          className="home-image"
        />
        <h2>Take this and enjoy😂😂😂😂😂</h2>
      </div>
    </div>
  );
};

export default Home;
