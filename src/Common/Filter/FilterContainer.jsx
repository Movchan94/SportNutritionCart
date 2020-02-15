import Filter from "./Filter";
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filterActions from '../../Actions/FilterAC'


const mapStateToProps = ({ filter}) => ({
    filterBy: filter.filterBy
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);