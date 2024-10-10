import React from 'react'
import './ServiceDetail.css'
import { FaWallet, FaKey, FaLayerGroup, FaMobileAlt, FaCogs, FaLock, FaCreditCard, FaCodeBranch } from 'react-icons/fa'; // Import icons
import Navbar from '../../components/navbar/Navbar';

const ServiceDetail = () => {
    const techOptions = [
        { label: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
        { label: 'React', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s' },
        { label: 'React Native', icon: 'https://rnkakao.dev/en/assets/images/logo-abfe34a6f8e7132d79106d0b0cbc04fb.png' },
        { label: '.NET', icon: 'https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-ff73c2b/www.rishabhsoft.com/wp-content/uploads/2021/10/NET-Core-Development-intro-banner.png' },
        { label: 'Unity', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv8cXiVDcXOHa1ZhuOimaaAnRfNfiqBkwzWS4N_lT4JNJaVM3VjMAr4yU2MzKwydBp4k&usqp=CAU' },
        { label: 'Unreal Engine', icon: 'https://cdn2.steamgriddb.com/logo_thumb/598fb37d8e3a1f127b3ba7700febc92e.png' },
        { label: 'Python', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqj27Y0YTHVq_4CD8TyirVpBZZ_7HLPBxwTw&s' },
        { label: 'JavaScript', icon: 'data:image/png;base64,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' }
      ];
      
      const learnOptions = [
        { title: 'Overview', description: 'Everything you need to know about thirdweb Connect', icon: <FaLayerGroup /> },
        { title: 'Sign-In', description: 'Flexible user sign-up flow with wallet and social sign-in methods', icon: <FaKey /> },
        { title: 'Account abstraction', description: 'Complete toolkit for Account Abstraction', icon: <FaLock /> },
        { title: 'In-App Wallet', description: 'Email & social login wallets for your customers', icon: <FaMobileAlt /> },
        { title: 'Ecosystem Wallet', description: 'Managed in-app wallet service for unified login across all of your apps and games', icon: <FaCogs /> },
        { title: 'Auth', description: 'Authenticate users with their wallets', icon: <FaWallet /> },
        { title: 'Pay', description: 'Easily integrate fiat onramps and cross-chain crypto purchases', icon: <FaCreditCard /> },
        { title: 'Blockchain API', description: 'Performant, and reliable blockchain API', icon: <FaCodeBranch /> }
      ];
  return (
    <div className='ServiceDetail'>
        <Navbar/>
        <div className='ServiceDetailContainer'>
            <div className='ServiceDetailHeader'>
                <div className='ServiceDetailHeaderText'>
                <h1>Fintech Documentation</h1>
                <h4>Frontend, backend, and onchain tools to build complete web3 apps — on every EVM chain.</h4>
                </div>
                <img src='https://portal.thirdweb.com/_next/static/media/docs-hero.7c670adc.svg' alt='logomm' className='ServiceDetailHeaderImg'/>
            </div>
            <div className="connect-container">
                <h2>Connect</h2>
                <div className="tech-grid">
                    {techOptions.map((tech, index) => (
                    <div key={index} className="tech-card">
                        <img src={tech.icon} alt={`${tech.label} icon`} className="tech-icon" />
                        <span>{tech.label}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="learn-container">
                <h2>Learn</h2>
                <div className="learn-grid">
                    {learnOptions.map((item, index) => (
                    <div key={index} className="learn-card">
                        <div className="learn-icon">{item.icon}</div> {/* Render the icon here */}
                        <div className="learn-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetail