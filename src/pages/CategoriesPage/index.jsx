import React from 'react';
import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategories } from '../../requests/getCategories';
import { useEffect } from 'react';
import CategoryCard from '../../components/CategoryCard';

export default function CategoriesPage() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories)
  }, []);

  return (
    <div className={['content_wrapper', s.categories_page].join(' ')}>
      <h2>Categories</h2>

      <div className={s.categories_container}>
      {
        categories.map(el => <CategoryCard key={el.id} {...el}/>)
      }
      </div>
      
    </div>
  )
}
