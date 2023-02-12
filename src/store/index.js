import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryProductsReducer } from './reducers/categoryProductsReducer';
import { productReducer } from './reducers/productReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { cartReducer } from './reducers/cartReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
   };


const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    product: productReducer,
    all_products: allProductsReducer,
    cart: cartReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
