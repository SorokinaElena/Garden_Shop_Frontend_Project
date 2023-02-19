import React from 'react';
import s from './index.module.css';
import logo from './data/logo.svg';
import cart_icon from './data/cart_icon.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {

  return (
    <header className={['content_wrapper', s.header].join(' ')}>

        <div className={s.header_item}>
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
            <Link to='catalogue'>
                <button>Catalogue</button>
            </Link>
        </div>

        <nav className={s.nav_menu}>
            <Link to='categories'>Categories</Link>
            <HashLink to='/#coupon'>Coupon</HashLink>
            <Link to='sale'>Special offers</Link>
            <HashLink to='/#contacts'>Contacts</HashLink>
            <Link to='cart'>
                <img src={cart_icon} className={s.cart_icon} alt="Cart" />
            </Link>
        </nav>

    </header>
  )
}
