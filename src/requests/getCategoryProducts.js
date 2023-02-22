import { loadCategoryProducts } from "../store/reducers/categoryProductsReducer"

export const getCategoryProducts = (category) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category}`)
        .then(response => response.json())
        .then(json => {
            const payload = json.map(el => ({
                ...el,
                hide_price_mark: false,
                hide_discont_mark: false,
            }))
            dispatch(loadCategoryProducts(payload))
        })
    }
}