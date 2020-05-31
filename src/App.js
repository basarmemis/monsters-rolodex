import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';

import { SearchBox } from '../src/components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange_ = this.handleChange_.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })

      })
  }

  handleChange_ = (e) => {
    this.setState({ searchField: e.target.value });
  };



  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (

      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange_}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
