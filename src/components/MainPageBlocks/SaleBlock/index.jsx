import React from 'react';
import s from './index.module.css';
import sale_image from './data/sale_image.svg'

export default function SaleBlock() {
  return (
    <section className={s.sale_block}>
      <div className={['content_wrapper', s.content].join(' ')}>
        <div className={s.info}>
          <h2>Sale</h2>
          <h3>New season sale</h3>
          <div className={s.btn_container}>
            <button>All offers</button>
            <button>See more</button>
          </div>
        </div>
        <div className={s.img}>
          <img src={sale_image} alt="Picture" />
        </div>
      </div>
    </section>
  )
}
