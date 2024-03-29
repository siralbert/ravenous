import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp'

// single business object for the BusinessList
/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business]; */

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }


  // handler function to search for businesses based on term, location, and sortBy
  // from the Yelp API
  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
    console.log(this.state.businesses);
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
