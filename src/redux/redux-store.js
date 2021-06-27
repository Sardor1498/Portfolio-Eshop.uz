import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import productsReducer from './productsReducer';
import catalogsReducer from './catalogsReducer';
import categoriesReducer from './categoriesReducer';
import brandsReducer from './brandsReducer';
import authReducer from './authReducer';
import priceReducer from './priceReducer';
import toggleReducer from './toggleReducer';

let reducers = combineReducers({
    form: formReducer,
    productsReducer: productsReducer,
    catalogsReducer: catalogsReducer,
    categoriesReducer: categoriesReducer,
    brandsReducer: brandsReducer,
    authReducer: authReducer,
    priceReducer: priceReducer,
    toggleReducer: toggleReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleWare) // redux-dev tools o'rnatilgan store
    )
);
window._store_ = store;

export default store;