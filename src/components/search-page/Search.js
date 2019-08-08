import React, { Component } from 'react';

class Search extends Component {

  render(){
    return (
      <div className="Search">
        <h1>searchbar goes here</h1>
      </div>
  );}
}

export default Search;


// what to fetch from the API:

// https://collectionapi.metmuseum.org/public/collection/v1/search?q={mySearch}
// grab mySearch from my searchbar
// do fetch onSubmit
