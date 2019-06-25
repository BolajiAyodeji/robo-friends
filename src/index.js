import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card/Card'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
    <div>
        <Card />
        <Card />
        <Card />
    </div>
    ,document.getElementById('root'));

serviceWorker.register();
