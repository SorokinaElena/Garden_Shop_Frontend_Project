import React, { useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../requests/getAllProducts';
import ProductCard from '../../ProductCard';

export default function SpecialOffersBlock() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products);

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  const page_name = 'category_page';

  const special_offer_arr = all_products.filter(el => el.discont_price < el.price)
  const special_offer_value = special_offer_arr.length

  let random_offer_arr = [];
  const random_offer_value = 3;

  const get_random_offer = (random_offer_arr) => {
    let temp_random_offer_id = 0;
    while(random_offer_arr.length < random_offer_value && random_offer_value <= special_offer_value) {
      temp_random_offer_id = Math.ceil(Math.random() * special_offer_value);
      while(random_offer_arr.includes(temp_random_offer_id)) {
        temp_random_offer_id = Math.ceil(Math.random() * special_offer_value)
      }
      random_offer_arr.push(temp_random_offer_id)
    }
    return random_offer_arr
  }

  get_random_offer(random_offer_arr)

    
  return (
    <section className={['content_wrapper', s.special_offers_block].join(' ')}>
      <a name='special_offers'></a>
      <h2>Sale</h2>
      <div >
        {
          special_offer_arr.filter(el => random_offer_arr.includes(el.id))
                           .map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)            
        }
      </div>
      
    </section>
  )
}
