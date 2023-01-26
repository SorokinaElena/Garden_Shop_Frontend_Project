import React, { useEffect } from 'react';
import CategoryCard from '../CategoryCard';
import s from './index.module.css';
import { getCategories } from '../../requests/getCategories';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function CategoriesContainer() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(getCategories)
  }, []);


  return (
    <div className={s.categories_container}>
        {
          categories.map(el => <CategoryCard key={el.id} {...el} />).slice(0, 4)
        }
    </div>
  )
}
