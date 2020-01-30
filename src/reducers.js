import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBORS_PENDING,
    REQUEST_ROBORS_SUCCESS,
    REQUEST_ROBORS_FAILED
} from './constants';
const initialStateSearch = {
    searchfield: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchfield: action.payload })
        default:
            return state;
    }
}


const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBORS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBORS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBORS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}