import React, { Component } from 'react';
import FavPainting from './FavPainting.js';

class ProfilePage extends Component {

  state = {
    art: []
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

  componentDidMount(){
    // fetch(`http://localhost:3000/users/${this.props.user_id}`, {
    //   headers: { Authorization: localStorage.token }
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))

    fetch("http://localhost:3000/fav_arts", {
      headers: { Authorization: localStorage.token }
    })
    .then(res => res.json())
    .then(data => this.setState({art: data}))
  }


  render(){
    const filteredArt = this.state.art.filter(art => art.user_id === this.props.user_id)
    const myArt = filteredArt.map(art => {
      return <FavPainting art={art} deleteOneArt={this.deleteOneArt} key={art.metID}/>
    })

    // console.log("filter", filteredArt)
    // console.log("render", myArt)

    return (
      <div className="ProfilePage">
        <span>Hi {this.props.name} it's all yr stuff</span>
        <div className="favorite-art-div">
          {myArt}
        </div>
      </div>
  );}
}

export default ProfilePage;
