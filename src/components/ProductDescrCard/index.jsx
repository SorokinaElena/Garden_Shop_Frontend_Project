import React from 'react';
import PriceContainer from '../PriceContainer';
import s from './index.module.css';
import { addToCart } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function ProductDescrCard({id, image, price, discont_price, title, description, page_name}) {

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCart({id, image, price, discont_price, title}))

  return (
    <div>

        <h3 className={s.title}>{title}</h3>

        <div className={s.product_descr_card}>

            <img src={`http://localhost:3333/${image}`} alt={title} />

            <div className={s.descr_container}>
                <PriceContainer price={price} discont_price={discont_price} page_name={page_name}/>
                <button onClick={add_to_cart}>to Cart</button>
                <h4>Description</h4>
                <p className={s.descr}>{description}</p>
            </div>

        </div>

    </div>
  )
}
