import React from 'react';
import s from './index.module.css';
import { InstagramOutlined } from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className={s.footer}>

      <div className={s.contacts}>
        <h2>Contacts</h2>
        <h3>+7 999 999 99 99</h3>
        <div className={s.messengers}>
          <div className={s.messenger_item}>
            <InstagramOutlined className={s.messenger_icon}/>
            <p>Instagram</p>
          </div>
          <div className={s.messenger_item}>
            <WhatsAppOutlined className={s.messenger_icon}/>
            <p>WhatsApp</p>
          </div>    
        </div>
      </div>

        <div className={s.address}>
            <h2>Address</h2>
            <h3>Willy-Brandt-Ring, 40 <br /> Erlensee, Germany</h3>
            <h4>Opening hours</h4>
            <p>Round-the-clock</p>
        </div>

    </footer>
  )
}
