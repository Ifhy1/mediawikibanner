import { useState } from "react";
import "./App.css";

function App() {
  const [bannerText, setBannerText] = useState("Nurturing Nature, Harvesting Joy!");
  const [bannerColor, setBannerColor] = useState("#1e90ff");
  const [bannerImage, setBannerImage] = useState(
    "https://www.shutterstock.com/image-photo/sweet-pepper-harvest-garden-hands-600nw-2445918861.jpg"
  );


  return (
    <div className="container">
      
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(${bannerColor}99, ${bannerColor}99), url(${bannerImage})`,
        }}
      >
        <h1>{bannerText}</h1>
      </div>

  
      <div className="about">
        <p>
          Farming is more than just growing crops, it's a passion, a way of life.
          I love being close to nature, watching plants thrive, and enjoying the
          satisfaction of a good harvest. Every season brings new challenges,
          but also new rewards. There's nothing more fulfilling than nurturing
          the land and seeing it flourish!
        </p>
      </div>

      <form className="form">
        <label>Change Banner Text:</label>
        <input
          type="text"
          value={bannerText}
          onChange={(e) => setBannerText(e.target.value)}
          placeholder="Enter new banner text..."
        />

        <label>Change Banner Color:</label>
        <input
          type="color"
          value={bannerColor}
          onChange={(e) => setBannerColor(e.target.value)}
        />

        <label>Change Banner Image (URL):</label>
        <input
          type="text"
          value={bannerImage}
          onChange={(e) => setBannerImage(e.target.value)}
          placeholder="Paste image URL here..."
        />
      </form>
    </div>
  );
}

export default App;
