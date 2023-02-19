import React, { useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../requests/getAllProducts';

export default function SalePage() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products);
  console.log(all_products)

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  const page_name = 'category_page';

  return (
    <div className={['content_wrapper', s.sale_page].join(' ')}>
      <h2>Season sale</h2>
      <div className={s.sale_products_container}>
        {
          all_products.filter(el => el.discont_price < el.price)
                      .map(el => <ProductCard key={el.id} {...el} page_name={page_name} />)
        }
      </div>
    </div>
  )
}
