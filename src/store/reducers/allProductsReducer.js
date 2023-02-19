const defaultState = [];
// let firstState = [];
// let discontState = [];

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
// const PRICE_SORT_ALL_PRODUCTS = 'PRICE_SORT_ALL_PRODUCTS';
// const GET_DISCONT_ALL_PRODUCTS = 'GET_DISCONT_ALL_PRODUCTS';
// const SELECT_ALL_PRODUCTS = 'SELECT_ALL_PRODUCTS';

export const loadAllProducts = (payload) => ({type: LOAD_ALL_PRODUCTS, payload});
// export const priceSortAllProducts = (payload) => ({type: PRICE_SORT_ALL_PRODUCTS, payload});
// export const getDiscontAllProducts = (payload) => ({type: GET_DISCONT_ALL_PRODUCTS, payload});
// export const selectAllProducts = (payload) => ({type: SELECT_ALL_PRODUCTS, payload});

export const allProductsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        // firstState = action.payload;
        return action.payload
    // } 
    // else if (action.type === PRICE_SORT_ALL_PRODUCTS) {
    //     const {min_value, max_value} = action.payload;
    //     return state.map(el => {
    //         if (el.discont_price >= min_value && el.discont_price <= max_value) {
    //             el.hide_price_mark = false;
    //         } else {
    //             el.hide_price_mark = true;
    //         }
    //         return el;
    //     })        
    // } else if (action.type === GET_DISCONT_ALL_PRODUCTS) {
    //     if (action.payload === false) {
    //         return [...discontState]
    //         } else {
    //             discontState = state;
    //             return state.filter(el => el.discont_price !== el.price)
    //     }
    // } else if (action.type === SELECT_ALL_PRODUCTS) {
    //         if (action.payload.id === 'default') {
    //             return firstState
    //         } else if (action.payload.id === 'title') {
    //             return [...state].sort((a, b) => a[action.payload.id].localeCompare(b[action.payload.id]))
    //         } else {
    //             if (action.payload.value === 'by price from min') {
    //                 return [...state].sort((a, b) => a[action.payload.id] - b[action.payload.id])
    //             } else if (action.payload.value === 'by price from max') {
    //                 return [...state].sort((a, b) => b[action.payload.id] - a[action.payload.id])
    //             }
    //         }
    //         return [...state]    
    } else {
        return state
    }  
}