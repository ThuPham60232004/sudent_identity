import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const fakeLoginData = {
    username: 'abc',
    password: '123',
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (username !== fakeLoginData.username || password !== fakeLoginData.password) {
      toast.error('Invalid username or password. Please try again.');
      return;
    }

    setError(null); 
    toast.success('Login successful!');
    navigate('/Dashboard'); 
  };

  const registerLink = () => {
    navigate('/register');
  };

  return (
    <div className="login_page">
      <div className="login_container">
         <div className="right_container_login">
          <div className="content_right_container_login">
            <h1>Welcome to the FINTECH</h1>
            <p>If you don't have an account yet, join us and discover a new world of digital ownership.</p>
              <button className='btn_register_page_login' onClick={registerLink}>Register</button>
          </div>
        </div>
        <div className="left_container_login">
          <div className="content_left_container_login">
              <div className="logo_login_con">
              <img src="./img/collection.png" alt="" />
              <h2 className='title_login'>LOGIN</h2>
             </div>
          <div className="body_login_container_left">
            <form onSubmit={handleSubmit} className='form_field'> 
                <div className="input_group_login">
                  <input type="text" className="input_info_login"  
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                  <label className="name_label" htmlFor="username">Username</label>
                </div>
                <div className="input_group_login">
                  <input type="password" className="input_info_login" 
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                  <label className="name_label" htmlFor="password">Password</label>
                </div>
              <div className="action_login">
                <div className="checkbox_group_login">
                  <input type="checkbox" />
                  <label className='rememberme' htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="/forgotpassword">Forgot password?</a>
              </div>
              <button className='btn_login' type="submit">Login</button>
            </form>

            <div className="social_login">
              <p>Or use your account</p>
              <div className="social_icons_login">
                <a href="#"><FaFacebookF className='icon_social_login'/></a>
                <a href="#"><FaGoogle className='icon_social_login'/></a>
              </div>
            </div>
              <p className='text_register'>No account yet? <span><a href="#" onClick={registerLink}>Register here</a></span></p>
          </div>
          </div>
          
        </div>
        {error && <p className="error-message">{error}</p>}
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;




