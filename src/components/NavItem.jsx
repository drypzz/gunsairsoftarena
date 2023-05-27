import Link from 'next/link';
import React from 'react';

const NavItem = ({ href, text, active, icon }) => {
    return (
        <Link href={href}>
            <p className={`nav__link ${active ? 'active' : ''}`}>{icon}{text}</p>
        </Link>
    );
}

export default NavItem;