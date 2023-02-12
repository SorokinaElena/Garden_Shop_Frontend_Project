import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import PriceContainer from '../PriceContainer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartReducer';

export default function ProductCard({id, image, price, discont_price, title, page_name}) {

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCart({id, image, price, discont_price, title}))


  return (
    <div className={s.product_card}>
      <Link to={`/products/${id}`} className={s.product_card_container}>
          <img src={`http://localhost:3333/${image}`} alt={title} />
          <PriceContainer price={price} discont_price={discont_price} page_name={page_name}/>
          <p className={s.title}>{title}</p>
          
      </Link>
      <button className={s.to_cart_btn} onClick={add_to_cart}>Add to cart</button>
    </div>
    
  )
}
