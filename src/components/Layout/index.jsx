import React from 'react';
import s from './index.module.css';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div className={s.layout}>
        <Nav/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
