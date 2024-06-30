import cartReducer from './Cart';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import categroriesReducer from './Categories';
import {thunk} from 'redux-thunk';


const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categroriesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;