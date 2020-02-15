import React from 'react';
import './App.module.css';
import {connect} from "react-redux";
import App from "./App";

import {bindActionCreators} from "redux";
import * as productsActions from './Actions/ProductsAC'
import {orderBy} from "lodash";


const sortBy = (products, filterBy) => {
    switch (filterBy) {
        case 'Цена по возростанию':
            return orderBy(products, 'price', 'desc')
        case 'Цена по убыванию':
            return orderBy(products, 'price', 'asc')
        default:
            return products;
    }
}
const filterProducts = (products, searchQuery) =>
    products.filter(o =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy)
}

const mapStateToProps = ({products, filter}) => ({
    products: products.items && searchProducts(products.items, filter.filterBy, filter.searchQuery),
    isLoading: products.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);


