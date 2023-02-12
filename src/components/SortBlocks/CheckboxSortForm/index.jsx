import React, { useState } from 'react';
import s from './index.module.css';

export default function CheckboxSortForm({ get_discont_category_products }) {

  const [checked, setChecked] = useState(false);

  // console.log(checked)

  const handleChange = () => {
    setChecked(!checked)
    // console.log(checked)
  };

  return (
    <div className={s.discont_sort}>
        {/* <label for='discont'>Discounted items</label>
        <input type='checkbox' id='discont' className={s.custom_checkbox} name="discont_list" value="yes"/> */}

        <label className={s.container}>Discounted items
          <span className={s.checkmark}></span>
          <input type='checkbox' checked={checked} onChange={handleChange} onClick={get_discont_category_products} />
        </label>
        
    </div>
  )
}
