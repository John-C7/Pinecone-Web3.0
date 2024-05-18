// Navbar2.js
import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <header className='okay2'>
        <a href="/" className="logo2">Logo</a>
        <nav className='bar2'>
            <a href="/">Home</a>
            <a href="/">Transactions</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
            <button href="/login">Login</button>
            <button href="/register">Sign Up</button>
        </nav>
    </header>
  )
}

export default Navbar2