import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
