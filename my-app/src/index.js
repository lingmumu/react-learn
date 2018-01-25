import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMsg from './hello';
import registerServiceWorker from './registerServiceWorker';
// import Timer from './timer';
import Todo from './Todo';
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloMsg name="loki"/>, document.getElementById('root'));
// ReactDOM.render(<Timer />, document.getElementById('root'));
ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
