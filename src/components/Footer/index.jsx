import React from 'react';
import s from './index.module.css';
import { InstagramOutlined } from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className={['content_wrapper', s.footer].join(' ')} id='contacts'>

      <div className={s.contacts}>
        <h2>Contacts</h2>
        <h3>+49 1796205224</h3>
        <div className={s.messengers}>
          <div className={s.messenger_item}>
            <a target="_blank" href='https://www.instagram.com/'>
              <InstagramOutlined className={s.messenger_icon}/>
            </a>
            <a target="_blank" href='https://www.instagram.com/'>Instagram</a>
          </div>
          <div className={s.messenger_item}>
            <a target="_blank" href='https://wa.me/491796205224'>
              <WhatsAppOutlined className={s.messenger_icon}/>
            </a>
            <a target="_blank" href='https://wa.me/491796205224'>WhatsApp</a>
          </div>    
        </div>
      </div>

        <div className={s.address}>
            <h2>Address</h2>
            <h3>Willy-Brandt-Ring, 40 <br /> Erlensee, Germany</h3>
            <h4>Working Hours:</h4>
            <p>24 hours a day</p>
        </div>

    </footer>
  )
}
