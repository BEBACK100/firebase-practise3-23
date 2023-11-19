import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;