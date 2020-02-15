export const addToBasket  = (obj)=> ({
    type:'ADD_PRODUCT_TO_BASKET',
    payload: obj
});

export const removeFromBasket = (id)=> ({
    type: 'REMOVE_PRODUCT_TO_BASKET',
    payload: id
});