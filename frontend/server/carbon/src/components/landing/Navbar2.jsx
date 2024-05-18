// Navbar2.js
import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <header className='okay2'>
        <a href="/" className="logo2">Logo</a>
        <nav className='bar2'>
            <a href="/" className='bt2'>Home</a>
            <a href="/" className='bt2'>Transactions</a>
            <a href="/" className='bt2'>Services</a>
            <a href="/" className='bt2'>Contact</a>
            <button>
              <a href="/login" className='bt'>Login</a>
            </button>
            <button>
              <a href="/register" className='bt'>Sign Up</a>
            </button>
        </nav>
    </header>
  )
}

export default Navbar2