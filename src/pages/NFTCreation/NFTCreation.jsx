import React from 'react';
import './NFTCreation.css';
import { MdFileUpload } from "react-icons/md";
import { MdAdd } from "react-icons/md";


const NFTCreation = () => {
  return (
    <div className="NFTCreation_CN_parent">
      <div className="NFTCreation_CN">
      <div className="title_nft_CN">
          <h1>Create an NFT</h1>
          <p>Once your item is minted, you will not be able to change any of its information</p>
      </div>
      <div className="content_create_nft_CN">
        <div className="left_create_nft_CN">
          <div className="media-upload">
            <div className="upload-box">
              <MdFileUpload className='icon_upload_media_upload'/>
              <h4>Drag and drop media</h4>
              <a href="#">Browse files</a>
              <p>Max size: 50MB</p>
              <p>JPG, PNG, GIF, SVG, MP4</p>
            </div>
          </div>
        </div>

        <div className="right_create_nft_CN">
            <div className="create_collection_nft_CN">
              <h3>Collection*</h3>
              <div className="create_collection__con">
                <div className="add_btn_collection">
                  <button className='btn_add_new_collection'><MdAdd className='icon_add_collection'/></button>
                </div>
                <p>Create a new collection</p>
              </div>
              <p className='note_add_collection'>Not all collections are eligibe. <span><a href="#">Learn more</a></span></p>
            </div>
            <form className="nft-form">
              <div className="form_group_nft">
                <input type="text" placeholder='Name your NFT' />
                <label>Name*</label>
              </div>
              <div className="form_group_nft">
                <input type="number" defaultValue={1}/>
                <label>Supply *</label>
                
              </div>
              <div className="form_group_nft">
                 <textarea placeholder='Enter a description'></textarea>
                <label>Description</label>
               
              </div>
              <div className="form_group_nft">
                 <input type="text" placeholder='http://colletion.io/item/123'/>
                <label>External link</label>
               
              </div>
              <div className="form_group_nft_trait">
                <label>Traits</label>
                <p>Traits describe attributes of your item. They appear as filters inside your collection page and are also listed out inside your item page.</p>
                <div className="add_trait_group">
                  <button className="add-trait-btn">+ Add trait</button>
                </div>
                
              </div>
              <button type="submit" className="create-btn_nft">Create</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default NFTCreation;
