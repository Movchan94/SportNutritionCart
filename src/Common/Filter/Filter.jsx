import React from 'react';
import {Input, Menu} from "semantic-ui-react";


const Filter = ({setFilter, filterBy,searchQuery, SetSearchQuery}) => {

    return (
<Menu secondary>
    <Menu.Item
        name  = 'Все'
        active={filterBy === 'Все'}
        onClick={setFilter.bind(this, 'Все')}>
    </Menu.Item>
    <Menu.Item
        name  = 'Популярные'
        active={filterBy === 'Популярные'}
        onClick={setFilter.bind(this, 'Популярные')}>
    </Menu.Item>
    <Menu.Item
        name  = 'Цена по возростанию'
        active={filterBy === 'Цена по убыванию'}
        onClick={setFilter.bind(this, 'Цена по убыванию')}>
    </Menu.Item>
    <Menu.Item
        name  = 'Цена по убыванию'
        active={filterBy === 'Цена по возростанию'}
        onClick={setFilter.bind(this, 'Цена по возростанию')}>
    </Menu.Item>
    <Menu.Item>
        <Input
            placeholder  = "Поиск по товарам..."
            icon = "search"
            onChange = {e=>SetSearchQuery(e.target.value)}
            value = {searchQuery}

        >
        </Input>
    </Menu.Item>
</Menu>
    )
}

export default Filter

