import React from 'react';
import s from './index.module.css';

export default function PriceContainer({price, discont_price, count, page_name}) {

    let style_price_container = {};
         
    if (page_name === 'category_page') {
        style_price_container = {
            alignItems: 'center',
            padding: '20px 34px 10px 24px',
            margin: '0',
        }
    } else if (page_name === 'product_page') {
        style_price_container = {
            alignItems: 'flex-end',
            padding: '0',
            margin: '68px 11px 40px 0px',
        }
    } else if (page_name === 'cart_page') {
        style_price_container = {
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0 0 0 24px',
            margin: '0',
            gap: '70px',
        }
    }

    let style_price = {};

    if (page_name === 'category_page') {
        style_price = {
            fontSize: '20px',
            paddingBottom: '0',
        }
    } else if (page_name === 'product_page') {
        style_price = {
            fontSize: '28px',
            paddingBottom: '10px',
        }
    } else if (page_name === 'cart_page') {
        style_price = {
            fontSize: '20px',
            paddingBottom: '0',
        }
    }

    let style_discont_price = {};

    if (page_name === 'category_page') {
        style_discont_price = {
            fontSize: '30px',
        }
    } else if (page_name === 'product_page') {
        style_discont_price = {
            fontSize: '70px',
        }
    } else if (page_name === 'cart_page') {
        style_discont_price = {
            fontSize: '40px',
        }
    }
   
    const style_discont = {
        fontSize: page_name === 'category_page' ? '20px' : '28px',
        paddingBottom: page_name === 'category_page' ? '0' : '10px',
    }

 
  return (
    <div className={s.price_container}>
        { 
            page_name !== 'cart_page'
            ? 
            <div className={s.price_container} style={style_price_container}>
                <p className={s.discont_price} style={style_discont_price}> {Math.round(discont_price)}$ </p>
                <p className={s.price} style={style_price}> {Math.round(price)}$ </p>
                <p className={s.discont} style={style_discont}>{Math.round((discont_price * 100 / price) - 100)}%</p>
            </div>
            :
            <div className={s.price_container} style={style_price_container}>
                <p className={s.discont_price} style={style_discont_price}> { Math.round(discont_price) * count }$ </p>
                <p className={s.price} style={style_price}> { Math.round(price) * count }$ </p>
            </div>
        }    
    </div>
  )
}
