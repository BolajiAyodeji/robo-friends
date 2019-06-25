import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card'
import CardList from './components/CardList'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
    <CardList robots={robots}/>

,document.getElementById('root'));
serviceWorker.register();
