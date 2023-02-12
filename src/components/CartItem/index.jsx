import React from 'react';
import PriceContainer from '../PriceContainer';
import s from './index.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementCount } from '../../store/reducers/cartReducer';
import { decrementCount } from '../../store/reducers/cartReducer';
import { deleteCartItem } from '../../store/reducers/cartReducer';

export default function CartItem({id, image, price, discont_price, title, count, page_name}) {

  const dispatch = useDispatch();

  const increment_count = () => dispatch(incrementCount(id));
  const decrement_count = () => dispatch(decrementCount(id));
  const delete_cart_item = () => dispatch(deleteCartItem(id));

  return (
    <div className={s.card_item}>
        <CloseOutlined className={s.close_icon} onClick={delete_cart_item} />
        <Link to={`/products/${id}`} className={s.image_container}>
          <img src={`http://localhost:3333/${image}`} alt={title} />
        </Link>
        <div className={s.title_container}>
            <p>{title}</p>
            <div className={s.count_container}>
              <span> <MinusOutlined className={s.count_icons} onClick={decrement_count}/> </span>
              <span> {count} </span>
              <span> <PlusOutlined className={s.count_icons} onClick={increment_count}/> </span>
            </div>
        </div>
        <div className={s.price_container}>
            <PriceContainer price={price} discont_price={discont_price} count={count} page_name={page_name} />
        </div>
    </div>
  )
}
