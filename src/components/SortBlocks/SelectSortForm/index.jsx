import React, { useState } from 'react';
import s from './index.module.css';
import { UpOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';


export default function SelectSortForm({ select_products }) {

  const [menuActive, setMenuActive] = useState(false);
  const [selectCurrentText, setSelectCurrentText] = useState('by default');

  const choose_option = (event) => {
    const select_current_text = event.target.value;
    setSelectCurrentText(select_current_text);
    setMenuActive(menuActive ? false : true);
  };

   
  return (       
    <div className={s.select_sort}>
        <span>Sorted:</span>
        <div className={[s.select, menuActive ? s.is_active : ''].join(' ')} onClick={select_products}>
            <div className={s.select_header} onClick={() => setMenuActive(menuActive ? false : true)}>
                <span className={s.select_current}>{selectCurrentText}</span>
                <div className={s.select_icons}>
                    <UpOutlined />
                    <DownOutlined />
                </div>
            </div>
              
            <div className={s.select_body}>
                <option className={s.select_item} value='by default' id='default' onClick={choose_option}>by default</option>
                <option className={s.select_item} value='by title' id='title' onClick={choose_option}>by title</option>
                <option className={s.select_item} value='by price from min' id='discont_price' onClick={choose_option}>by price from min</option>
                <option className={s.select_item} value='by price from max' id='discont_price' onClick={choose_option}>by price from max</option>
            </div>
        </div>
    </div>
  )
}
