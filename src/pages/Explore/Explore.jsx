import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-item">
        <img src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg" alt="vote" />
        <h2>VOTE WITH CRIPTIC</h2>
        <p>Vote with criptic tokens held in your wallet or delegated to you.</p>
      </div>
      <div className="explore-links">
        <div className="explore-link-item">
          <img src="https://img.icons8.com/color/96/000000/discord-new-logo.png" alt="discord" />
          <p>CHAT ON DISCORD</p>
        </div>
        <div className="explore-link-item">
          <img src="https://img.icons8.com/color/96/000000/chat.png" alt="forum" />
          <p>JOIN THE FORUM</p>
        </div>
        <div className="explore-link-item">
          <img src="https://img.icons8.com/color/96/000000/museum.png" alt="documentation" />
          <p>VIEW DOCUMENTATION</p>
        </div>
        <div className="explore-link-item">
          <img src="https://criptic.vercel.app/_next/static/media/mirror.64731dd9.svg" alt="mirror" />
          <p>READ ON MIRROR</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
