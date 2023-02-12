import React from 'react';
import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { priceSortCategoryProducts } from '../../../store/reducers/categoryProductsReducer';

export default function PriceSortForm() {

  const dispatch = useDispatch();

  const set_price_sort = (event) => {
    event.preventDefault();
    const { min_price, max_price } = event.target;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(priceSortCategoryProducts({min_value, max_value}));
    min_price.value = '';
    max_price.value = '';
  }


  return (
    <div className={s.price_sort}>
      <span>Price</span>
      <form onSubmit={set_price_sort}>
        <input type='number' name='min_price' placeholder='from' />
        <input type='number' name='max_price' placeholder='to' />
        <input type='submit' style={{visibility: 'hidden'}} />
      </form>
    </div>
  )
}
