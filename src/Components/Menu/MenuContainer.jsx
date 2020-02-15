
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as basketActions from '../../Actions/BasketAC'

import {uniqBy} from "lodash";
import {BasketComponent, MenuGoods} from "./MenuGoods";


const mapStateToProps = ({basket}) => ({
    totalPrice: basket.items.reduce((total,product)=> total + product.price, 0),
    count: basket.items.length,
    items: uniqBy(basket.items, n => n.id),
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(basketActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuGoods);