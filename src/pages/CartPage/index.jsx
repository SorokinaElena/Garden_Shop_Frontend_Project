import React from 'react';
import CartItem from '../../components/CartItem';
import s from './index.module.css';
import { RightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPage() {

  const cart = useSelector(state => state.cart);
  console.log(cart)
    
  const page_name = 'cart_page';

  let total_count = 0;
  cart.map(el => total_count = total_count + el.count);

  
  return (
    <div className={['content_wrapper', s.cart_page].join(' ')}>

      <h2>Shopping cart</h2>     

      <p>{total_count}</p>

      {
        cart.length === 0 
        ? <div className={[s.back_to_store_link, s.empty_card].join(' ')}>
              <p>Cart is empty...</p>
              <div>
                <Link to='/categories'>Back to the store</Link>
                <RightOutlined className={s.back_icon}/>
              </div>
          </div>
        : <div className={s.cart_container}>
            <div className={s.cart_items_container}>
              <div className={s.back_to_store_link}>
                <Link to='/categories'>Back to the store</Link>
                <RightOutlined className={s.back_icon}/>
              </div>
              <div>
                {
                  cart.map(el => <CartItem key={el.id} {...el} page_name={page_name} />)
                }
              </div>
            </div>

            <div className={s.order_container}>Order details</div>
          </div>
      }
      
      

    </div>
  )
}
