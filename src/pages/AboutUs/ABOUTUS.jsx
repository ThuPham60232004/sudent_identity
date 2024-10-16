import React from 'react';
import './AboutUs.css'; 
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { FaRocket, FaApple, FaBolt, FaCode } from 'react-icons/fa';
import { FaPhoneVolume,FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";



const AboutUs = () => {
    const teamMembers = [
        {
            name: "Alex Grey",
            position: "CEO, Director",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-1.png"
        },
        {
            name: "Ashton Kutsher",
            position: "Entrepreneur & Author",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-2.png"
        },
        {
            name: "John Ferris",
            position: "Developer & Investor",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-3.png"
        },
        {
            name: "Belinda Bing",
            position: "Former COO Shopee",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-4.png"
        },
        {
            name: "Camille Alforque",
            position: "Chief Creative Officer",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-5.png"
        },
        {
            name: "Nathaniel Ragpa",
            position: "Front-end Developer",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-6.png"
        },
        {
            name: "Linda Brown",
            position: "Marketing Officer",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-7.png"
        },
        {
            name: "Gavin Silberman",
            position: "Designer & Investor",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-8.png"
        },
        {
            name: "Masha Smith",
            position: "VP Communications",
            linkedin: "#",
            twitter: "#",
            imageUrl: "/img/user-9.png"
        },
 
     
   
    ];


    const hexItems = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      content: "Our service ensures quick and efficient performance across platforms."
    },
    {
      icon: <FaApple />,
      title: "Intuitive Design",
      content: "Experience an easy-to-use interface with modern design."
    },
    {
      icon: <FaBolt />,
      title: "High Efficiency",
      content: "Maximize productivity with our high-performance solutions."
    },
    {
      icon: <FaCode />,
      title: "Developer Friendly",
      content: "Built with developers in mind, easy to integrate and extend."
    }
  ];

    return (
        <div className="ct-about-container1">
            <Navbar />
            <div className="ct-about-container">
                <h2 className="ct-about-title">About Us</h2>
                <p className="ct-about-description">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                </p>
                 <div className="hex-grid-container">
                    {hexItems.map((item, index) => (
                      <div className="hex-column" key={index}>
                        <div className="hex">
                          <div className="hex-inner">
                            <div className="hex-content">
                              <div className="hex-icon">{item.icon}</div>
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                <div className="ct-about-paragraphs">
                  <div className="left_paragraphs">
                    <h3>PIXEL VAULT CORE COLLECTION</h3>
                    <p>The Pixel Vault Core Collection consists of 146 concept characters including two special mints collaboratively designed by project creatives, Chris Wahl and Odious. The collection reflects its broad reach, which includes 16 PUNKS, 48 crossover variations, and 80 Inhabitants Core Identities</p>
                    <button className='btn_created_nft_about_paragraphs'>Created NFTS</button>
                  </div>
                  <div className="right_paragraphs">
                    <img src="http://localhost:3000/img/punk.png" alt="" />
                  </div>
                </div>


                <div className="ct-about-info">
                    <div className="ct-about-card">
                        <FaPhoneVolume className='icon_about-info'/>
                        <h3>Contact Phone Number</h3>
                        <div className="content_about_info">
                          <ul>
                            <li>444 555 666 777</li>
                            <li>222 222 222 333</li>
                          </ul>
                        </div>
                        
                    </div>
                    <div className="ct-about-card">
                        <MdAttachEmail className='icon_about-info'/>
                        <h3>Our Email Address</h3>
                        <div className="content_about_info">
                          <ul>
                            <li>admin@gmail.com</li>
                            <li>example@gmail.com</li>
                          </ul>
                        </div>
                       
                    </div>
                    <div className="ct-about-card">
                        <FaLocationDot className='icon_about-info'/>
                        <h3>Our Location</h3>
                        <div className="content_about_info">
                            <ul>
                              <li>5678 Bangla Main Road, cities 580</li>
                               <li>5678 Bangla Main Road, cities 580</li>
                            </ul>
                        </div>
                        
                    </div>
                </div> 
            </div>
            
        

            <div className="ct-team-container">
                <h2>Meet Our Amazing Team</h2>
                <div className="ct-team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="ct-team-card" key={index}>
                          <div className="ct-team-image">
                            <img src={member.imageUrl} alt={member.name} />
                          </div>
                           
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <div className="ct-social-icons">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="ct-icon" />
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="ct-icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                    <div className="ct-team-card ct-join-us">
                        <h3>Join us!</h3>
                    </div>
                </div>
            </div>

          <div className="ct-company">
                <div className="image_company">
                   <img src='/img/cty_DTS.png' alt='Company DTS' />
                </div>
               <div className="image_company">
                <img src='/img/cty_fada.png' alt='Company Fada' />
               </div>
                <div className="image_company">
                  <img src='/img/cty_TSS.png' alt='Company TSS' />
                </div>
                <div className="image_company">
                  <img src='/img/Cty_FFC.png' alt='Company FFC' />
                </div>
                <div className="image_company">
                   <img src='/img/Cty_SCUE.jpg' alt='Company SCUE' />
                </div>
               
          </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
