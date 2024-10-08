import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import './ChangePassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null); 


    const fakeOldPassword = 'NguyenVanA012345678@!';
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (oldPassword !== fakeOldPassword) {
            toast.error('Mật khẩu cũ không chính xác.');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('Xác nhận mật khẩu không đúng, vui lòng nhập lại.');
            return;
        }

        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])/;
        if (!regex.test(newPassword) || newPassword.length < 8) {
            toast.error('Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ cái in hoa, chữ thường, số và ký tự đặc biệt.');
            return;
        }

        setError(null)
        toast.success('Đổi mật khẩu thành công.');
    };

    return (
        <div className="changepass_page">
            <div className="change_password_container">
                <div className="left_changepassword_con">
                    <div className="content_left_con_changepassword">
                        <h3>Account recovery</h3>
                        <p>To keep your account secure, we want to ensure you're the one trying to sign in.</p>
                        <div className="info_user_changepassword">
                        <img src="./img/METAMASK.png" alt="" />
                        <p>Username</p>
                        </div> 
                    </div>
                </div>
                <div className="right_changepassword_con">
                    <div className="content_right_con_changepassword">
                        <div className="logo_changepassword_con">
                            <img src="./img/collection.png" alt="" />
                            <h3>Change Password</h3>
                        </div>
                        <form className='form_field_changepassword' action="" onSubmit={handleSubmit}>
                            <div className="input_group_changepassword">
                                <input type="password"className="input_info_changepassword"value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)} required/>
                            <label className="name_label">Old password</label>
                            </div>
                              <div className="input_group_changepassword">
                                <input type="password"className="input_info_changepassword"  value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} required/>
                            <label className="name_label">New password</label>
                            </div>
                             <div className="input_group_changepassword">
                                <input type="password"className="input_info_changepassword"  value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            <label className="name_label">Confirm new password</label>
                            </div>
                         <button type="submit" className="btn_change_password">Save</button>
                        </form>
                         <div className="back_home_changepass">
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

export default ChangePassword;
