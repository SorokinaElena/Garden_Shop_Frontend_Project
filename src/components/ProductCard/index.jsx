import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function ProductCard({id, image, price, discont_price, title}) {
  return (
    <Link to={`/products/${id}`} className={s.product_card_container}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <div className={s.price_container}>
            <p className={s.price}>{Math.round(price)}$</p>
            <p className={s.discont_price}>{Math.round(discont_price)}$</p>
            <p className={s.discont}>{Math.round(100 - (price * 100 / discont_price))}%</p>
        </div>
        <p className={s.title}>{title}</p>
    </Link>
  )
}
