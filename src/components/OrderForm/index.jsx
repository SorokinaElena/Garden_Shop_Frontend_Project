import React from 'react';
import { useForm } from 'react-hook-form';
import s from './index.module.css';

export default function OrderForm({ children, page_name, cart }) {

  const style_order_form = {
    gap: page_name === 'main_page' ? '31px' : '25px',
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    // {
    //   defaultValues: {
    //     phone_num: '+49',
    //   }
    // }
  );

  const submit = (data) => {
    console.log(data);
    if(cart) {
      console.log(cart)
    }
    reset();
  };

  const telRegister = register('phone_num', {
    required: page_name === 'main_page' ? '*Enter the phone number to get a discount!' : '*The phone number is required!',
    pattern: {
      value: /^[+]{1}[1-9]{1}[0-9]{0,2}[0-9]{3,15}$/,
      message: '*Invalid phone number format',
    }
  }); 

  const error_container_style = page_name === 'main_page' ? '_main_page' : '_cart_page';


  return (
    <div>
        <form className={s.order_form} style={style_order_form} onSubmit={handleSubmit(submit)}>
              <input 
                  className={page_name === 'main_page' ? s.input_main_page : s.input_cart_page}
                  type='tel' 
                  name='phone_num' 
                  placeholder='+49' 
                  autoComplete="off"
                  {...telRegister} 
                />  
            <div className={page_name === 'main_page' ? s.error_container_main_page : s.error_container_cart_page}>
              {errors.phone_num && <div className={s.error_message}>{errors.phone_num?.message}</div>}
            </div>
          <button className={page_name === 'main_page' ? s.button_main_page : s.button_cart_page}>{ children }</button>
        </form>
    </div>
  )
}
