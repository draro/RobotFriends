import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBORS_PENDING,
    REQUEST_ROBORS_SUCCESS,
    REQUEST_ROBORS_FAILED
} from './constants';



export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBORS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBORS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBORS_FAILED, payload: error }))
}