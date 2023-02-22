import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { getCategoryProducts } from '../../requests/getCategoryProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../requests/getCategories';
import PriceSortForm from '../../components/SortBlocks/PriceSortForm';
import CheckboxSortForm from '../../components/SortBlocks/CheckboxSortForm';
import SelectSortForm from '../../components/SortBlocks/SelectSortForm';
import { selectCategoryProducts } from '../../store/reducers/categoryProductsReducer';
import { getDiscontCategoryProducts } from '../../store/reducers/categoryProductsReducer';
import { priceSortCategoryProducts } from '../../store/reducers/categoryProductsReducer';


export default function CategoryPage() {

  const dispatch = useDispatch();

  const {category} = useParams();

  useEffect(() => {
    dispatch(getCategories)
  }, []);

  useEffect(() => {
    dispatch(getCategoryProducts(category))
  }, []);

  const categoryProducts = useSelector(state => state.categoryProducts);
  const categories = useSelector(state => state.categories);
  console.log(categoryProducts);

  

  const target_category = categories.filter(el => el.id == category);
  
  

  const page_name = 'category_page';

  // const price_sort_category_products = dispatch(priceSortCategoryProducts({min_value, max_value}));
  // 

  const price_sort_category_products = (event) => {
    event.preventDefault();
    const { min_price, max_price } = event.target;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(priceSortCategoryProducts({min_value, max_value}));
    // min_price.value = '';
    // max_price.value = '';
  }

  const get_discont_category_products = (event) => {
    dispatch(getDiscontCategoryProducts(event.target.checked));
    select_category_products();
  } 

  const select_category_products = (event) => 
  dispatch(selectCategoryProducts({
    id: event.target.id,
    value: event.target.value,
  }));

  


  return (
    <div className={['content_wrapper', s.category_page].join(' ')}>
      <h2>
        {
          target_category.length !== 0 ? target_category[0].title : ''
        }
      </h2>
      <div className={s.sort_form}>
        <PriceSortForm price_sort_products={price_sort_category_products} />
        <CheckboxSortForm get_discont_products={get_discont_category_products} />
        <SelectSortForm select_products={select_category_products} />
      </div>
      
      <div className={s.category_products_container}>
        {
          categoryProducts
            .filter(el => !el.hide_price_mark && !el.hide_discont_mark)
            .map(el => <ProductCard key={el.id} {...el} page_name={page_name}/>)
        }
      </div>
    </div>
  )
}
