import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../assets/Login.svg';
import Logo from '../../assets/Logo.svg';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo" className='logo' />
                <div>
                    <Link className="home" to='/'>Home</Link>
                    <Link className="nav" to='/form'>Register</Link>
                    <Link className="nav" to='/'>Products</Link>
                    <Link className="nav" to='/aboutus'>About Us</Link>
                </div>
                <img src={Login} alt="Login" className='login' />
            </nav>
        </header>
    );
}