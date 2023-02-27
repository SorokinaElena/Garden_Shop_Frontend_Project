import React from 'react';
import s from './index.module.css';


export default function PriceSortForm({ price_sort_products }) {

  return (
    <div className={s.price_sort}>
      <span>Price</span>
      <form onSubmit={price_sort_products}>
        <input type='number' name='min_price' placeholder='from' />
        <input type='number' name='max_price' placeholder='to' />
        <input type='submit' style={{visibility: 'hidden'}} />
      </form>
    </div>
  )
}
