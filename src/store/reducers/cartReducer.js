const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

export const addToCart = (payload) => ({type: ADD_TO_CART, payload});
export const incrementCount = (payload) => ({type: INCREMENT_COUNT, payload});
export const decrementCount = (payload) => ({type: DECREMENT_COUNT, payload});
export const deleteCartItem = (payload) => ({type: DELETE_CART_ITEM, payload});


export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        const target_product = state.find(el => el.id === action.payload.id);
        if ( target_product ) {
            target_product.count ++;
            return [...state];
            
        } else {
            return [...state, {...action.payload,
                                  count: 1,}]
        }   
    } else if (action.type === INCREMENT_COUNT) {
        const target_product = state.find(el => el.id === action.payload);
        target_product.count++;
        return [...state];
        
    } else if (action.type === DECREMENT_COUNT) {
        const target_product = state.find(el => el.id === action.payload);
        if (target_product.count > 1) {
            target_product.count--;
            return [...state];
        } else {
            return [...state.filter(el => el.id !== action.payload)];
        } 
    } else if (action.type === DELETE_CART_ITEM) {
            return [...state.filter(el => el.id !== action.payload)];
    } 

        else {
            return state
        }
    }