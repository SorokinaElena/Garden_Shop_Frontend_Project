import React, { useEffect } from 'react';
import s from './index.module.css';
import { getAllProducts } from '../../requests/getAllProducts';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import PriceSortForm from '../../components/SortBlocks/PriceSortForm';
import CheckboxSortForm from '../../components/SortBlocks/CheckboxSortForm';
import SelectSortForm from '../../components/SortBlocks/SelectSortForm';
import { priceSortAllProducts } from '../../store/reducers/allProductsReducer';
import { getDiscontAllProducts } from '../../store/reducers/allProductsReducer';
import { selectAllProducts } from '../../store/reducers/allProductsReducer';


export default function CataloguePage() {

  const dispatch = useDispatch();

  const all_products = useSelector(state => state.all_products);
  console.log(all_products)

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

  const get_discont_all_products = (event) => dispatch(getDiscontAllProducts(event.target.checked));

  const select_all_products = (event) => 
  dispatch(selectAllProducts({
    id: event.target.id,
    value: event.target.value,
  }));

  return (
    <div className={['content_wrapper', s.catalogue_page].join(' ')}>
      <h2>Catalogue</h2>
      <div className={s.sort_form}>
          <PriceSortForm price_sort_products={price_sort_all_products}/>
          <CheckboxSortForm get_discont_products={get_discont_all_products} />
          <SelectSortForm select_products={select_all_products} />
      </div>
      <div className={s.catalogue_products_container}>
        {
          all_products.filter(el => !el.hide_price_mark)
                      .map(el => <ProductCard key={el.id} {...el} page_name={page_name} />)
        }
      </div>
    </div>
  )
}
