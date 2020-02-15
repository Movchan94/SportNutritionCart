const SET_FILTER = 'SET_FILTER'
const SET_QUERY = 'SET_QUERY'

const initialState = {
    searchQuery: '',
    filterBy: 'Все'
}

export default(state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy:action.payload
            }
        case SET_QUERY:
            return {
                ...state,
                searchQuery:action.payload
            }
            break;
        default:
            return state
    }
}