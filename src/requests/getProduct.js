import { loadProduct } from "../store/reducers/productReducer";

export const getProduct = (product_id) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${product_id}`)
        .then(response => response.json())
        .then(json => dispatch(loadProduct(json)))
    }
}
    