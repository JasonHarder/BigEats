
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import Business from './components/Business/Business'
import Yelp from './components/Util/Yelp'

//Maybe not in capitals ^^git diff

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'businesses': [],
    };
    this.searchYelp = this.searchYelp.bind(this) // I put the bind in without remembering to make this.searchYelp = that bind
  }
    businesses = []

    searchYelp = (term,location,sortBy) => {
      Yelp.searchYelp(term,location,sortBy).then(
        businesses => {
          this.setState({
            businesses : businesses
          })
        }
      )
    }

  render() {
    return (
      <div className="App">
        <h1>Big Eats</h1>
        <SearchBar searchYelp= {this.searchYelp} />
        <BusinessList businesses = {this.state.businesses}/>
      </div>
    );
  }
}

export default App;