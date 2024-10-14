import React from 'react';
import './AboutUs.css'; 
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const AboutUs = () => {
    const teamMembers = [
        { name: "Alex Grey", position: "CEO, Director", linkedin: "#", twitter: "#", imageUrl: "/img/user-1.png" },
        { name: "Ashton Kutsher", position: "Entrepreneur & Author", linkedin: "#", twitter: "#", imageUrl: "/img/user-2.png" },
        { name: "John Ferris", position: "Developer & Investor", linkedin: "#", twitter: "#", imageUrl: "/img/user-3.png" },
        { name: "Belinda Bing", position: "Former COO Shopee", linkedin: "#", twitter: "#", imageUrl: "/img/user-4.png" },
        { name: "Camille Alforque", position: "Chief Creative Officer", linkedin: "#", twitter: "#", imageUrl: "/img/user-5.png" },
        { name: "Nathaniel Ragpa", position: "Front-end Developer", linkedin: "#", twitter: "#", imageUrl: "/img/user-6.png" },
        { name: "Linda Brown", position: "Marketing Officer", linkedin: "#", twitter: "#", imageUrl: "/img/user-7.png" },
        { name: "Gavin Silberman", position: "Designer & Investor", linkedin: "#", twitter: "#", imageUrl: "/img/user-8.png" },
        { name: "Masha Smith", position: "VP Communications", linkedin: "#", twitter: "#", imageUrl: "/img/user-9.png" },
        { name: "Join Us!", position: "", linkedin: "", twitter: "", imageUrl: "/img/user-10.png" },
        { name: "Masha Smith", position: "VP Communications", linkedin: "#", twitter: "#", imageUrl: "/img/user-11.png" },
    ];
      
  return (
    <div className="ct-about-container1">
        <Navbar/>
   <div className="ct-about-container">
  <h2 className="ct-about-title">About Us</h2>
    <p className="ct-about-description">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
    </p>
    <div className="ct-about-info">
        <div className="ct-about-card">
        <i className="fa fa-phone ct-icon"></i>
        <h3>Contact Phone Number</h3>
        <p>+444 555 666 777</p>
        <p>+222 222 222 333</p>
        </div>
        <div className="ct-about-card">
        <i className="fa fa-envelope ct-icon"></i>
        <h3>Our Email Address</h3>
        <p>admin@gmail.com</p>
        <p>example@gmail.com</p>
        </div>
        <div className="ct-about-card">
        <i className="fa fa-map-marker ct-icon"></i>
        <h3>Our Location</h3>
        <p>5678 Bangla Main Road, cities 580</p>
        <p>GBnagle, example 54786</p>
        </div>
    </div>
    </div>
      <div className="ct-map-container">
      <h2>Vietnam</h2>
      <p className="ct-map-description">Vietnam, Asia</p>
      <div className="ct-map-frame">
        <iframe
          title="Vietnam Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149211.914973624!2d102.10945815874893!3d14.05832456459109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbffcc60b9d%3A0x373319107d27f0d0!2zVmlldG5hbQ!5e0!3m2!1svi!2s!4v1638409512725!5m2!1svi!2s"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="ct-team-container">
      <h2>Meet Our Amazing Team</h2>
      <div className="ct-team-grid">
        {teamMembers.map((member, index) => (
          <div className="ct-team-card" key={index}>
            <img src={member.imageUrl} alt={member.name} className="ct-team-image" />
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
    <Footer/>
    </div>
  );
};

export default AboutUs;
