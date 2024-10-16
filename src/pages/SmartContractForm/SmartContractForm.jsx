import React, { useState } from 'react';
import './SmartContractForm.css'

import { LuScrollText } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { MdOutlineDraw,MdOutlineMoreHoriz,MdOutlineFileUpload } from "react-icons/md";
import { FaEye,FaEthereum } from "react-icons/fa";
import { GiRoundKnob } from "react-icons/gi";
import { FaEyeLowVision,FaRegCircleDot } from "react-icons/fa6";

const SmartContractForm = () => {
    const [contractName, setContractName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
  
    return (

      <div className="smart_contract_page">
        <div className="smart_contract_container">
          <div className="left_smart_contract">
            <div className="description_smart_contract">
              <h2>Let's create a smart contract for your drop.</h2>
              <p>You'll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '} <a href="#" className="link">What is a contract?</a></p>
            </div>
            
            <div className="logo-upload_smart_contract">
                <h3 className='title_upload_box_smart_contract'>Logo image</h3>
               <div className="upload-box_smart_contract">
                  <div className="box_img_smart_contract">
                    <MdOutlineFileUpload className='icon_upload_smart_contract'/>
                  </div>
                  <div className="box_des_smart_contract">
                    <h3>Drag and drop or click to upload</h3>
                    <p>You may change this after deploying your contract.</p>
                    <p>Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</p>
                  </div>
               </div>
            </div>

            <div className="contract-details_smart_contract">
               <div className="input-group1_smart_contract">
                 <h3 className='title_upload_box_smart_contract'>Contract name</h3>
                  <input type="text" value={contractName} onChange={(e) => setContractName(e.target.value)} placeholder="My Collection Name" className='input_group'/>
              </div>
              <div className="input-group2_smart_contract">
                  <h3 className='title_upload_box_smart_contract'>Token symbol</h3>
                 <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} placeholder="MCN" className='input_group'/>
              </div>
            </div>

            <div className="blockchain-options_smart_contract">
                <h3 className='title_upload_box_smart_contract'>Blockchain</h3>
               <div className="options3_smart_contract">
                  <div className="option3_smart_contract">
                    <FaEthereum color='white' className='icon_option3_smart_contract'/>
                    <h4>Ethereum</h4>
                      <p className='tag_smart_contract'>Most popular</p>

                    <p className='tag_smart_contract'>Estimated cost to deploy contract: $13.53</p>
                  </div>
                  <div className="option3_smart_contract">
                    <GiRoundKnob color='white' className='icon_option3t_smart_contract'/>
                    <h4>Base</h4>
                      <p className='tag_smart_contract'>Cheaper</p>
                   
                    <p className='tag_smart_contract'>Estimated cost to deploy contract: $0.01</p>
                  </div>
                  <div className="option3_smart_contract">
                    <MdOutlineMoreHoriz color='white' className='icon_option3_smart_contract'/>
                    <h4>See more options</h4>
                  </div>
               </div>
            </div>
              <div className="advanced-settings_smart_contract">
                <a href="#">Advanced settings</a>
            </div>

          </div>
          <div className="right_contract_smart_contract">
            <div className="doc_smart_contract">
              <div className="tilte_item_smart_contract">
                 <h3>After you deploy your contract you'll be able to:</h3>
              </div>
              <div className="list_des_smart_contract">
                <div className="list_item_smart_contract">
                    <LuScrollText className='icon_item_smart_contract'/>
                    <div className="lable_item_smart_contract">
                      <h4>Manage collection settings</h4>
                      <p>Edit collection details earnings, and links.</p>
                    </div>
                </div>
                <div className="list_item_smart_contract">
                    <BsStars className='icon_item_smart_contract'/>
                    <div className="lable_item_smart_contract">
                      <h4>Set up your drop</h4>
                      <p>Set up your mint schedule and presale stages.</p>
                    </div>
                </div>
                <div className="list_item_smart_contract">
                    <MdOutlineDraw className='icon_item_smart_contract'/>
                    <div className="lable_item_smart_contract">
                      <h4>Prepare designs</h4>
                      <p>Customize your pages and upload all asset.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="doc_smart_contract">
              <div className="tilte_item_smart_contract">
                  <h3>Your community:</h3>
              </div>
              <div className="list_des_smart_contract">
                <div className="list_item_smart_contract">
                    <FaEyeLowVision className='icon_item_smart_contract'/>
                    <div className="lable_item_smart_contract">
                      <h4>Can't view</h4>
                      <p>Your drop page or items items until you publish them.</p>
                    </div>
                </div>
                <div className="list_item_smart_contract">
                    <FaEye className='icon_item_smart_contract'/>
                    <div className="lable_item_smart_contract">
                      <h4>Can view</h4>
                      <p>SCan view that you've deployed a contract onto the blockchain.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default SmartContractForm;
