import React from 'react';
import CategoriesContainer from '../../CategoriesContainer';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoriesBlock() {
  return (
    <section className={['content_wrapper', s.categories_block].join(' ')} id='categories'>
      <div className={s.categories_block_header}>
        <h2>Categories</h2>
        <Link to='categories'>
          <button>All categories</button>
        </Link>
      </div>
      <CategoriesContainer />
    </section>
  )
}
