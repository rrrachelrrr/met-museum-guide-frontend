import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavPainting from './FavPainting.js';

class ProfilePage extends Component {

  state = {
    art: [],
    searchTerm: '',
    tags: [],
    filterTerm: ''
  }

  // filterArt = (data) => {
  //    data.filter(art => art.user_id === this.props.user_id)
  //   }

  addTags = (tag) => {
    // need to get all user's tags in state
    this.state.tags ?
    this.setState({tags: [...this.state.tags, tag]}) : this.setState({tags: tag})
    console.log("addTags", tag)
  }

  filterByTag = (e) => {
    this.setState({filterTerm: e.target.value})

    // want to find favArt.fav_art_tag.tag.name === e.target.value (not sure if ruby or js)

  }

  deleteOneArt = (id) => {
    fetch(`http://localhost:3000/fav_arts/${id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())

    // deletedArt = this.state.art.filter(art => art.id !== id)

    this.setState({art: this.state.art.filter(art => {
      return art.id !== id
    })})
  }

  handleSearchChange = (e) => {
    // e.preventDefault()
    this.setState({searchTerm: e.target.value})
  }

  componentDidMount(){
    fetch(`http://localhost:3000/myart/${this.props.user_id}`, {
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())
    .then(data => this.setState({art: data}))
  }


  render(){
    console.log("profile page props", this.props)
    // const filteredArt =  this.state.art.filter(art => art.user_id === this.props.user_id)
    // const doubleFilteredArt = filteredArt
    //  filteredArt.filter(art => art.keyword.includes(this.state.searchTerm) || art.artist.includes(this.state.searchTerm) || art.title.includes(this.state.searchTerm))
    // right now returns boolean; can do OR || art.title.includes() etc
    // const doubleFilteredArt = filteredArt.filterByTag()
    // const myArt = doubleFilteredArt.map(art => {
    //   return <FavPainting art={art} deleteOneArt={this.deleteOneArt} addTags={this.addTags}
    //   filterByTag={this.filterByTag}
    //   key={art.id}/>
    // })

    // console.log("filter", filteredArt)
    // console.log("render", myArt)

    return (
      "oh dear its all so broken"
      // <div className="ProfilePage">
      //   <span>Hi {this.props.name} it's all yr stuff</span> <Link to={'/paintings'} > Find more art </Link>
      //   <br />
      //   <input value={this.state.searchTerm}
      //   onChange={this.handleSearchChange}
      //   type="search"
      //   placeholder="search keywords here"/>
      //   <div className="favorite-art-div">
      //     {myArt}
      //   </div>
      // </div>
  );}
}

export default ProfilePage;
