const defaultState = [];
let firstState = [];

const LOAD_CATEGORY_PRODUCTS = 'LOAD_CATEGORY_PRODUCTS';
const SELECT_CATEGORY_PRODUCTS = 'SELECT_CATEGORY_PRODUCTS';

export const loadCategoryProducts = (payload) => ({type: LOAD_CATEGORY_PRODUCTS, payload});
export const selectCategoryProducts = (payload) => ({type: SELECT_CATEGORY_PRODUCTS, payload});

export const categoryProductsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_CATEGORY_PRODUCTS) {
        firstState = action.payload
        return action.payload
    } else if (action.type === SELECT_CATEGORY_PRODUCTS) {
        if (action.payload.id === 'default') {
            return firstState
        } else if (action.payload.id === 'title') {
            return [...state].sort((a, b) => a[action.payload.id].localeCompare(b[action.payload.id]))
        } else {
            if (action.payload.value === 'by price from min') {
                return [...state].sort((a, b) => a[action.payload.id] - b[action.payload.id])
            } else if (action.payload.value === 'by price from max') {
                return [...state].sort((a, b) => b[action.payload.id] - a[action.payload.id])
            }
        }
        return [...state]
    } else {
        return state
    }
    
}