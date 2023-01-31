import { loadAllProducts } from "../store/reducers/allProductsReducer";

export const getAllProducts = (dispatch) => {
        fetch(`http://localhost:3333/products/all`)
        .then(response => response.json())
        .then(json => dispatch(loadAllProducts(json)))
}
    