import React from 'react';
import CategoriesBlock from '../../components/MainPageBlocks/CategoriesBlock';
import CouponBlock from '../../components/MainPageBlocks/CouponBlock';
import SaleBlock from '../../components/MainPageBlocks/SaleBlock';
import SpecialOffersBlock from '../../components/MainPageBlocks/SpecialOffersBlock';
import s from './index.module.css';

export default function MainPage() {

  const page_name = 'main_page';

  return (
    <div>
        <SaleBlock />
        <CategoriesBlock />
        <CouponBlock page_name={page_name} />
        <SpecialOffersBlock />
    </div>
  )
}
