import React, { useEffect } from 'react';
import s from './index.module.css';
import { getAllProducts } from '../../requests/getAllProducts';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

export default function CataloguePage() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products);
  console.log(all_products)

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);
  
  const page_name = 'category_page';

  return (
    <div className={['content_wrapper', s.catalogue_page].join(' ')}>
      <h2>Catalogue</h2>
      <div className={s.catalogue_products_container}>
        {
          all_products.map(el => <ProductCard key={el.id} {...el} page_name={page_name} />)
        }
      </div>
    </div>
  )
}
