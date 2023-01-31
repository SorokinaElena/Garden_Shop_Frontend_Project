import React from 'react';
import PriceContainer from '../PriceContainer';
import s from './index.module.css';

export default function ProductDescrCard({id, image, price, discont_price, title, description, page_name}) {
  return (
    <div>

        <h3 className={s.title}>{title}</h3>

        <div className={s.product_descr_card}>

            <img src={`http://localhost:3333/${image}`} alt={title} />

            <div className={s.descr_container}>
                <PriceContainer price={price} discont_price={discont_price} page_name={page_name}/>
                <button>to Cart</button>
                <h4>Description</h4>
                <p className={s.descr}>{description}</p>
            </div>

        </div>

    </div>
  )
}
