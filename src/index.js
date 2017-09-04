import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './css/index.css';
import App from './scripts/components/App';
import configureStore from './scripts/store/configureStore';
import registerServiceWorker from './scripts/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
