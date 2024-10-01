import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaBell } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineCopyright } from "react-icons/md";

const TemplateTransferNFT = () => {
  const styles = {
        container: {
            maxWidth: '600px',
            background: 'white',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
        },
        logo: {
            width: '100%',
            height: '70px',
            display: 'flex',
            background: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            gap: '5px',
        },
        logoImage: {
            width: '45px',
            height: '45px',
            borderRadius: '50px',
            margin: 'auto 0',
        },
        logoText: {
            margin: 'auto 0',
            fontWeight: '800',
            fontSize: '30px',
        },
        content1: {
            background: 'rgb(22, 15, 61)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '20px',
            gap: '10px',
        },
        icon: {
            fontSize: '40px',
            color: 'white',
            margin: 'auto',
        },
        content1Text: {
            color: 'white',
            fontSize: '20px',
        },
        content2: {
            padding: '40px 50px 50px 50px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        content2Text: {
            color: 'rgb(22, 15, 61)',
        },
        button: {
            background: 'rgb(22, 15, 61)',
            width: '200px',
            margin: '0',
            marginTop: '30px',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
        },
        note: {
            marginTop: '30px',
            fontSize: '14px',
            fontStyle: 'italic',
            color: 'rgb(148, 148, 148)',
        },
        footer: {
            width: '100%',
            height: '130px',
            background: 'rgb(22, 15, 61)',
            display: 'flex',
            padding: '30px 40px',
        },
        leftFooter: {
            width: '60%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        footerText: {
            fontSize: '12px',
        },
        rightFooter: {
            width: '40%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '25px',
            margin: 'auto 0',
        },
        socialIcons: {
            display: 'flex',
            gap: '15px',
        },
        iconSocial: {
            fontSize: '20px',
            color: 'white',
        },
     
    };
  return (
   <div style={styles.container}>
            <div style={styles.logo}>
                <img src="./img/collection.png" alt="" style={styles.logoImage} />
                <p style={styles.logoText}>FINTECH</p>
            </div>
            <div style={styles.content1}>
                <FaBell style={styles.icon} />
                <p style={styles.content1Text}>Notification</p>
            </div>
            <div style={styles.content2}>
                <p style={styles.content2Text}>Hello,</p>
                <p>LỜI NHẮN Ở ĐÂY, có gì ông sửa lại theo ý ông nhe</p>
                <p style={styles.content2Text}>
                    We have sent you this email in response to your request to reset your password on company name
                </p>
                <p style={styles.content2Text}>To reset your password, please follow the below :</p>
                <button style={styles.button}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Reset Password</a></button>
                <p style={styles.note}>Please ignore this email if you did not request a password change.</p>
            </div>
            <div style={styles.footer}>
                <div style={styles.leftFooter}>
                    <h4>Contact</h4>
                    <p style={styles.footerText}>1912 Mcwhorter Road, FL 11223</p>
                    <p style={styles.footerText}>+ 111 222 333 | Info@company.com</p>
                </div>
                <div style={styles.rightFooter}>
                    <div style={styles.socialIcons}>
                      <a href="#"><FaFacebookF style={styles.iconSocial} /></a>
                      <a href="#"> <FaTwitter style={styles.iconSocial} /></a>
                      <a href="#"><FaInstagram style={styles.iconSocial} /></a>
                      <a href="#"><FaLinkedinIn style={styles.iconSocial} /></a>
                      
                    </div>
                    <p style={styles.footerText}>Company <span><MdOutlineCopyright /></span> All rights Reserved</p>
                </div>
            </div>
        </div>
  )
}

export default TemplateTransferNFT
