import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import PriceSortForm from '../../components/SortBlocks/PriceSortForm';
import SelectSortForm from '../../components/SortBlocks/SelectSortForm';
import { getAllProducts } from '../../requests/getAllProducts';
import { priceSortAllProducts } from '../../store/reducers/allProductsReducer';
import s from './index.module.css';
import { selectAllProducts } from '../../store/reducers/allProductsReducer';


export default function SalePage() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products);

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  const page_name = 'category_page';

  const price_sort_all_products = (event) => {
    event.preventDefault();
    const { min_price, max_price } = event.target;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(priceSortAllProducts({min_value, max_value}));
    // min_price.value = '';
    // max_price.value = '';
  }

  const select_all_products = (event) => 
  dispatch(selectAllProducts({
    id: event.target.id,
    value: event.target.value,
  }));


  return (
    <div className={['content_wrapper', s.sale_page].join(' ')}>
      <h2>Season sale</h2>
      <div className={s.sort_form}>
          <PriceSortForm price_sort_products={price_sort_all_products}/>
          <SelectSortForm select_products={select_all_products} />
      </div>
      <div className={s.sale_products_container}>
        {
          all_products.filter(el => !el.hide_price_mark && el.discont_price < el.price)
                      .map(el => <ProductCard key={el.id} {...el} page_name={page_name} />)
        }
      </div>
    </div>
  )
}
