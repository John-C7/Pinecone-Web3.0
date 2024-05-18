import React from 'react';
import './RegisterForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const RegisterForm = () => {
  return (
    <div className='mainpage'>
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='E-mail' required />
                    <MdEmail className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='First Name' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Last Name' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='New Password' required />
                    <FaLock className='icon'/>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
  );
};
