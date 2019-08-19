import React, { Component } from 'react';
import PaintingCollection from './PaintingCollection.js'

class Search extends Component {

  state = {
    searchTerm: '',
    displayPaintings: [ 195356, 209211, 250869, 248152, 341604, 459400, 417605, 193606, 365157, 365158, 241623, 361885 ],
    num: 12
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  handleSeeMore = () => {
    this.setState({num: this.state.num+12})
  }

  setSearch = () => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.searchTerm}`)
    .then(res=>res.json())
    .then(artData => {
      if (artData.total === 0){
        return alert("No Art Found!")
        }
       this.setState({displayPaintings: artData.objectIDs, num:12})
    })
  }

  render(){
    // let num = this.state.num
    return (
        <>
      <h1> FIND SOME ART</h1>
      <input value={this.state.searchTerm}
      onChange={this.handleChange}
      placeholder="pegasus"
      type="search" />
      <button value="submit"  onClick={this.setSearch}> Find some art! </button>
      <PaintingCollection paintings={this.state.displayPaintings.slice(0, this.state.num)} searchTerm={this.state.searchTerm}
      user_id={this.props.user_id}/>
      <button onClick={this.handleSeeMore}>See more</button>
      </>
    )
  }

}

export default Search;


// what to fetch from the API:

// https://collectionapi.metmuseum.org/public/collection/v1/search?q={mySearch}
// grab mySearch from my searchbar
// do fetch onSubmit
