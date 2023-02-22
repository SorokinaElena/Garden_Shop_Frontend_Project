import React from 'react';
import { useForm } from 'react-hook-form';
import s from './index.module.css';

export default function OrderForm({ children, placeholder, page_name }) {

  const style_order_form = {
    gap: page_name === 'main_page' ? '31px' : '25px',
  }

  const style_input = {
    border: page_name === 'main_page' ? 'none' : '1px solid #000000',
    borderRadius: page_name === 'main_page' ? '25px' : '20px',
    padding: 'main_page' ? '27px 0 26px 50px' : '25px 25px 25px 25px',
    fontWeight: 'main_page' ? '600' : '500',
    color: 'main_page' ? '#6C6C6C' : '#929292',
}

  

  const style_button = {
    backgroundColor: page_name === 'main_page' ? 'transparent' : '#339933',
    border: page_name === 'main_page' ? '2px solid #FFFFFF' : 'none',
    borderRadius: page_name === 'main_page' ? '25px' : '17px',
    fontSize: page_name === 'main_page' ? '29px' : '28px',
}

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const telRegister = register('phone_num'); 

  return (
    <div>
        <form className={s.order_form} style={style_order_form} onSubmit={handleSubmit(submit)}>
            <input 
              style={style_input}
              type='tel' 
              name='phone_num' 
              placeholder={placeholder} 
              autoComplete="off"
              {...telRegister} 
            />
            <button style={style_button}>{ children }</button>
        </form>
    </div>
  )
}
