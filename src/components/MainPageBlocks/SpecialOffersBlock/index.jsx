import React, { useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../requests/getAllProducts';
import ProductCard from '../../ProductCard';

export default function SpecialOffersBlock() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  const all_products = useSelector(state => state.all_products); //35

  const page_name = 'category_page';

  const all_discont_products = all_products.filter(el => el.discont_price < el.price); //29

  let discont_products_id_list = [];
  all_discont_products.map(el => {
    discont_products_id_list.push(el.id)
  })

  let random_discont_products = [];
  const random_discont_products_value = 3;
  let random_discont_products_id_list = [];

  let flag_break = 0;

  while ( flag_break < random_discont_products_value && all_discont_products.length > 3) {
    let random_discont_product_id = Math.floor(Math.random() * all_products.length);
    let check_id = discont_products_id_list.includes(random_discont_product_id) // true if includes
    if (check_id === true) {
      let check_double_id = random_discont_products_id_list.includes(random_discont_product_id) // true if includes
      if (check_double_id !== true) {
        let random_discont_product = all_discont_products.find(el => el.id === random_discont_product_id); //{}
        random_discont_products.push(random_discont_product);
        random_discont_products_id_list.push(random_discont_product_id);
        flag_break ++;
      }
    }     
  }

    
  return (
    <section className={['content_wrapper', s.special_offers_block].join(' ')} id='special_offers'>
      <a name='special_offers'></a>
      <h2>Sale</h2>
      <div className={s.random_discont_products_desktop}>
        {
          random_discont_products.map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)         
        }
      </div>
      <div className={s.random_discont_products_mobile}>
        {
          random_discont_products.slice(0, 2)
                                 .map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)
        }
      </div>
    </section>
  )
}


