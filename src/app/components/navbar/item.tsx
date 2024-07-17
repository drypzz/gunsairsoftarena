import Link from 'next/link';

import { NavItemProps } from './props';

const NavItem = ({ href, text, active }: NavItemProps) => {
    return (
        <Link href={href}>
            <p className={`guns-navbar-link ${active ? 'active' : ''}`}>{text}</p>
        </Link>
    );
}

export default NavItem;