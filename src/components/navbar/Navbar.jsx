'use client';

import NavItem from './NavItem';
import { useState } from 'react';

import { FaHome, FaShieldAlt, FaShareAlt, FaPhotoVideo, FaMoneyBillAlt, FaPhoneSquareAlt, FaRegPaperPlane} from 'react-icons/fa';

const MENU_LIST = [
    {text: '・Inicio', href: '/', icon: <FaHome />},
    {text: '・Equipamentos', href: '/equipaments', icon: <FaShieldAlt />},
    {text: '・Modos de Jogo', href: '/games', icon: <FaShareAlt />},
    {text: '・Galeria', href: '/midia', icon: <FaPhotoVideo />},
    {text: '・Valores', href: '/values', icon: <FaMoneyBillAlt />},
    {text: '・Contato', href: '/contact', icon: <FaPhoneSquareAlt />},
]

import '../utils/navbar.css';

const Navbar = ({id, bool}) => {
    const [navActive, setNavActive] = useState(false);

    return (
        <>
            <header id={id}>
                <nav className='nav'>
                    <a className='logo__div' href='/'>
                        <img draggable='false' dragstart='false' src='../files/transparent.png' className='logo-nav' alt='logo' />
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
                            <a target='_blank' href={`https://api.whatsapp.com/send?phone=554797519814&text=${encodeURIComponent('Olá! Gostaria de marcar um game, quais os valores?')}`} className='link__title'><FaRegPaperPlane />・Reserve Agora</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;