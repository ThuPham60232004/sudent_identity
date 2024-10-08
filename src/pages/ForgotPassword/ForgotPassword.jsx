

import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const validEmail = "example@example.com";
  const handleSendVerificationCode = async (e) => {
    e.preventDefault(); 

    if (email !== validEmail) {
      
      toast.error("Email bạn đã nhập không đúng. Vui lòng nhập lại!");
      return;
    }

    setError(null);
    toast.success("Vui lòng check email để thực hiện reset mật khẩu");
    };


  return (
    <div className="forgotpass_page">
      <div className="forgotpass_container">
        <div className="left_forgotpass_container">
          <div className="content_left_container_forgotpass">
              <h3>Account recovery</h3>
              <p>To keep your account secure, we want to ensure you're the one trying to sign in.</p>
            <div className="info_user_forgotpass">
              <img src="./img/METAMASK.png" alt="" />
              <p>Username</p>
            </div>
          </div>
        </div>

        <div className="right_container_forgotpass">
          <div className="content_right_container_forgotpass">
            <div className="logo_forgot_con">
              <img src="./img/collection.png" alt="" />
              <h3>Forgot Password</h3>
            </div>
            
            <form className='form_field_forgot' action="" onSubmit={handleSendVerificationCode}>
              <div className="input_group_forgotpass">
              <input type="text"className="input_info_forgotpass"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <label className="name_label" htmlFor="email">Email</label>
            </div>

            <button
              type="submit" className="btn_sent_forgot">Sent</button>
            </form>
            
            <div className="back_home_forgot">
              <a href="/">Back</a>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
