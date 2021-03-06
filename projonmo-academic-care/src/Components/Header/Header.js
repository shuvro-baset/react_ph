import React from 'react';
import './Header.css'
const Header = () => {
    return (
        // header div.
        <div className="container-fluid text-center p-3 bg-header">
            <h1 className="text-white">Projonmo Academic Care</h1>
            <h4>Our Honorable Teachers</h4>
            <h6> Our Monthly Budget for Teachers : <small className='fw-bolder'><span className='fw-bolder'>&#2547;</span></small> 250000</h6>
        </div>
    );
};

export default Header;