import React from 'react';
import s from './index.module.css';
import sale_image from './data/sale_image.svg'

export default function SaleBlock() {
  return (
    <section className={s.sale_block}>
      <div className={['content_wrapper', s.content].join(' ')}>
        <div className={s.info}>
          <h1>Sale</h1>
          <h3>New season sale</h3>
          <div className={s.btn_container}>
            <a href="#special_offers">
              <button>All offers</button>
            </a>
            <button>See more</button>
          </div>
        </div>
        <img src={sale_image} alt="Picture" />
      </div>
    </section>
  )
}
