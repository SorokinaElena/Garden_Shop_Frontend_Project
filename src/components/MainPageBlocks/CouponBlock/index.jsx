import React from 'react';
import s from './index.module.css';
import gnome_img from './media/gnome.svg';
import OrderForm from '../../OrderForm';

export default function CouponBlock({ page_name }) {


  return (
    <section className={s.coupon_block} id='coupon'>
      <div className='content_wrapper'>
        <img src={gnome_img} alt='picture' />
        <div className={s.form_container}>
          <p>5% off</p>
          <p>on the first order</p>
          <OrderForm children={'Get a discount'} page_name={page_name} />
        </div>
      </div>
    </section>
  )
}
