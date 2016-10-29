/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import Provider from 'react-redux/lib/components/Provider';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';


const root = document.getElementById("root");
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
    })
}
