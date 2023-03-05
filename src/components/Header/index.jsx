import React, { useState } from 'react';
import s from './index.module.css';
import logo from './data/logo.svg';
import cart_icon from './data/cart_icon.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

export default function Header() {

  const [menuActive, setMenuActive] = useState(false);

  const cart = useSelector(state => state.cart);

  let total_count = 0;
  cart.map(el => total_count = total_count + el.count);

  const set_menu_active = () => {
    setMenuActive(menuActive ? false : true)
  }

  
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
      
      <nav className={[s.nav_menu, menuActive ? s.is_active : ''].join(' ')}>
          <Link to='catalogue' className={s.catalog_mobile_menu} onClick={set_menu_active}>Catalog</Link>
          <Link to='categories' onClick={set_menu_active}>Categories</Link>
          <HashLink to='/#coupon' onClick={set_menu_active}>Coupon</HashLink>
          <Link to='sale'onClick={set_menu_active}>Special offers</Link>
          <HashLink to='/#contacts' onClick={set_menu_active}>Contacts</HashLink>
      </nav>
        

      <Link to='cart' className={s.cart_container}>
          <img src={cart_icon} alt="Cart" />
          <div className={cart.length > 0 ? s.count_true : s.count}>{total_count}</div>
      </Link>

      <MenuOutlined style={{'fontSize': '30px'}} className={s.mobile_menu_icon} onClick={set_menu_active}/>

    </header>
  )
}
