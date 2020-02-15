import React from 'react';
import {applyMiddleware, createStore} from 'redux'
import {logger} from "redux-logger";
import rootReducer from "./Reducers/Reducer";




export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
}






