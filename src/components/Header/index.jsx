import React from 'react';
import s from './index.module.css';
import logo from './data/logo.svg';
import cart_icon from './data/cart_icon.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <header className={s.header}>

        <div className={s.header_item}>
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
            <Link to='categories'>
                <button>Catalogue</button>
            </Link>
        </div>

        <nav className={s.nav_menu}>
            <a href="#categories">Categories</a>
            <a href="#coupon">Coupon</a>
            <HashLink to='#special_offers'>Special offers</HashLink>
            <a href="#contacts">Contacts</a>
            <Link to='cart'>
                <img src={cart_icon} className={s.cart_icon} alt="Cart" />
            </Link>
        </nav>

    </header>
  )
}
