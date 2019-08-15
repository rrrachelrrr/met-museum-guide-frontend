import React, { Component } from 'react';
import PaintingCollection from './PaintingCollection.js'

class Search extends Component {

  state = {
    searchTerm: '',
    displayPaintings: [ 195356, 209211, 250869, 248152, 341604, 459400, 417605, 193606, 365157, 365158, 241623, 361885,]
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  setSearch = () => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.searchTerm}`)
    .then(res=>res.json())
    .then(artData => {
      if (artData.total === 0){
        return
        }
       this.setState({displayPaintings: artData.objectIDs})
    })
  }

  render(){
    // console.log(this.state)
    return (
        <>
      <h1> FIND SOME ART</h1>
      <input value={this.state.searchTerm}
      onChange={this.handleChange}
      placeholder="pegasus"
      type="search" />
      <button value="submit"  onClick={this.setSearch}> Find some art! </button>
      <PaintingCollection paintings={this.state.displayPaintings.slice(0,12)} searchTerm={this.state.searchTerm}
      user_id={this.props.user_id}/>
      </>
    )
  }

}

export default Search;


// what to fetch from the API:

// https://collectionapi.metmuseum.org/public/collection/v1/search?q={mySearch}
// grab mySearch from my searchbar
// do fetch onSubmit
