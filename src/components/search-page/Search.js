import React, { Component } from 'react';
import PaintingCollection from './PaintingCollection.js'

class Search extends Component {

  state = {
    searchTerm: '',
    displayPaintings: [],
    filteredPaintings: []
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  setSearch = () => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${this.state.searchTerm}`)
    .then(res=>res.json())
    .then(artData => this.setState({displayPaintings: artData.objectIDs.slice(0,10)}))
    // .then(this.filterPaintings())
  }

  filterPaintings = () => {
    this.setState({filteredPaintings: this.state.displayPaintings.slice(0,10)})
    console.log(this.state)
  }

  render(){
    console.log(this.state)
    return (
      <>
    <h1> "FIND SOME ART"</h1>
    <input value={this.state.searchTerm}
    onChange={this.handleChange}
    type="search" />
    <button value="submit"  onClick={this.setSearch}> Find some art! </button>
    <PaintingCollection />
    </>
  )
  }
  //MAKE BUTTON; TECHNICALLY NOT CONNECTED

//   state = {
//     search: ""
//   }
//
//   updateSearch = search => {
//     this.setState({ search })
//   }
//
//    render() {
//       const { search } = this.state;
//
//       return (
//         <SearchBar
//           placeholder="Type Here..."
//           onChangeText={this.updateSearch}
//           value={search} />
//         )
//   }
}

export default Search;


// what to fetch from the API:

// https://collectionapi.metmuseum.org/public/collection/v1/search?q={mySearch}
// grab mySearch from my searchbar
// do fetch onSubmit

// import { SearchBar } from 'react-native-elements';
//
// export default class App extends React.Component {
//   state = {
//     search: '',
//   };
//
//   updateSearch = search => {
//     this.setState({ search });
//   };
//
//   render() {
//     const { search } = this.state;
//
//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }
