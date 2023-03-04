import React, { useEffect } from 'react';
import s from './index.module.css';
import { getProduct } from '../../requests/getProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDescrCard from '../../components/ProductDescrCard';


export default function ProductPage() {

  const dispatch = useDispatch();

  const {id} = useParams();

  const product = useSelector(state => state.product);
  
  useEffect(() => {
    dispatch(getProduct(id))
  }, []);

  const page_name = 'product_page'

  
  return (
    <div className={['content_wrapper', s.product_page].join(' ')}>
      {
        product.map(el => <ProductDescrCard key={el} {...el} page_name={page_name}/>)
      }
    </div>
  )
}
