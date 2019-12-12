import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavPainting from './FavPainting.js';

class ProfilePage extends Component {

  state = {
    art: [],
    searchTerm: '',
    tags: [],
    filterTerm: '',
    initialArt: []
  }

  // filterArt = (data) => {
  //    data.filter(art => art.user_id === this.props.user_id)
  //   }

  resetArtState = () => {
    this.setState({art: this.state.initialArt})
  }

  addTags = (tag) => {
    // need to get all user's tags in state
    this.state.tags ?
    this.setState({tags: [...this.state.tags, tag]}) : this.setState({tags: tag})
    console.log("addTags", tag)
  }

  filterByTag = (e) => {
    const clickedTag = e.target.value
    console.log("tag", clickedTag)
    const taggedArt = this.state.art.filter(art => art.tags.map(tag => tag.tag_name).includes(clickedTag) && art.user_id === this.props.user_id)
      // includes(clickedTag))
    // console.log("filterByTag: taggedArt", taggedArt)
    this.setState({art: taggedArt})
  }

  deleteOneArt = (id) => {
    fetch(`localhost:3000/fav_arts/${id}`, {
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
    fetch("localhost:3000/fav_arts", {
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())
    .then(data => this.setState({art: data, initialArt: data, tags: data.map(data => data.tags)}))
    //map over data to grab tags
    // .then(data => console.log(data[0].tags))
  }



  render(){
    // console.log(this.state)
    const filteredArt = this.state.art.filter(art => art.user_id === this.props.user_id)
    const doubleFilteredArt = filteredArt.filter(art => art.keyword.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || art.artist.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || art.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || art.tags.map(tag => tag.tag_name).includes(this.state.searchTerm.toLowerCase()))

    //right now returns boolean; can do OR || art.title.includes() etc

    const myArt = doubleFilteredArt.map(art => {
      return <FavPainting
      art={art}
      deleteOneArt={this.deleteOneArt}
      resetArtState={this.resetArtState}
      filterByTag={this.filterByTag}
      key={art.id}/>
    })

    // console.log("filter", filteredArt)
    // console.log("render", myArt)

    return (
      <div className="art-display">
        <div className="art-filter">
          <span>Hi {this.props.name} it's all yr stuff</span> <Link to={'/paintings'} > Find more art </Link>
          <br />
          <input value={this.state.searchTerm}
          onChange={this.handleSearchChange}
          type="search" placeholder="search your saved art"/>
          <div className="favorite-art-div">
            {myArt}
          </div>
        </div>
      </div>
  );}
}
export default ProfilePage;
