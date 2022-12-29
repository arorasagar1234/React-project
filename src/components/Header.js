import React from 'react';
import './Header.css';
import pic from '../images/airbnb-logo.png';

function Header()   {
    return(
        <div className='header-content'>
            <img src={pic} className='nav-logo'/>
        </div>
    );
}

export default Header;