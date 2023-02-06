import React from 'react';
import s from './index.module.css';

export default function CheckboxSortForm() {

  const set_mark = (event) => {
    const discont_value = event.target.value
    console.log(discont_value)
  }


  return (
    <div className={s.discont_sort}>
        {/* <label for='discont'>Discounted items</label>
        <input type='checkbox' id='discont' className={s.custom_checkbox} name="discont_list" value="yes"/> */}

        <label className={s.custom_checkbox}>
          <span>Discounted items</span>
          <input type='checkbox' name="discont_list" value="on" onClick={set_mark}/>
        </label>
        
    </div>
  )
}
