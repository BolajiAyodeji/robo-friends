import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import { robots } from './robots';

const App = () => {
    return (
        <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
}
export default App;