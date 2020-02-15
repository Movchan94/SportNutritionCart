const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET'
const REMOVE_PRODUCT_TO_BASKET = 'REMOVE_PRODUCT_TO_BASKET'

const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case REMOVE_PRODUCT_TO_BASKET:
            return {
                ...state,
                items: state.items.filter(n => n.id != action.payload)
            }
            break;
        default:
            return state
    }
}