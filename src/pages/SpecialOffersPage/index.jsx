import React from 'react';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { useSelector } from 'react-redux';

export default function SpecialOffersPage() {

  const all_products = useSelector(state => state.all_products);
  const special_offer_arr = all_products.filter(el => el.discont_price < el.price)

  const page_name = 'category_page'

  return (
    <div className={['content_wrapper', s.category_page].join(' ')}>
      <h2>
        All special offers
      </h2>
      <div className={s.category_products_container}>
        {
          special_offer_arr.map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)
        }
      </div>
    </div>
  )
}
