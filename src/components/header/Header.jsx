
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="header">
  <div class="header-content">
    <div className="left_content_header">
      <div className="content1_header">
        <p>THIS ITEM WAS FEATURED ON <span className="gradient-text">FINTECH</span></p>
      </div>
      <div className="content2_header">
        <p>Meet Powerful Of <span className="gradient-text">NFT Marketplace</span> WordPres Plugin</p>
      </div>
      <div className="content3_header">
          <p>Create a <span className="bold-text">Full-Functional NFT Marketplace,</span> customize the storefront, and list unlimited NFTs. </p>
      </div>
      <div className="button_header_content">
        <button><a href="#">Create NFT</a></button>
        <button><a href="#">Create Marketplace</a></button>
      </div>
    </div>

    <div className="right_content_header">
      <img src="./img/Group-901-min.webp" alt="" />
    </div>
  </div>
</div>

  );
};

export default Header;
