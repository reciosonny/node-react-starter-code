import ReactDOM from 'react-dom';
import React from 'react';
import App from './Components/App';


import './style.scss';

if (module.hot) {
    console.log("hot module!");
}

ReactDOM.render(<App />, document.getElementById("root"));