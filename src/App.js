import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc pa7">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;