import React from 'react'
import './Connective.css'

import { FaTwitter,FaDiscord } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { BsTelegram } from "react-icons/bs";
const Connective = () => {
  return (
    <div className='ConnectiveContainer'>
        <div className="ConnectiveContainer_group">
            <div className='Connective__con'>
            <div className="icon_connect_con">
                <GiWorld className='iconConnective'/> 
            </div>
          
            <div className='Connectivetext'>
                <h3>Website</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='Connective__con'>
            <div className="icon_connect_con">
                 <FaTwitter className='iconConnective'/>
            </div>
          
            <div className='Connectivetext'>
                <h3>Twitter</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='Connective__con'>
            <div className="icon_connect_con">
                 <FaDiscord className='iconConnective'/>
            </div>
         
            <div className='Connectivetext'>
                <h3>Discord</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='Connective__con'>
            <div className="icon_connect_con">
                <BsTelegram className='iconConnective'/>
            </div>
              
            <div className='Connectivetext'>
                <h3>Telegram</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Connective