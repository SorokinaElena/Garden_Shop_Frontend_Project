import React from 'react';
import s from './index.module.css';
import sale_image from './data/sale_image.png';
import { Link } from 'react-router-dom';

export default function SaleBlock() {
  return (
    <section className={s.sale_block}>
      <div className={['content_wrapper', s.content].join(' ')}>
        <div className={s.info}>
          <h1>Sale</h1>
          <h3>New season sale</h3>
          <div className={s.btn_container}>
            <Link to='sale'>
              <button>All offers</button>
            </Link>
            <Link to='sale'>
              <button>See more</button>
            </Link>
          </div>
        </div>
        <img src={sale_image} alt="Picture" />
      </div>
    </section>
  )
}
