import React from 'react';
import CartItem from '../../components/CartItem';
import s from './index.module.css';
import { RightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderForm from '../../components/OrderForm';

export default function CartPage() {

  const cart = useSelector(state => state.cart);
    
  const page_name = 'cart_page';

  // let total_count = 0;
  // cart.map(el => total_count = total_count + el.count);

  let total_price = 0;
  cart.map(el => total_price = total_price + el.discont_price * el.count);
  total_price = total_price.toFixed(2);

  
  return (
    <div className={['content_wrapper', s.cart_page].join(' ')}>

      <h2>Shopping cart</h2>     

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

            <div className={s.order_container}>
              <div className={s.form_container}>
                <p>Order details</p>
                <div className={s.order_sum}>
                  <span>Total</span>
                  <span>{total_price}$</span>
                </div>
                <OrderForm children={'Order'} page_name={page_name} cart={cart}/>
              </div>
            </div>
          </div>
      }
      
      

    </div>
  )
}
