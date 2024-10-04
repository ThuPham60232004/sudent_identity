
// import React, { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
// import { MdOutlinePassword } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import './register.css';

// const Register = () => {
//   const navigate = useNavigate();
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [middleAndFirstName, setMiddleAndFirstName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [referralCode, setReferralCode] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate phone number
//     if (emailOrPhone.length !== 10 || isNaN(emailOrPhone)) {
//       toast.error('Số điện thoại phải đủ 10 ký tự và là số.');
  
//       return;
//     }

//     // Validate password match
//     if (password !== confirmPassword) {
//        toast.error('Mật khẩu và xác nhận mật khẩu không trùng khớp.');
   
//       return;
//     }
 
//     try {
   
//       setError(null);
//       toast.success('Registration successful!');
//       navigate('/login'); 
//     } catch (error) {
//       setError(error.message);
//       toast.error('Registration failed. Please check your input.');
//     }
//   };

//   const loginLink = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="background-container_register">
//       <img src='/img/background.jpg' alt="" />
//       <div className="wrapper_register">
//         <div className="form-box_register">
//           <form onSubmit={handleSubmit}>
//             <h1>Đăng kí</h1>
//             <div className="input-box_register">
//               <input
//                 type="text"
//                 id="emailOrPhone"
//                 placeholder="Email/Số điện thoại"
//                 value={emailOrPhone}
//                 onChange={(e) => setEmailOrPhone(e.target.value)}
//                 required
//               />
//               <FaPhoneAlt className="icon_register_page" />
//             </div>
//             <div className="input-box_register">
//               <input
//                 type="text"
//                 id="lastName"
//                 placeholder="Họ"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//               <FaUserAlt className="icon_register_page" />
//             </div>
//             <div className="input-box_register">
//               <input
//                 type="text"
//                 id="middleAndFirstName"
//                 placeholder="Tên đệm và tên"
//                 value={middleAndFirstName}
//                 onChange={(e) => setMiddleAndFirstName(e.target.value)}
//                 required
//               />
//               <FaUserAlt className="icon_register_page" />
//             </div>
//             <div className="input-box_register">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Mật khẩu"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <FaLock className="icon_register_page" />
//             </div>
//             <div className="input-box_register">
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="Nhập lại mật khẩu"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}   

//                 required
//               />
//               <MdOutlinePassword className="icon_register_page" />
//             </div>
    
//             <button className="submit_register">Đăng ký</button>
//             <div className="register-link">
//               <p>
//                 Bạn đã có tài khoản? <a href="#" onClick={loginLink}>Đăng nhập</a>
//               </p>
//             </div>
//           </form>
//           {error && <p className="error-message">{error}</p>}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF,FaGoogle } from "react-icons/fa";
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

    // Validate phone number
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
        <div className="left_container_register" onSubmit={handleSubmit}>
          <div className="logo_register_con">
              <img src="./img/collection.png" alt="" className='logo_register'/>
             <h2 className='title_register'>Register</h2>
          </div>
          <div className="body_register_container_left">
            <div className="form_field" >
              <div className="input_group_register">
                <input type="text" className="input_info_register"  required />
                <label className="name_label" htmlFor="email">Email</label>
              </div>
              <div className="input_group_register">
                <input type="text" className="input_info_register"required />
                <label className="name_label">Last name</label>
              </div>
              <div className="input_group_register">
                <input type="text" className="input_info_register"required />
                <label className="name_label">Middle and first name</label>
              </div>
              <div className="input_group_register">
                <input type="password" className="input_info_register"required />
                <label className="name_label">Password</label>
              </div>
              <div className="input_group_register">
                <input type="Password" className="input_info_register"required />
                <label className="name_label">Confirm password</label>
              </div>
            </div>
         
              <button>Register</button>
          
            <div className="social_register">
              
              <p>Or use your account</p>
              <div className="social_icons_register">
                <a href="#"><FaFacebookF className='icon_social_register'/></a>
                <a href="#"><FaGoogle className='icon_social_register'/></a>
              </div>
            </div>
            <div className="text_register">
              <p>Already have an account ? <span><a href="#">Login here</a></span></p>
            </div>
          </div>
        </div>
         {error && <p className="error-message">{error}</p>}
        <div className="right_container_register">
        
        <h1>Welcome to the FINTECH</h1>
        <p>If you have an account yet, login and discover a new world of digital ownership.</p>
        <div className="btn_register">
              <button>Login<FaArrowRightLong className='icon_arrow_register'/></button>
            </div>
        </div>
      </div>
       <ToastContainer />
    </div>
  );
};

export default Register;

