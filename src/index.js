import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Hello Bitches</h1>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
