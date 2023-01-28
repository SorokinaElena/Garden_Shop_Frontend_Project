import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { getCategoryProducts } from '../../requests/getCategoryProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../requests/getCategories';

export default function CategoryPage() {

  const dispatch = useDispatch();

  const {category} = useParams();

  const categoryProducts = useSelector(state => state.categoryProducts);
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories)
  }, []);

  const target_category = categories.filter(el => el.id == category);
  
  useEffect(() => {
    dispatch(getCategoryProducts(category))
  }, []);


  return (
    <div className={['content_wrapper', s.category_page].join(' ')}>
      <h2>
        {
          target_category[0].title
          // target_category.length !== 0 ? target_category[0].title : ''
        }
      </h2>
      <div className={s.category_products_container}>
        {
          categoryProducts.map(el => <ProductCard key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}
