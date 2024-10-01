import React from 'react'
import './Connective.css'
import { AiOutlineGlobal } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { TbBrandDiscord } from "react-icons/tb";
import { BsTelegram } from "react-icons/bs";
const Connective = () => {
  return (
    <div className='ConnectiveContainer'>
        <div className='ConnectiveWebsite'>
            <div className='ConnectiveiconWebsite'>
                <AiOutlineGlobal className='iconConnective'/>
            </div>
            <div className='Connectivetext'>
                <h3>Website</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='ConnectiveTwitter'>
            <div className='ConnectiveiconTwitter'>
                <CiTwitter className='iconConnective'/>
            </div>
            <div className='Connectivetext'>
                <h3>Twitter</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='ConnectiveDiscord'>
            <div className='ConnectiveiconDiscord'>
                <TbBrandDiscord className='iconConnective'/>
            </div>
            <div className='Connectivetext'>
                <h3>Discord</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
        <div className='ConnectiveTelegram'>
            <div className='ConnectiveiconTelegram'>
                <BsTelegram className='iconConnective'/>
            </div>
            <div className='Connectivetext'>
                <h3>Telegram</h3>
                <h5>www.fintech.com</h5>
            </div>
        </div>
    </div>
  )
}

export default Connective