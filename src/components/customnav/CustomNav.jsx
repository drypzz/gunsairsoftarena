import React from 'react';

import '../utils/customnav.css';

const CustomNav = ( {text, link} ) => {
    return (
        <nav className='custom___nav'>
            <div className='custom___nav__container'>
                <div className='custom___nav___content'>
                    <a href={link}>Inicio</a>
                </div>
                <div className='custom___nav___content'>
                    <span>{text}</span>
                </div>
            </div>
        </nav>
    )
};

export default CustomNav;