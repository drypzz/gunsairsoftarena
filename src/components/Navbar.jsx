'use client';

import Link from 'next/link';
import NavItem from './NavItem';
import { useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';

const MENU_LIST = [
    {text: ' - Inicio', href: '/', icon: <FaHome />},
    {text: ' - Contato', href: '/contact', icon: <FaPhoneSquare />},
    {text: ' - Serviços', href: '/service', icon: <FaHandHoldingUsd />},
]

import img from '../app/favicon.ico'
import Image from 'next/image';

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);
    const [activeIdX, setActiveIdx] = useState(0);

    return (
        <header>
            <nav className='nav'>
                <Link href={'/'}>
                    <Image src={img} className='logo' alt='logo' />
                </Link>

                <div onClick={() => setNavActive(!navActive)} className='nav__menu-bar'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                    {
                        MENU_LIST.map((item, index) => {
                            return <div onClick={() => {setActiveIdx(index); setNavActive(false)}} key={item.text}>
                                <NavItem active={activeIdX === index} {...item} />
                            </div>
                        })
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;