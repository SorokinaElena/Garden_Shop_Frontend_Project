import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryProductsReducer } from './reducers/categoryProductsReducer';
import { productReducer } from './reducers/productReducer';
import { allProductsReducer } from './reducers/allProductsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    product: productReducer,
    all_products: allProductsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));