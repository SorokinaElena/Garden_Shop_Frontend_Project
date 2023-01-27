import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryCard({id, title, image}) {
  return (
    <Link to={`/categories/${id}`} className={s.category_card}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
      <p>{title}</p>
    </Link>
  )
}
