import React from 'react';
import styles from './App.module.css';
import axios from "axios";
import {Card} from "semantic-ui-react";
import ProductCard from "./Components/Basket/BasketContainer";
import Preloader from "./Common/Preloader/Preloader";
import Header from "./Components/Header/Header";


class App extends React.Component {
    componentWillMount() {
        axios.get('/productsJson.json').then(({data}) => {
            this.props.setProducts(data)
        })
    }

    render() {
        const {products, isLoading} = this.props

        return (
            <div className={styles.appWrapper}>
                <Header/>
                <div className={styles.appArticle}>
                    <Card.Group itemsPerRow={4}>
                        {!isLoading
                            ? <Preloader/>
                            : products.map((product, i) => <ProductCard className={styles.ProductCard}
                                                                        key={i} {...product}/>
                            )
                        }
                    </Card.Group>
                </div>
            </div>

        )
    }
}

export default App;


