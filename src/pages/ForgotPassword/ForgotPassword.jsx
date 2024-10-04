// // src/components/ForgotPassword/ForgotPassword.js

// import 'react-toastify/dist/ReactToastify.css';
// import { MdEmail } from "react-icons/md";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "./ForgotPassword.css";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [showConfirmCode, setShowConfirmCode] = useState(false); // Add state to control showing the confirm code input
//   const [code, setCode] = useState('');
//   const navigate = useNavigate();

//   const handleSendVerificationCode = () => {
//     const validEmail = "example@example.com";

//     if (email === validEmail) {
//       setShowConfirmCode(true); // Show confirmation code input after email validation
//       toast.success("Mã xác minh đã được gửi!", {
//         position: toast.POSITION.TOP_CENTER
//       });
//     } else {
//       toast.error("Bạn đã nhập sai email. Vui lòng thử lại!", {
//         position: toast.POSITION.TOP_CENTER
//       });
//     }
//   };

//   const handleVerifyCode = () => {
//     const validCode = "123";

//     if (code === validCode) {
//       navigate("/resetPassword");
//     } else {
//       toast.error("Bạn đã nhập sai mã code. Vui lòng thử lại!", {
//         position: toast.POSITION.TOP_CENTER
//       });
//     }
//   };

//   return (
//     <div className="background-container_forgotpass">
//       <img src='/img/background.jpg' alt="" />
//       <div className="wrapper_forgotpass">
//         <div className="form-box_forgotpass">
//           <form>
//             <h3>Quên mật khẩu</h3>
//             <p>example@example.com</p>
//             <div className="input-box_forgotpass">
//               <input 
//                 type="text" 
//                 placeholder="Email"  
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//               <MdEmail className="icon_forgotpass_page" />
//             </div>
//             {!showConfirmCode && ( // Ẩn nút nếu showConfirmCode là true
//               <button 
//                 type="button" 
//                 onClick={handleSendVerificationCode} 
//                 className="submit_send"
//               >
//                 Gửi mã xác minh
//               </button>
//             )}
//           </form>

//           {showConfirmCode && ( // Show the confirm code form only if email is valid
//             <form className='confirm_code'>
//               <h4>Nhập mã xác nhận</h4>
//               <div className="input-box_confirm_code">
//                 <input 
//                   type="text" 
//                   placeholder="Mã xác nhận" 
//                   value={code}
//                   onChange={(e) => setCode(e.target.value)} 
//                 />
//                 <MdEmail className="icon_forgotpass_page" />
//               </div>
//               <button 
//                 type="button" 
//                 onClick={handleVerifyCode} 
//                 className="submit_confirm"
//               >
//                 Tiếp tục
//               </button>
//               <div className="register-link">
//                 <p>
//                   <a href="/Home">Trở về trang chủ</a>
//                 </p>
//               </div>
//               <ToastContainer />
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



// src/components/ForgotPassword/ForgotPassword.js

import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showConfirmCode, setShowConfirmCode] = useState(false); // Add state to control showing the confirm code input
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSendVerificationCode = () => {
    const validEmail = "example@example.com";

    if (email === validEmail) {
      setShowConfirmCode(true); // Show confirmation code input after email validation
      toast.success("Mã xác minh đã được gửi!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.error("Bạn đã nhập sai email. Vui lòng thử lại!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div className="forgotpass_page">
      <div className="forgotpass_container">
        <div className="left_forgotpass_container">
            <div className="info_web_forgotpass">
             <img src="./img/collection.png" alt=""  className='logo_forgotpass_page'/>
              <div className="dieu_khoan">
                <h3>Account recovery</h3>
                <p>To keep your account secure, Google wants to make sure that you're the one trying to sign in.</p>
              </div>
                 <div className="info_user_forgotpass">
                <img src="./img/METAMASK.png" alt="" />
                <p>Username</p>
              </div> 
          </div>
        
        </div>

          
        <div className="form-box_forgotpass">
            <h3>Forgot Password</h3>
            <div className="input_group_forgotpass">
                <input type="text" className="input_info_forgotpass" value={email}
                onChange={(e) => setEmail(e.target.value)}  />
                <label className="name_label" htmlFor="email">Email</label>
            </div>
            {!showConfirmCode && ( 
              <button 
                type="button" 
                onClick={handleSendVerificationCode} 
                className="submit_send"
              >
                Send
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
