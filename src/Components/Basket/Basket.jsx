import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";


const ProductCard = (product) => {

const {image, title, price, addToBasket, addedCount} = product;
    return     (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name= 'money bill alternate outline' />
                    {price}
                    грн.
                </a>
            </Card.Content>

            <Button color = 'green' onClick = {addToBasket.bind(this,product)}>Добавить в корзину{addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    )
}


export default ProductCard;