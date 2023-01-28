import { loadCategoryProducts } from "../store/reducers/categoryProductsReducer"

export const getCategoryProducts = (category) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category}`)
        .then(response => response.json())
        .then(json => dispatch(loadCategoryProducts(json)))
    }
}