import React from 'react';
import s from './index.module.css';
import logo from './data/logo.svg';
import cart_icon from './data/cart_icon.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';

export default function Header() {

  const cart = useSelector(state => state.cart)

  let total_count = 0;
  cart.map(el => total_count = total_count + el.count);


  return (
    <header className={['content_wrapper', s.header].join(' ')}>

        <div className={s.header_item}>
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
            <Link to='catalogue'>
                <button>Catalog</button>
            </Link>
        </div>

        <nav className={s.nav_menu}>
            <Link to='categories'>Categories</Link>
            <HashLink to='/#coupon'>Coupon</HashLink>
            <Link to='sale'>Special offers</Link>
            <HashLink to='/#contacts'>Contacts</HashLink>
            
        </nav>

        <Link to='cart' className={s.cart_container}>
                    <img src={cart_icon} className={s.cart_icon} alt="Cart" />
                    <div className={cart.length > 0 ? s.count_true : s.count}>{total_count}</div>
        </Link>

    </header>
  )
}
