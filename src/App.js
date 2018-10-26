import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import BusinessList from './Components/BusinessList/BusinessList.js'
import Business from './Components/Business/Business.js'

class App extends Component {
  render() {
    return (
      <div class="App">
      <h1>Ravenous</h1>
    <SearchBar />
    <BusinessList />
    </div>
    );
  }
}

export default App;
