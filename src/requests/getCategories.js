import { loadCategories } from "../store/reducers/categoriesReducer"

export const getCategories = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
    .then(response => response.json())
    .then(json => dispatch(loadCategories(json)))
}