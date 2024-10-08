import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleAndFirstName, setMiddleAndFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number or email
    if (emailOrPhone.length !== 10 || isNaN(emailOrPhone)) {
      toast.error('Số điện thoại phải đủ 10 ký tự và là số.');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error('Mật khẩu và xác nhận mật khẩu không trùng khớp.');
      return;
    }

    try {
      // Registration logic (e.g., API call)
      setError(null);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      setError(error.message);
      toast.error('Registration failed. Please check your input.');
    }
  };

  const loginLink = () => {
    navigate('/login');
  };

  return (
    <div className="register_page">
      <div className="register_container">
        <div className="right_container_register">
          <div className="content_right_container_register">
            <h1>Welcome to FINTECH</h1>
          <p>If you have an account yet, login and discover a new world of digital ownership.</p>
          <button className='btn_login_page_register' onClick={loginLink}>Login</button>
          </div>
        </div>

        <div className="left_container_register">
          <div className="content_left_container_register">
          <div className="logo_register_con">
            <img src="./img/collection.png" alt="" />
            <h2 className='title_register'>Register</h2>
          </div>

          <div className="body_register_container_left">
            <form onSubmit={handleSubmit} className='form_field' action="">
              <div className="input_group_register">
                <input
                  type="text"
                  className="input_info_register"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                />
                <label className="name_label" htmlFor="email">Email or Phone</label>
              </div>

              <div className="input_group_register">
                <input
                  type="text"
                  className="input_info_register"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label className="name_label">Last name</label>
              </div>

              <div className="input_group_register">
                <input
                  type="text"
                  className="input_info_register"
                  value={middleAndFirstName}
                  onChange={(e) => setMiddleAndFirstName(e.target.value)}
                  required
                />
                <label className="name_label">Middle and first name</label>
              </div>

              <div className="input_group_register">
                <input
                  type="password"
                  className="input_info_register"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="name_label">Password</label>
              </div>

              <div className="input_group_register">
                <input
                  type="password"
                  className="input_info_register"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label className="name_label">Confirm password</label>
              </div>
              <button className='btn_register' type="submit">Register</button>
            </form>
          <div className="social_register">
            <p>Or use your account</p>
            <div className="social_icons_register">
              <a href="#"><FaFacebookF className='icon_social_register' /></a>
              <a href="#"><FaGoogle className='icon_social_register' /></a>
            </div>
          </div>
          <p className='text_register'>Already have an account? <span><a onClick={loginLink}>Login here</a></span></p>
        </div>
      </div>
    </div>
        {error && <p className="error-message">{error}</p>}        
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
