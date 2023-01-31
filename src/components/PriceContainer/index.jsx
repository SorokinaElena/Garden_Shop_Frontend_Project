import React from 'react';
import s from './index.module.css';

export default function PriceContainer({price, discont_price, page_name}) {

    const style_price_container = {
        alignItems: page_name === 'category_page' ? 'center' : 'flex-end',
        padding: page_name === 'category_page' ? '20px 34px 10px 24px' : '0',
        margin: page_name === 'category_page' ? '0' : '68px 11px 40px 0px'
    }

    const style_price = {
        fontSize: page_name === 'category_page' ? '20px' : '28px',
        paddingBottom: page_name === 'category_page' ? '0' : '10px',
    }
 
    const style_discont_price = {
        fontSize: page_name === 'category_page' ? '30px' : '70px',
    }
   
    const style_discont = {
        fontSize: page_name === 'category_page' ? '20px' : '28px',
        paddingBottom: page_name === 'category_page' ? '0' : '10px',
    }


  return (
    <div className={s.price_container} style={style_price_container}>
        <p className={s.discont_price} style={style_discont_price}>{Math.round(discont_price)}$</p>
        <p className={s.price} style={style_price}>{Math.round(price)}$</p>
        <p className={s.discont} style={style_discont}>{Math.round((discont_price * 100 / price) - 100)}%</p>
    </div>
  )
}
