import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryProductsReducer } from './reducers/categoryProductsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));