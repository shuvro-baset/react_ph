import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    // const { user, logout } = useAuth();
    return (
        <div>
            <div className="header">
                <Link to="/home">Home</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/placeorder">Place Order</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                {/* <span>{user.displayName} </span>
                {user?.email && <button onClick={logout}>log out</button>} */}
            </div>
        </div>
    );
};

export default Header;