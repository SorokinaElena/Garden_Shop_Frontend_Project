import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import PriceContainer from '../PriceContainer';

export default function ProductCard({id, image, price, discont_price, title, page_name}) {
  return (
    <Link to={`/products/${id}`} className={s.product_card_container}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <PriceContainer price={price} discont_price={discont_price} page_name={page_name}/>
        <p className={s.title}>{title}</p>
    </Link>
  )
}
