import React from 'react';
import './NFTCreation.css';
import { MdFileUpload } from "react-icons/md";
import { MdAdd } from "react-icons/md";


const NFTCreation = () => {
  return (
    // <div className='NFTCreation_CN'>
    //   <div className="nft-creation-container">
    //     <div>
    //       <h1>Create an NFT</h1>
    //       <h5>Once your item is minted, you will not be able to change any of its information</h5>
          // <div className="media-upload">
          //   <div className="upload-box">
          //     <p>Drag and drop media</p>
          //     <p><a href="#">Browse files</a></p>
          //     <p>Max size: 50MB</p>
          //     <p>JPG, PNG, GIF, SVG, MP4</p>
          //   </div>
          // </div>
    //     </div>
    //     <div className="form-section">
    //       <div className="collection-section">
    //         <button className="create-collection-btn">+ Create a new collection</button>
    //         <p>Not all collections are eligible. <a href="#">Learn more</a></p>
    //       </div>
          // <form className="nft-form">
          //   <div className="form-group">
          //     <label>Name *</label>
          //     <input type="text" placeholder="Name your NFT" />
          //   </div>
          //   <div className="form-group">
          //     <label>Supply *</label>
          //     <input type="number" defaultValue={1} />
          //   </div>
          //   <div className="form-group">
          //     <label>Description</label>
          //     <textarea placeholder="Enter a description"></textarea>
          //   </div>
          //   <div className="form-group">
          //     <label>External link</label>
          //     <input type="text" placeholder="https://collection.io/item/123" />
          //   </div>
          //   <div className="form-group">
          //     <label>Traits</label>
          //     <button className="add-trait-btn">+ Add trait</button>
          //   </div>
          //   <button type="submit" className="create-btn">Create</button>
          // </form>
    //     </div>
    //   </div>
    // </div>


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
                  <MdAdd className='icon_add_collection'/>
                </div>
                <p>Create a new collection</p>
              </div>
              <p>Not all collections are eligibe. <span><a href="#">Learn more</a></span></p>
            </div>
            <form className="nft-form">
              <div className="form-group">
                <input type="text" />
                <label htmlFor="">Name your NFT</label>
              </div>
              <div className="form-group">
                <label>Supply *</label>
                <input type="number" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea></textarea>
              </div>
              <div className="form-group">
                <label>External link</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Traits</label>
                <button className="add-trait-btn">+ Add trait</button>
              </div>
              <button type="submit" className="create-btn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
