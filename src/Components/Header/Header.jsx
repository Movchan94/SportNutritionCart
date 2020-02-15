import React from 'react'
import styles from './Header.module.css'
import FilterContainer from "../../Common/Filter/FilterContainer";
import MenuGoods from "../Menu/MenuContainer";


const  Header =()=> {
    return (
        <div className = {styles.appHeader}>
            <MenuGoods/>
            <div className = {styles.filter}><FilterContainer/></div>
        </div>
        )}




export default Header