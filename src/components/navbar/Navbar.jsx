'use client';

import NavItem from './NavItem';
import { useState } from 'react';

import { FaHome, FaShieldAlt, FaShareAlt, FaPhotoVideo, FaMoneyBillAlt, FaPhoneSquareAlt, FaUserPlus } from 'react-icons/fa';

const MENU_LIST = [
    {text: ' Inicio', href: '/', icon: <FaHome />},
    {text: ' Equipamentos', href: '/equipaments', icon: <FaShieldAlt />},
    {text: ' Modos de Jogo', href: '/games', icon: <FaShareAlt />},
    {text: ' Fotos', href: '/midia', icon: <FaPhotoVideo />},
    {text: ' Valores', href: '/values', icon: <FaMoneyBillAlt />},
    {text: ' Contato', href: '/contact', icon: <FaPhoneSquareAlt />},
]

import '../utils/navbar.css';

const Navbar = ({bool}) => {

    const [navActive, setNavActive] = useState(false);
    // const [activeIdX, setActiveIdx] = useState(0);

    return (
        <>
            <section>
                <div className='header__logo'>
                    <div>
                        <img src='../files/transparent.png' className='logo' alt='logo' />
                    </div>
                    <div>
                        <span className='logo__title'>GUNS AIRSOFT ARENA</span>
                    </div>
                    <div>
                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game, quais os valores?')}`} className='link__title'><FaUserPlus /> Reserve Agora</a>
                    </div>
                </div>
            </section>
            <header>
                <nav className='nav'>
                    <a className='logo__div' href='/'>
                        <img src='../files/transparent.png' className='logo-nav' alt='logo' />
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
                        <div className='link__div'>
                            <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game, quais os valores?')}`} className='link__title'><FaUserPlus /> Reserve Agora</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;