import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import * as serviceWorker from './serviceWorker';

import App from './client/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
