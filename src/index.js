import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import {Provider} from "react-redux";
import createStore from './Store'
import 'semantic-ui-css/semantic.min.css'

const store = createStore();

ReactDOM.render(
    <Provider store = {createStore()}>
    <App />
    </Provider>
    , document.getElementById('root'));

