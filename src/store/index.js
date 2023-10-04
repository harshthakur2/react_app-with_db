import { createStore } from 'redux';
import rootReducer from '../reducers';
import dataReducers from '../reducers/dataReducers';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({reducer : rootReducer});
 //const store = createStore(rootReducer);

export default store;