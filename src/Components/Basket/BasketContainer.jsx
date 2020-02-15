
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as basketActions from '../../Actions/BasketAC'
import ProductCard from "./Basket";






const mapStateToProps = ({basket}, {id}) => ({
    addedCount:basket.items.reduce((count, product)=>count + (product.id === id ? 1 : 0),0)
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(basketActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);