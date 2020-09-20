import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-img'>
                <img src={logo} alt=""/>
            </div>
            <div className='Header-area'>
                <nav className='Header-nav'>
                    <a href="./Header.js">Home</a>
                    <a href="./Header.js">Home</a>
                    <a href="./Header.js">Home</a>
                    <a href="./Header.js">Home</a>
                    <a href="./Header.js">Home</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;