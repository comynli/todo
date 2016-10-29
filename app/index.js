/**
 * Created by comyn on 16-10-29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './App';


const root = document.getElementById("root");

ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App');
        ReactDOM.render(
           <AppContainer>
               <NextApp />
           </AppContainer>,
            root
        )
    })
}
