import React, { useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../requests/getAllProducts';
import ProductCard from '../../ProductCard';

export default function SpecialOffersBlock() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products); //35
  
  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  const page_name = 'category_page';

  const all_discont_products = all_products.filter(el => el.discont_price < el.price); //29
  let discont_products_id_list = [];
  all_discont_products.map(el => {
    discont_products_id_list.push(el.id)
  })

  let random_discont_products = [];
  const random_discont_products_value = 3;
  let random_discont_products_id_list = [];
  
  while (random_discont_products.length < random_discont_products_value) {
    let random_discont_product_id = Math.floor(Math.random() * all_products.length);
    let check_id = discont_products_id_list.includes(random_discont_product_id) // true if includes
    if (check_id === true) {
      let check_double_id = random_discont_products_id_list.includes(random_discont_product_id) // true if includes
      if (check_double_id !== true) {
        let random_discont_product = all_discont_products.find(el => el.id === random_discont_product_id); //{}
        random_discont_products.push(random_discont_product);
        random_discont_products_id_list.push(random_discont_product_id);
      }
    }     
  }

    
  return (
    <section className={['content_wrapper', s.special_offers_block].join(' ')}>
      <a name='special_offers'></a>
      <h2>Sale</h2>
      <div >
        {
          random_discont_products.map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)         
        }
      </div>
    </section>
  )
}


