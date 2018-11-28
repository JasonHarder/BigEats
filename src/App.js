import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import BusinessList from './Components/BusinessList/BusinessList.js'
import Business from './Components/Business/Business.js'
import Yelp from './Components/Util/Yelp'

const businesses = []
//Maybe not in capitals ^^
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {businesses: []}
    this.searchYelp.bind(this)
  }

    searchYelp = (term,location,sortBy) => {
      Yelp.search(term,location,sortBy).then( //mistake -> I thought something had to be defined here sort of like a function in a function , which tripped me up
        businesses => {
          this.setState({
            "businesses" : businesses
          })
        }
      )
    }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp= {this.searchYelp} />
        <BusinessList businesses = {businesses}/>
      </div>
    );
  }
}

export default App;