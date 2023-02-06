import React from 'react';
import s from './index.module.css';

export default function PriceSortForm() {
  return (
    <div className={s.price_sort}>
      <span>Price</span>
      <form>
        <input type='number' name='min_price' placeholder='from' />
        <input type='number' name='max_price' placeholder='to' />
      </form>
    </div>
  )
}
