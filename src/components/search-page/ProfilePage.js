import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavPainting from './FavPainting.js';

class ProfilePage extends Component {

  state = {
    art: [],
    searchTerm: ''
  }

  filterArt = (data) => {
     data.filter(art => art.user_id === this.props.user_id)
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
    fetch("http://localhost:3000/fav_arts", {
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())
    .then(data => this.setState({art: data}))
  }


  render(){
    const filteredArt = this.state.art.filter(art => art.user_id === this.props.user_id)
    const doubleFilteredArt = filteredArt.filter(art => art.keyword.includes(this.state.searchTerm) || art.artist.includes(this.state.searchTerm) || art.title.includes(this.state.searchTerm))
    //right now returns boolean; can do OR || art.title.includes() etc
    const myArt = doubleFilteredArt.map(art => {
      return <FavPainting art={art} deleteOneArt={this.deleteOneArt} key={art.id}/>
    })

    // console.log("filter", filteredArt)
    // console.log("render", myArt)

    return (
      <div className="ProfilePage">
        <span>Hi {this.props.name} it's all yr stuff</span> <Link to={'/paintings'} > Find more art </Link>
        <br />
        <input value={this.state.searchTerm}
        onChange={this.handleSearchChange}
        type="search" />
        <div className="favorite-art-div">
          {myArt}
        </div>
      </div>
  );}
}

export default ProfilePage;
