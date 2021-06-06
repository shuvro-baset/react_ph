import React from 'react';
// importing logo image.
import logo from '../../images/logo.png';
// import header css file
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;