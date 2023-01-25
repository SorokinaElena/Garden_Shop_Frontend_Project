import React from 'react';
import s from './index.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div className={s.layout}>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
