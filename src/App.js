import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CataloguePage from './pages/CataloguePage';
import SalePage from './pages/SalePage';


function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path='categories' element={<CategoriesPage />} />
                <Route path='categories/:category' element={<CategoryPage />} />
                <Route path='products/:id' element={<ProductPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='catalogue' element={<CataloguePage />} />
                <Route path='sale' element={<SalePage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
