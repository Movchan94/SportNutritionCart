import React from 'react';
import {Button, Image, List, Menu, Popup} from "semantic-ui-react";
import styles from './Menu.module.css'


export const MenuGoods = ({totalPrice, count, items}) => {

    const BasketComponent = ({title, image, id, removeFromBasket}) => {

        return (
            <List selection divided verticalAlign='middle'>
                <List.Item className={styles.List}>
                    <Image avatar src={image}/>
                    <List.Content> {title} &nbsp;  {count} &nbsp; шт.&nbsp;на сумму - {totalPrice}
                        &nbsp;&nbsp;<Button className={styles.BasketButton}
                                            onClick={removeFromBasket.bind(this, id)}
                                            color='red'>Удалить</Button>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    return (

        <Menu>
            <Menu.Item
                name='STRONG BODY'>
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'>
                    Итого к оплате: {totalPrice} грн.
                </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item
                            name='help'>
                            Корзина: ({count})
                        </Menu.Item>
                    }
                    content={items.map(product => <BasketComponent {...product}/>)}
                    on='click'
                    hideOnScroll

                />
            </Menu.Menu>
        </Menu>

    )
}




