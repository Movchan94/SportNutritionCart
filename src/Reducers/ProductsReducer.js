const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    isLoading: false,
    items: null,
}

export default(state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                isLoading:true
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            break;
        default:
            return state
    }
}