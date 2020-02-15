
import  products from './ProductsReducer';
import {combineReducers} from 'redux';
import basket from './BasketReducer'
import filter from './FilterReducer'


export default combineReducers({
    products,
    basket,
    filter
})
