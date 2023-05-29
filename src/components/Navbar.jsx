'use client';

import NavItem from './NavItem';
import { useState } from 'react';

import { FaHome, FaPhoneSquare, FaHandHoldingUsd } from 'react-icons/fa';

const MENU_LIST = [
    {text: ' - Inicio', href: '/', icon: <FaHome />},
    {text: ' - Contato', href: '/contact', icon: <FaPhoneSquare />},
    {text: ' - Serviços', href: '/service', icon: <FaHandHoldingUsd />},
]

const Navbar = ({bool}) => {

    const [navActive, setNavActive] = useState(false);
    // const [activeIdX, setActiveIdx] = useState(0);

    return (
        <header>
            <nav className='nav'>
                <a href='/'>
                    <img src='../files/transparent.png' className='logo' alt='logo' />
                </a>

                <div onClick={() => setNavActive(!navActive)} className={`${navActive ? 'active' : ''} nav__menu-bar`} id='nav__menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                    {
                        MENU_LIST.map((item, index) => {
                            return <div onClick={() => {setNavActive(false)}} key={item.text}>
                                <NavItem active={bool === index} {...item} />
                            </div>
                        })
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;